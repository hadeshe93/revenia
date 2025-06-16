export function getMapImageUrl(countryCode: string) {
  return `/imgs/map/${countryCode.toLowerCase()}/vector.svg`;
}

const imgDimensionsMap = new Map<string, { width: number; height: number }>();
export function loadMapImage(countryCode: string): Promise<HTMLImageElement> {
  console.log('[loadMapImage]', countryCode);
  return new Promise((resolve, reject) => {
    const url = getMapImageUrl(countryCode);
    const img = new Image();
    img.addEventListener('load', () => {
      imgDimensionsMap.set(countryCode, { width: img.width, height: img.height });
      resolve(img);
    });
    img.addEventListener('error', (e) => {
      reject(e);
    });
    img.src = url;
  });
}

export async function getMapImageDimensions(countryCode: string) {
  if (imgDimensionsMap.has(countryCode)) {
    return imgDimensionsMap.get(countryCode)!;
  }
  const img = await loadMapImage(countryCode);
  return { width: img.width, height: img.height };
}

export async function splitMapImage(countryCode: string, rows: number, cols: number) {
  const img = await loadMapImage(countryCode);
  return splitImage(img, rows, cols);
}

export function splitImage(image: HTMLImageElement, rows: number, cols: number): string[] {
  const imageParts: string[] = [];
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return imageParts;
  }

  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0);

  const tileWidth = image.width / cols;
  const tileHeight = image.height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const tileCanvas = document.createElement('canvas');
      const tileCtx = tileCanvas.getContext('2d');
      if (!tileCtx) {
        return imageParts;
      }

      tileCanvas.width = tileWidth;
      tileCanvas.height = tileHeight;

      tileCtx.drawImage(canvas, 
        x * tileWidth, y * tileHeight, tileWidth, tileHeight,
        0, 0, tileWidth, tileHeight
      );

      imageParts.push(tileCanvas.toDataURL());
    }
  }

  return imageParts;
}
