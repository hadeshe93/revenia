export interface WheelEntryDetail {
  id: string;
  text: string;
  weight: string;
  visible: boolean;
  color: string;
  image: string | null;
}

export enum WheelFormMode {
  Normal = 'normal',
  Advanced = 'advanced',
}

export enum WheelFormStatus {
  Visible = 'visible',
  Hidden = 'hidden',
}

export enum WheelFormType {
  Common = 'common',
  Number = 'number',
  YesNo = 'yes-no',
}

export interface WheelFormDetail {
  entries: WheelEntryDetail[];
  mode: WheelFormMode;
}

export interface WheelDetail {
  id: string;
  title: string;
  theme: string;
  form: WheelFormDetail;
  formStatus: WheelFormStatus;
  formType?: WheelFormType;
  results: WheelEntryDetail[];
}

export type WheelListItem = Pick<WheelFile, 'id' | 'title' | 'createdAt' | 'updatedAt'>;

export enum SpinTaskStatus {
  None = 'none',
  Spinning = 'spinning',
  Completed = 'completed',
}

export interface SpinTask {
  index: number;
  status: SpinTaskStatus;
  result?: {
    title: string;
    entry: WheelEntryDetail;
  };
}

export interface WheelFile {
  id: string;
  title: string;
  details: WheelDetail[];
  createdAt: number;
  updatedAt: number;
}

export type WheelFileInputParams = Pick<WheelFile, 'title' | 'details'>  & {
  id?: string;
};

export interface ShareWheelFilePayload {
  file: WheelFile;
}

export interface RetrieveWheelFilePayload {
  uuid: string;
}

