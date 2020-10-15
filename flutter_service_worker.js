'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e5578a968ad2d915c281d5ad7f16dfb4",
".git/config": "9db93fd86935282fd02ce03267c52e2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "e33396846e7582f75ee7cb38cf41e6ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5369b8daa9eb38ff2cb799a4f0132f3c",
".git/logs/refs/heads/master": "5369b8daa9eb38ff2cb799a4f0132f3c",
".git/logs/refs/remotes/origin/master": "b586eb0abe2812087e0e220726babceb",
".git/objects/08/af95dcaa635f1d2e7587875c2efb1a1fe340d9": "af95aecf6cb69cb91caed36b611b2059",
".git/objects/09/87a5defdfc6e97b94be47c1cb8fbd1ffb34690": "002add9b837ddaa3a70b8788a0c44feb",
".git/objects/0e/98a1189e32ec15c23d214d883881acd8071c20": "4067f21ceea7ac9bc6d0140ac01dc0aa",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/16/871008377032e3ce3db1c342bec77c3c389bac": "751b1f5fadbccd4e9ecdbe18d7ea393b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/0b0dde52e1c5f7bd6d5fb6ce5f6271fcf73ae9": "61e8fb7bd12c099da31589e440f39b3e",
".git/objects/28/35657a5d3d94582f03c14b7bade9752f6ea2a5": "d4aa025cc0359ffa020679235e209a38",
".git/objects/2e/ad7f601e4a994c198747a3ccb7db2cde7c2748": "a44978f840319600b68fbd6b27d978a7",
".git/objects/2f/3e4703e96f6f77d408b4c9b9bbf9848b0981ae": "a91bd0117064856075bdacb4329eae78",
".git/objects/30/933d332d2bcaa528cefe879b88e9fbdb7173af": "b50ceeb6cdffc3d143c15d2a3ae58a1d",
".git/objects/3c/01bc3e3572d77be64161c2080ade989dad0d37": "8adcc8b540478b35d0661169f513ca46",
".git/objects/3e/4f483e4490a083ab9c412ed5d9615de40f3ef5": "90d41adc2569a29ef4cf8a7f391ae96a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0932ec930b6b63082e31140339bb21ebd34593": "863b5fa72ce69bbfb9849cb6cbf39858",
".git/objects/4b/0a9fe311424c9b6a6349215191a1293796bc46": "4d1cc3417aabe65d1c3f0371021ca3f0",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/72/b2b9913cd69fecd0cee4e4daf60c7666aae027": "cf6f45b1965f989f9ccfc1c83cfb39eb",
".git/objects/79/e10f85327068efdfa811cd780ae12340a29a8a": "bc6bd1f69ba465e5d9682f943e503541",
".git/objects/82/62c6a51ed1cf91438f33ff85e9d664ec4a7470": "06ff60d588c6499019830ed578b7f9ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/02b8c7d6b82d569b5e249c4a9498920e227863": "576242e4f438106bac13d3a9afca1139",
".git/objects/99/bb728555761693a5c54040024fdc5d07b7cf59": "370a89733ba4a6bb519eae241f5ba986",
".git/objects/9e/f22cb7396749302070ab28935abf96e9afa110": "12a3aabe2f5a18f673ed9160a247487c",
".git/objects/a3/869efb7f895bdd38bb88451f1a5f4e173c543a": "53f63f0f3b0e1aa8d440937ca309c53f",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/4eaaf09bb6b75cf9190ec986b3c52c472d8cef": "eb1f3dff1a49a4b11d5cdc91f7393c86",
".git/objects/d7/d5b395686945e0c298f8ba8fe28cf030b36aa2": "f4f8bab387cf63cc9fc1149f476859ff",
".git/objects/db/4aa4e24424dfbf68931b262235ffa5c609423e": "cf29ea05989728b9e1f5f12e889ca924",
".git/objects/df/332e3d06f59a15805de68101d1d2faeab5759a": "38778be131f715ad22588ef01fd79f85",
".git/objects/e2/d3b15e2f54fb889ad872281f61727afcb7f5d0": "9f49733385fd58f146abe35593eb5c8a",
".git/objects/e9/1f52fbe44a692d4ba4714be3ba4c011c505dd5": "2d04c717eb8c1cad722ac5608048172e",
".git/objects/e9/2f7b2c0f9210085690668ad4ff22d2c20c5d41": "d128f63e5f934e075fcda944a54aea67",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/master": "e71efc4e1d310324c9eddaf9826c0c41",
".git/refs/remotes/origin/master": "e71efc4e1d310324c9eddaf9826c0c41",
"assets/AssetManifest.json": "26d226b48d9e5dc20fd89cb36c83ad92",
"assets/assets/covid.json": "620accde8949dd582c4d2050bb22daf0",
"assets/assets/world_map.json": "a7444bf58c741674a69d12c1ba514694",
"assets/data_collection/data/covid-data.csv": "e49e9730922b5ea48ef2c6b0a7c158c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "82c60195b25cbf4da8ca0685cd259dc3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2585efcebbc9fec84da399334707f993",
"/": "2585efcebbc9fec84da399334707f993",
"main.dart.js": "08eaf9adbb0476800df95fdcbdf18193",
"manifest.json": "ae9f3c96244fe9472c578df55346a336"
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
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
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

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
