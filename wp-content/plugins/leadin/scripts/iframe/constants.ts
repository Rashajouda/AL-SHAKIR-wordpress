export const Apps = {
  Forms: 'integrated-form-app',
  LiveChat: 'integrated-livechat-app',
} as const;

export type AppType = typeof Apps[keyof typeof Apps];
