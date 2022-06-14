import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  placeholder: () =>
    _t(translations.common.topbar.search.placeholder, 'Search products'),
  btnText: () => _t(translations.common.topbar.search.btn, 'Search'),
};
