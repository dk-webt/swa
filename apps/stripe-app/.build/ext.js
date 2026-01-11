"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  var import_jsx_runtime = __require("react/jsx-runtime");
  var API_BASE_URL = "https://backend-production-5e37.up.railway.app";
  var PROHIBITED_STATES = ["CA", "CT", "MA", "ME", "PR"];
  var DashboardView = ({
    userContext,
    environment
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
        if (!stripeAccountId)
          return;
        try {
          setLoading(true);
          setError(null);
          let response = yield fetch(
            `${API_BASE_URL}/api/merchants/by-stripe/${stripeAccountId}`
          );
          if (response.status === 404) {
            response = yield fetch(`${API_BASE_URL}/api/merchants`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
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
          const analyticsResponse = yield fetch(
            `${API_BASE_URL}/api/merchants/${merchant.id}/analytics`
          );
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
        const response = yield fetch(
          `${API_BASE_URL}/api/merchants/${settings.id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              surchargeRate: parseFloat(surchargeRate) / 100,
              enabled,
              excludedStates
            })
          }
        );
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
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { padding: "large", textAlign: "center" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Spinner, {
              size: "large"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
              css: { marginTop: "medium" },
              children: "Loading settings..."
            })
          ]
        })
      });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.ContextView, {
        title: "SWA - Surcharge Automation",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
          type: "critical",
          title: "Error",
          description: error,
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
            onPress: () => window.location.reload(),
            children: "Retry"
          })
        })
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
                      children: "Ineligible (Debit/State)"
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
                  children: "When disabled, no surcharges will be applied to any transactions"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "medium" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TextField, {
                  label: "Surcharge Rate (%)",
                  value: surchargeRate,
                  onChange: (e) => setSurchargeRate(e.target.value),
                  type: "number",
                  min: "0",
                  max: "3",
                  step: "0.1"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginTop: "xsmall" },
                  children: "Maximum allowed: 3% (Visa/Mastercard rules). Some states have lower caps."
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
                  children: "Customers from these states will not be charged a surcharge. States marked with * are prohibited by law and cannot be removed."
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
              children: "Compliance"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "medium" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Inline, {
                  css: { alignItems: "center", gap: "small" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Icon, {
                      name: "checkCircle",
                      css: { color: "success" }
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      children: "BIN Detection: Active"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginLeft: "large" },
                  children: "Debit and prepaid cards are automatically excluded from surcharging"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "medium" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Inline, {
                  css: { alignItems: "center", gap: "small" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Icon, {
                      name: "checkCircle",
                      css: { color: "success" }
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      children: "State Compliance: Active"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginLeft: "large" },
                  children: "Prohibited states (CA, CT, MA, ME, PR) are automatically blocked"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { marginBottom: "medium" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Inline, {
                  css: { alignItems: "center", gap: "small" },
                  children: [
                    (settings == null ? void 0 : settings.mastercardNotifiedAt) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Icon, {
                      name: "checkCircle",
                      css: { color: "success" }
                    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Icon, {
                      name: "warning",
                      css: { color: "warning" }
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                      children: "Mastercard Notification"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { fontSize: "small", color: "secondary", marginLeft: "large" },
                  children: (settings == null ? void 0 : settings.mastercardNotifiedAt) ? `Sent on ${new Date(settings.mastercardNotifiedAt).toLocaleDateString()}` : "Required 30 days before surcharging Mastercard transactions"
                }),
                !(settings == null ? void 0 : settings.mastercardNotifiedAt) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { marginTop: "small", marginLeft: "large" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Link, {
                    href: `${API_BASE_URL}/compliance/mastercard-letter`,
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
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
                  children: settings == null ? void 0 : settings.id
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
              css: { marginTop: "small" },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Link, {
                href: "https://docs.swa.dev/integration",
                children: "View integration documentation"
              })
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
                  swaEligible ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Icon, {
                    name: "checkCircle",
                    css: { color: "success" }
                  }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Icon, {
                    name: "xCircle",
                    css: { color: "warning" }
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
                swaReason === "state_prohibited" && "The customer's billing state prohibits credit card surcharging",
                swaReason === "prepaid_card" && "Surcharging prepaid cards is not allowed",
                swaReason === "unknown_card_type" && "Could not determine card type - surcharge not applied for safety"
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
  var BUILD_TIME = "2026-01-11 07:06:20.007209387 +0000 UTC m=+2.081077483";
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
    "post_install_action": {
      "type": "external",
      "url": "https://backend-production-5e37.up.railway.app/onboarding"
    },
    "ui_extension": {
      "content_security_policy": {
        "connect-src": [
          "https://backend-production-5e37.up.railway.app/api"
        ],
        "image-src": null,
        "purpose": ""
      },
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
    "version": "0.1.0"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHNhaWwvdWkvaW5kZXgudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHNhaWwvY2hhcnRzL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzdHJpcGUtaW50ZXJuYWwvdGFpbG9yLWRhc2hib2FyZC1jb21wb25lbnRzL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAibWFuaWZlc3QuanMiLCAiLi4vc3JjL3ZpZXdzL0Rhc2hib2FyZFZpZXcudHN4IiwgIi4uL3NyYy92aWV3cy9QYXltZW50RGV0YWlsVmlldy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5pbXBvcnQgRGFzaGJvYXJkVmlldyBmcm9tICcuLi9zcmMvdmlld3MvRGFzaGJvYXJkVmlldyc7aW1wb3J0IFBheW1lbnREZXRhaWxWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9QYXltZW50RGV0YWlsVmlldyc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjYtMDEtMTEgMDc6MDY6MjAuMDA3MjA5Mzg3ICswMDAwIFVUQyBtPSsyLjA4MTA3NzQ4Myc7XG5cbmV4cG9ydCB7IFxuICBEYXNoYm9hcmRWaWV3LFx0XG5cbiAgUGF5bWVudERldGFpbFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBudWxsXG4gIH0sXG4gIFwiY29ubmVjdF9wZXJtaXNzaW9uc1wiOiBudWxsLFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHJpdmF0ZVwiLFxuICBcImljb25cIjogXCIuL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJjb20uc3dhLnN1cmNoYXJnZVwiLFxuICBcIm5hbWVcIjogXCJTV0EgLSBTdXJjaGFyZ2UgQXV0b21hdGlvblwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGN1c3RvbWVyIGJpbGxpbmcgYWRkcmVzcyBmb3Igc3RhdGUgY29tcGxpYW5jZSBjaGVja3Mgd2hlbiBkZXRlcm1pbmluZyBzdXJjaGFyZ2UgZWxpZ2liaWxpdHlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9tZXRob2RfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiRGV0ZWN0IGNhcmQgZnVuZGluZyB0eXBlIChjcmVkaXQgdnMgZGViaXQpIHRvIGFwcGx5IHN1cmNoYXJnZXMgb25seSB0byBlbGlnaWJsZSBjcmVkaXQgY2FyZCB0cmFuc2FjdGlvbnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9pbnRlbnRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlVwZGF0ZSBwYXltZW50IGFtb3VudCB0byBpbmNsdWRlIGNhbGN1bGF0ZWQgc3VyY2hhcmdlIGFuZCBzdG9yZSB0cmFja2luZyBtZXRhZGF0YVwiXG4gICAgfVxuICBdLFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjoge1xuICAgIFwidHlwZVwiOiBcImV4dGVybmFsXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwL29uYm9hcmRpbmdcIlxuICB9LFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJjb250ZW50X3NlY3VyaXR5X3BvbGljeVwiOiB7XG4gICAgICBcImNvbm5lY3Qtc3JjXCI6IFtcbiAgICAgICAgXCJodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwL2FwaVwiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlwiXG4gICAgfSxcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJEYXNoYm9hcmRWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmhvbWUub3ZlcnZpZXdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJQYXltZW50RGV0YWlsVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5wYXltZW50LmRldGFpbFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjEuMFwiXG59O1xuIiwgIi8qKlxuICogRGFzaGJvYXJkIFZpZXdcbiAqXG4gKiBNYWluIHZpZXcgc2hvd24gb24gdGhlIFN0cmlwZSBEYXNoYm9hcmQgaG9tZSBwYWdlXG4gKiBEaXNwbGF5cyBzdXJjaGFyZ2Ugc2V0dGluZ3MgYW5kIGFuYWx5dGljc1xuICovXG5cbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250ZXh0VmlldyxcbiAgRGl2aWRlcixcbiAgSWNvbixcbiAgSW5saW5lLFxuICBMaW5rLFxuICBTZWxlY3QsXG4gIFNwaW5uZXIsXG4gIFN3aXRjaCxcbiAgVGV4dEZpZWxkLFxuICBCYW5uZXIsXG59IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9iYWNrZW5kLXByb2R1Y3Rpb24tNWUzNy51cC5yYWlsd2F5LmFwcCc7XG5cbi8vIFN0YXRlcyB3aGVyZSBzdXJjaGFyZ2luZyBpcyBwcm9oaWJpdGVkXG5jb25zdCBQUk9ISUJJVEVEX1NUQVRFUyA9IFsnQ0EnLCAnQ1QnLCAnTUEnLCAnTUUnLCAnUFInXTtcblxuaW50ZXJmYWNlIE1lcmNoYW50U2V0dGluZ3Mge1xuICBpZDogc3RyaW5nO1xuICBzdXJjaGFyZ2VSYXRlOiBudW1iZXI7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG4gIGV4Y2x1ZGVkU3RhdGVzOiBzdHJpbmdbXTtcbiAgbWFzdGVyY2FyZE5vdGlmaWVkQXQ6IHN0cmluZyB8IG51bGw7XG59XG5cbmludGVyZmFjZSBBbmFseXRpY3Mge1xuICB0b3RhbFRyYW5zYWN0aW9uczogbnVtYmVyO1xuICB0b3RhbFN1cmNoYXJnZXM6IG51bWJlcjtcbiAgbGFzdDMwRGF5czoge1xuICAgIGVsaWdpYmxlOiBudW1iZXI7XG4gICAgaW5lbGlnaWJsZTogbnVtYmVyO1xuICAgIHN1cmNoYXJnZUFtb3VudDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkVmlldyA9ICh7XG4gIHVzZXJDb250ZXh0LFxuICBlbnZpcm9ubWVudCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZTxNZXJjaGFudFNldHRpbmdzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthbmFseXRpY3MsIHNldEFuYWx5dGljc10gPSB1c2VTdGF0ZTxBbmFseXRpY3MgfCBudWxsPihudWxsKTtcblxuICAvLyBGb3JtIHN0YXRlXG4gIGNvbnN0IFtzdXJjaGFyZ2VSYXRlLCBzZXRTdXJjaGFyZ2VSYXRlXSA9IHVzZVN0YXRlKCcyLjknKTtcbiAgY29uc3QgW2VuYWJsZWQsIHNldEVuYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtleGNsdWRlZFN0YXRlcywgc2V0RXhjbHVkZWRTdGF0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdCBzdHJpcGVBY2NvdW50SWQgPSB1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQ7XG5cbiAgLy8gRmV0Y2ggbWVyY2hhbnQgc2V0dGluZ3Mgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXN0cmlwZUFjY291bnRJZCkgcmV0dXJuO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRFcnJvcihudWxsKTtcblxuICAgICAgICAvLyBGZXRjaCBvciBjcmVhdGUgbWVyY2hhbnRcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvbWVyY2hhbnRzL2J5LXN0cmlwZS8ke3N0cmlwZUFjY291bnRJZH1gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIG1lcmNoYW50IGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vYXBpL21lcmNoYW50c2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHN0cmlwZUFjY291bnRJZCxcbiAgICAgICAgICAgICAgc3VyY2hhcmdlUmF0ZTogMC4wMjksXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkU3RhdGVzOiBQUk9ISUJJVEVEX1NUQVRFUywgLy8gQXV0by1leGNsdWRlIHByb2hpYml0ZWQgc3RhdGVzXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBtZXJjaGFudCBzZXR0aW5ncycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVyY2hhbnQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFNldHRpbmdzKG1lcmNoYW50KTtcbiAgICAgICAgc2V0U3VyY2hhcmdlUmF0ZSgobWVyY2hhbnQuc3VyY2hhcmdlUmF0ZSAqIDEwMCkudG9GaXhlZCgxKSk7XG4gICAgICAgIHNldEVuYWJsZWQobWVyY2hhbnQuZW5hYmxlZCk7XG4gICAgICAgIHNldEV4Y2x1ZGVkU3RhdGVzKG1lcmNoYW50LmV4Y2x1ZGVkU3RhdGVzKTtcblxuICAgICAgICAvLyBGZXRjaCBhbmFseXRpY3NcbiAgICAgICAgY29uc3QgYW5hbHl0aWNzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS9tZXJjaGFudHMvJHttZXJjaGFudC5pZH0vYW5hbHl0aWNzYFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChhbmFseXRpY3NSZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0RhdGEgPSBhd2FpdCBhbmFseXRpY3NSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgc2V0QW5hbHl0aWNzKGFuYWx5dGljc0RhdGEpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbc3RyaXBlQWNjb3VudElkXSk7XG5cbiAgLy8gU2F2ZSBzZXR0aW5nc1xuICBjb25zdCBoYW5kbGVTYXZlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2V0dGluZ3M/LmlkKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgc2V0U2F2aW5nKHRydWUpO1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXBpL21lcmNoYW50cy8ke3NldHRpbmdzLmlkfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc3VyY2hhcmdlUmF0ZTogcGFyc2VGbG9hdChzdXJjaGFyZ2VSYXRlKSAvIDEwMCxcbiAgICAgICAgICAgIGVuYWJsZWQsXG4gICAgICAgICAgICBleGNsdWRlZFN0YXRlcyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBzYXZlIHNldHRpbmdzJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRTZXR0aW5ncyh1cGRhdGVkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNhdmUnKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzZXR0aW5ncz8uaWQsIHN1cmNoYXJnZVJhdGUsIGVuYWJsZWQsIGV4Y2x1ZGVkU3RhdGVzXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiU1dBIC0gU3VyY2hhcmdlIEF1dG9tYXRpb25cIj5cbiAgICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ2xhcmdlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8U3Bpbm5lciBzaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+TG9hZGluZyBzZXR0aW5ncy4uLjwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJTV0EgLSBTdXJjaGFyZ2UgQXV0b21hdGlvblwiPlxuICAgICAgICA8QmFubmVyXG4gICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcbiAgICAgICAgICB0aXRsZT1cIkVycm9yXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZXJyb3J9XG4gICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX0+UmV0cnk8L0J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChjZW50czogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQoY2VudHMgLyAxMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3XG4gICAgICB0aXRsZT1cIlNXQSAtIFN1cmNoYXJnZSBBdXRvbWF0aW9uXCJcbiAgICAgIGFjdGlvbnM9e1xuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17aGFuZGxlU2F2ZX0gZGlzYWJsZWQ9e3NhdmluZ30+XG4gICAgICAgICAge3NhdmluZyA/ICdTYXZpbmcuLi4nIDogJ1NhdmUgU2V0dGluZ3MnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIH1cbiAgICA+XG4gICAgICB7LyogQW5hbHl0aWNzIFN1bW1hcnkgKi99XG4gICAgICB7YW5hbHl0aWNzICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbGFyZ2UnIH19PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgIExhc3QgMzAgRGF5c1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGdhcDogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgU3VyY2hhcmdlcyBDb2xsZWN0ZWRcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAneGxhcmdlJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShhbmFseXRpY3MubGFzdDMwRGF5cy5zdXJjaGFyZ2VBbW91bnQpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgICBFbGlnaWJsZSBUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAneGxhcmdlJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgICAgICAgIHthbmFseXRpY3MubGFzdDMwRGF5cy5lbGlnaWJsZX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgSW5lbGlnaWJsZSAoRGViaXQvU3RhdGUpXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3hsYXJnZScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICAgICAgICB7YW5hbHl0aWNzLmxhc3QzMERheXMuaW5lbGlnaWJsZX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciAvPlxuXG4gICAgICB7LyogU2V0dGluZ3MgKi99XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdsYXJnZScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgU3VyY2hhcmdlIFNldHRpbmdzXG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgbGFiZWw9XCJFbmFibGUgU3VyY2hhcmdpbmdcIlxuICAgICAgICAgICAgY2hlY2tlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW5hYmxlZChlLnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScsIG1hcmdpblRvcDogJ3hzbWFsbCcgfX0+XG4gICAgICAgICAgICBXaGVuIGRpc2FibGVkLCBubyBzdXJjaGFyZ2VzIHdpbGwgYmUgYXBwbGllZCB0byBhbnkgdHJhbnNhY3Rpb25zXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJTdXJjaGFyZ2UgUmF0ZSAoJSlcIlxuICAgICAgICAgICAgdmFsdWU9e3N1cmNoYXJnZVJhdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN1cmNoYXJnZVJhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjNcIlxuICAgICAgICAgICAgc3RlcD1cIjAuMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICAgICAgTWF4aW11bSBhbGxvd2VkOiAzJSAoVmlzYS9NYXN0ZXJjYXJkIHJ1bGVzKS4gU29tZSBzdGF0ZXMgaGF2ZSBsb3dlciBjYXBzLlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ3hzbWFsbCcsIGZvbnRXZWlnaHQ6ICdtZWRpdW0nIH19PlxuICAgICAgICAgICAgRXhjbHVkZWQgU3RhdGVzXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JywgbWFyZ2luQm90dG9tOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgQ3VzdG9tZXJzIGZyb20gdGhlc2Ugc3RhdGVzIHdpbGwgbm90IGJlIGNoYXJnZWQgYSBzdXJjaGFyZ2UuXG4gICAgICAgICAgICBTdGF0ZXMgbWFya2VkIHdpdGggKiBhcmUgcHJvaGliaXRlZCBieSBsYXcgYW5kIGNhbm5vdCBiZSByZW1vdmVkLlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGdhcDogJ3NtYWxsJywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICAgIHtbJ0NBJywgJ0NUJywgJ01BJywgJ01FJywgJ0NPJywgJ01UJywgJ05ZJywgJ1BSJ10ubWFwKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc1Byb2hpYml0ZWQgPSBQUk9ISUJJVEVEX1NUQVRFUy5pbmNsdWRlcyhzdGF0ZSk7XG4gICAgICAgICAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPSBleGNsdWRlZFN0YXRlcy5pbmNsdWRlcyhzdGF0ZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e3N0YXRlfVxuICAgICAgICAgICAgICAgICAgdHlwZT17aXNFeGNsdWRlZCA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJvaGliaXRlZH1cbiAgICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUHJvaGliaXRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFeGNsdWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEV4Y2x1ZGVkU3RhdGVzKGV4Y2x1ZGVkU3RhdGVzLmZpbHRlcigocykgPT4gcyAhPT0gc3RhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRFeGNsdWRlZFN0YXRlcyhbLi4uZXhjbHVkZWRTdGF0ZXMsIHN0YXRlXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N0YXRlfVxuICAgICAgICAgICAgICAgICAge2lzUHJvaGliaXRlZCA/ICcqJyA6ICcnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIHsvKiBDb21wbGlhbmNlIFNlY3Rpb24gKi99XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdsYXJnZScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgQ29tcGxpYW5jZVxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2tDaXJjbGVcIiBjc3M9e3sgY29sb3I6ICdzdWNjZXNzJyB9fSAvPlxuICAgICAgICAgICAgPEJveD5CSU4gRGV0ZWN0aW9uOiBBY3RpdmU8L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5MZWZ0OiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgRGViaXQgYW5kIHByZXBhaWQgY2FyZHMgYXJlIGF1dG9tYXRpY2FsbHkgZXhjbHVkZWQgZnJvbSBzdXJjaGFyZ2luZ1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2tDaXJjbGVcIiBjc3M9e3sgY29sb3I6ICdzdWNjZXNzJyB9fSAvPlxuICAgICAgICAgICAgPEJveD5TdGF0ZSBDb21wbGlhbmNlOiBBY3RpdmU8L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5MZWZ0OiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgUHJvaGliaXRlZCBzdGF0ZXMgKENBLCBDVCwgTUEsIE1FLCBQUikgYXJlIGF1dG9tYXRpY2FsbHkgYmxvY2tlZFxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICB7c2V0dGluZ3M/Lm1hc3RlcmNhcmROb3RpZmllZEF0ID8gKFxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2tDaXJjbGVcIiBjc3M9e3sgY29sb3I6ICdzdWNjZXNzJyB9fSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cIndhcm5pbmdcIiBjc3M9e3sgY29sb3I6ICd3YXJuaW5nJyB9fSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCb3g+TWFzdGVyY2FyZCBOb3RpZmljYXRpb248L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5MZWZ0OiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAge3NldHRpbmdzPy5tYXN0ZXJjYXJkTm90aWZpZWRBdFxuICAgICAgICAgICAgICA/IGBTZW50IG9uICR7bmV3IERhdGUoc2V0dGluZ3MubWFzdGVyY2FyZE5vdGlmaWVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfWBcbiAgICAgICAgICAgICAgOiAnUmVxdWlyZWQgMzAgZGF5cyBiZWZvcmUgc3VyY2hhcmdpbmcgTWFzdGVyY2FyZCB0cmFuc2FjdGlvbnMnfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHshc2V0dGluZ3M/Lm1hc3RlcmNhcmROb3RpZmllZEF0ICYmIChcbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ3NtYWxsJywgbWFyZ2luTGVmdDogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7QVBJX0JBU0VfVVJMfS9jb21wbGlhbmNlL21hc3RlcmNhcmQtbGV0dGVyYH0+XG4gICAgICAgICAgICAgICAgR2VuZXJhdGUgbm90aWZpY2F0aW9uIGxldHRlclxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8RGl2aWRlciAvPlxuXG4gICAgICB7LyogSW50ZWdyYXRpb24gKi99XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdsYXJnZScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgSW50ZWdyYXRpb25cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgTWVyY2hhbnQgSUQ6IDxjb2RlPntzZXR0aW5ncz8uaWR9PC9jb2RlPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2RvY3Muc3dhLmRldi9pbnRlZ3JhdGlvblwiPlxuICAgICAgICAgICAgVmlldyBpbnRlZ3JhdGlvbiBkb2N1bWVudGF0aW9uXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRWaWV3O1xuIiwgIi8qKlxuICogUGF5bWVudCBEZXRhaWwgVmlld1xuICpcbiAqIFNob3duIG9uIHRoZSBwYXltZW50L2NoYXJnZSBkZXRhaWwgcGFnZSBpbiBTdHJpcGUgRGFzaGJvYXJkXG4gKiBEaXNwbGF5cyBzdXJjaGFyZ2UgaW5mb3JtYXRpb24gZm9yIHRoZSBzcGVjaWZpYyBwYXltZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgQm94LFxuICBDb250ZXh0VmlldyxcbiAgRGl2aWRlcixcbiAgSWNvbixcbiAgSW5saW5lLFxuICBCYWRnZSxcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgUGF5bWVudERldGFpbFZpZXcgPSAoe1xuICBlbnZpcm9ubWVudCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAvLyBHZXQgcGF5bWVudCBpbnRlbnQgZnJvbSBlbnZpcm9ubWVudCBjb250ZXh0XG4gIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBlbnZpcm9ubWVudD8ub2JqZWN0Q29udGV4dD8ub2JqZWN0O1xuXG4gIGlmICghcGF5bWVudEludGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJTV0EgU3VyY2hhcmdlIEluZm9cIj5cbiAgICAgICAgPEJveCBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgIE5vIHBheW1lbnQgaW5mb3JtYXRpb24gYXZhaWxhYmxlXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApO1xuICB9XG5cbiAgLy8gRXh0cmFjdCBTV0EgbWV0YWRhdGFcbiAgY29uc3QgbWV0YWRhdGEgPSBwYXltZW50SW50ZW50Lm1ldGFkYXRhIHx8IHt9O1xuICBjb25zdCBzd2FNZXJjaGFudElkID0gbWV0YWRhdGEuc3dhX21lcmNoYW50X2lkO1xuICBjb25zdCBzd2FCYXNlQW1vdW50ID0gcGFyc2VJbnQobWV0YWRhdGEuc3dhX2Jhc2VfYW1vdW50IHx8ICcwJywgMTApO1xuICBjb25zdCBzd2FTdXJjaGFyZ2VBbW91bnQgPSBwYXJzZUludChtZXRhZGF0YS5zd2Ffc3VyY2hhcmdlX2Ftb3VudCB8fCAnMCcsIDEwKTtcbiAgY29uc3Qgc3dhRWxpZ2libGUgPSBtZXRhZGF0YS5zd2FfZWxpZ2libGUgPT09ICd0cnVlJztcbiAgY29uc3Qgc3dhUmVhc29uID0gbWV0YWRhdGEuc3dhX3JlYXNvbiB8fCAndW5rbm93bic7XG5cbiAgLy8gQ2hlY2sgaWYgdGhpcyBwYXltZW50IHdhcyBwcm9jZXNzZWQgdGhyb3VnaCBTV0FcbiAgaWYgKCFzd2FNZXJjaGFudElkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlNXQSBTdXJjaGFyZ2UgSW5mb1wiPlxuICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgVGhpcyBwYXltZW50IHdhcyBub3QgcHJvY2Vzc2VkIHRocm91Z2ggU1dBXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoY2VudHM6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgfSkuZm9ybWF0KGNlbnRzIC8gMTAwKTtcbiAgfTtcblxuICBjb25zdCBnZXRSZWFzb25MYWJlbCA9IChyZWFzb246IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgbGFiZWxzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgZWxpZ2libGU6ICdTdXJjaGFyZ2UgQXBwbGllZCcsXG4gICAgICBzdGF0ZV9wcm9oaWJpdGVkOiAnU3RhdGUgUHJvaGliaXRlZCcsXG4gICAgICBkZWJpdF9jYXJkOiAnRGViaXQgQ2FyZCcsXG4gICAgICBwcmVwYWlkX2NhcmQ6ICdQcmVwYWlkIENhcmQnLFxuICAgICAgdW5rbm93bl9jYXJkX3R5cGU6ICdVbmtub3duIENhcmQgVHlwZScsXG4gICAgICBtZXJjaGFudF9kaXNhYmxlZDogJ1N1cmNoYXJnaW5nIERpc2FibGVkJyxcbiAgICAgIG1lcmNoYW50X2V4Y2x1ZGVkX3N0YXRlOiAnU3RhdGUgRXhjbHVkZWQgYnkgTWVyY2hhbnQnLFxuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsc1tyZWFzb25dIHx8IHJlYXNvbjtcbiAgfTtcblxuICBjb25zdCBnZXRTdGF0dXNCYWRnZSA9ICgpID0+IHtcbiAgICBpZiAoc3dhRWxpZ2libGUgJiYgc3dhU3VyY2hhcmdlQW1vdW50ID4gMCkge1xuICAgICAgcmV0dXJuIDxCYWRnZSB0eXBlPVwicG9zaXRpdmVcIj5TdXJjaGFyZ2UgQXBwbGllZDwvQmFkZ2U+O1xuICAgIH1cbiAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJuZXV0cmFsXCI+Tm8gU3VyY2hhcmdlPC9CYWRnZT47XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJTV0EgU3VyY2hhcmdlIEluZm9cIj5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgIHtnZXRTdGF0dXNCYWRnZSgpfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ2xhcmdlJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZ2FwOiAneGxhcmdlJyB9fT5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgQmFzZSBBbW91bnRcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdsYXJnZScsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+XG4gICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShzd2FCYXNlQW1vdW50KX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAge3N3YVN1cmNoYXJnZUFtb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgICAgU3VyY2hhcmdlXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdsYXJnZScsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3koc3dhU3VyY2hhcmdlQW1vdW50KX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgICAgVG90YWwgQ2hhcmdlZFxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnbGFyZ2UnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PlxuICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHN3YUJhc2VBbW91bnQgKyBzd2FTdXJjaGFyZ2VBbW91bnQpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdtZWRpdW0nLCBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgRWxpZ2liaWxpdHkgRGV0YWlsc1xuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgIHtzd2FFbGlnaWJsZSA/IChcbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNoZWNrQ2lyY2xlXCIgY3NzPXt7IGNvbG9yOiAnc3VjY2VzcycgfX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ4Q2lyY2xlXCIgY3NzPXt7IGNvbG9yOiAnd2FybmluZycgfX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Qm94PntnZXRSZWFzb25MYWJlbChzd2FSZWFzb24pfTwvQm94PlxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7IXN3YUVsaWdpYmxlICYmIChcbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAge3N3YVJlYXNvbiA9PT0gJ2RlYml0X2NhcmQnICYmIChcbiAgICAgICAgICAgICAgJ1N1cmNoYXJnaW5nIGRlYml0IGNhcmRzIGlzIHByb2hpYml0ZWQgaW4gdGhlIFVTJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzd2FSZWFzb24gPT09ICdzdGF0ZV9wcm9oaWJpdGVkJyAmJiAoXG4gICAgICAgICAgICAgICdUaGUgY3VzdG9tZXJcXCdzIGJpbGxpbmcgc3RhdGUgcHJvaGliaXRzIGNyZWRpdCBjYXJkIHN1cmNoYXJnaW5nJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzd2FSZWFzb24gPT09ICdwcmVwYWlkX2NhcmQnICYmIChcbiAgICAgICAgICAgICAgJ1N1cmNoYXJnaW5nIHByZXBhaWQgY2FyZHMgaXMgbm90IGFsbG93ZWQnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N3YVJlYXNvbiA9PT0gJ3Vua25vd25fY2FyZF90eXBlJyAmJiAoXG4gICAgICAgICAgICAgICdDb3VsZCBub3QgZGV0ZXJtaW5lIGNhcmQgdHlwZSAtIHN1cmNoYXJnZSBub3QgYXBwbGllZCBmb3Igc2FmZXR5J1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuXG4gICAgICB7c3dhU3VyY2hhcmdlQW1vdW50ID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdtZWRpdW0nIH19PlxuICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgUmF0ZSBBcHBsaWVkOiB7KChzd2FTdXJjaGFyZ2VBbW91bnQgLyBzd2FCYXNlQW1vdW50KSAqIDEwMCkudG9GaXhlZCgyKX0lXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXltZW50RGV0YWlsVmlldztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQUEsVUFBQSxVQUFBO0FBS2EsY0FBQSxPQUFNLEdBQUEsUUFBQSw0QkFBK0MsS0FBSztBQUUxRCxjQUFBLFVBQ1gsR0FBQSxRQUFBLDRCQUFrRCxRQUFROzs7Ozs7Ozs7O0FDUjVELFVBQUEsVUFBQSxVQUFBO0FBRWEsY0FBQSxTQUFRLEdBQUEsUUFBQSw0QkFBZ0QsT0FBTztBQUcvRCxjQUFBLFVBQVMsR0FBQSxRQUFBLDRCQUNwQixRQUFRO0FBSUcsY0FBQSxlQUFjLEdBQUEsUUFBQSw0QkFHekIsZUFBZTtRQUNmLGVBQWUsQ0FBQyxhQUFhO09BQzlCO0FBR1ksY0FBQSxZQUFXLEdBQUEsUUFBQSw0QkFDdEIsWUFDQTtRQUNFLGVBQWUsQ0FBQyxPQUFPO09BQ3hCO0FBSVUsY0FBQSxXQUFVLEdBQUEsUUFBQSw0QkFDckIsU0FBUztBQUlFLGNBQUEsa0JBQWlCLEdBQUEsUUFBQSw0QkFHNUIsZ0JBQWdC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
