const WIDTH = 350;
const HEIGHT = 500;

!(function() {
  var h = { 
    s: "https://dict.laban.vn", 
    w: WIDTH, 
    h: HEIGHT, 
    hl: 1, 
    th: 2
  };
  function loadScript(t, e) {
    var n = document.createElement("script");
    (n.type = "text/javascript"),
      n.readyState
        ? (n.onreadystatechange = function() {
            ("loaded" === n.readyState || "complete" === n.readyState) &&
              ((n.onreadystatechange = null), e());
          })
        : (n.onload = function() {
            e();
          }),
      (n.src = t),
      (q = document.getElementById("lbdict_plugin_frame")),
      q.parentNode.insertBefore(n, q);
  }
  setTimeout(function() {
    loadScript(
      "https://stc-laban.zdn.vn/dictionary/js/plugin/lbdictplugin.frame.min.js",
      function() {
        lbDictPluginFrame.init(h);
      }
    );
  }, 1e3);
})();
