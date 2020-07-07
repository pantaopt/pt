'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e95d78cec3f01b4463197dd67a0c8b73",
"/": "e95d78cec3f01b4463197dd67a0c8b73",
"main.dart.js": "f5a50f20a7cf207c5ae95992a837b15c",
"assets/AssetManifest.json": "03bd72ab8eec32adde83f8291e280247",
"assets/NOTICES": "6fe86d3ee516e44216e0f0b7314d4b23",
"assets/iconfont/iconfont.ttf": "62450273b88da5b6c0d6bc971d8571b3",
"assets/FontManifest.json": "731d8fbfb279d411d5ec4834bfbefc5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/bcl_ble_flutter/images/lock_suc.png": "c09ea1f211765486124afedc9c76be5b",
"assets/packages/bcl_ble_flutter/images/lock_bluetooth.png": "354101bff1c2d382e3227be073df45de",
"assets/packages/bcl_ble_flutter/images/basic_cricle.png": "a1019c90c58149d825b3122280680d52",
"assets/packages/bcl_ble_flutter/iconfont/iconfont.ttf": "64f880c0e441e578d2f3a3da2119bbdd",
"assets/packages/loginfluttermodule/iconfont/iconfont.ttf": "b874103d2a8e4ffe1921c148f8c53765",
"assets/packages/loginfluttermodule/assets/area/area_jp.json": "885d25b471bf6fb25c64629d2a2eb818",
"assets/packages/loginfluttermodule/assets/area/area.json": "7e39fa4c3c2380a20dd89a229ce9f0c4",
"assets/packages/loginfluttermodule/assets/area/area_zh.json": "2e76b569bf501ac2c0cc579cfa091d4b",
"assets/packages/loginfluttermodule/assets/images/keyvox_logo.png": "554888fa5035612f1a2775962c42bac8",
"assets/packages/loginfluttermodule/assets/translations/en-US.xml": "ac4e554e31d3b2c12d2b1f03f1a2a56a",
"assets/packages/loginfluttermodule/assets/translations/zh-CN.xml": "d89e4fd6ff93f09d57d2b62235b02daa",
"assets/packages/loginfluttermodule/assets/translations/ja-JP.xml": "3bb2513c188e496f3d0d2ac1d1d83343",
"assets/packages/homefluttermodule/iconfont/iconfont.ttf": "62450273b88da5b6c0d6bc971d8571b3",
"assets/packages/homefluttermodule/json/unit_detail.json": "6fb21e0ac67ca87cc4eb073a32124441",
"assets/packages/homefluttermodule/json/unit_list.json": "a714ab958110b2778fafcac81a211f1d",
"assets/packages/homefluttermodule/json/place_list.json": "557909160a9655377af93ced27e0029c",
"assets/packages/homefluttermodule/assets/images/hotel_logo.png": "15d51230fad1879199774af4218e11af",
"assets/packages/homefluttermodule/assets/images/keyvox_logo.png": "554888fa5035612f1a2775962c42bac8",
"assets/packages/homefluttermodule/assets/translations/en-US.xml": "9837ccbdb4ebb04ef62b1cfe9e56b614",
"assets/packages/homefluttermodule/assets/translations/zh-CN.xml": "e87786212ee044de09caed2dd0a5d9ed",
"assets/packages/homefluttermodule/assets/translations/ja-JP.xml": "952c88f6051170a3b1cfb7a0f37ec802",
"assets/packages/sidefluttermodule/assets/images/basic_logo.png": "212c2f02dced09ae0e3b8ed0ef3e11cc",
"assets/packages/sidefluttermodule/assets/translations/en-US.xml": "ac4e554e31d3b2c12d2b1f03f1a2a56a",
"assets/packages/sidefluttermodule/assets/translations/zh-CN.xml": "d89e4fd6ff93f09d57d2b62235b02daa",
"assets/packages/sidefluttermodule/assets/translations/ja-JP.xml": "3bb2513c188e496f3d0d2ac1d1d83343",
"assets/packages/keyvoxi18nflutter/assets/area/area_jp.json": "28d19625e076829162848afe525f9b8b",
"assets/packages/keyvoxi18nflutter/assets/area/area.json": "7e39fa4c3c2380a20dd89a229ce9f0c4",
"assets/packages/keyvoxi18nflutter/assets/area/area_zh.json": "2e76b569bf501ac2c0cc579cfa091d4b",
"assets/packages/keyvoxi18nflutter/assets/translations/en-US.xml": "bef6b09d26483f90d20fb772d5223566",
"assets/packages/keyvoxi18nflutter/assets/translations/zh-CN.xml": "c5b82609e39ea3cd5873d51aaf665bc0",
"assets/packages/keyvoxi18nflutter/assets/translations/ja-JP.json": "041ccaf26f5aa36a4ac775e67994e96c",
"assets/packages/keyvoxi18nflutter/assets/translations/ja-JP.xml": "6a9df048f00acac4e94ac4e8ab455faa",
"assets/packages/keyvoxi18nflutter/assets/translations/zh-CN.json": "f3d7e9690cc729464f3b84ede690c7f5",
"assets/packages/keyvoxi18nflutter/assets/translations/en-US.json": "417f374883ebc7a688b4e0e5a0a14abe",
"assets/packages/keyboxfluttermodule/iconfont/iconfont.ttf": "62450273b88da5b6c0d6bc971d8571b3",
"assets/packages/keyboxfluttermodule/assets/area/area_jp.json": "001ccc5381290c9d4112b8b4f0ae6a1a",
"assets/packages/keyboxfluttermodule/assets/area/area.json": "7e39fa4c3c2380a20dd89a229ce9f0c4",
"assets/packages/keyboxfluttermodule/assets/area/area_zh.json": "2e76b569bf501ac2c0cc579cfa091d4b",
"assets/packages/keyboxfluttermodule/assets/images/basic_logo.png": "212c2f02dced09ae0e3b8ed0ef3e11cc",
"assets/packages/keyboxfluttermodule/assets/images/take_from_gallery.png": "965f09a6f95500f58b0b64cdee870f25",
"assets/packages/keyboxfluttermodule/assets/images/anim_lock.png": "a1019c90c58149d825b3122280680d52",
"assets/packages/keyboxfluttermodule/assets/images/no_data.png": "cd3d6d6ac1ae7e598b81b1d3778e12ff",
"assets/packages/keyboxfluttermodule/assets/images/take_photo.png": "63934511072cda4dcefd4a1596fd56fc",
"assets/packages/keyboxfluttermodule/assets/translations/en-US.xml": "b1498c03e53bd5b6f0723fbdc1788fd5",
"assets/packages/keyboxfluttermodule/assets/translations/zh-CN.xml": "6b6261fc57dcd9b8bfdb0853c8bcfd94",
"assets/packages/keyboxfluttermodule/assets/translations/ja-JP.xml": "4e3f30f26d7f5ba61577bd5b2befa2db",
"assets/packages/minefluttermodule/iconfont/iconfont.ttf": "64f880c0e441e578d2f3a3da2119bbdd",
"assets/packages/minefluttermodule/assets/area/area_jp.json": "001ccc5381290c9d4112b8b4f0ae6a1a",
"assets/packages/minefluttermodule/assets/area/area.json": "7e39fa4c3c2380a20dd89a229ce9f0c4",
"assets/packages/minefluttermodule/assets/area/area_zh.json": "2e76b569bf501ac2c0cc579cfa091d4b",
"assets/packages/minefluttermodule/assets/images/jumio_review.png": "846174ff44773696eccfc77a333562d8",
"assets/packages/minefluttermodule/assets/images/basic_logo.png": "212c2f02dced09ae0e3b8ed0ef3e11cc",
"assets/packages/minefluttermodule/assets/images/keyvox_logo.png": "bf9fed58ff96a5f998d6b6932973bfeb",
"assets/packages/minefluttermodule/assets/images/icon_error.png": "9a419fb4a44f3ad8f196ed323df8d66d",
"assets/packages/minefluttermodule/assets/images/take_from_gallery.png": "965f09a6f95500f58b0b64cdee870f25",
"assets/packages/minefluttermodule/assets/images/state_succeed_small.png": "edd0576d8b72a86321a7794e57640ef8",
"assets/packages/minefluttermodule/assets/images/no_pic1.png": "a574060b1bdd4cbdc00bcb8869ce4b8a",
"assets/packages/minefluttermodule/assets/images/icon_avatar.png": "1a7b28147c4be240970351810be44c76",
"assets/packages/minefluttermodule/assets/images/no_data.png": "cd3d6d6ac1ae7e598b81b1d3778e12ff",
"assets/packages/minefluttermodule/assets/images/no_kyc_data.png": "55250f83e4d6c04095577963e3d11024",
"assets/packages/minefluttermodule/assets/images/take_photo.png": "63934511072cda4dcefd4a1596fd56fc",
"assets/packages/minefluttermodule/assets/translations/en-US.xml": "30b82f54aa74b8200fe0c15d4e30c1d1",
"assets/packages/minefluttermodule/assets/translations/zh-CN.xml": "95698203d64853817625d9727503c600",
"assets/packages/minefluttermodule/assets/translations/ja-JP.xml": "4a7aeb0e489d71d200c41c988363db07",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/area/area_jp.json": "885d25b471bf6fb25c64629d2a2eb818",
"assets/assets/area/area.json": "e6022a9f0fed5f133458127aafd63ad8",
"assets/assets/area/area_zh.json": "1f6cc78ab12ba9c3ef1b69721468404c",
"assets/assets/images/hotel_logo.png": "15d51230fad1879199774af4218e11af",
"assets/assets/images/basic_logo.png": "212c2f02dced09ae0e3b8ed0ef3e11cc",
"assets/assets/images/keyvox_logo.png": "554888fa5035612f1a2775962c42bac8",
"assets/assets/images/ic_logo.png": "b4cdbb1ea9c4907e1a9321f0a08221e7",
"assets/assets/translations/en-US.xml": "dfe0198a8efaa213b542f741cfc2daa6",
"assets/assets/translations/zh-CN.xml": "9693fdfced9f61b5f500cd8887cb1fdd",
"assets/assets/translations/ja-JP.xml": "5106c2b21e0b5537dd365a0a1b7f2379"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
