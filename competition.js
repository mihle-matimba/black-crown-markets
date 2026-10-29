/* Win a Rolex on every page of the site (its own page, win-a-rolex.html, has the rest). Every page loads this, the home page too
   (it has its own script rather than site.js).

   1. A partner's campaign code, from a campaign page's link (win-a-rolex?code=RX7K2P). Kept in this browser for 30 days,
      whichever page it lands on, and put on every link into the client portal (sign up, log in), so whoever opens an account
      becomes that partner's trader even after the code is gone from the address. The code stands for the partner's IB number
      without showing it: the portal's server reads which IB it is. A link with a different code replaces the kept one.
   2. A pill under the bar telling of the competition and leading to its page: what's next by the clock, in SAST (entries
      opening, closing, the live draw), and nothing once the winner is drawn. It sits in the space above the page's heading and
      scrolls away with the page; a visitor can close it, and it stays closed until the next stage. Not on the competition's
      own page.
   3. The home page's Win a Rolex section ([data-rx-home]): its line about what's next, by the same clock, and gone after the draw. */
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

(function () {
  "use strict";
  // The competition's clock, in SAST (UTC+2): as the competition page's OPENS, CLOSES and DRAW.
  var OPENS = Date.parse("2026-11-01T00:00:00+02:00");
  var CLOSES = Date.parse("2027-02-01T00:00:00+02:00");
  var DRAW = Date.parse("2027-02-03T20:00:00+02:00");
  // Hidden for now (the user, 29 Oct 2026): no pill, the home page's section has `hidden` in its HTML, and vercel.json sends
  // the competition's own page to the home page (a temporary redirect, so browsers don't keep it). Partners' codes are still
  // kept (above). To show it again, make this true, take `hidden` off the home page's section and the redirect out of vercel.json.
  var SHOWN = false;
  var now = Date.now();
  var stage = now < OPENS ? "soon" : now < CLOSES ? "open" : now < DRAW ? "closed" : "drawn";
  // What's next at each stage: in full, and short for a phone.
  var NEXT = {
    soon: ["Entries open 1 November", "Opens 1 Nov"],
    open: ["Entries close 31 January", "Closes 31 Jan"],
    closed: ["Live draw 3 February, 20:00 SAST", "Draw 3 Feb, 20:00 SAST"],
  };

  // 3. The home page's section.
  var home = document.querySelector("[data-rx-home]");
  if (home) {
    if (stage === "drawn") home.hidden = true;
    else Array.prototype.forEach.call(home.querySelectorAll("[data-rx-next]"), function (el) { el.textContent = NEXT[stage][0]; });
  }

  // 2. The pill under the bar.
  var here = location.pathname.replace(/\.html$/, "").replace(/\/$/, "").split("/").pop();
  var CLOSED_KEY = "bcm-rx-bar-closed";
  var closed = null;
  try { closed = localStorage.getItem(CLOSED_KEY); } catch (e) { /* storage blocked: it shows */ }
  if (!SHOWN || stage === "drawn" || here === "win-a-rolex" || closed === stage) return;

  var css = document.createElement("style");
  css.textContent =
    ".rxbar{position:absolute;z-index:40;top:78px;left:50%;transform:translateX(-50%);max-width:calc(100% - 24px);height:32px;padding:0 4px 0 5px;border-radius:999px;display:flex;align-items:center;gap:2px;" +
    "background:var(--glass,rgba(30,30,34,.55));-webkit-backdrop-filter:blur(30px) saturate(190%);backdrop-filter:blur(30px) saturate(190%);" +
    "box-shadow:inset 0 0 0 1px rgba(224,180,76,.45),inset 0 1px 0 var(--glass-hi,rgba(255,255,255,.12)),0 12px 30px -16px rgba(0,0,0,.5);animation:rxbar-in .7s cubic-bezier(.32,.72,0,1) .4s both}" +
    ".rxbar a{min-width:0;height:100%;padding:0 6px 0 2px;display:flex;align-items:center;gap:8px;font-size:13.5px;color:var(--label,#fff);text-decoration:none;white-space:nowrap}" +
    ".rxbar-ic{flex:none;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;color:#2a1f05;background:linear-gradient(160deg,#f6dc8c,#c9962b);box-shadow:inset 0 1px 0 rgba(255,255,255,.5)}" +
    ".rxbar b{font-weight:600}" +
    ".rxbar-more{color:var(--label,#fff)}" +
    ".rxbar-dot{width:3px;height:3px;border-radius:50%;background:var(--label-3,rgba(235,235,245,.32))}" +
    ".rxbar-next{color:var(--label-2,rgba(235,235,245,.62))}" +
    ".rxbar-short{display:none}" +
    ".rxbar-go{color:var(--tint,#a78bfa);font-weight:600}" +
    ".rxbar a:hover .rxbar-go{text-decoration:underline}" +
    ".rxbar button{flex:none;width:26px;height:26px;border:0;border-radius:50%;display:grid;place-items:center;color:var(--label-2,rgba(235,235,245,.62));background:transparent;cursor:pointer;transition:background-color .15s}" +
    ".rxbar button:hover{background:var(--fill-3,rgba(118,118,128,.18))}" +
    "@keyframes rxbar-in{from{opacity:0;transform:translateX(-50%) translateY(-6px)}}" +
    "@media (max-width:640px){.rxbar{top:70px;height:28px}.rxbar a{font-size:12.5px;gap:6px}.rxbar-ic{width:21px;height:21px}.rxbar-more,.rxbar-next{display:none}.rxbar-short{display:inline;color:var(--label-2,rgba(235,235,245,.62))}}" +
    "@media (prefers-reduced-motion: reduce){.rxbar{animation:none}}";
  document.head.appendChild(css);

  var trophy = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>';
  var bar = document.createElement("div");
  bar.className = "rxbar";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Competition");
  bar.innerHTML =
    '<a href="/win-a-rolex"><span class="rxbar-ic">' + trophy + "</span><b>Win a Rolex</b>" +
    '<span class="rxbar-more">worth up to R250,000</span><i class="rxbar-dot" aria-hidden="true"></i>' +
    '<span class="rxbar-next">' + NEXT[stage][0] + '</span><span class="rxbar-short">' + NEXT[stage][1] + "</span>" +
    '<span class="rxbar-go" aria-hidden="true">›</span></a>' +
    '<button type="button" aria-label="Close the competition banner"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>';
  bar.querySelector("button").addEventListener("click", function () {
    bar.remove();
    try { localStorage.setItem(CLOSED_KEY, stage); } catch (e) { /* closed for this visit */ }
  });
  document.body.appendChild(bar);
})();
