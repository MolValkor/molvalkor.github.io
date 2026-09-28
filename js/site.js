/* ── Site name: change it here and nowhere else. ─────────────────────── */
var SITE_NAME = "MolValkor Forge";

(function () {
  document.querySelectorAll("[data-site-name]").forEach(function (el) {
    el.textContent = SITE_NAME;
  });
  if (document.title.indexOf(SITE_NAME) === -1) document.title = SITE_NAME + " · " + document.title;
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = "2026";
})();
