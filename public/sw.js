if (!self.define) { const e = e => { "require" !== e && (e += ".js"); let r = Promise.resolve(); return s[e] || (r = new Promise(async r => { if ("document" in self) { const s = document.createElement("script");
          s.src = e, document.head.appendChild(s), s.onload = r } else importScripts(e), r() })), r.then(() => { if (!s[e]) throw new Error(`Module ${e} didn’t register its module`); return s[e] }) },
    r = (r, s) => { Promise.all(r.map(e)).then(e => s(1 === e.length ? e[0] : e)) },
    s = { require: Promise.resolve(r) };
  self.define = (r, i, n) => { s[r] || (s[r] = Promise.resolve().then(() => { let s = {}; const o = { uri: location.origin + r.slice(1) }; return Promise.all(i.map(r => { switch (r) {
          case "exports":
            return s;
          case "module":
            return o;
          default:
            return e(r) } })).then(e => { const r = n(...e); return s.default || (s.default = r), s }) })) } }
define("./sw.js", ["./workbox-2f1d53df"], (function(e) { "use strict";
  self.addEventListener("message", e => { e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting() }), e.precacheAndRoute([{ url: "icons/icon-192x192.png", revision: "0087c4941343048bd7809d1b6bd292ea" }, { url: "icons/icon-512x512.png", revision: "02d74ff42850d2503e9488b98cf1076a" }, { url: "index.html", revision: "1d7c137408dd84207ac75b265721cb62" }, { url: "index.js", revision: "f5444e73ec1d716ab155b5f2a6ef91da" }, { url: "service-worker.js", revision: "6e8e862e5c1b9cff708d8aaa87d7c2af" }, { url: "styles.css", revision: "43ffd3da2c7b85ba0c9c3d5075a46c99" }], {}), e.registerRoute(/https:\/\/hw18-budget-tracker\.herokuapp\.com/, new e.NetworkFirst, "GET") }));
//# sourceMappingURL=sw.js.map