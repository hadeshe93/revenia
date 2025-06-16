/**
 * Text alignment enum.
 */
export const AlignText = Object.freeze({
  left: 'left',
  right: 'right',
  center: 'center',
});

export enum EPresetThemeTypes {
  Basic = 'basic',
  Gradient = 'gradient',
  Ghibli = 'ghibli',
}

export enum EThemName {
  // 基础
  Default = 'default',
  Cupcake = 'cupcake',
  Bumblebee = 'bumblebee',
  Dracula = 'dracula',
  Rainbow = 'rainbow',
  GreenAndRed = 'green-and-red',
  // 单色渐进
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
  Purple = 'purple',
  Orange = 'orange',
  // 吉卜力
  GhibliSpiritedAway = 'ghibli-spirited-away',
  GhibliMyNeighborTotoro = 'ghibli-my-neighbor-totoro',
  GhibliHowlsMovingCastle = 'ghibli-howls-moving-castle',
  GhibliCastleInTheSky = 'ghibli-castle-in-the-sky',
  GhibliKikisDeliveryService = 'ghibli-kikis-delivery-service',
  GhibliTheWindRises = 'ghibli-the-wind-rises',
}

export enum EPresetName {
  Default = 'default',
  Rainbow = 'rainbow',
  Blue = 'blue',
  Number = 'number',
  Number1To100 = 'number_1_100',
  Number1To10 = 'number_1_10',
  YesNo = 'yesNo',
}

// 业务要用的主题
// - 要使用哪个主题，就赋值哪个
export const DEFAULT_THEME = EThemName.Default;
export const RAINBOW_THEME = EThemName.Rainbow;
export const BLUE_THEME = EThemName.Blue;
export const NUMBER_THEME = EThemName.Cupcake;
export const YES_NO_THEME = EThemName.GreenAndRed;

export const THEME_MAP = {
  [EPresetThemeTypes.Basic]: [
    {
      name: DEFAULT_THEME,
      itemBackgroundColors: ['#F4A261', '#E76F51', '#2A9D8F', '#264653', '#E9C46A', '#8AB17D'],
      selectable: true,
    },
    {
      name: EThemName.Cupcake,
      itemBackgroundColors: ['#7AE8D3', '#235C58', '#F2CDE4', '#921749', '#F8D8AD', '#933615'],
      selectable: true,
    },
    {
      name: EThemName.Bumblebee,
      itemBackgroundColors: ['#F4C90C', '#6B4018', '#F28F36', '#722E14', '#000000', '#FFFFFF'],
      selectable: true,
    },
    {
      name: EThemName.Dracula,
      itemBackgroundColors: ['#EE81C3', '#14060E', '#B695F2', '#0C0814', '#F4BB78', '#140D05'],
      selectable: true,
    },
    {
      name: EThemName.Rainbow,
      itemBackgroundColors: ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#5AC8FA', '#007AFF', '#AF52DE'],
      selectable: true,
    },
    {
      name: EThemName.GreenAndRed,
      itemBackgroundColors: ['#FF3B30', '#34C759', '#FF3B30', '#34C759', '#FF3B30', '#34C759'],
      selectable: false,
    },
  ],
  [EPresetThemeTypes.Gradient]: [
    {
      name: EThemName.Red,
      itemBackgroundColors: ['#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#D32F2F', '#B71C1C'],
      selectable: true,
    },
    {
      name: EThemName.Blue,
      itemBackgroundColors: ['#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#02A8F3'],
      selectable: true,
    },
    {
      name: EThemName.Green,
      itemBackgroundColors: ['#E0F2F1', '#B9F6CA', '#81C784', '#4DB6AC', '#26A69A', '#009688'],
      selectable: true,
    },
    {
      name: EThemName.Purple,
      itemBackgroundColors: ['#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7'],
      selectable: true,
    },
    {
      name: EThemName.Orange,
      itemBackgroundColors: ['#FFF3E0', '#FFE0B2', '#FFD54F', '#FFC107', '#FFA726', '#FF9800'],
      selectable: true,
    },
  ],
  [EPresetThemeTypes.Ghibli]: [
    // 千与千寻
    {
      name: EThemName.GhibliSpiritedAway,
      itemBackgroundColors: ['#A8D5BA', '#D94F4F', '#F5F5F5', '#6B4C3B', '#F2C94C', '#2C3E50'],
      selectable: true,
    },
    // 龙猫
    {
      name: EThemName.GhibliMyNeighborTotoro,
      itemBackgroundColors: ['#4C6A4D', '#B8B8B8', '#A3D5FF', '#8B5E3C', '#C94C4C', '#FFF3B0'],
      selectable: true,
    },
    // 哈尔的移动城堡
    {
      name: EThemName.GhibliHowlsMovingCastle,
      itemBackgroundColors: ['#6A8CAF', '#7B7B7B', '#FF6B35', '#D4AF37', '#A5BFD3', '#F2A6B3'],
      selectable: true,
    },
    // 天空之城
    {
      name: EThemName.GhibliCastleInTheSky,
      itemBackgroundColors: ['#4F9D9D', '#F0F8FF', '#2E3A59', '#9E9E9E', '#7A9E7E', '#DCC9A6'],
      selectable: true,
    },
    // 魔女宅急便
    {
      name: EThemName.GhibliKikisDeliveryService,
      itemBackgroundColors: ['#5D3A9B', '#1B1B1B', '#B3D9FF', '#C49E6C', '#FADADD', '#FFA552'],
      selectable: true,
    },
    // 起风了
    {
      name: EThemName.GhibliTheWindRises,
      itemBackgroundColors: ['#A6C6E2', '#D3D3D3', '#A8C686', '#FFF8E7', '#B55239', '#3A4D63'],
      selectable: false,
    },
  ],
};
export const THEME_LIST = Object.values(THEME_MAP).flat();

export const PRESET_DEFAULT = {
  theme: DEFAULT_THEME,
  name: EPresetName.Default,
  // 下面是真正的配置
  isInteractive: false,
  radius: 0.95,
  pointerAngle: 90,
  itemLabelRadius: 0.92,
  itemLabelRadiusMax: 0.37,
  itemLabelRotation: 0,
  itemLabelAlign: AlignText.right,
  itemLabelColors: ['#fff'],
  itemLabelBaselineOffset: -0.06,
  itemLabelFont: 'Rubik',
  itemLabelStrokeColor: '#333',
  itemLabelStrokeWidth: 3,
  itemBackgroundColors: getColorsByTheme(DEFAULT_THEME),
  rotationSpeedMax: 700,
  rotationResistance: -110,
  lineWidth: 2,
  lineColor: '#fff',
  overlayImage: '/assets/overlay.svg',
  borderWidth: 2,
  borderColor: '#fff',
  items: [],
};

export const PRESET_RAINBOW = {
  ...PRESET_DEFAULT,
  name: EPresetName.Rainbow,
  theme: RAINBOW_THEME,
  itemBackgroundColors: getColorsByTheme(RAINBOW_THEME),
};

export const PRESET_BLUE = {
  ...PRESET_DEFAULT,
  name: EPresetName.Blue,
  theme: BLUE_THEME,
  itemBackgroundColors: getColorsByTheme(BLUE_THEME),
};

export const PRESET_NUMBER = {
  ...PRESET_DEFAULT,
  name: EPresetName.Number,
  theme: NUMBER_THEME,
  itemBackgroundColors: getColorsByTheme(NUMBER_THEME),
};

export const PRESET_NUMBER_1_100 = {
  ...PRESET_DEFAULT,
  name: EPresetName.Number1To100,
  theme: NUMBER_THEME,
  itemBackgroundColors: getColorsByTheme(NUMBER_THEME),
};

export const PRESET_NUMBER_1_10 = {
  ...PRESET_DEFAULT,
  name: EPresetName.Number1To10,
  theme: NUMBER_THEME,
  itemBackgroundColors: getColorsByTheme(NUMBER_THEME),
};

export const PRESET_YES_NO = {
  ...PRESET_DEFAULT,
  name: EPresetName.YesNo,
  theme: YES_NO_THEME,
  itemBackgroundColors: getColorsByTheme(YES_NO_THEME),
};

export const PRESET_NUMBER_RANGE = [
  '1-10',
  '1-20',
  '1-30',
  '1-40',
  '1-50',
  '1-60',
  '1-70',
  '1-80',
  '1-90',
  '1-100',
].map((text) => {
  const [min, max] = text.split('-').map(Number);
  return {
    text,
    theme: NUMBER_THEME,
    min,
    max,
  };
});

function getColorsByTheme(theme: string) {
  return THEME_LIST.find((item) => item.name === theme)!.itemBackgroundColors;
}
