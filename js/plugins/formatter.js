"use strict";
(function () {
  var iconFolder;
  function init() {
    showIcon();
  }
  function showIcon() {
    iconFolder = Espruino.Core.App.addIcon({
      id: 'formatCode', icon: 'snippets', title: 'Format Code', order: 510,
      area: { name: "code", position: "top" },
      click: formatCode
    });
  }
  function formatCode() {
    var code = Espruino.Core.EditorJavaScript.getCode();
    code = js_beautify(code, {
      indent_size: Espruino.Config.TAB_SIZE,
      indent_with_tabs: Espruino.Config.INDENTATION_TYPE == "tabs"
    });
    Espruino.Core.EditorJavaScript.setCode(code);
  }
  Espruino.Plugins.FormatCode = {
    init: init,
  };
}());
