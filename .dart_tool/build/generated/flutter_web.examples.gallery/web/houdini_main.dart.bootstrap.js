/* ENTRYPOINT_EXTENTION_MARKER */
(function() {
var _currentDirectory = (function () {
  var _url;
  var lines = new Error().stack.split('\n');
  function lookupUrl() {
    if (lines.length > 2) {
      var match = lines[1].match(/^\s+at (.+):\d+:\d+$/);
      // Chrome.
      if (match) return match[1];
      // Chrome nested eval case.
      match = lines[1].match(/^\s+at eval [(](.+):\d+:\d+[)]$/);
      if (match) return match[1];
      // Edge.
      match = lines[1].match(/^\s+at.+\((.+):\d+:\d+\)$/);
      if (match) return match[1];
      // Firefox.
      match = lines[0].match(/[<][@](.+):\d+:\d+$/)
      if (match) return match[1];
    }
    // Safari.
    return lines[0].match(/(.+):\d+:\d+$/)[1];
  }
  _url = lookupUrl();
  var lastSlash = _url.lastIndexOf('/');
  if (lastSlash == -1) return _url;
  var currentDirectory = _url.substring(0, lastSlash + 1);
  return currentDirectory;
})();

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

let modulePaths = {
 "dart_sdk": "packages/build_web_compilers/src/dev_compiler/dart_sdk",
 "packages/collection/collection": "packages/collection/collection.ddc",
 "packages/collection/src/algorithms": "packages/collection/src/algorithms.ddc",
 "packages/collection/src/canonicalized_map": "packages/collection/src/canonicalized_map.ddc",
 "packages/collection/src/comparators": "packages/collection/src/comparators.ddc",
 "packages/collection/src/iterable_zip": "packages/collection/src/iterable_zip.ddc",
 "packages/collection/src/priority_queue": "packages/collection/src/priority_queue.ddc",
 "packages/collection/src/utils": "packages/collection/src/utils.ddc",
 "packages/flutter_web.examples.gallery/demo/all": "packages/flutter_web.examples.gallery/demo/all.ddc",
 "packages/flutter_web.examples.gallery/demo/animation/home": "packages/flutter_web.examples.gallery/demo/animation/home.ddc",
 "packages/flutter_web.examples.gallery/demo/animation/sections": "packages/flutter_web.examples.gallery/demo/animation/sections.ddc",
 "packages/flutter_web.examples.gallery/demo/animation/widgets": "packages/flutter_web.examples.gallery/demo/animation/widgets.ddc",
 "packages/flutter_web.examples.gallery/demo/animation_demo": "packages/flutter_web.examples.gallery/demo/animation_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/colors_demo": "packages/flutter_web.examples.gallery/demo/colors_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/contacts_demo": "packages/flutter_web.examples.gallery/demo/contacts_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/backdrop_demo": "packages/flutter_web.examples.gallery/demo/material/backdrop_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo": "packages/flutter_web.examples.gallery/demo/material/bottom_app_bar_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo": "packages/flutter_web.examples.gallery/demo/material/bottom_navigation_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/cards_demo": "packages/flutter_web.examples.gallery/demo/material/cards_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/chip_demo": "packages/flutter_web.examples.gallery/demo/material/chip_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/data_table_demo": "packages/flutter_web.examples.gallery/demo/material/data_table_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo": "packages/flutter_web.examples.gallery/demo/material/date_and_time_picker_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/dialog_demo": "packages/flutter_web.examples.gallery/demo/material/dialog_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/drawer_demo": "packages/flutter_web.examples.gallery/demo/material/drawer_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/editable_text_demo": "packages/flutter_web.examples.gallery/demo/material/editable_text_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/elevation_demo": "packages/flutter_web.examples.gallery/demo/material/elevation_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo": "packages/flutter_web.examples.gallery/demo/material/expansion_panels_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo": "packages/flutter_web.examples.gallery/demo/material/full_screen_dialog_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/grid_list_demo": "packages/flutter_web.examples.gallery/demo/material/grid_list_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/icons_demo": "packages/flutter_web.examples.gallery/demo/material/icons_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/leave_behind_demo": "packages/flutter_web.examples.gallery/demo/material/leave_behind_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/list_demo": "packages/flutter_web.examples.gallery/demo/material/list_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/material": "packages/flutter_web.examples.gallery/demo/material/material.ddc",
 "packages/flutter_web.examples.gallery/demo/material/material_button_demo": "packages/flutter_web.examples.gallery/demo/material/material_button_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/menu_demo": "packages/flutter_web.examples.gallery/demo/material/menu_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo": "packages/flutter_web.examples.gallery/demo/material/modal_bottom_sheet_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/overscroll_demo": "packages/flutter_web.examples.gallery/demo/material/overscroll_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/page_selector_demo": "packages/flutter_web.examples.gallery/demo/material/page_selector_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo": "packages/flutter_web.examples.gallery/demo/material/persistent_bottom_sheet_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo": "packages/flutter_web.examples.gallery/demo/material/progress_indicator_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo": "packages/flutter_web.examples.gallery/demo/material/reorderable_list_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo": "packages/flutter_web.examples.gallery/demo/material/scrollable_tabs_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/search_demo": "packages/flutter_web.examples.gallery/demo/material/search_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/selection_controls_demo": "packages/flutter_web.examples.gallery/demo/material/selection_controls_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/slider_demo": "packages/flutter_web.examples.gallery/demo/material/slider_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/snack_bar_demo": "packages/flutter_web.examples.gallery/demo/material/snack_bar_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/tabs_demo": "packages/flutter_web.examples.gallery/demo/material/tabs_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo": "packages/flutter_web.examples.gallery/demo/material/tabs_fab_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/text_demo": "packages/flutter_web.examples.gallery/demo/material/text_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/text_form_field_demo": "packages/flutter_web.examples.gallery/demo/material/text_form_field_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/tooltip_demo": "packages/flutter_web.examples.gallery/demo/material/tooltip_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/material/two_level_list_demo": "packages/flutter_web.examples.gallery/demo/material/two_level_list_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/pesto_demo": "packages/flutter_web.examples.gallery/demo/pesto_demo.ddc",
 "packages/flutter_web.examples.gallery/demo/shrine/shrine_data": "packages/flutter_web.examples.gallery/demo/shrine/shrine_data.ddc",
 "packages/flutter_web.examples.gallery/demo/shrine/shrine_home": "packages/flutter_web.examples.gallery/demo/shrine/shrine_home.ddc",
 "packages/flutter_web.examples.gallery/demo/shrine/shrine_page": "packages/flutter_web.examples.gallery/demo/shrine/shrine_page.ddc",
 "packages/flutter_web.examples.gallery/demo/shrine/shrine_theme": "packages/flutter_web.examples.gallery/demo/shrine/shrine_theme.ddc",
 "packages/flutter_web.examples.gallery/demo/shrine/shrine_types": "packages/flutter_web.examples.gallery/demo/shrine/shrine_types.ddc",
 "packages/flutter_web.examples.gallery/demo/typography_demo": "packages/flutter_web.examples.gallery/demo/typography_demo.ddc",
 "packages/flutter_web.examples.gallery/gallery/about": "packages/flutter_web.examples.gallery/gallery/about.ddc",
 "packages/flutter_web.examples.gallery/gallery/app": "packages/flutter_web.examples.gallery/gallery/app.ddc",
 "packages/flutter_web.examples.gallery/gallery/backdrop": "packages/flutter_web.examples.gallery/gallery/backdrop.ddc",
 "packages/flutter_web.examples.gallery/gallery/demo": "packages/flutter_web.examples.gallery/gallery/demo.ddc",
 "packages/flutter_web.examples.gallery/gallery/demos": "packages/flutter_web.examples.gallery/gallery/demos.ddc",
 "packages/flutter_web.examples.gallery/gallery/home": "packages/flutter_web.examples.gallery/gallery/home.ddc",
 "packages/flutter_web.examples.gallery/gallery/icons": "packages/flutter_web.examples.gallery/gallery/icons.ddc",
 "packages/flutter_web.examples.gallery/gallery/options": "packages/flutter_web.examples.gallery/gallery/options.ddc",
 "packages/flutter_web.examples.gallery/gallery/scales": "packages/flutter_web.examples.gallery/gallery/scales.ddc",
 "packages/flutter_web.examples.gallery/gallery/themes": "packages/flutter_web.examples.gallery/gallery/themes.ddc",
 "packages/flutter_web.examples.gallery/main": "packages/flutter_web.examples.gallery/main.ddc",
 "packages/flutter_web.examples.gallery/main_houdini": "packages/flutter_web.examples.gallery/main_houdini.ddc",
 "packages/flutter_web/animation": "packages/flutter_web/animation.ddc",
 "packages/flutter_web/cupertino": "packages/flutter_web/cupertino.ddc",
 "packages/flutter_web/foundation": "packages/flutter_web/foundation.ddc",
 "packages/flutter_web/io": "packages/flutter_web/io.ddc",
 "packages/flutter_web/material": "packages/flutter_web/material.ddc",
 "packages/flutter_web/physics": "packages/flutter_web/physics.ddc",
 "packages/flutter_web/src/animation/animation": "packages/flutter_web/src/animation/animation.ddc",
 "packages/flutter_web/src/cupertino/action_sheet": "packages/flutter_web/src/cupertino/action_sheet.ddc",
 "packages/flutter_web/src/foundation/assertions": "packages/flutter_web/src/foundation/assertions.ddc",
 "packages/flutter_web/src/physics/clamped_simulation": "packages/flutter_web/src/physics/clamped_simulation.ddc",
 "packages/flutter_web_ui/ui": "packages/flutter_web_ui/ui.ddc",
 "packages/intl/date_symbols": "packages/intl/date_symbols.ddc",
 "packages/intl/intl": "packages/intl/intl.ddc",
 "packages/intl/number_symbols": "packages/intl/number_symbols.ddc",
 "packages/intl/number_symbols_data": "packages/intl/number_symbols_data.ddc",
 "packages/intl/src/plural_rules": "packages/intl/src/plural_rules.ddc",
 "packages/meta/meta": "packages/meta/meta.ddc",
 "packages/typed_data/typed_buffers": "packages/typed_data/typed_buffers.ddc",
 "packages/vector_math/hash": "packages/vector_math/hash.ddc",
 "packages/vector_math/vector_math_64": "packages/vector_math/vector_math_64.ddc",
 "web/houdini_main": "houdini_main.ddc"
};
if(!window.$dartLoader) {
   window.$dartLoader = {
     appDigests: _currentDirectory + 'houdini_main.digests',
     moduleIdToUrl: new Map(),
     urlToModuleId: new Map(),
     rootDirectories: new Array(),
     // Used in package:build_runner/src/server/build_updates_client/hot_reload_client.dart
     moduleParentsGraph: new Map(),
     moduleLoadingErrorCallbacks: new Map(),
     forceLoadModule: function (moduleName, callback, onError) {
       // dartdevc only strips the final extension when adding modules to source
       // maps, so we need to do the same.
       if (moduleName.endsWith('.ddc')) {
         moduleName = moduleName.substring(0, moduleName.length - 4);
       }
       if (typeof onError != 'undefined') {
         var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks;
         if (!errorCallbacks.has(moduleName)) {
           errorCallbacks.set(moduleName, new Set());
         }
         errorCallbacks.get(moduleName).add(onError);
       }
       requirejs.undef(moduleName);
       requirejs([moduleName], function() {
         if (typeof onError != 'undefined') {
           errorCallbacks.get(moduleName).delete(onError);
         }
         if (typeof callback != 'undefined') {
           callback();
         }
       });
     },
     getModuleLibraries: null, // set up by _initializeTools
   };
}
let customModulePaths = {};
window.$dartLoader.rootDirectories.push(window.location.origin + baseUrl);
for (let moduleName of Object.getOwnPropertyNames(modulePaths)) {
  let modulePath = modulePaths[moduleName];
  if (modulePath != moduleName) {
    customModulePaths[moduleName] = modulePath;
  }
  var src = window.location.origin + '/' + modulePath + '.js';
  if (window.$dartLoader.moduleIdToUrl.has(moduleName)) {
    continue;
  }
  $dartLoader.moduleIdToUrl.set(moduleName, src);
  $dartLoader.urlToModuleId.set(src, moduleName);
}
// Whenever we fail to load a JS module, try to request the corresponding
// `.errors` file, and log it to the console.
(function() {
  var oldOnError = requirejs.onError;
  requirejs.onError = function(e) {
    if (e.requireModules) {
      if (e.message) {
        // If error occurred on loading dependencies, we need to invalidate ancessor too.
        var ancesor = e.message.match(/needed by: (.*)/);
        if (ancesor) {
          e.requireModules.push(ancesor[1]);
        }
      }
      for (const module of e.requireModules) {
        var errorCallbacks = $dartLoader.moduleLoadingErrorCallbacks.get(module);
        if (errorCallbacks) {
          for (const callback of errorCallbacks) callback(e);
          errorCallbacks.clear();
        }
      }
    }
    if (e.originalError && e.originalError.srcElement) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
          var message;
          if (this.status == 200) {
            message = this.responseText;
          } else {
            message = "Unknown error loading " + e.originalError.srcElement.src;
          }
          console.error(message);
          var errorEvent = new CustomEvent(
            'dartLoadException', { detail: message });
          window.dispatchEvent(errorEvent);
        }
      };
      xhr.open("GET", e.originalError.srcElement.src + ".errors", true);
      xhr.send();
    }
    // Also handle errors the normal way.
    if (oldOnError) oldOnError(e);
  };
}());

var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());
;

require.config({
    baseUrl: baseUrl,
    waitSeconds: 0,
    paths: customModulePaths
});

const modulesGraph = new Map();
function getRegisteredModuleName(moduleMap) {
  if ($dartLoader.moduleIdToUrl.has(moduleMap.name + '.ddc')) {
    return moduleMap.name + '.ddc';
  }
  return moduleMap.name;
}
requirejs.onResourceLoad = function (context, map, depArray) {
  const name = getRegisteredModuleName(map);
  const depNameArray = depArray.map(getRegisteredModuleName);
  if (modulesGraph.has(name)) {
    // TODO Move this logic to better place
    var previousDeps = modulesGraph.get(name);
    var changed = previousDeps.length != depNameArray.length;
    changed = changed || depNameArray.some(function(depName) {
      return !previousDeps.includes(depName);
    });
    if (changed) {
      console.warn("Dependencies graph change for module '" + name + "' detected. " +
        "Dependencies was [" + previousDeps + "], now [" +  depNameArray.map((depName) => depName) +"]. " +
        "Page can't be hot-reloaded, firing full page reload.");
      window.location.reload();
    }
  } else {
    modulesGraph.set(name, []);
    for (const depName of depNameArray) {
      if (!$dartLoader.moduleParentsGraph.has(depName)) {
        $dartLoader.moduleParentsGraph.set(depName, []);
      }
      $dartLoader.moduleParentsGraph.get(depName).push(name);
      modulesGraph.get(name).push(depName);
    }
  }
};
define("houdini_main.dart.bootstrap", ["web/houdini_main", "dart_sdk"], function(app, dart_sdk) {
  dart_sdk.dart.setStartAsyncSynchronously(true);
  dart_sdk._isolate_helper.startRootIsolate(() => {}, []);
  var baseUrl = (function () {
  // Attempt to detect --precompiled mode for tests, and set the base url
  // appropriately, otherwise set it to '/'.
  var pathParts = location.pathname.split("/");
  if (pathParts[0] == "") {
    pathParts.shift();
  }
  if (pathParts.length > 1 && pathParts[1] == "test") {
    return "/" + pathParts.slice(0, 2).join("/") + "/";
  }
  // Attempt to detect base url using <base href> html tag
  // base href should start and end with "/"
  if (typeof document !== 'undefined') {
    var el = document.getElementsByTagName('base');
    if (el && el[0] && el[0].getAttribute("href") && el[0].getAttribute
    ("href").startsWith("/") && el[0].getAttribute("href").endsWith("/")){
      return el[0].getAttribute("href");
    }
  }
  // return default value
  return "/";
}());

  dart_sdk._debugger.registerDevtoolsFormatter();
  $dartLoader.getModuleLibraries = dart_sdk.dart.getModuleLibraries;
  if (window.$dartStackTraceUtility && !window.$dartStackTraceUtility.ready) {
    window.$dartStackTraceUtility.ready = true;
    let dart = dart_sdk.dart;
    window.$dartStackTraceUtility.setSourceMapProvider(
      function(url) {
        url = url.replace(baseUrl, '/');
        var module = window.$dartLoader.urlToModuleId.get(url);
        if (!module) return null;
        return dart.getSourceMap(module);
      });
  }
  if (typeof document != 'undefined') {
    window.postMessage({ type: "DDC_STATE_CHANGE", state: "start" }, "*");
  }

  /* MAIN_EXTENSION_MARKER */
  (app.web__houdini_main || app.houdini_main).main();
  var bootstrap = {
      hot$onChildUpdate: function(childName, child) {
        // Special handling for the multi-root scheme uris. We need to strip
        // out the scheme and the top level directory, to match the source path
        // that chrome sees.
        if (childName.startsWith('org-dartlang-app:///')) {
          childName = childName.substring('org-dartlang-app:///'.length);
          var firstSlash = childName.indexOf('/');
          if (firstSlash == -1) return false;
          childName = childName.substring(firstSlash + 1);
        }
        if (childName === "houdini_main.dart") {
          // Clear static caches.
          dart_sdk.dart.hotRestart();
          child.main();
          return true;
        }
      }
    }
  dart_sdk.dart.trackLibraries("houdini_main.dart.bootstrap", {
    "houdini_main.dart.bootstrap": bootstrap
  }, '');
  return {
    bootstrap: bootstrap
  };
});
})();
