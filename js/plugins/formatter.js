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
    code = prettier.format(code, {
      parser: "babel",
      plugins: prettierPlugins,
      tabWidth: parseInt(Espruino.Config.TAB_SIZE),
      useTabs: Espruino.Config.INDENTATION_TYPE == "tabs",
      semi: true,
      singleQuote: true
    });
    Espruino.Core.EditorJavaScript.setCode(code);
  }
  Espruino.Plugins.FormatCode = {
    init: init,
  };
}());
