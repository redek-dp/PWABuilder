// From: https://nuxtjs.org/examples/i18n
import * as i18n from '~/store/modules/i18n';

export default ({ isHMR, app, store, route, params, error, redirect }) => {
    // If middleware is called from hot module replacement, ignore it
    if (isHMR) return;
    // Get locale from params
    const locale = params.lang || 'en';
    if (store.state.i18n.locales.indexOf(locale) === -1) {
      return error({ message: 'This page could not be found.', statusCode: 404 });
    }
    // Set locale
    store.commit(`${i18n.name}/${i18n.types.SET}`, locale);
    app.i18n.locale = store.state.i18n.locale;
    // If route is /en/... -> redirect to /...
    if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
      return redirect(route.fullPath.replace(/^\/en/, '/'));
    }
  };