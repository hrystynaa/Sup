/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "f87014f477e1578b12fb35cbf28f21d8"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ecfba06e.css",
    "revision": "eafcc25de80857eec9c9e6c60693469c"
  },
  {
    "url": "assets/img/connection.b79f9a3c.jpg",
    "revision": "b79f9a3cb9db829b96d5a557bc4fa316"
  },
  {
    "url": "assets/img/Delete_by_id_result.0a442f88.jpg",
    "revision": "0a442f8832b08fc6a7310a775aa716c0"
  },
  {
    "url": "assets/img/Delete_by_id.dac8f013.jpg",
    "revision": "dac8f013ddc265d7adfb4446f4ed4787"
  },
  {
    "url": "assets/img/Delete_by_non-existent_id.8a4b2344.jpg",
    "revision": "8a4b23442f1406aabc2f34656a267987"
  },
  {
    "url": "assets/img/Get_by_id.f92d3eb2.jpg",
    "revision": "f92d3eb21c4a88feb1f934efdeac4fbc"
  },
  {
    "url": "assets/img/Get_by_non-existent_id.73a2d586.jpg",
    "revision": "73a2d58658ab187535576a35b7e07baf"
  },
  {
    "url": "assets/img/Get.fc567a91.jpg",
    "revision": "fc567a9135f90282cd8558e1d3c78cc6"
  },
  {
    "url": "assets/img/Post_ex1.05fc27c0.jpg",
    "revision": "05fc27c00ab23558e7f8f3124c8eeba5"
  },
  {
    "url": "assets/img/Post_ex2.b6abc5cd.jpg",
    "revision": "b6abc5cd956c65c8149ff0571b92749f"
  },
  {
    "url": "assets/img/Post_ex3.0500fad9.jpg",
    "revision": "0500fad905a321dc0b6a93e58189f91e"
  },
  {
    "url": "assets/img/Post_result.abc8e16b.jpg",
    "revision": "abc8e16b32e5042de3c62b8fd41609c9"
  },
  {
    "url": "assets/img/Post_with_same_name.6ad483b1.jpg",
    "revision": "6ad483b123e8d09ea3866cb21a29000b"
  },
  {
    "url": "assets/img/Post_without_inf.13727aee.jpg",
    "revision": "13727aee26c86926e7caf85f75b1564b"
  },
  {
    "url": "assets/img/Put_by_non-existent_id.9cc4c6e7.jpg",
    "revision": "9cc4c6e76aa75fe1a0f2c9515f4d06be"
  },
  {
    "url": "assets/img/Put_id_result.8f656983.jpg",
    "revision": "8f6569837f5918ebb83415c475369492"
  },
  {
    "url": "assets/img/Put_id.cf1c6d9a.jpg",
    "revision": "cf1c6d9a4624a98c2e6f2aa3c3260a65"
  },
  {
    "url": "assets/img/Put_memberList_result.50dba1c1.jpg",
    "revision": "50dba1c1eb57f27bd1432b899c61ea48"
  },
  {
    "url": "assets/img/Put_memberList.aeb59a99.jpg",
    "revision": "aeb59a99c5ac28ac6b39e14ba3dd0e6f"
  },
  {
    "url": "assets/img/Put_name_result.efbb2c32.jpg",
    "revision": "efbb2c324b3386c69155623138397cce"
  },
  {
    "url": "assets/img/Put_name.06d6b07a.jpg",
    "revision": "06d6b07a00e8b9e03c14161fa152f173"
  },
  {
    "url": "assets/img/Put_without_content.17150c6f.jpg",
    "revision": "17150c6faa55a993f05fe8b172c2d595"
  },
  {
    "url": "assets/img/Put_without_id.5c7d91d7.jpg",
    "revision": "5c7d91d71bf276b9184f11c59636df5d"
  },
  {
    "url": "assets/img/sceme.c72e8903.png",
    "revision": "c72e8903a4d699259da568800111c3b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ef0194b9.js",
    "revision": "c6d533b2c29192698a17aac4c030fdd3"
  },
  {
    "url": "assets/js/11.cbd18161.js",
    "revision": "88faad08cd882f3a3e7ff1d16dab6127"
  },
  {
    "url": "assets/js/12.04e377c2.js",
    "revision": "6360fb48d430583dde70c43587c220f1"
  },
  {
    "url": "assets/js/13.0eee7d6f.js",
    "revision": "3fddfe00579ff9292b74c922534077df"
  },
  {
    "url": "assets/js/14.122f1924.js",
    "revision": "879bbff394974049eed6eb15a9434cac"
  },
  {
    "url": "assets/js/15.5ac4ad90.js",
    "revision": "bb4a9b8c8830f8a620f0ee75bd3afccb"
  },
  {
    "url": "assets/js/16.9496519a.js",
    "revision": "8aba0d09dd0b5a60e6423e143ad9db74"
  },
  {
    "url": "assets/js/17.0273e2ca.js",
    "revision": "3cfbecd395d401f8881c280c8a7650e9"
  },
  {
    "url": "assets/js/18.0912f16c.js",
    "revision": "d0af62e66fc58bf9915c4faa40a66daa"
  },
  {
    "url": "assets/js/19.59b77942.js",
    "revision": "f66d906d393d8a9596e8a8a04d0fc94c"
  },
  {
    "url": "assets/js/2.d3b4c47b.js",
    "revision": "bea1dbaeb05dc69be3e668eb6e433569"
  },
  {
    "url": "assets/js/20.6a1ff9d3.js",
    "revision": "05a139a6cece0222df19827b0318ddc4"
  },
  {
    "url": "assets/js/21.721fabb2.js",
    "revision": "fb7ae973247de2e26600fbff02cd26e4"
  },
  {
    "url": "assets/js/22.9f79787c.js",
    "revision": "f1a7429fe20c65c22076571207762cf4"
  },
  {
    "url": "assets/js/23.da2f79bd.js",
    "revision": "855544de083d69c095c164fd42fd791e"
  },
  {
    "url": "assets/js/24.def19fd6.js",
    "revision": "036f3478d4a06ae565eadf629ba7ab4f"
  },
  {
    "url": "assets/js/26.2a7ea55f.js",
    "revision": "befc3c90bef13edc051ec21141e1597b"
  },
  {
    "url": "assets/js/3.40854c25.js",
    "revision": "5ff293e08da17f49ad7c31d41ab1d108"
  },
  {
    "url": "assets/js/4.543dc9e0.js",
    "revision": "3c9f816707ba29d01966bea163158a50"
  },
  {
    "url": "assets/js/5.fe2359f9.js",
    "revision": "114c0e9de71f2ede4b30b15230824fc9"
  },
  {
    "url": "assets/js/6.33e3ee6c.js",
    "revision": "d7e99309e3a5daf7679a980a750ba2c3"
  },
  {
    "url": "assets/js/7.5fc2d4c1.js",
    "revision": "004faf883d2b7129858f4c61f895075c"
  },
  {
    "url": "assets/js/8.2acdd82a.js",
    "revision": "322ed536fd9782957b4ba921973f6885"
  },
  {
    "url": "assets/js/9.35fb1ca2.js",
    "revision": "129a6474339c32a7b849586aeb9ccacf"
  },
  {
    "url": "assets/js/app.47add9e8.js",
    "revision": "3348d2e61c898427288b80a563bd55a0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8e598191bd1c3b4f10060ef8321b0fd3"
  },
  {
    "url": "design/index.html",
    "revision": "7b5f58514bf30667b3f47884f001a555"
  },
  {
    "url": "index.html",
    "revision": "ba7b872e89d8108cf7fbc814be095b94"
  },
  {
    "url": "intro/index.html",
    "revision": "48ac0e1e873823dd6fd56e311dd627dd"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "2cdfad688c50c545bbf98f4823a12b31"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b222579bc48b14994084a3cc58dc4e91"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "48e46176051ebbe320a95b784d647b06"
  },
  {
    "url": "software/index.html",
    "revision": "b4c7047781e1b9c8098750743961e54d"
  },
  {
    "url": "test/index.html",
    "revision": "ee52d236b6fa2ade605c2381e84547f6"
  },
  {
    "url": "use cases/index.html",
    "revision": "b1119fc7770588ea990994629302f4eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
