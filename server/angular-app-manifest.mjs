
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1144, hash: '1e5d18bafcba1ee75d4d8635c84484e548c63904c60dd3ac9e672fb3295abaef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1684, hash: '93e8cf805c9d52c8e0dd99054fc7154fa767d802ad41f211a7d7ad8ea777e621', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
