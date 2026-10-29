/* A partner's campaign code, from a campaign page's link (win-a-rolex?code=RX7K2P). Kept in this browser for 30 days,
   whichever page it lands on, and put on every link into the client portal (sign up, log in), so whoever opens an account
   becomes that partner's trader even after the code is gone from the address. The code stands for the partner's IB number
   without showing it: the portal's server reads which IB it is. A link with a different code replaces the kept one. Every
   page loads this, the home page too (it has its own script rather than site.js). */
(function () {
  "use strict";
  var KEY = "bcm-campaign-code", KEEP_MS = 30 * 24 * 60 * 60 * 1000;
  function clean(v) { v = String(v || "").trim().toUpperCase(); return /^[A-Z0-9]{6}$/.test(v) ? v : null; }
  var code = (function () {
    var given = clean(new URLSearchParams(location.search).get("code"));
    try {
      if (given) { localStorage.setItem(KEY, JSON.stringify({ code: given, at: Date.now() })); return given; }
      var kept = JSON.parse(localStorage.getItem(KEY) || "null");
      if (kept && clean(kept.code) && Date.now() - Number(kept.at) < KEEP_MS) return clean(kept.code);
      if (kept) localStorage.removeItem(KEY);
    } catch (e) { /* not kept: this page still has it on its address */ }
    return given;
  })();
  if (!code) return;
  function withCode(a) {
    if (!/^https:\/\/register\.blackcrownmarkets\.com\//.test(a.href)) return;
    var u = new URL(a.href);
    if (/^\/partner/.test(u.pathname) || u.searchParams.get("code") === code) return;
    u.searchParams.set("code", code);
    a.href = u.toString();
  }
  Array.prototype.forEach.call(document.querySelectorAll("a[href]"), withCode);
  // Links drawn later (the phone's menu) get it as they are followed.
  ["click", "auxclick"].forEach(function (type) {
    document.addEventListener(type, function (e) { var a = e.target.closest && e.target.closest("a[href]"); if (a) withCode(a); }, true);
  });
})();
