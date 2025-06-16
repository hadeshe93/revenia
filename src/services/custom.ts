import { fetchService } from '../lib/fetch';
import { ShareWheelFilePayload, RetrieveWheelFilePayload } from '@/types/wheel';

export async function shareWheelFile(payload: ShareWheelFilePayload) {
  return fetchService('/api/custom/create', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function retrieveWheelFile(payload: RetrieveWheelFilePayload) {
  // for debugging
  // return {
  //   success: true,
  //   status: 200,
  //   message: 'success',
  //   data: {
  //     "id": "vkPaVjP7A2w9ZOP3XvXPV",
  //     "uuid": "vkPaVjP7A2w9ZOP3XvXPV",
  //     "biz": "wheel",
  //     "country": "sg",
  //     "content": "{\"file\":{\"id\":\"IN0goiP5DNh-STwYUbLHR\",\"title\":\"\",\"details\":[{\"id\":\"MouAndG_qbE1WgASlOEvb\",\"title\":\"Untitled\",\"form\":{\"entries\":[{\"id\":\"cOo-A_21XeBVtMU0W2reY\",\"text\":\"Fish N Chips\",\"weight\":\"1\",\"visible\":true,\"color\":\"#fbf8c4\",\"image\":null},{\"id\":\"lG_RrP5XmABgcFMEJqvIj\",\"text\":\"Sandwich\",\"weight\":\"1\",\"visible\":true,\"color\":\"#e4f1aa\",\"image\":null},{\"id\":\"Le4BmtWirk30Xu62BiVDW\",\"text\":\"Tacos\",\"weight\":\"1\",\"visible\":true,\"color\":\"#c0d26e\",\"image\":null},{\"id\":\"N8ob23x-H7V-uLpXlmkVt\",\"text\":\"Fried Chicken\",\"weight\":\"1\",\"visible\":true,\"color\":\"#E2FE8E\",\"image\":null}],\"mode\":\"normal\"},\"formStatus\":\"visible\",\"results\":[]}],\"createdAt\":1743137632516,\"updatedAt\":1743137632516}}"
  //   },
  // };
  const result = await fetchService(`/api/custom/retrieve`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  if (result.success) {
    result.data.content = JSON.parse(result.data.content);
  }
  return result;
}
