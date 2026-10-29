/* Black Crown Markets, Design D: what the site's pages share with the home page. The bar (its About menu, and the
   phone's menu as a sheet), light and dark, things rising into view, and the legal pages' contents list. The partners
   page's form has its own script (partners.html), and Win a Rolex its own (competition.js). */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement;

  var ICONS = {
    chev: '<path d="m6 9 6 6 6-6"/>', chevR: '<path d="m9 18 6-6-6-6"/>', x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    arrowR: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', check: '<path d="M20 6 9 17l-5-5"/>',
    menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13h4"/><path d="M10 17h4"/>',
    life: '<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    pin: '<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    star: '<path d="M11.52 2.3a.53.53 0 0 1 .95 0l2.31 4.68a2.12 2.12 0 0 0 1.6 1.16l5.16.76a.53.53 0 0 1 .3.9l-3.74 3.64a2.12 2.12 0 0 0-.61 1.88l.88 5.14a.53.53 0 0 1-.77.56l-4.62-2.43a2.12 2.12 0 0 0-1.97 0L6.4 21.01a.53.53 0 0 1-.77-.56l.88-5.14a2.12 2.12 0 0 0-.61-1.88L2.16 9.8a.53.53 0 0 1 .29-.9l5.16-.76a2.12 2.12 0 0 0 1.6-1.16z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    chart: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 16v-3"/><path d="M12 16V8"/><path d="M17 16v-6"/>',
  };
  function icon(n, s, sw) {
    return '<svg class="ic" width="' + (s || 18) + '" height="' + (s || 18) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 1.9) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + "</svg>";
  }
  var CROWN_D = "M921 1168 c-68 -150 -125 -274 -126 -276 -2 -2 -125 78 -275 178 -150 100 -274 180 -276 177 -6 -6 368 -1017 377 -1017 3 0 55 107 114 238 59 130 108 239 110 240 2 2 46 -26 98 -62 52 -36 98 -66 101 -66 4 0 50 29 103 65 54 35 100 61 104 57 3 -4 55 -114 114 -245 59 -131 109 -236 111 -234 2 2 87 232 189 512 103 280 189 513 192 518 8 14 14 17 -290 -186 -148 -98 -270 -177 -271 -175 -1 2 -53 116 -115 253 -63 138 -119 260 -125 273 -11 21 -23 -2 -135 -250z m202 -180 c37 -80 68 -151 69 -157 2 -6 -31 -33 -72 -60 -84 -57 -62 -58 -172 13 -26 17 -48 35 -48 40 0 19 144 326 151 319 3 -5 36 -74 72 -155z m-489 -133 c58 -38 106 -73 106 -77 0 -14 -103 -238 -109 -238 -4 0 -40 91 -81 202 -41 110 -77 206 -79 212 -4 11 3 6 163 -99z m945 -7 c-23 -62 -58 -160 -79 -218 l-38 -105 -31 70 c-73 161 -84 186 -80 189 8 6 264 176 266 176 1 0 -16 -51 -38 -112z";
  function crown(w) {
    return '<svg width="' + w + '" height="' + Math.round(w * 0.755) + '" viewBox="22 21 167 126" aria-hidden="true"><path transform="translate(0,167) scale(0.1,-0.1)" d="' + CROWN_D + '" fill="currentColor"/></svg>';
  }
  function paint(r) {
    $$("[data-icon]", r).forEach(function (el) {
      if (!el.querySelector(".ic")) el.insertAdjacentHTML("afterbegin", icon(el.dataset.icon, Number(el.dataset.size) || 18));
    });
    $$("[data-crown]", r).forEach(function (el) { if (!el.firstElementChild) el.innerHTML = crown(Number(el.dataset.crown)); });
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* ---------- light and dark: the system's, unless chosen ---------- */
  function isDark() { return root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; }
  function themeIcon() {
    var b = $("#themeBtn");
    if (!b) return;
    b.innerHTML = icon(isDark() ? "sun" : "moon", 18);
    b.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
  }
  function toggleTheme() {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("bcm-theme", root.dataset.theme); } catch (e) { /* private window: the choice lasts this visit */ }
    themeIcon();
  }
  var themeBtn = $("#themeBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  /* ---------- a sheet over the page ---------- */
  function sheet(title, html) {
    var back = document.createElement("div");
    back.className = "sheet-back";
    back.innerHTML = '<div class="sheet" role="dialog" aria-modal="true" aria-label="' + esc(title) + '"><div class="sheet-h"><b>' + esc(title) + '</b><button class="sheet-x" type="button" aria-label="Close" data-close>' + icon("x", 15) + "</button></div>" + html + "</div>";
    var before = document.activeElement;
    function close() {
      back.remove();
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (before && before.focus) before.focus();
    }
    function onKey(e) { if (e.key === "Escape") close(); }
    back.addEventListener("click", function (e) {
      if (e.target === back || e.target.closest("[data-close]") || e.target.closest("a[href]")) close();
      if (e.target.closest("[data-theme-toggle]")) { toggleTheme(); close(); }
    });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(back);
    document.body.style.overflow = "hidden";
    back.querySelector(".sheet-x").focus();
  }

  /* ---------- the bar ---------- */
  var nav = $("#nav");
  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", scrollY > 24); }
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  var here = location.pathname.replace(/\.html$/, "").replace(/\/$/, "").split("/").pop();
  var ABOUT = [
    ["about-us", "user", "Who we are", "The people behind Black Crown"],
    ["regulatory-information", "scale", "Regulatory information", "Licences and how we are regulated"],
    ["terms-and-conditions", "file", "Terms and conditions", "The agreements that apply"],
  ];
  var aboutBtn = $("#aboutBtn"), aboutMenu = null;
  if (aboutBtn && ABOUT.some(function (a) { return a[0] === here; })) aboutBtn.classList.add("is-current");
  function closeAbout() { if (aboutMenu) aboutMenu.remove(); aboutMenu = null; if (aboutBtn) aboutBtn.setAttribute("aria-expanded", "false"); }
  if (aboutBtn) {
    aboutBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (aboutMenu) return closeAbout();
      aboutMenu = document.createElement("div");
      aboutMenu.className = "menu";
      aboutMenu.innerHTML = ABOUT.map(function (a) {
        return '<a href="' + a[0] + '"' + (a[0] === here ? ' aria-current="page"' : "") + '><span class="mi">' + icon(a[1], 18) + "</span><span><b>" + a[2] + "</b><small>" + a[3] + "</small></span></a>";
      }).join("") + '<p class="note"><b>Why choose us</b><br>We take pride in our client-first approach, ensuring that their interests are always our top priority.</p>';
      aboutBtn.parentElement.appendChild(aboutMenu);
      aboutBtn.setAttribute("aria-expanded", "true");
    });
    document.addEventListener("click", function (e) { if (aboutMenu && !aboutMenu.contains(e.target)) closeAbout(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAbout(); });
  }
  var menuBtn = $("#menuBtn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var rows = [["account-types", "layers", "Accounts"]].concat(ABOUT.map(function (a) { return [a[0], a[1], a[2]]; }), [["partners", "users", "Become a partner"], ["contact-us", "life", "Get support"]]);
      sheet("Menu", '<div class="group">' + rows.map(function (r) {
        return '<a class="row" href="' + r[0] + '"' + (r[0] === here ? ' aria-current="page"' : "") + ">" + icon(r[1], 20) + "<span>" + r[2] + "</span>" + icon("chevR", 16) + "</a>";
      }).join("") + '<button class="row" type="button" data-theme-toggle>' + icon(isDark() ? "sun" : "moon", 20) + "<span>" + (isDark() ? "Light mode" : "Dark mode") + "</span></button></div>" +
        '<div class="acts"><a class="btn btn-gray" href="https://register.blackcrownmarkets.com/login">Log in</a><a class="btn btn-tint" href="https://register.blackcrownmarkets.com/register">Open account</a></div>');
    });
  }

  /* ---------- things that rise as they come into view ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- the legal pages' contents: the section in view is marked ---------- */
  var tcLinks = $$("#tc-nav a");
  if (tcLinks.length) {
    var targets = tcLinks.map(function (a) { return document.querySelector(a.getAttribute("href")); });
    var setActive = function () {
      var y = scrollY + 140, active = 0;
      targets.forEach(function (sec, i) { if (sec && sec.getBoundingClientRect().top + scrollY <= y) active = i; });
      tcLinks.forEach(function (a, i) { a.classList.toggle("is-active", i === active); });
    };
    tcLinks.forEach(function (a) {
      a.addEventListener("click", function (e) {
        var target = document.querySelector(a.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        scrollTo({ top: target.getBoundingClientRect().top + scrollY - 96, behavior: "smooth" });
        history.replaceState(null, "", a.getAttribute("href"));
      });
    });
    addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  /* ---------- the Partner Agreement's live version, where a page names it ([data-ag]: "version", "since" or "line") ----------
     Read from the client portal's server, which has the PDFs a developer uploads; until it answers, or if it can't, the
     page's own words stay ("The newest version"). */
  var agEls = $$("[data-ag]");
  if (agEls.length && window.fetch) {
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    fetch("https://register.blackcrownmarkets.com/api/partner/agreement?info=1")
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        var a = d && d.agreement;
        if (!a) return;
        var t = new Date(a.at);
        var since = isNaN(t) ? "" : "live since " + t.getUTCDate() + " " + MONTHS[t.getUTCMonth()] + " " + t.getUTCFullYear();
        agEls.forEach(function (el) {
          var kind = el.getAttribute("data-ag");
          el.textContent = kind === "version" ? "Version " + a.version : kind === "since" ? since : "Version " + a.version + (since ? ", " + since : "");
        });
      })
      .catch(function () { /* the page's own words stay */ });
  }

  paint();
  themeIcon();
})();
