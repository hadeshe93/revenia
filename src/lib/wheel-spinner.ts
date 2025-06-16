import { nanoid } from 'nanoid';
import { WheelFile, WheelDetail, WheelEntryDetail, WheelFormDetail, WheelFormMode, WheelFormStatus, WheelFormType } from '@/types/wheel';
import { PRESET_DEFAULT, DEFAULT_THEME, THEME_LIST } from '@/constants/preset';

interface GetCurrentWheelEntryColorOptions {
  theme?: string;
  index: number;
}
export function getCurrentWheelEntryColor(options: GetCurrentWheelEntryColorOptions) {
  const { theme = DEFAULT_THEME, index } = options || {};
  const { itemBackgroundColors } = THEME_LIST.find((item) => item.name === theme) || {
    name: DEFAULT_THEME,
    itemBackgroundColors: THEME_LIST.find((item) => item.name === DEFAULT_THEME)!.itemBackgroundColors,
  };
  const colorsLength = itemBackgroundColors.length;
  return itemBackgroundColors[index % colorsLength];
}

export function createWheelFile(params: Partial<WheelFile>): WheelFile {
  const now = Date.now();
  return {
    id: nanoid(),
    title: '',
    details: [],
    createdAt: now,
    updatedAt: now,
    ...(params || {}),
  };
}

export interface CreateWheelDetailOptions {
  title?: string;
  labels?: string[];
  preset?: any;
  formType?: WheelFormType;
}
export function createWheelDetail(options: CreateWheelDetailOptions): WheelDetail {
  const { title, labels = [], preset = PRESET_DEFAULT, formType = WheelFormType.Common } = options;
  const { theme } = preset;
  return {
    id: nanoid(),
    title: title || '',
    theme,
    form: {
      entries: labels.map((text, index) => createWheelEntry({
        text: text || '',
        color: getCurrentWheelEntryColor({
          index,
          theme,
        }),
      })),
      mode: WheelFormMode.Normal,
    },
    formStatus: WheelFormStatus.Visible,
    formType,
    results: [],
  };
}

export function createWheelForm(rawValue?: Partial<WheelFormDetail>): WheelFormDetail {
  return {
    entries: [],
    mode: WheelFormMode.Normal,
    ...(rawValue || {}),
  };
}
export function createWheelEntry(rawValue?: Partial<WheelEntryDetail>, options?: { theme?: string; index?: number }): WheelEntryDetail {
  const { theme = DEFAULT_THEME, index } = options || {};
  const color = index ? getCurrentWheelEntryColor({ index, theme }) : '#ffffff';
  return {
    id: nanoid(),
    text: '',
    weight: '1',
    visible: true,
    color,
    image: null,
    ...(rawValue || {}),
  };
}

export function updateItemBgColorsInForm(form: WheelFormDetail, theme: string) {
  const entries = form.entries.map((item, index) => {
    return {
      ...item,
      color: getCurrentWheelEntryColor({
        index,
        theme,
      }),
    };
  });
  return {
    ...form,
    entries,
  };
}

export interface UpdateSpinWheelParams {
  wheelDetail: WheelDetail;
  preset?: any;
}
export function formatSpinWheelOptions(params: UpdateSpinWheelParams) {
  const { wheelDetail, preset = PRESET_DEFAULT } = params;
  let { entries } = wheelDetail.form;
  entries = entries.filter((item) => item.visible);
  return {
    ...preset,
    items: entries.map((item) => ({
      label: item.text,
      weight: Number(item.weight),
    })),
    itemBackgroundColors: entries.map((item) => item.color),
  };
}

// 随机算法
export function getSecureWeightedRandom(weights: number[]) {
  let sum = weights.reduce((acc, val) => acc + val, 0); // 计算权重总和

  // 生成一个安全的随机数（范围 0 ~ sum-1）
  let array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  let rand = array[0] / (0xFFFFFFFF + 1) * sum; // 归一化到 [0, sum)

  // 遍历权重数组，找到对应的随机索引
  let cumulative = 0;
  for (let i = 0; i < weights.length; i++) {
      cumulative += weights[i];
      if (rand < cumulative) {
          return i;
      }
  }
  return getWeightedRandom(weights);
}

function getWeightedRandom(weights: number[]) {
  const total = weights.reduce((acc, curr) => acc + curr, 0);
  const random = Math.random() * total;
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (random < sum) {
      return i;
    }
  }
}

// 统计数组中对象内每个 text 出现的次数，并返回数组
export function countWheelEntryDetailArray(array: WheelEntryDetail[]) {
  return array.reduce((acc, curr) => {
    acc[curr.text] = (acc[curr.text] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
