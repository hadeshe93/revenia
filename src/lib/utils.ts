import { SCENE_DAILY_ONLINE_TS } from '@/constants/timestamp';
import { OpUnitType } from 'dayjs';
import { dayjs } from './dayjs';

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getEnv() {
  return process.env.NODE_ENV;
}

export interface DiffTimeParams {
  from: Date | number;
  to: Date | number;
  format?: OpUnitType;
}
export function diffTime(params: DiffTimeParams) {
  const { from, to, format = 'day' } = params;
  return dayjs(to).diff(dayjs(from), format);
}

// 计算每日场景从上线到现在的天数
export function diffTimeInDaysForDailyScene() {
  return diffTime({ from: SCENE_DAILY_ONLINE_TS, to: Date.now(), format: 'day' });
}

export function getRemainTimeToNextDay() {
  const now = dayjs.utc().toDate();
  const nextDay = dayjs.utc(now).add(1, 'day').startOf('day').toDate();
  const allMinutes = diffTime({ from: now, to: nextDay, format: 'minute' });
  const hours = Math.floor(allMinutes / 60);
  const minutes = allMinutes % 60;
  return { hours, minutes };
}

// 复制到剪贴板
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    }
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}

export function createArray(length: number, value?: any) {
  return Array.from({ length }, () => value || undefined);
}

export function getUTCDate(timestamp?: number): number {
  const today = Number(timestamp) > 0 ? new Date(Number(timestamp)) : new Date();
  const d = dayjs.utc(today);
  return d.year() * 10000 + (d.month() + 1) * 100 + d.date();
}

// 每天随机选择一组方案，每天的方案是唯一的
export function selectDailyRandomNumbers(maxNumber: number, selectCount: number): number[] {
  if (selectCount > maxNumber) {
    throw new Error('Count cannot be greater than the number range');
  }

  let seed = getUTCDate();

  function seededRandom() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  const numbers: number[] = Array.from({ length: maxNumber }, (_, i) => i + 1);
  const result: number[] = [];

  for (let i = 0; i < selectCount; i++) {
    const randomIndex = Math.floor(seededRandom() * (maxNumber - i));
    result.push(numbers[randomIndex]);
    numbers[randomIndex] = numbers[maxNumber - i - 1];
  }

  return result;
}

export function selectRandomNumbers(maxNumber: number, selectCount: number): number[] {
  if (selectCount > maxNumber) {
    throw new Error('要抽取的数量不能大于数字范围');
  }

  // 使用当前时间戳作为随机种子
  const seed = Date.now();

  // 自定义随机数生成器
  function customRandom() {
    const x = Math.sin(seed * Math.random()) * 10000;
    return x - Math.floor(x);
  }

  // 创建数字池（1到number的数组）
  const numbers: number[] = Array.from({ length: maxNumber }, (_, i) => i + 1);
  const result: number[] = [];

  // Fisher-Yates 洗牌算法的变体
  for (let i = 0; i < selectCount; i++) {
    const randomIndex = Math.floor(customRandom() * (maxNumber - i));
    result.push(numbers[randomIndex]);
    // 将已选数字与末尾数字交换
    numbers[randomIndex] = numbers[maxNumber - i - 1];
  }

  return result;
}

export function pickRandomMember<TMember extends any = number>(sourceList: TMember[], pickedList: TMember[]) {
  const unpickedList = sourceList.filter((item) => !pickedList.includes(item));
  const randomIndex = Math.floor(Math.random() * unpickedList.length);
  return unpickedList[randomIndex];
}

export function pickRestMembers<TMember extends any = number>(sourceList: TMember[], pickedList: TMember[]) {
  return sourceList.filter((item) => !pickedList.includes(item));
}

export function getTextColor(bgHexColor: string) {
  const r = parseInt(bgHexColor.slice(1, 3), 16);
  const g = parseInt(bgHexColor.slice(3, 5), 16);
  const b = parseInt(bgHexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#FFFFFF';
}

// 获取图片主色调
export function getImagePrimaryColor(imgDataUrl: string) {
  const img = new Image();
  img.src = imgDataUrl;
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        if (brightness > 128) {
          return `#${data[i].toString(16).padStart(2, '0')}${data[i + 1].toString(16).padStart(2, '0')}${data[i + 2]
            .toString(16)
            .padStart(2, '0')}`;
        }
        return `#${data[i + 2].toString(16).padStart(2, '0')}${data[i + 1].toString(16).padStart(2, '0')}${data[i]
          .toString(16)
          .padStart(2, '0')}`;
      }
    }
  };
}

export function enterFullScreen(elem?: HTMLElement | null) {
  if (!elem) {
    return false;
  }
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    // @ts-ignore
  } else if (elem.mozRequestFullScreen) {
    // Firefox
    // @ts-ignore
    elem.mozRequestFullScreen();
    // @ts-ignore
  } else if (elem.webkitRequestFullscreen) {
    // Chrome, Safari
    // @ts-ignore
    elem.webkitRequestFullscreen();
    // @ts-ignore
  } else if (elem.msRequestFullscreen) {
    // IE / Edge
    // @ts-ignore
    elem.msRequestFullscreen();
  }
  return true;
}

export function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    // @ts-ignore
  } else if (document.mozCancelFullScreen) {
    // Firefox
    // @ts-ignore
    document.mozCancelFullScreen();
    // @ts-ignore
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari
    // @ts-ignore
    document.webkitExitFullscreen();
    // @ts-ignore
  } else if (document.msExitFullscreen) {
    // IE / Edge
    // @ts-ignore
    document.msExitFullscreen();
  }
  return true;
}

export function shuffleArray<T extends any>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export function ascSortArrayByString<T extends any>(array: T[], getKey: (item: T) => string): T[] {
  return [...array].sort((a, b) => getKey(a).localeCompare(getKey(b)));
}

export function descSortArrayByString<T extends any>(array: T[], getKey: (item: T) => string): T[] {
  return [...array].sort((a, b) => getKey(b).localeCompare(getKey(a)));
}

/**
 * Attempt to load all images (of type HTMLImageElement) in the given array.
 * The browser will download the images and decode them so they are ready to be used.
 * An error will be thrown if any image fails to load.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode
 */
export async function loadImages(srcList: string[]) {
  const promises = srcList.map((src) => new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.decode().then(() => resolve(img)).catch(reject);
    img.onerror = () => {
      reject(new Error('An image could not be loaded'));
    };
  }));

  try {
    return await Promise.all(promises);
  } catch (error) {
    throw new Error('An image could not be loaded');
  }
}
