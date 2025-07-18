import { appWithTranslation } from 'next-i18next';

export const withI18n = (Component: any) => appWithTranslation(Component);
