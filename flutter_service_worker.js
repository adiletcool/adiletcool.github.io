'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "740ddacb000530c26422df18cb0e5cbb",
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
".git/index": "2a84840a5ce0d344eab5e3a002860575",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a0b33b2b02d626759689a524582209cc",
".git/logs/refs/heads/master": "a0b33b2b02d626759689a524582209cc",
".git/logs/refs/remotes/origin/master": "add024097335360a8e0beb84f1c4f69e",
".git/objects/02/70599715e1455f8d7499d095587491f56eea31": "a4467dfe6fe185ed977262c2040c9e62",
".git/objects/02/b7b2946e2788683483a7d4aa5680ca5d67e0cf": "9d5f6fe73da5000f04d8f073893f5b3c",
".git/objects/06/77001f8b9892957e42308432097dce46cdc742": "f94e7f88d368094662d1fad9d10fd32e",
".git/objects/08/503805da55d46317a3ebdd9008f5d8529d5f9f": "b3f70cb425831d077d99ff67630d4a39",
".git/objects/08/9ed553fc15fa4442c5a7af4d645a9bac9c7f65": "20747ac13cc34ae254366c2ddaf11337",
".git/objects/08/af95dcaa635f1d2e7587875c2efb1a1fe340d9": "af95aecf6cb69cb91caed36b611b2059",
".git/objects/09/036c6985a8680bbfdf2d3dde0ac170cf8b96da": "babc1ba692fa3770aef3bba0ee8f17fc",
".git/objects/09/87a5defdfc6e97b94be47c1cb8fbd1ffb34690": "002add9b837ddaa3a70b8788a0c44feb",
".git/objects/0e/98a1189e32ec15c23d214d883881acd8071c20": "4067f21ceea7ac9bc6d0140ac01dc0aa",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/16/871008377032e3ce3db1c342bec77c3c389bac": "751b1f5fadbccd4e9ecdbe18d7ea393b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/7e715557fc8bf7a727221f33d86018879e3097": "90e4ad1d6e8507f02900c7db5ddff9e9",
".git/objects/26/9631813516ffce077934d12249d77cb477211f": "449e6cd2dc24fb6c9a18c3f13704d240",
".git/objects/28/0b0dde52e1c5f7bd6d5fb6ce5f6271fcf73ae9": "61e8fb7bd12c099da31589e440f39b3e",
".git/objects/28/35657a5d3d94582f03c14b7bade9752f6ea2a5": "d4aa025cc0359ffa020679235e209a38",
".git/objects/2e/ad7f601e4a994c198747a3ccb7db2cde7c2748": "a44978f840319600b68fbd6b27d978a7",
".git/objects/2f/3e4703e96f6f77d408b4c9b9bbf9848b0981ae": "a91bd0117064856075bdacb4329eae78",
".git/objects/30/933d332d2bcaa528cefe879b88e9fbdb7173af": "b50ceeb6cdffc3d143c15d2a3ae58a1d",
".git/objects/38/b25f637602ae2b24e948cbdb2146a0a970f50b": "8292f0ab3df1b358834e4c494097c7df",
".git/objects/3c/01bc3e3572d77be64161c2080ade989dad0d37": "8adcc8b540478b35d0661169f513ca46",
".git/objects/3e/4f483e4490a083ab9c412ed5d9615de40f3ef5": "90d41adc2569a29ef4cf8a7f391ae96a",
".git/objects/3f/ca412c75ed0d7c7ba6cfc2da41b0cba24b55b4": "410cec1785f10105fe8542821949ce22",
".git/objects/41/849a2458f3ad0dacfec05166dcdc59179d2adb": "05a078bb1b9ab5cf453b21de5add8527",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0932ec930b6b63082e31140339bb21ebd34593": "863b5fa72ce69bbfb9849cb6cbf39858",
".git/objects/4b/0a9fe311424c9b6a6349215191a1293796bc46": "4d1cc3417aabe65d1c3f0371021ca3f0",
".git/objects/56/b5536d66c26a2c265494bce64d390d709d7cd7": "9c8d35e33f03b1d9e28449bf57af8321",
".git/objects/59/8d692b54edef9f15b382856458c25c6aa96810": "51d553837be2e8e955c206835bd8f9e8",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/61/c9f93f6e1c0922d4a4505fe8210589259e781c": "a7f898aaed306b7e906d9f6007697a6e",
".git/objects/62/caf7afd985427be7af605f302f59a020ee8c9d": "05144973de51fbc93aa5946163843cec",
".git/objects/6a/4cd38308c2061b90dfe7310345f26cbcefec56": "e2f8a05e52db362c11d7f5cbbc1fa490",
".git/objects/6a/ba1c19d8e9cd0cfa33392593f33b4d85fdf398": "1f04ea0b551ea324a13709d34aa39f3f",
".git/objects/72/b2b9913cd69fecd0cee4e4daf60c7666aae027": "cf6f45b1965f989f9ccfc1c83cfb39eb",
".git/objects/79/e10f85327068efdfa811cd780ae12340a29a8a": "bc6bd1f69ba465e5d9682f943e503541",
".git/objects/82/62c6a51ed1cf91438f33ff85e9d664ec4a7470": "06ff60d588c6499019830ed578b7f9ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/9c43095afe46fd03a15a5224ac1ce322c45b90": "ff29541ca04359c238871ddf8e3685dc",
".git/objects/94/15d9f44ca23ff32c8a8b1b3a0a0e76df5416fa": "07189ee213f47dae3f78861fd157618c",
".git/objects/96/585c670ac41bcd80d10a039575d0271ab73ec9": "d8c17a0d5d18a14eb0e627730dac035f",
".git/objects/97/02b8c7d6b82d569b5e249c4a9498920e227863": "576242e4f438106bac13d3a9afca1139",
".git/objects/98/095bfa4330e11fd63fe163b01b734d8f8f8c18": "e03a875ec560fe9904412c94a788a75b",
".git/objects/99/bb728555761693a5c54040024fdc5d07b7cf59": "370a89733ba4a6bb519eae241f5ba986",
".git/objects/9e/ad2fd97d23901633ae13d2b516197b64bda12f": "75f9b7a38799e911df5dd37ee243016d",
".git/objects/9e/f22cb7396749302070ab28935abf96e9afa110": "12a3aabe2f5a18f673ed9160a247487c",
".git/objects/a3/869efb7f895bdd38bb88451f1a5f4e173c543a": "53f63f0f3b0e1aa8d440937ca309c53f",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/624ae5f04550c87844390ca2b8223b6127ff87": "ca7b96c1df39f8ae5598e28d58593941",
".git/objects/ad/2ca25e9339af518db6f2b12f9bd0a44cb2373b": "fc097d00eb813438097ca6ee79fc8b8a",
".git/objects/af/163d89a2d4a6d564c8bc713d05642f6e7fade1": "c695985f83438d750fb9b8c58142fb5d",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9c2ef7be31f13541dbf846e3d97cdab07fc1f3": "6e68cc91e4c9d8e6630e367355d13d84",
".git/objects/bb/4eaaf09bb6b75cf9190ec986b3c52c472d8cef": "eb1f3dff1a49a4b11d5cdc91f7393c86",
".git/objects/cd/8980b7caab1597361bd9174f4ec9d101be3e9e": "9ffca4f128a39789ed6f1f1b568b607c",
".git/objects/d0/3741741d3c03cd22f91a98025d48ca80f527a5": "87ef1ebb010b3501c9b2d9041993d64d",
".git/objects/d7/9113d0e089b29ad2018d34ee50fe98a60d8bcd": "89733a10b85f60f1c7d1b9faff50f6d9",
".git/objects/d7/d5b395686945e0c298f8ba8fe28cf030b36aa2": "f4f8bab387cf63cc9fc1149f476859ff",
".git/objects/da/e7b6cdfea17f6a0ce44c9420e8a3b90b60cb8d": "00d6c3844f18c1650a7acd4ecdff7b80",
".git/objects/db/4aa4e24424dfbf68931b262235ffa5c609423e": "cf29ea05989728b9e1f5f12e889ca924",
".git/objects/df/332e3d06f59a15805de68101d1d2faeab5759a": "38778be131f715ad22588ef01fd79f85",
".git/objects/e2/d3b15e2f54fb889ad872281f61727afcb7f5d0": "9f49733385fd58f146abe35593eb5c8a",
".git/objects/e9/1f52fbe44a692d4ba4714be3ba4c011c505dd5": "2d04c717eb8c1cad722ac5608048172e",
".git/objects/e9/2f7b2c0f9210085690668ad4ff22d2c20c5d41": "d128f63e5f934e075fcda944a54aea67",
".git/objects/f0/72621218a19aba25827b13ba3d427459345079": "e3908b862d3d36652e41c660181c0efb",
".git/objects/f0/ef849fc14e4854fb17c0d949ec06cd46e9ff63": "1a191fe3c8c1fe31b975eda748200076",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/67dfd19c12e9cf2cf110f5d085f897d4e58d33": "8d3eee5d72476e9466ed9c3e845e59ea",
".git/objects/fa/40a29e593c1051e61d2e7ab0e70c44d54e12c8": "a5bcd066fb3bc9acdfffbf0828d1486e",
".git/objects/fd/f831e5e7a2bd1191ab043a3d6cfb987bf8595f": "3aa8cd9881742f9a7878fba6cc92c217",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/master": "f5fbb8d5c201425e5e6bb11be9741fca",
".git/refs/remotes/origin/master": "f5fbb8d5c201425e5e6bb11be9741fca",
"assets/AssetManifest.json": "0fb7e324a6a18d17e1a6d38a3270b1e5",
"assets/assets/fonts/ALS_Sector-Bold.otf": "7bc6ecf27f9152676d1917e4dadd783c",
"assets/assets/fonts/ALS_Sector-Regular.otf": "560844cbcf22eaa45db192813fa720eb",
"assets/assets/fonts/ALS_Sector-stencil.otf": "36eefb77e3490de854b4870d3f094900",
"assets/assets/world_map.json": "a7444bf58c741674a69d12c1ba514694",
"assets/FontManifest.json": "29d13de65bf1834249a9a8e90de8df2e",
"assets/fonts/ALS_Sector-Bold.otf": "7bc6ecf27f9152676d1917e4dadd783c",
"assets/fonts/ALS_Sector-Regular.otf": "560844cbcf22eaa45db192813fa720eb",
"assets/fonts/ALS_Sector-stencil.otf": "36eefb77e3490de854b4870d3f094900",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "82c60195b25cbf4da8ca0685cd259dc3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/world_map.json": "a7444bf58c741674a69d12c1ba514694",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "550b01db32e406a421e05f8d208760d7",
"/": "550b01db32e406a421e05f8d208760d7",
"main.dart.js": "b681c1d7d698bf6bc41ce158edbda74e",
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
