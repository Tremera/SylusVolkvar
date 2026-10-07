(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("toggle");
  var entriesEl = document.getElementById("entries");
  var emptyEl = document.getElementById("empty");
  var searchEl = document.getElementById("search");
  var filterBtns = document.querySelectorAll(".filter");
  var rulesEl = document.getElementById("rules");

  var groupNames = { places: "place", past: "the family", habits: "his things", people: "people" };
  var activeGroup = "all";

  // ---------- Pup / wolf ----------
  function setMode(mode) {
    root.setAttribute("data-mode", mode);
    toggle.setAttribute("aria-pressed", mode === "wolf" ? "true" : "false");
    try { localStorage.setItem("sylus-mode", mode); } catch (e) {}
  }

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-mode") === "pup" ? "wolf" : "pup";
    root.classList.remove("snap");
    void root.offsetWidth; // restart the animation
    root.classList.add("snap");
    setMode(next);
  });

  try {
    var saved = localStorage.getItem("sylus-mode");
    if (saved === "pup" || saved === "wolf") setMode(saved);
  } catch (e) {}

  // ---------- Fridge rules ----------
  RULES.forEach(function (r) {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "rule" + (r.broken ? " is-broken" : "");
    btn.setAttribute("aria-pressed", r.broken ? "true" : "false");

    var text = document.createElement("span");
    text.className = "rule-text";
    text.textContent = r.rule;

    var reply = document.createElement("span");
    reply.className = "reply";
    reply.textContent = r.reply;

    var stamp = document.createElement("span");
    stamp.className = "stamp";
    stamp.setAttribute("aria-hidden", "true");
    stamp.textContent = "Broken";

    btn.appendChild(text);
    btn.appendChild(reply);
    btn.appendChild(stamp);
    btn.addEventListener("click", function () {
      var on = !btn.classList.contains("is-broken");
      btn.classList.toggle("is-broken", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    li.appendChild(btn);
    rulesEl.appendChild(li);
  });

  // ---------- Lore ----------
  function render() {
    var q = searchEl.value.trim().toLowerCase();
    var shown = 0;
    entriesEl.innerHTML = "";

    LORE.forEach(function (e) {
      if (activeGroup !== "all" && e.group !== activeGroup) return;
      if (q && (e.title + " " + e.text).toLowerCase().indexOf(q) === -1) return;
      shown++;

      var art = document.createElement("article");
      art.className = "entry" + (e.secret ? " secret" : "");

      var tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = groupNames[e.group];

      var h3 = document.createElement("h3");
      h3.textContent = e.title;

      var p = document.createElement("p");
      p.className = "entry-text";
      p.textContent = e.text;

      art.appendChild(tag);
      art.appendChild(h3);
      art.appendChild(p);

      if (e.secret) {
        var lock = document.createElement("p");
        lock.className = "lock";
        lock.textContent = "He changed the subject. Threaten his people to read this one.";
        art.appendChild(lock);
      }
      entriesEl.appendChild(art);
    });

    emptyEl.hidden = shown !== 0;
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activeGroup = btn.getAttribute("data-group");
      filterBtns.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      render();
    });
  });

  searchEl.addEventListener("input", render);
  render();
})();
