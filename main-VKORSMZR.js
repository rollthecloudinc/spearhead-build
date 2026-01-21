import {
  initFederation
} from "./chunk-FUIGOVLJ.js";
import {
  init_define_process
} from "./chunk-566BG64Y.js";

// projects/spear/src/main.ts
init_define_process();

// node_modules/@angular-architects/native-federation/src/index.js
init_define_process();

// projects/spear/src/main.ts
initFederation().catch((err) => console.error("Error loading federation configuration:", err)).then((_) => {
  import("./chunk-A5LJCXAN.js").catch((err) => console.error(err));
});
//# sourceMappingURL=main-VKORSMZR.js.map
