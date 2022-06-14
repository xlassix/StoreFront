import { translations } from 'locales/translations';
import { _t } from 'utils/messages';
export const messages = {
  title: () => _t(translations.common.topbar.account_menu.title, 'Account'),
  menu: {
    signin: () =>
      _t(translations.common.topbar.account_menu.sign_in, 'Sign In'),
    profile: () =>
      _t(translations.common.topbar.account_menu.profile, 'Profile'),
    history: () =>
      _t(
        translations.common.topbar.account_menu.order_history,
        'Order History',
      ),
    orders: () =>
      _t(translations.common.topbar.account_menu.track_orders, 'Track Orders'),
    wallet: () => _t(translations.common.topbar.account_menu.wallet, 'Wallet'),
    help: () =>
      _t(translations.common.topbar.account_menu.help, 'Help Center (FAQS)'),
    ticket: () =>
      _t(
        translations.common.topbar.account_menu.raise_ticket,
        'Raise a Ticket',
      ),
  },
};
