importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.bb0eb92de4c48c76b954.js",
    "revision": "9a097e641afebe4fa3ed69406d0577b9"
  },
  {
    "url": "/_nuxt/common.6efd0a0fc58d57c23e79.js",
    "revision": "134db885cfd53aa41870587f48717377"
  },
  {
    "url": "/_nuxt/layouts/blank.56285c73c316a7b9d861.js",
    "revision": "a4070579e9e652beb96e6452b3493d32"
  },
  {
    "url": "/_nuxt/layouts/default.e8eb19ffa6686c7d9aff.js",
    "revision": "20578f057733e87278e2593bd97862aa"
  },
  {
    "url": "/_nuxt/manifest.bb512a84e7cc0dded0bd.js",
    "revision": "8b51f915a067f164cc4e296627cc9d85"
  },
  {
    "url": "/_nuxt/pages/contact.79833718e9dcbb5d74a0.js",
    "revision": "481057f3c8549326558f5231d0c5ff60"
  },
  {
    "url": "/_nuxt/pages/index.8b8755873dd2a32519c8.js",
    "revision": "301bd4fcb9aaec5ca3f76d5e468524b0"
  },
  {
    "url": "/_nuxt/pages/profile.fa7919c3f34dae721cf7.js",
    "revision": "8c473f26553a66f8fd3170b35597aacc"
  },
  {
    "url": "/_nuxt/pages/test/buttons.9c2a206d3cc58a5c6e1e.js",
    "revision": "acd7c859e6b1e95f4ae0060a6c02186e"
  },
  {
    "url": "/_nuxt/pages/test/vr.f3cad5ac7a4669d068c4.js",
    "revision": "2628c2c6b633b3f6e0cd18c6ca16163b"
  },
  {
    "url": "/_nuxt/pages/work.c7e10fee9b826c88edcc.js",
    "revision": "635ca642de788e18414781c6e8874785"
  },
  {
    "url": "/_nuxt/pages/work/index.a41cf67793a7eae19a21.js",
    "revision": "bc8f46cc16cd1d1d2c2f91a68148a0db"
  },
  {
    "url": "/_nuxt/pages/work/projects.a3fdd50764391b80947f.js",
    "revision": "b4084582e15d54e64a946b25b94f4272"
  },
  {
    "url": "/_nuxt/pages/work/projects/application-to-sc.4debba7fb93379f802ff.js",
    "revision": "c9019bfda7d3d10a9890df248fc5aacc"
  },
  {
    "url": "/_nuxt/pages/work/projects/corporate-website.662db8eac29df7db1c5b.js",
    "revision": "21c76118bf3a073b5a31bfe661859653"
  },
  {
    "url": "/_nuxt/pages/work/projects/data-dashboard.a6edbf7c64d4f8bd98d6.js",
    "revision": "38e12a98d73244626eeb68e5a77c243e"
  },
  {
    "url": "/_nuxt/pages/work/projects/hotel-item-element.ca3f8e5b9686bddd7466.js",
    "revision": "4b5d7cc692a91b8ddb226fb665365e32"
  },
  {
    "url": "/_nuxt/pages/work/projects/index.471654c614bfcf131023.js",
    "revision": "05ca6f058c5d60aa7cccef59054b4cf8"
  },
  {
    "url": "/_nuxt/pages/work/projects/marathon.eb657661c9111979f809.js",
    "revision": "c54219194961e1615fc543eb1893482f"
  },
  {
    "url": "/_nuxt/pages/work/projects/product-mockups.b65fa8d6f8acda8231f9.js",
    "revision": "9ac4781f091c3f3a7416ec617abbfeae"
  },
  {
    "url": "/_nuxt/pages/work/projects/ratings-slideout.5fc26052f38b1ef1b7ae.js",
    "revision": "7c5279d67b332805c0c8ab50a754cc24"
  },
  {
    "url": "/_nuxt/pages/work/projects/scss-colors.ce5b6342411b80dc5793.js",
    "revision": "b8b38f903fdaa9261279662faf955842"
  },
  {
    "url": "/_nuxt/pages/work/projects/template.fc75b2dd9ef5f54cbf7a.js",
    "revision": "8547bd992d11550a72c786f40dc842db"
  },
  {
    "url": "/_nuxt/pages/work/projects/trivago-misc.2ed9edde964887e36e62.js",
    "revision": "5d792d780c63be9b6e6c1793c33b5ab1"
  },
  {
    "url": "/_nuxt/pages/work/projects/vertical-rhythm.ad8fbb13611a92a19056.js",
    "revision": "48c8e89d51d0bd085e80f0f53040eb3c"
  },
  {
    "url": "/_nuxt/pages/work/projects/web-banners.5429c25f345efff44c04.js",
    "revision": "2ef0361d9caeaee412296ae20f27a016"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "tiny_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
