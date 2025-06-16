import localforage from 'localforage';
import { nanoid } from 'nanoid';
import { WheelListItem, WheelFile, WheelFileInputParams } from '@/types/wheel';
import { DOMAIN } from '@/constants/biz';

export const store = localforage.createInstance({
  name: DOMAIN,
});

// ================================
// Wheel
// ================================
export const saveWheelFile = async (file: WheelFileInputParams) => {
  let list = await store.getItem<WheelListItem[]>('wheel-list');
  if (!list) {
    list = [];
  }
  const index = list.findIndex((item) => item.id === file.id);
  const now = Date.now();
  const item: WheelListItem = {
    id: file.id ?? nanoid(),
    title: file.title,
    createdAt: now,
    updatedAt: now,
  };
  if (index !== -1) {
    item.id = list[index].id;
    item.createdAt = list[index].createdAt;
    list[index] = item;
  } else {
    list.push(item);
  }
  const fileDetail: WheelFile = {
    ...file,
    ...item,
  };
  await Promise.all([
    store.setItem('wheel-list', list),
    store.setItem(`wheel-file-${file.id}`, fileDetail),
  ]);
  return fileDetail;
}

export const deleteWheelFile = async (id: string) => {
  await store.removeItem(`wheel-file-${id}`);
  const list = await store.getItem<WheelListItem[]>('wheel-list');
  if (list) {
    const index = list.findIndex((item) => item.id === id);
    if (index !== -1) {
      list.splice(index, 1);
      await store.setItem('wheel-list', list);
    }
  }
};

export const getWheelFile = async (id: string) => {
  return await store.getItem<WheelFile>(`wheel-file-${id}`);
};

export const getWheelFiles = async () => {
  return await store.getItem<WheelListItem[]>('wheel-list');
};

// ================================
// Theme
// ================================
export const saveTheme = async (theme: string) => {
  await store.setItem('theme', theme);
};

export const getTheme = async () => {
  return await store.getItem<string>('theme');
};
