define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web.examples.gallery/demo/animation/sections', 'packages/vector_math/vector_math_64', 'packages/flutter_web/material'], function(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__flutter_web$46examples$46gallery__demo__animation__sections, packages__vector_math__vector_math_64, packages__flutter_web__material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const image = packages__flutter_web__animation.src__widgets__image;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const text = packages__flutter_web__animation.src__widgets__text;
  const decoration_image = packages__flutter_web__animation.src__painting__decoration_image;
  const image_resolution = packages__flutter_web__animation.src__painting__image_resolution;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const safe_area = packages__flutter_web__animation.src__widgets__safe_area;
  const gradient = packages__flutter_web__src__animation__animation.src__painting__gradient;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const ui = packages__flutter_web_ui__ui.ui;
  const sections = packages__flutter_web$46examples$46gallery__demo__animation__sections.demo__animation__sections;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const colors = packages__flutter_web__material.src__material__colors;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const widgets = Object.create(dart.library);
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 335544319
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 21,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "package",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colorBlendMode",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 13,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "button",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 44,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 17,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: ui.TextBaseline.prototype,
        [_name]: "TextBaseline.alphabetic",
        index: 0
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 4
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: C49 || CT.C49,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C50 || CT.C50,
        [TextStyle_fontSize]: 24,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: "Raleway",
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C51 || CT.C51,
        [TextStyle_inherit]: false
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 419430400
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 11,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 40,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 54,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 9,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart"
      });
    }
  });
  const Color__value = dart.privateName(ui, "Color._value");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C2;
  let C1;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  const section$ = dart.privateName(widgets, "SectionCard.section");
  widgets.SectionCard = class SectionCard extends framework.StatelessWidget {
    get section() {
      return this[section$];
    }
    set section(value) {
      super.section = value;
    }
    build(context) {
      return new basic.Semantics.new({label: this.section.title, button: true, child: new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({gradient: new gradient.LinearGradient.new({begin: alignment.Alignment.centerLeft, end: alignment.Alignment.centerRight, colors: JSArrayOfColor().of([this.section.leftColor, this.section.rightColor])})}), child: new basic.Opacity.new({opacity: 0.075, child: new image.Image.asset(this.section.backgroundAsset, {package: this.section.backgroundAssetPackage, color: C0 || CT.C0, colorBlendMode: ui.BlendMode.modulate, fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
  };
  (widgets.SectionCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let section = opts && 'section' in opts ? opts.section : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[section$] = section;
    if (!(section != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart", 14, 16, "section != null");
    widgets.SectionCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widgets.SectionCard.prototype;
  dart.addTypeTests(widgets.SectionCard);
  dart.setMethodSignature(widgets.SectionCard, () => ({
    __proto__: dart.getMethods(widgets.SectionCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(widgets.SectionCard, "package:flutter_web.examples.gallery/demo/animation/widgets.dart");
  dart.setFieldSignature(widgets.SectionCard, () => ({
    __proto__: dart.getFields(widgets.SectionCard.__proto__),
    section: dart.finalFieldType(sections.Section)
  }));
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C34;
  let C33;
  let C38;
  let C39;
  let C40;
  let C37;
  let C36;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C46;
  let C45;
  const section$0 = dart.privateName(widgets, "SectionTitle.section");
  const scale$ = dart.privateName(widgets, "SectionTitle.scale");
  const opacity$ = dart.privateName(widgets, "SectionTitle.opacity");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const _name = dart.privateName(ui, "_name");
  let C49;
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C50;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  let C51;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C48;
  let C52;
  widgets.SectionTitle = class SectionTitle extends framework.StatelessWidget {
    get section() {
      return this[section$0];
    }
    set section(value) {
      super.section = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    build(context) {
      let t0;
      return new basic.IgnorePointer.new({child: new basic.Opacity.new({opacity: this.opacity, child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.scale(this.scale), t0), alignment: alignment.Alignment.center, child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Positioned.new({top: 4.0, child: new text.Text.new(this.section.title, {style: widgets.SectionTitle.sectionTitleShadowStyle, $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new text.Text.new(this.section.title, {style: widgets.SectionTitle.sectionTitleStyle, $creationLocationd_0dea112b090073317d4: C29 || CT.C29})]), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45});
    }
  };
  (widgets.SectionTitle.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let section = opts && 'section' in opts ? opts.section : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[section$0] = section;
    this[scale$] = scale;
    this[opacity$] = opacity;
    if (!(section != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart", 60, 16, "section != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart", 61, 16, "scale != null");
    if (!(opacity != null && dart.notNull(opacity) >= 0.0 && dart.notNull(opacity) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart", 62, 16, "opacity != null && opacity >= 0.0 && opacity <= 1.0");
    widgets.SectionTitle.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widgets.SectionTitle.prototype;
  dart.addTypeTests(widgets.SectionTitle);
  dart.setMethodSignature(widgets.SectionTitle, () => ({
    __proto__: dart.getMethods(widgets.SectionTitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(widgets.SectionTitle, "package:flutter_web.examples.gallery/demo/animation/widgets.dart");
  dart.setFieldSignature(widgets.SectionTitle, () => ({
    __proto__: dart.getFields(widgets.SectionTitle.__proto__),
    section: dart.finalFieldType(sections.Section),
    scale: dart.finalFieldType(core.double),
    opacity: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(widgets.SectionTitle, {
    /*widgets.SectionTitle.sectionTitleStyle*/get sectionTitleStyle() {
      return C48 || CT.C48;
    },
    /*widgets.SectionTitle.sectionTitleShadowStyle*/get sectionTitleShadowStyle() {
      return widgets.SectionTitle.sectionTitleStyle.copyWith({color: C52 || CT.C52});
    }
  });
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C59;
  let C58;
  const opacity$0 = dart.privateName(widgets, "SectionIndicator.opacity");
  widgets.SectionIndicator = class SectionIndicator extends framework.StatelessWidget {
    get opacity() {
      return this[opacity$0];
    }
    set opacity(value) {
      super.opacity = value;
    }
    build(context) {
      return new basic.IgnorePointer.new({child: new container.Container.new({width: 32, height: 3.0, color: colors.Colors.white.withOpacity(this.opacity), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
  };
  (widgets.SectionIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : 1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[opacity$0] = opacity;
    widgets.SectionIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widgets.SectionIndicator.prototype;
  dart.addTypeTests(widgets.SectionIndicator);
  dart.setMethodSignature(widgets.SectionIndicator, () => ({
    __proto__: dart.getMethods(widgets.SectionIndicator.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(widgets.SectionIndicator, "package:flutter_web.examples.gallery/demo/animation/widgets.dart");
  dart.setFieldSignature(widgets.SectionIndicator, () => ({
    __proto__: dart.getFields(widgets.SectionIndicator.__proto__),
    opacity: dart.finalFieldType(core.double)
  }));
  let C63;
  let C62;
  let C61;
  const EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  const EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  const EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  const EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  let C64;
  let C67;
  let C68;
  let C69;
  let C66;
  let C65;
  let C72;
  let C73;
  let C74;
  let C71;
  let C70;
  let C77;
  let C76;
  let C75;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
  let C88;
  let C89;
  let C90;
  let C87;
  let C86;
  let C93;
  let C94;
  let C92;
  let C91;
  const detail$ = dart.privateName(widgets, "SectionDetailView.detail");
  widgets.SectionDetailView = class SectionDetailView extends framework.StatelessWidget {
    get detail() {
      return this[detail$];
    }
    set detail(value) {
      super.detail = value;
    }
    build(context) {
      let image = new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.circular(6.0), image: new decoration_image.DecorationImage.new({image: new image_resolution.AssetImage.new(this.detail.imageAsset, {package: this.detail.imageAssetPackage}), fit: box_fit.BoxFit.cover, alignment: alignment.Alignment.center})}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61});
      let item = null;
      if (this.detail.title == null && this.detail.subtitle == null) {
        item = new container.Container.new({height: 240.0, padding: C64 || CT.C64, child: new safe_area.SafeArea.new({top: false, bottom: false, child: image, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70});
      } else {
        item = new list_tile.ListTile.new({title: new text.Text.new(this.detail.title, {$creationLocationd_0dea112b090073317d4: C75 || CT.C75}), subtitle: new text.Text.new(this.detail.subtitle, {$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), leading: new basic.SizedBox.new({width: 32.0, height: 32.0, child: image, $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86});
      }
      return new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.grey.shade200}), child: item, $creationLocationd_0dea112b090073317d4: C91 || CT.C91});
    }
  };
  (widgets.SectionDetailView.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let detail = opts && 'detail' in opts ? opts.detail : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[detail$] = detail;
    if (!(detail != null && detail.imageAsset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart", 126, 16, "detail != null && detail.imageAsset != null");
    if (!((t0 = detail.imageAsset, t0 == null ? detail.title : t0) != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web.examples.gallery/demo/animation/widgets.dart", 127, 16, "(detail.imageAsset ?? detail.title) != null");
    widgets.SectionDetailView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widgets.SectionDetailView.prototype;
  dart.addTypeTests(widgets.SectionDetailView);
  dart.setMethodSignature(widgets.SectionDetailView, () => ({
    __proto__: dart.getMethods(widgets.SectionDetailView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(widgets.SectionDetailView, "package:flutter_web.examples.gallery/demo/animation/widgets.dart");
  dart.setFieldSignature(widgets.SectionDetailView, () => ({
    __proto__: dart.getFields(widgets.SectionDetailView.__proto__),
    detail: dart.finalFieldType(sections.SectionDetail)
  }));
  dart.defineLazy(widgets, {
    /*widgets.kSectionIndicatorWidth*/get kSectionIndicatorWidth() {
      return 32;
    }
  });
  dart.trackLibraries("packages/flutter_web.examples.gallery/demo/animation/widgets", {
    "package:flutter_web.examples.gallery/demo/animation/widgets.dart": widgets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["widgets.dart"],"names":[],"mappings":"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","file":"widgets.ddc.js"}');
  // Exports:
  return {
    demo__animation__widgets: widgets
  };
});

//# sourceMappingURL=widgets.ddc.js.map
