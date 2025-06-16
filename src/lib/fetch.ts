export interface FetchResult {
  success: boolean;
  status: number;
  message: string;
  data: any;
}

export async function fetchService(url: string, options: RequestInit) {
  const response = await fetch(url, options);
  const result: FetchResult = {
    success: false,
    status: response.status,
    message: '',
    data: undefined,
  };
  if (response.status === 200) {
    result.success = true;
    result.data = await response.json();
  } else {
    result.message = response.statusText;
  }
  return result;
}
