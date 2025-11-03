
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 55644, hash: 'a22c0bded02213e3cb575631a75699df184b8f573a27fc5abfae0ba96390ec5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2163, hash: 'f9f3f7d0249c05f088f7ebc3cb38b4920b67ba6e35d639b37f53929eb56e5971', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WXRK3DV2.css': {size: 103653, hash: 'iWK7B46ylxI', text: () => import('./assets-chunks/styles-WXRK3DV2_css.mjs').then(m => m.default)}
  },
};
