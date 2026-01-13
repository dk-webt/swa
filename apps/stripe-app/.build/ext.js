"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/manual_components.js
  var require_manual_components = __commonJS({
    "../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/manual_components.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Inline = exports.Box = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Box = (0, react_1.createRemoteReactComponent)("Box");
      exports.Inline = (0, react_1.createRemoteReactComponent)("Inline");
    }
  });

  // ../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js
  var require_ui = __commonJS({
    "../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.List = exports.ListItem = exports.TextField = exports.TextArea = exports.TabPanels = exports.TabList = exports.Tabs = exports.TabPanel = exports.Tab = exports.TableHeaderCell = exports.TableCell = exports.TableFooter = exports.TableRow = exports.TableBody = exports.TableHead = exports.Table = exports.Switch = exports.Select = exports.Radio = exports.Notice = exports.Menu = exports.MenuGroup = exports.MenuItem = exports.Link = exports.FormFieldGroup = exports.Divider = exports.Checkbox = exports.ButtonGroup = exports.Button = exports.Badge = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Badge = (0, react_1.createRemoteReactComponent)("Badge");
      exports.Button = (0, react_1.createRemoteReactComponent)("Button");
      exports.ButtonGroup = (0, react_1.createRemoteReactComponent)("ButtonGroup", {
        fragmentProps: ["menuTrigger"]
      });
      exports.Checkbox = (0, react_1.createRemoteReactComponent)("Checkbox", {
        fragmentProps: ["label"]
      });
      exports.Divider = (0, react_1.createRemoteReactComponent)("Divider");
      exports.FormFieldGroup = (0, react_1.createRemoteReactComponent)("FormFieldGroup");
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.MenuItem = (0, react_1.createRemoteReactComponent)("MenuItem");
      exports.MenuGroup = (0, react_1.createRemoteReactComponent)("MenuGroup", {
        fragmentProps: ["title"]
      });
      exports.Menu = (0, react_1.createRemoteReactComponent)("Menu", {
        fragmentProps: ["trigger"]
      });
      exports.Notice = (0, react_1.createRemoteReactComponent)("Notice", {
        fragmentProps: ["description", "title", "actions"]
      });
      exports.Radio = (0, react_1.createRemoteReactComponent)("Radio", {
        fragmentProps: ["label"]
      });
      exports.Select = (0, react_1.createRemoteReactComponent)("Select", {
        fragmentProps: ["label"]
      });
      exports.Switch = (0, react_1.createRemoteReactComponent)("Switch", {
        fragmentProps: ["label"]
      });
      exports.Table = (0, react_1.createRemoteReactComponent)("Table");
      exports.TableHead = (0, react_1.createRemoteReactComponent)("TableHead");
      exports.TableBody = (0, react_1.createRemoteReactComponent)("TableBody");
      exports.TableRow = (0, react_1.createRemoteReactComponent)("TableRow");
      exports.TableFooter = (0, react_1.createRemoteReactComponent)("TableFooter");
      exports.TableCell = (0, react_1.createRemoteReactComponent)("TableCell");
      exports.TableHeaderCell = (0, react_1.createRemoteReactComponent)("TableHeaderCell");
      exports.Tab = (0, react_1.createRemoteReactComponent)("Tab");
      exports.TabPanel = (0, react_1.createRemoteReactComponent)("TabPanel");
      exports.Tabs = (0, react_1.createRemoteReactComponent)("Tabs");
      exports.TabList = (0, react_1.createRemoteReactComponent)("TabList");
      exports.TabPanels = (0, react_1.createRemoteReactComponent)("TabPanels");
      exports.TextArea = (0, react_1.createRemoteReactComponent)("TextArea", {
        fragmentProps: ["label"]
      });
      exports.TextField = (0, react_1.createRemoteReactComponent)("TextField", {
        fragmentProps: ["label"]
      });
      exports.ListItem = (0, react_1.createRemoteReactComponent)("ListItem", {
        fragmentProps: ["value", "title", "secondaryTitle", "icon", "image"]
      });
      exports.List = (0, react_1.createRemoteReactComponent)("List");
    }
  });

  // ../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/@sail/charts/index.js
  var require_charts = __commonJS({
    "../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/@sail/charts/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LineChart = exports.BarChart = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.BarChart = (0, react_1.createRemoteReactComponent)("BarChart");
      exports.LineChart = (0, react_1.createRemoteReactComponent)("LineChart");
    }
  });

  // ../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js
  var require_tailor_dashboard_components = __commonJS({
    "../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SettingsView = exports.Img = exports.FocusView = exports.ContextView = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.ContextView = (0, react_1.createRemoteReactComponent)("ContextView", {
        fragmentProps: ["actions", "notice"]
      });
      exports.FocusView = (0, react_1.createRemoteReactComponent)("FocusView", {
        fragmentProps: ["primaryAction", "secondaryAction", "footerContent"]
      });
      exports.Img = (0, react_1.createRemoteReactComponent)("Img");
      exports.SettingsView = (0, react_1.createRemoteReactComponent)("SettingsView");
    }
  });

  // ../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/index.js
  var require_ui2 = __commonJS({
    "../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/ui/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_manual_components(), exports);
      __exportStar(require_ui(), exports);
      __exportStar(require_charts(), exports);
      __exportStar(require_tailor_dashboard_components(), exports);
    }
  });

  // ../../node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js
  var require_browser = __commonJS({
    "../../node_modules/.pnpm/invariant@2.2.4/node_modules/invariant/browser.js"(exports, module) {
      "use strict";
      var invariant = function(condition, format, a, b, c, d, e, f) {
        if (true) {
          if (format === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format === void 0) {
            error = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function() {
                return args[argIndex++];
              })
            );
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      };
      module.exports = invariant;
    }
  });

  // ../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/_endpoint.js
  var require_endpoint = __commonJS({
    "../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/_endpoint.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getHostEndpoint = void 0;
      var invariant_1 = __importDefault(require_browser());
      var getHostEndpoint = () => {
        const hostEndpoint = globalThis.__StripeExtExports.endpoint;
        (0, invariant_1.default)(hostEndpoint, "hostEndpoint has not been initialized");
        return hostEndpoint;
      };
      exports.getHostEndpoint = getHostEndpoint;
    }
  });

  // ../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/signature.js
  var require_signature = __commonJS({
    "../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/signature.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var _endpoint_1 = require_endpoint();
      var fetchStripeSignature2 = (additionalPayload) => {
        return (0, _endpoint_1.getHostEndpoint)().call.fetchStripeSignature(additionalPayload);
      };
      exports.default = fetchStripeSignature2;
    }
  });

  // ../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/version.js
  var require_version = __commonJS({
    "../../node_modules/.pnpm/@stripe+ui-extension-sdk@3.2.0_@remote-ui+rpc@1.4.7/node_modules/@stripe/ui-extension-sdk/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "3.2.0";
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    BUILD_TIME: () => BUILD_TIME,
    DashboardView: () => DashboardView_default,
    PaymentDetailView: () => PaymentDetailView_default,
    default: () => manifest_default
  });

  // src/views/DashboardView.tsx
  var import_ui = __toESM(require_ui2());
  var import_react = __require("react");
  var import_signature = __toESM(require_signature());
  var import_jsx_runtime = __require("react/jsx-runtime");
  var PROHIBITED_STATES = ["CA", "CT", "MA", "ME", "PR"];
  function backendFetch(_0) {
    return __async(this, arguments, function* (path, options = {}) {
      const signature = yield (0, import_signature.default)();
      const response = yield fetch(`https://backend-production-5e37.up.railway.app${path}`, __spreadProps(__spreadValues({}, options), {
        headers: __spreadProps(__spreadValues({}, options.headers), {
          "Content-Type": "application/json",
          "Stripe-Signature": signature
        })
      }));
      return response;
    });
  }
  var DashboardView = ({
    userContext
  }) => {
    var _a;
    const [loading, setLoading] = (0, import_react.useState)(true);
    const [saving, setSaving] = (0, import_react.useState)(false);
    const [error, setError] = (0, import_react.useState)(null);
    const [settings, setSettings] = (0, import_react.useState)(null);
    const [analytics, setAnalytics] = (0, import_react.useState)(null);
    const [surchargeRate, setSurchargeRate] = (0, import_react.useState)("2.9");
    const [enabled, setEnabled] = (0, import_react.useState)(true);
    const [excludedStates, setExcludedStates] = (0, import_react.useState)([]);
    const stripeAccountId = (_a = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a.id;
    (0, import_react.useEffect)(() => {
      const fetchData = () => __async(void 0, null, function* () {
        if (!stripeAccountId) {
          setLoading(false);
          return;
        }
        try {
          setLoading(true);
          setError(null);
          let response = yield backendFetch(`/api/merchants/by-stripe/${stripeAccountId}`);
          if (response.status === 404) {
            response = yield backendFetch("/api/merchants", {
              method: "POST",
              body: JSON.stringify({
                stripeAccountId,
                surchargeRate: 0.029,
                enabled: true,
                excludedStates: PROHIBITED_STATES
              })
            });
          }
          if (!response.ok) {
            throw new Error("Failed to fetch merchant settings");
          }
          const merchant = yield response.json();
          setSettings(merchant);
          setSurchargeRate((merchant.surchargeRate * 100).toFixed(1));
          setEnabled(merchant.enabled);
          setExcludedStates(merchant.excludedStates);
          const analyticsResponse = yield backendFetch(`/api/merchants/${merchant.id}/analytics`);
          if (analyticsResponse.ok) {
            const analyticsData = yield analyticsResponse.json();
            setAnalytics(analyticsData);
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
          setLoading(false);
        }
      });
      fetchData();
    }, [stripeAccountId]);
    const handleSave = (0, import_react.useCallback)(() => __async(void 0, null, function* () {
      if (!(settings == null ? void 0 : settings.id))
        return;
      try {
        setSaving(true);
        setError(null);
        const response = yield backendFetch(`/api/merchants/${settings.id}`, {
          method: "PATCH",
          body: JSON.stringify({
            surchargeRate: parseFloat(surchargeRate) / 100,
            enabled,
            excludedStates
          })
        });
        if (!response.ok) {
          throw new Error("Failed to save settings");
        }
        const updated = yield response.json();
        setSettings(updated);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to save");
      } finally {
        setSaving(false);
      }
    }), [settings == null ? void 0 : settings.id, surchargeRate, enabled, excludedStates]);
    if (loading) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.ContextView, {
        title: "SWA - Surcharge Automation",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
          css: { padding: "large", textAlign: "center" },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
            css: { marginTop: "medium" },
            children: "Loading settings..."
          })
        })
      });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.ContextView, {
        title: "SWA - Surcharge Automation",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Notice, {
            type: "caution",
            title: "Error",
            children: error
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
            css: { marginTop: "medium" },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
              onPress: () => window.location.reload(),
              children: "Retry"
            })
          })
        ]
      });
    }
    const formatCurrency = (cents) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(cents / 100);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.ContextView, {
      title: "SWA - Surcharge Automation",
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
        type: "primary",
        onPress: handleSave,
        disabled: saving,
        children: saving ? "Saving..." : "Save Settings"
      }),
      children: [
        analytics && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { marginBottom: "large" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
              css: { fontWeight: "semibold", marginBottom: "small" },
              children: "Last 30 Days"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Inline, {
              css: { gap: "large" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      css: { fontSize: "small", color: "secondary" },
                      children: "Surcharges Collected"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      css: { fontSize: "xlarge", fontWeight: "bold" },
                      children: formatCurrency(analytics.last30Days.surchargeAmount)
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      css: { fontSize: "small", color: "secondary" },
                      children: "Eligible Transactions"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      css: { fontSize: "xlarge", fontWeight: "bold" },
                      children: analytics.last30Days.eligible
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      css: { fontSize: "small", color: "secondary" },
                      children: "Ineligible"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      css: { fontSize: "xlarge", fontWeight: "bold" },
                      children: analytics.last30Days.ineligible
                    })
                  ]
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { marginTop: "large" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
              css: { fontWeight: "semibold", marginBottom: "medium" },
              children: "Surcharge Settings"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "medium" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Switch, {
                  label: "Enable Surcharging",
                  checked: enabled,
                  onChange: (e) => setEnabled(e.target.checked)
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginTop: "xsmall" },
                  children: "When disabled, no surcharges will be applied"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "medium" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TextField, {
                  label: "Surcharge Rate (%)",
                  value: surchargeRate,
                  onChange: (e) => setSurchargeRate(e.target.value)
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginTop: "xsmall" },
                  children: "Maximum: 3% (Visa/MC rules)"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "medium" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { marginBottom: "xsmall", fontWeight: "medium" },
                  children: "Excluded States"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginBottom: "small" },
                  children: "States marked with * are prohibited by law."
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Inline, {
                  css: { gap: "small", flexWrap: "wrap" },
                  children: ["CA", "CT", "MA", "ME", "CO", "MT", "NY", "PR"].map((state) => {
                    const isProhibited = PROHIBITED_STATES.includes(state);
                    const isExcluded = excludedStates.includes(state);
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Button, {
                      type: isExcluded ? "primary" : "secondary",
                      disabled: isProhibited,
                      onPress: () => {
                        if (isProhibited)
                          return;
                        if (isExcluded) {
                          setExcludedStates(excludedStates.filter((s) => s !== state));
                        } else {
                          setExcludedStates([...excludedStates, state]);
                        }
                      },
                      children: [
                        state,
                        isProhibited ? "*" : ""
                      ]
                    }, state);
                  })
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { marginTop: "large" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
              css: { fontWeight: "semibold", marginBottom: "medium" },
              children: "Compliance Status"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "small" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Inline, {
                  css: { alignItems: "center", gap: "small" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Badge, {
                      type: "positive",
                      children: "Active"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      children: "BIN Detection"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginLeft: "large" },
                  children: "Debit/prepaid cards excluded automatically"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "small" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Inline, {
                  css: { alignItems: "center", gap: "small" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Badge, {
                      type: "positive",
                      children: "Active"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      children: "State Compliance"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginLeft: "large" },
                  children: "CA, CT, MA, ME, PR blocked"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "small" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Inline, {
                  css: { alignItems: "center", gap: "small" },
                  children: [
                    (settings == null ? void 0 : settings.mastercardNotifiedAt) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Badge, {
                      type: "positive",
                      children: "Complete"
                    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Badge, {
                      type: "warning",
                      children: "Pending"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      children: "Mastercard Notification"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginLeft: "large" },
                  children: (settings == null ? void 0 : settings.mastercardNotifiedAt) ? `Sent ${new Date(settings.mastercardNotifiedAt).toLocaleDateString()}` : "Required 30 days before surcharging"
                }),
                !(settings == null ? void 0 : settings.mastercardNotifiedAt) && (settings == null ? void 0 : settings.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { marginTop: "small", marginLeft: "large" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Link, {
                    href: `https://backend-production-5e37.up.railway.app/api/merchants/${settings.id}/compliance/mastercard-letter`,
                    children: "Generate notification letter"
                  })
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { marginTop: "large" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
              css: { fontWeight: "semibold", marginBottom: "medium" },
              children: "Integration"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { fontSize: "small", color: "secondary" },
              children: [
                "Merchant ID: ",
                settings == null ? void 0 : settings.id
              ]
            })
          ]
        })
      ]
    });
  };
  var DashboardView_default = DashboardView;

  // src/views/PaymentDetailView.tsx
  var import_ui2 = __toESM(require_ui2());
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var PaymentDetailView = ({
    environment
  }) => {
    var _a;
    const paymentIntent = (_a = environment == null ? void 0 : environment.objectContext) == null ? void 0 : _a.object;
    if (!paymentIntent) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ContextView, {
        title: "SWA Surcharge Info",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
          css: { color: "secondary" },
          children: "No payment information available"
        })
      });
    }
    const metadata = paymentIntent.metadata || {};
    const swaMerchantId = metadata.swa_merchant_id;
    const swaBaseAmount = parseInt(metadata.swa_base_amount || "0", 10);
    const swaSurchargeAmount = parseInt(metadata.swa_surcharge_amount || "0", 10);
    const swaEligible = metadata.swa_eligible === "true";
    const swaReason = metadata.swa_reason || "unknown";
    if (!swaMerchantId) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ContextView, {
        title: "SWA Surcharge Info",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
          css: { color: "secondary" },
          children: "This payment was not processed through SWA"
        })
      });
    }
    const formatCurrency = (cents) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(cents / 100);
    };
    const getReasonLabel = (reason) => {
      const labels = {
        eligible: "Surcharge Applied",
        state_prohibited: "State Prohibited",
        debit_card: "Debit Card",
        prepaid_card: "Prepaid Card",
        unknown_card_type: "Unknown Card Type",
        merchant_disabled: "Surcharging Disabled",
        merchant_excluded_state: "State Excluded by Merchant"
      };
      return labels[reason] || reason;
    };
    const getStatusBadge = () => {
      if (swaEligible && swaSurchargeAmount > 0) {
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
          type: "positive",
          children: "Surcharge Applied"
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
        type: "neutral",
        children: "No Surcharge"
      });
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.ContextView, {
      title: "SWA Surcharge Info",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
          css: { marginBottom: "medium" },
          children: getStatusBadge()
        }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
          css: { marginBottom: "large" },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Inline, {
            css: { gap: "xlarge" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                    css: { fontSize: "small", color: "secondary" },
                    children: "Base Amount"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                    css: { fontSize: "large", fontWeight: "semibold" },
                    children: formatCurrency(swaBaseAmount)
                  })
                ]
              }),
              swaSurchargeAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                        css: { fontSize: "small", color: "secondary" },
                        children: "Surcharge"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                        css: { fontSize: "large", fontWeight: "semibold" },
                        children: formatCurrency(swaSurchargeAmount)
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                        css: { fontSize: "small", color: "secondary" },
                        children: "Total Charged"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                        css: { fontSize: "large", fontWeight: "semibold" },
                        children: formatCurrency(swaBaseAmount + swaSurchargeAmount)
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Divider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
          css: { marginTop: "medium" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
              css: { fontWeight: "medium", marginBottom: "small" },
              children: "Eligibility Details"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
              css: { marginBottom: "small" },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Inline, {
                css: { alignItems: "center", gap: "small" },
                children: [
                  swaEligible ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
                    type: "positive",
                    children: "Eligible"
                  }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Badge, {
                    type: "warning",
                    children: "Not Eligible"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                    children: getReasonLabel(swaReason)
                  })
                ]
              })
            }),
            !swaEligible && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
              css: { fontSize: "small", color: "secondary" },
              children: [
                swaReason === "debit_card" && "Surcharging debit cards is prohibited in the US",
                swaReason === "state_prohibited" && "The customer's billing state prohibits surcharging",
                swaReason === "prepaid_card" && "Surcharging prepaid cards is not allowed",
                swaReason === "unknown_card_type" && "Could not determine card type"
              ]
            })
          ]
        }),
        swaSurchargeAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Divider, {}),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
              css: { marginTop: "medium" },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
                css: { fontSize: "small", color: "secondary" },
                children: [
                  "Rate Applied: ",
                  (swaSurchargeAmount / swaBaseAmount * 100).toFixed(2),
                  "%"
                ]
              })
            })
          ]
        })
      ]
    });
  };
  var PaymentDetailView_default = PaymentDetailView;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2026-01-11 07:26:14.161309195 +0000 UTC m=+0.818061474";
  var manifest_default = {
    "app_backend": {
      "webhooks": null
    },
    "connect_permissions": null,
    "distribution_type": "private",
    "icon": "./icon.png",
    "id": "com.swa.surcharge",
    "name": "SWA - Surcharge Automation",
    "permissions": [
      {
        "permission": "customer_read",
        "purpose": "Read customer billing address for state compliance checks when determining surcharge eligibility"
      },
      {
        "permission": "payment_method_read",
        "purpose": "Detect card funding type (credit vs debit) to apply surcharges only to eligible credit card transactions"
      },
      {
        "permission": "payment_intent_write",
        "purpose": "Update payment amount to include calculated surcharge and store tracking metadata"
      }
    ],
    "ui_extension": {
      "views": [
        {
          "component": "DashboardView",
          "viewport": "stripe.dashboard.home.overview"
        },
        {
          "component": "PaymentDetailView",
          "viewport": "stripe.dashboard.payment.detail"
        }
      ]
    },
    "version": "0.1.3"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHNhaWwvdWkvaW5kZXgudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHNhaWwvY2hhcnRzL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzdHJpcGUtaW50ZXJuYWwvdGFpbG9yLWRhc2hib2FyZC1jb21wb25lbnRzL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9pbnZhcmlhbnRAMi4yLjQvbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL19lbmRwb2ludC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0cmlwZSt1aS1leHRlbnNpb24tc2RrQDMuMi4wX0ByZW1vdGUtdWkrcnBjQDEuNC43L25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy9zaWduYXR1cmUudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdmVyc2lvbi50cyIsICJtYW5pZmVzdC5qcyIsICIuLi9zcmMvdmlld3MvRGFzaGJvYXJkVmlldy50c3giLCAiLi4vc3JjL3ZpZXdzL1BheW1lbnREZXRhaWxWaWV3LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5pbXBvcnQgRGFzaGJvYXJkVmlldyBmcm9tICcuLi9zcmMvdmlld3MvRGFzaGJvYXJkVmlldyc7aW1wb3J0IFBheW1lbnREZXRhaWxWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9QYXltZW50RGV0YWlsVmlldyc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjYtMDEtMTEgMDc6MjY6MTQuMTYxMzA5MTk1ICswMDAwIFVUQyBtPSswLjgxODA2MTQ3NCc7XG5cbmV4cG9ydCB7IFxuICBEYXNoYm9hcmRWaWV3LFx0XG5cbiAgUGF5bWVudERldGFpbFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBudWxsXG4gIH0sXG4gIFwiY29ubmVjdF9wZXJtaXNzaW9uc1wiOiBudWxsLFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHJpdmF0ZVwiLFxuICBcImljb25cIjogXCIuL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJjb20uc3dhLnN1cmNoYXJnZVwiLFxuICBcIm5hbWVcIjogXCJTV0EgLSBTdXJjaGFyZ2UgQXV0b21hdGlvblwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGN1c3RvbWVyIGJpbGxpbmcgYWRkcmVzcyBmb3Igc3RhdGUgY29tcGxpYW5jZSBjaGVja3Mgd2hlbiBkZXRlcm1pbmluZyBzdXJjaGFyZ2UgZWxpZ2liaWxpdHlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9tZXRob2RfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiRGV0ZWN0IGNhcmQgZnVuZGluZyB0eXBlIChjcmVkaXQgdnMgZGViaXQpIHRvIGFwcGx5IHN1cmNoYXJnZXMgb25seSB0byBlbGlnaWJsZSBjcmVkaXQgY2FyZCB0cmFuc2FjdGlvbnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9pbnRlbnRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlVwZGF0ZSBwYXltZW50IGFtb3VudCB0byBpbmNsdWRlIGNhbGN1bGF0ZWQgc3VyY2hhcmdlIGFuZCBzdG9yZSB0cmFja2luZyBtZXRhZGF0YVwiXG4gICAgfVxuICBdLFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiRGFzaGJvYXJkVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5ob21lLm92ZXJ2aWV3XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiUGF5bWVudERldGFpbFZpZXdcIixcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQucGF5bWVudC5kZXRhaWxcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjNcIlxufTtcbiIsICIvKipcbiAqIERhc2hib2FyZCBWaWV3XG4gKlxuICogTWFpbiB2aWV3IHNob3duIG9uIHRoZSBTdHJpcGUgRGFzaGJvYXJkIGhvbWUgcGFnZVxuICogRGlzcGxheXMgc3VyY2hhcmdlIHNldHRpbmdzIGFuZCBhbmFseXRpY3NcbiAqL1xuXG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgQ29udGV4dFZpZXcsXG4gIERpdmlkZXIsXG4gIElubGluZSxcbiAgTGluayxcbiAgU3dpdGNoLFxuICBUZXh0RmllbGQsXG4gIEJhZGdlLFxuICBOb3RpY2UsXG59IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoU3RyaXBlU2lnbmF0dXJlIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9zaWduYXR1cmUnO1xuXG4vLyBTdGF0ZXMgd2hlcmUgc3VyY2hhcmdpbmcgaXMgcHJvaGliaXRlZFxuY29uc3QgUFJPSElCSVRFRF9TVEFURVMgPSBbJ0NBJywgJ0NUJywgJ01BJywgJ01FJywgJ1BSJ107XG5cbmludGVyZmFjZSBNZXJjaGFudFNldHRpbmdzIHtcbiAgaWQ6IHN0cmluZztcbiAgc3VyY2hhcmdlUmF0ZTogbnVtYmVyO1xuICBlbmFibGVkOiBib29sZWFuO1xuICBleGNsdWRlZFN0YXRlczogc3RyaW5nW107XG4gIG1hc3RlcmNhcmROb3RpZmllZEF0OiBzdHJpbmcgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgQW5hbHl0aWNzIHtcbiAgdG90YWxUcmFuc2FjdGlvbnM6IG51bWJlcjtcbiAgdG90YWxTdXJjaGFyZ2VzOiBudW1iZXI7XG4gIGxhc3QzMERheXM6IHtcbiAgICBlbGlnaWJsZTogbnVtYmVyO1xuICAgIGluZWxpZ2libGU6IG51bWJlcjtcbiAgICBzdXJjaGFyZ2VBbW91bnQ6IG51bWJlcjtcbiAgfTtcbn1cblxuLy8gSGVscGVyIHRvIG1ha2UgYXV0aGVudGljYXRlZCBiYWNrZW5kIHJlcXVlc3RzXG5hc3luYyBmdW5jdGlvbiBiYWNrZW5kRmV0Y2gocGF0aDogc3RyaW5nLCBvcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHt9KSB7XG4gIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYmFja2VuZC1wcm9kdWN0aW9uLTVlMzcudXAucmFpbHdheS5hcHAke3BhdGh9YCwge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgaGVhZGVyczoge1xuICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmNvbnN0IERhc2hib2FyZFZpZXcgPSAoe1xuICB1c2VyQ29udGV4dCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZTxNZXJjaGFudFNldHRpbmdzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthbmFseXRpY3MsIHNldEFuYWx5dGljc10gPSB1c2VTdGF0ZTxBbmFseXRpY3MgfCBudWxsPihudWxsKTtcblxuICAvLyBGb3JtIHN0YXRlXG4gIGNvbnN0IFtzdXJjaGFyZ2VSYXRlLCBzZXRTdXJjaGFyZ2VSYXRlXSA9IHVzZVN0YXRlKCcyLjknKTtcbiAgY29uc3QgW2VuYWJsZWQsIHNldEVuYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtleGNsdWRlZFN0YXRlcywgc2V0RXhjbHVkZWRTdGF0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdCBzdHJpcGVBY2NvdW50SWQgPSB1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQ7XG5cbiAgLy8gRmV0Y2ggbWVyY2hhbnQgc2V0dGluZ3Mgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXN0cmlwZUFjY291bnRJZCkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRFcnJvcihudWxsKTtcblxuICAgICAgICAvLyBGZXRjaCBvciBjcmVhdGUgbWVyY2hhbnRcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYmFja2VuZEZldGNoKGAvYXBpL21lcmNoYW50cy9ieS1zdHJpcGUvJHtzdHJpcGVBY2NvdW50SWR9YCk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIG1lcmNoYW50IGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmRGZXRjaCgnL2FwaS9tZXJjaGFudHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgc3RyaXBlQWNjb3VudElkLFxuICAgICAgICAgICAgICBzdXJjaGFyZ2VSYXRlOiAwLjAyOSxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRTdGF0ZXM6IFBST0hJQklURURfU1RBVEVTLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbWVyY2hhbnQgc2V0dGluZ3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lcmNoYW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRTZXR0aW5ncyhtZXJjaGFudCk7XG4gICAgICAgIHNldFN1cmNoYXJnZVJhdGUoKG1lcmNoYW50LnN1cmNoYXJnZVJhdGUgKiAxMDApLnRvRml4ZWQoMSkpO1xuICAgICAgICBzZXRFbmFibGVkKG1lcmNoYW50LmVuYWJsZWQpO1xuICAgICAgICBzZXRFeGNsdWRlZFN0YXRlcyhtZXJjaGFudC5leGNsdWRlZFN0YXRlcyk7XG5cbiAgICAgICAgLy8gRmV0Y2ggYW5hbHl0aWNzXG4gICAgICAgIGNvbnN0IGFuYWx5dGljc1Jlc3BvbnNlID0gYXdhaXQgYmFja2VuZEZldGNoKGAvYXBpL21lcmNoYW50cy8ke21lcmNoYW50LmlkfS9hbmFseXRpY3NgKTtcblxuICAgICAgICBpZiAoYW5hbHl0aWNzUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEYXRhID0gYXdhaXQgYW5hbHl0aWNzUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldEFuYWx5dGljcyhhbmFseXRpY3NEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3N0cmlwZUFjY291bnRJZF0pO1xuXG4gIC8vIFNhdmUgc2V0dGluZ3NcbiAgY29uc3QgaGFuZGxlU2F2ZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNldHRpbmdzPy5pZCkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIHNldFNhdmluZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJhY2tlbmRGZXRjaChgL2FwaS9tZXJjaGFudHMvJHtzZXR0aW5ncy5pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHN1cmNoYXJnZVJhdGU6IHBhcnNlRmxvYXQoc3VyY2hhcmdlUmF0ZSkgLyAxMDAsXG4gICAgICAgICAgZW5hYmxlZCxcbiAgICAgICAgICBleGNsdWRlZFN0YXRlcyxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBzYXZlIHNldHRpbmdzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRTZXR0aW5ncyh1cGRhdGVkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNhdmUnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzZXR0aW5ncz8uaWQsIHN1cmNoYXJnZVJhdGUsIGVuYWJsZWQsIGV4Y2x1ZGVkU3RhdGVzXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiU1dBIC0gU3VyY2hhcmdlIEF1dG9tYXRpb25cIj5cbiAgICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ2xhcmdlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdtZWRpdW0nIH19PkxvYWRpbmcgc2V0dGluZ3MuLi48L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiU1dBIC0gU3VyY2hhcmdlIEF1dG9tYXRpb25cIj5cbiAgICAgICAgPE5vdGljZSB0eXBlPVwiY2F1dGlvblwiIHRpdGxlPVwiRXJyb3JcIj5cbiAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgIDwvTm90aWNlPlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxCdXR0b24gb25QcmVzcz17KCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpfT5SZXRyeTwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKGNlbnRzOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIH0pLmZvcm1hdChjZW50cyAvIDEwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXdcbiAgICAgIHRpdGxlPVwiU1dBIC0gU3VyY2hhcmdlIEF1dG9tYXRpb25cIlxuICAgICAgYWN0aW9ucz17XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvblByZXNzPXtoYW5kbGVTYXZlfSBkaXNhYmxlZD17c2F2aW5nfT5cbiAgICAgICAgICB7c2F2aW5nID8gJ1NhdmluZy4uLicgOiAnU2F2ZSBTZXR0aW5ncyd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgfVxuICAgID5cbiAgICAgIHsvKiBBbmFseXRpY3MgU3VtbWFyeSAqL31cbiAgICAgIHthbmFseXRpY3MgJiYgKFxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdsYXJnZScgfX0+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJywgbWFyZ2luQm90dG9tOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgTGFzdCAzMCBEYXlzXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgZ2FwOiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgICBTdXJjaGFyZ2VzIENvbGxlY3RlZFxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICd4bGFyZ2UnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KGFuYWx5dGljcy5sYXN0MzBEYXlzLnN1cmNoYXJnZUFtb3VudCl9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgIEVsaWdpYmxlIFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICd4bGFyZ2UnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAge2FuYWx5dGljcy5sYXN0MzBEYXlzLmVsaWdpYmxlfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgICBJbmVsaWdpYmxlXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3hsYXJnZScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICAgICAgICB7YW5hbHl0aWNzLmxhc3QzMERheXMuaW5lbGlnaWJsZX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciAvPlxuXG4gICAgICB7LyogU2V0dGluZ3MgKi99XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdsYXJnZScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgU3VyY2hhcmdlIFNldHRpbmdzXG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgbGFiZWw9XCJFbmFibGUgU3VyY2hhcmdpbmdcIlxuICAgICAgICAgICAgY2hlY2tlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW5hYmxlZChlLnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScsIG1hcmdpblRvcDogJ3hzbWFsbCcgfX0+XG4gICAgICAgICAgICBXaGVuIGRpc2FibGVkLCBubyBzdXJjaGFyZ2VzIHdpbGwgYmUgYXBwbGllZFxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiU3VyY2hhcmdlIFJhdGUgKCUpXCJcbiAgICAgICAgICAgIHZhbHVlPXtzdXJjaGFyZ2VSYXRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdXJjaGFyZ2VSYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScsIG1hcmdpblRvcDogJ3hzbWFsbCcgfX0+XG4gICAgICAgICAgICBNYXhpbXVtOiAzJSAoVmlzYS9NQyBydWxlcylcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICd4c21hbGwnLCBmb250V2VpZ2h0OiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICAgIEV4Y2x1ZGVkIFN0YXRlc1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScsIG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgIFN0YXRlcyBtYXJrZWQgd2l0aCAqIGFyZSBwcm9oaWJpdGVkIGJ5IGxhdy5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBnYXA6ICdzbWFsbCcsIGZsZXhXcmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAgICB7WydDQScsICdDVCcsICdNQScsICdNRScsICdDTycsICdNVCcsICdOWScsICdQUiddLm1hcCgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNQcm9oaWJpdGVkID0gUFJPSElCSVRFRF9TVEFURVMuaW5jbHVkZXMoc3RhdGUpO1xuICAgICAgICAgICAgICBjb25zdCBpc0V4Y2x1ZGVkID0gZXhjbHVkZWRTdGF0ZXMuaW5jbHVkZXMoc3RhdGUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtzdGF0ZX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9e2lzRXhjbHVkZWQgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1Byb2hpYml0ZWR9XG4gICAgICAgICAgICAgICAgICBvblByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1Byb2hpYml0ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRXhjbHVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRFeGNsdWRlZFN0YXRlcyhleGNsdWRlZFN0YXRlcy5maWx0ZXIoKHMpID0+IHMgIT09IHN0YXRlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RXhjbHVkZWRTdGF0ZXMoWy4uLmV4Y2x1ZGVkU3RhdGVzLCBzdGF0ZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzdGF0ZX17aXNQcm9oaWJpdGVkID8gJyonIDogJyd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cblxuICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgey8qIENvbXBsaWFuY2UgU2VjdGlvbiAqL31cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ2xhcmdlJyB9fT5cbiAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJywgbWFyZ2luQm90dG9tOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICBDb21wbGlhbmNlIFN0YXR1c1xuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwicG9zaXRpdmVcIj5BY3RpdmU8L0JhZGdlPlxuICAgICAgICAgICAgPEJveD5CSU4gRGV0ZWN0aW9uPC9Cb3g+XG4gICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JywgbWFyZ2luTGVmdDogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgIERlYml0L3ByZXBhaWQgY2FyZHMgZXhjbHVkZWQgYXV0b21hdGljYWxseVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwicG9zaXRpdmVcIj5BY3RpdmU8L0JhZGdlPlxuICAgICAgICAgICAgPEJveD5TdGF0ZSBDb21wbGlhbmNlPC9Cb3g+XG4gICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JywgbWFyZ2luTGVmdDogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgIENBLCBDVCwgTUEsIE1FLCBQUiBibG9ja2VkXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICAgICAge3NldHRpbmdzPy5tYXN0ZXJjYXJkTm90aWZpZWRBdCA/IChcbiAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJwb3NpdGl2ZVwiPkNvbXBsZXRlPC9CYWRnZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwid2FybmluZ1wiPlBlbmRpbmc8L0JhZGdlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCb3g+TWFzdGVyY2FyZCBOb3RpZmljYXRpb248L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5MZWZ0OiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAge3NldHRpbmdzPy5tYXN0ZXJjYXJkTm90aWZpZWRBdFxuICAgICAgICAgICAgICA/IGBTZW50ICR7bmV3IERhdGUoc2V0dGluZ3MubWFzdGVyY2FyZE5vdGlmaWVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfWBcbiAgICAgICAgICAgICAgOiAnUmVxdWlyZWQgMzAgZGF5cyBiZWZvcmUgc3VyY2hhcmdpbmcnfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHshc2V0dGluZ3M/Lm1hc3RlcmNhcmROb3RpZmllZEF0ICYmIHNldHRpbmdzPy5pZCAmJiAoXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcsIG1hcmdpbkxlZnQ6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwL2FwaS9tZXJjaGFudHMvJHtzZXR0aW5ncy5pZH0vY29tcGxpYW5jZS9tYXN0ZXJjYXJkLWxldHRlcmB9PlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlIG5vdGlmaWNhdGlvbiBsZXR0ZXJcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cblxuICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgey8qIEludGVncmF0aW9uICovfVxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbGFyZ2UnIH19PlxuICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIEludGVncmF0aW9uXG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgIE1lcmNoYW50IElEOiB7c2V0dGluZ3M/LmlkfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRWaWV3O1xuIiwgIi8qKlxuICogUGF5bWVudCBEZXRhaWwgVmlld1xuICpcbiAqIFNob3duIG9uIHRoZSBwYXltZW50L2NoYXJnZSBkZXRhaWwgcGFnZSBpbiBTdHJpcGUgRGFzaGJvYXJkXG4gKiBEaXNwbGF5cyBzdXJjaGFyZ2UgaW5mb3JtYXRpb24gZm9yIHRoZSBzcGVjaWZpYyBwYXltZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgQm94LFxuICBDb250ZXh0VmlldyxcbiAgRGl2aWRlcixcbiAgSW5saW5lLFxuICBCYWRnZSxcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuXG5jb25zdCBQYXltZW50RGV0YWlsVmlldyA9ICh7XG4gIGVudmlyb25tZW50LFxufTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gIC8vIEdldCBwYXltZW50IGludGVudCBmcm9tIGVudmlyb25tZW50IGNvbnRleHRcbiAgY29uc3QgcGF5bWVudEludGVudCA9IGVudmlyb25tZW50Py5vYmplY3RDb250ZXh0Py5vYmplY3Q7XG5cbiAgaWYgKCFwYXltZW50SW50ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlNXQSBTdXJjaGFyZ2UgSW5mb1wiPlxuICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgTm8gcGF5bWVudCBpbmZvcm1hdGlvbiBhdmFpbGFibGVcbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICAvLyBFeHRyYWN0IFNXQSBtZXRhZGF0YVxuICBjb25zdCBtZXRhZGF0YSA9IHBheW1lbnRJbnRlbnQubWV0YWRhdGEgfHwge307XG4gIGNvbnN0IHN3YU1lcmNoYW50SWQgPSBtZXRhZGF0YS5zd2FfbWVyY2hhbnRfaWQ7XG4gIGNvbnN0IHN3YUJhc2VBbW91bnQgPSBwYXJzZUludChtZXRhZGF0YS5zd2FfYmFzZV9hbW91bnQgfHwgJzAnLCAxMCk7XG4gIGNvbnN0IHN3YVN1cmNoYXJnZUFtb3VudCA9IHBhcnNlSW50KG1ldGFkYXRhLnN3YV9zdXJjaGFyZ2VfYW1vdW50IHx8ICcwJywgMTApO1xuICBjb25zdCBzd2FFbGlnaWJsZSA9IG1ldGFkYXRhLnN3YV9lbGlnaWJsZSA9PT0gJ3RydWUnO1xuICBjb25zdCBzd2FSZWFzb24gPSBtZXRhZGF0YS5zd2FfcmVhc29uIHx8ICd1bmtub3duJztcblxuICAvLyBDaGVjayBpZiB0aGlzIHBheW1lbnQgd2FzIHByb2Nlc3NlZCB0aHJvdWdoIFNXQVxuICBpZiAoIXN3YU1lcmNoYW50SWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiU1dBIFN1cmNoYXJnZSBJbmZvXCI+XG4gICAgICAgIDxCb3ggY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICBUaGlzIHBheW1lbnQgd2FzIG5vdCBwcm9jZXNzZWQgdGhyb3VnaCBTV0FcbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChjZW50czogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQoY2VudHMgLyAxMDApO1xuICB9O1xuXG4gIGNvbnN0IGdldFJlYXNvbkxhYmVsID0gKHJlYXNvbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBsYWJlbHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICBlbGlnaWJsZTogJ1N1cmNoYXJnZSBBcHBsaWVkJyxcbiAgICAgIHN0YXRlX3Byb2hpYml0ZWQ6ICdTdGF0ZSBQcm9oaWJpdGVkJyxcbiAgICAgIGRlYml0X2NhcmQ6ICdEZWJpdCBDYXJkJyxcbiAgICAgIHByZXBhaWRfY2FyZDogJ1ByZXBhaWQgQ2FyZCcsXG4gICAgICB1bmtub3duX2NhcmRfdHlwZTogJ1Vua25vd24gQ2FyZCBUeXBlJyxcbiAgICAgIG1lcmNoYW50X2Rpc2FibGVkOiAnU3VyY2hhcmdpbmcgRGlzYWJsZWQnLFxuICAgICAgbWVyY2hhbnRfZXhjbHVkZWRfc3RhdGU6ICdTdGF0ZSBFeGNsdWRlZCBieSBNZXJjaGFudCcsXG4gICAgfTtcbiAgICByZXR1cm4gbGFiZWxzW3JlYXNvbl0gfHwgcmVhc29uO1xuICB9O1xuXG4gIGNvbnN0IGdldFN0YXR1c0JhZGdlID0gKCkgPT4ge1xuICAgIGlmIChzd2FFbGlnaWJsZSAmJiBzd2FTdXJjaGFyZ2VBbW91bnQgPiAwKSB7XG4gICAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJwb3NpdGl2ZVwiPlN1cmNoYXJnZSBBcHBsaWVkPC9CYWRnZT47XG4gICAgfVxuICAgIHJldHVybiA8QmFkZ2UgdHlwZT1cIm5ldXRyYWxcIj5ObyBTdXJjaGFyZ2U8L0JhZGdlPjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlNXQSBTdXJjaGFyZ2UgSW5mb1wiPlxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbWVkaXVtJyB9fT5cbiAgICAgICAge2dldFN0YXR1c0JhZGdlKCl9XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbGFyZ2UnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBnYXA6ICd4bGFyZ2UnIH19PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICBCYXNlIEFtb3VudFxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ2xhcmdlJywgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5cbiAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHN3YUJhc2VBbW91bnQpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7c3dhU3VyY2hhcmdlQW1vdW50ID4gMCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgICBTdXJjaGFyZ2VcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ2xhcmdlJywgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShzd2FTdXJjaGFyZ2VBbW91bnQpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgICBUb3RhbCBDaGFyZ2VkXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdsYXJnZScsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3koc3dhQmFzZUFtb3VudCArIHN3YVN1cmNoYXJnZUFtb3VudCl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cblxuICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ21lZGl1bScsIG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICBFbGlnaWJpbGl0eSBEZXRhaWxzXG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICAgICAge3N3YUVsaWdpYmxlID8gKFxuICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cInBvc2l0aXZlXCI+RWxpZ2libGU8L0JhZGdlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJ3YXJuaW5nXCI+Tm90IEVsaWdpYmxlPC9CYWRnZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Qm94PntnZXRSZWFzb25MYWJlbChzd2FSZWFzb24pfTwvQm94PlxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7IXN3YUVsaWdpYmxlICYmIChcbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAge3N3YVJlYXNvbiA9PT0gJ2RlYml0X2NhcmQnICYmIChcbiAgICAgICAgICAgICAgJ1N1cmNoYXJnaW5nIGRlYml0IGNhcmRzIGlzIHByb2hpYml0ZWQgaW4gdGhlIFVTJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzd2FSZWFzb24gPT09ICdzdGF0ZV9wcm9oaWJpdGVkJyAmJiAoXG4gICAgICAgICAgICAgIFwiVGhlIGN1c3RvbWVyJ3MgYmlsbGluZyBzdGF0ZSBwcm9oaWJpdHMgc3VyY2hhcmdpbmdcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzd2FSZWFzb24gPT09ICdwcmVwYWlkX2NhcmQnICYmIChcbiAgICAgICAgICAgICAgJ1N1cmNoYXJnaW5nIHByZXBhaWQgY2FyZHMgaXMgbm90IGFsbG93ZWQnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N3YVJlYXNvbiA9PT0gJ3Vua25vd25fY2FyZF90eXBlJyAmJiAoXG4gICAgICAgICAgICAgICdDb3VsZCBub3QgZGV0ZXJtaW5lIGNhcmQgdHlwZSdcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cblxuICAgICAge3N3YVN1cmNoYXJnZUFtb3VudCA+IDAgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgIFJhdGUgQXBwbGllZDogeygoc3dhU3VyY2hhcmdlQW1vdW50IC8gc3dhQmFzZUFtb3VudCkgKiAxMDApLnRvRml4ZWQoMil9JVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0NvbnRleHRWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudERldGFpbFZpZXc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQUEsVUFBQSxVQUFBO0FBS2EsY0FBQSxPQUFNLEdBQUEsUUFBQSw0QkFBK0MsS0FBSztBQUUxRCxjQUFBLFVBQ1gsR0FBQSxRQUFBLDRCQUFrRCxRQUFROzs7Ozs7Ozs7O0FDUjVELFVBQUEsVUFBQSxVQUFBO0FBRWEsY0FBQSxTQUFRLEdBQUEsUUFBQSw0QkFBZ0QsT0FBTztBQUcvRCxjQUFBLFVBQVMsR0FBQSxRQUFBLDRCQUNwQixRQUFRO0FBSUcsY0FBQSxlQUFjLEdBQUEsUUFBQSw0QkFHekIsZUFBZTtRQUNmLGVBQWUsQ0FBQyxhQUFhO09BQzlCO0FBR1ksY0FBQSxZQUFXLEdBQUEsUUFBQSw0QkFDdEIsWUFDQTtRQUNFLGVBQWUsQ0FBQyxPQUFPO09BQ3hCO0FBSVUsY0FBQSxXQUFVLEdBQUEsUUFBQSw0QkFDckIsU0FBUztBQUlFLGNBQUEs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QSxJQUNiLGVBQWU7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxJQUN2QixxQkFBcUI7QUFBQSxJQUNyQixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYjtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsUUFDZDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsRUFDYjsiLAogICJuYW1lcyI6IFsiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiaW1wb3J0X3VpIiwgImltcG9ydF9qc3hfcnVudGltZSJdCn0K
