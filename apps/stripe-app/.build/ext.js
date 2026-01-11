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
                !(settings == null ? void 0 : settings.mastercardNotifiedAt) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                  css: { marginTop: "small", marginLeft: "large" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Link, {
                    href: `${API_BASE_URL}/api/merchants/${settings == null ? void 0 : settings.id}/compliance/mastercard-letter`,
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
  var BUILD_TIME = "2026-01-11 07:14:57.097576054 +0000 UTC m=+0.827285536";
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
    "version": "0.1.1"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHNhaWwvdWkvaW5kZXgudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHNhaWwvY2hhcnRzL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzdHJpcGUtaW50ZXJuYWwvdGFpbG9yLWRhc2hib2FyZC1jb21wb25lbnRzL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAibWFuaWZlc3QuanMiLCAiLi4vc3JjL3ZpZXdzL0Rhc2hib2FyZFZpZXcudHN4IiwgIi4uL3NyYy92aWV3cy9QYXltZW50RGV0YWlsVmlldy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5pbXBvcnQgRGFzaGJvYXJkVmlldyBmcm9tICcuLi9zcmMvdmlld3MvRGFzaGJvYXJkVmlldyc7aW1wb3J0IFBheW1lbnREZXRhaWxWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9QYXltZW50RGV0YWlsVmlldyc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjYtMDEtMTEgMDc6MTQ6NTcuMDk3NTc2MDU0ICswMDAwIFVUQyBtPSswLjgyNzI4NTUzNic7XG5cbmV4cG9ydCB7IFxuICBEYXNoYm9hcmRWaWV3LFx0XG5cbiAgUGF5bWVudERldGFpbFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBudWxsXG4gIH0sXG4gIFwiY29ubmVjdF9wZXJtaXNzaW9uc1wiOiBudWxsLFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHJpdmF0ZVwiLFxuICBcImljb25cIjogXCIuL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJjb20uc3dhLnN1cmNoYXJnZVwiLFxuICBcIm5hbWVcIjogXCJTV0EgLSBTdXJjaGFyZ2UgQXV0b21hdGlvblwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGN1c3RvbWVyIGJpbGxpbmcgYWRkcmVzcyBmb3Igc3RhdGUgY29tcGxpYW5jZSBjaGVja3Mgd2hlbiBkZXRlcm1pbmluZyBzdXJjaGFyZ2UgZWxpZ2liaWxpdHlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9tZXRob2RfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiRGV0ZWN0IGNhcmQgZnVuZGluZyB0eXBlIChjcmVkaXQgdnMgZGViaXQpIHRvIGFwcGx5IHN1cmNoYXJnZXMgb25seSB0byBlbGlnaWJsZSBjcmVkaXQgY2FyZCB0cmFuc2FjdGlvbnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9pbnRlbnRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlVwZGF0ZSBwYXltZW50IGFtb3VudCB0byBpbmNsdWRlIGNhbGN1bGF0ZWQgc3VyY2hhcmdlIGFuZCBzdG9yZSB0cmFja2luZyBtZXRhZGF0YVwiXG4gICAgfVxuICBdLFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjoge1xuICAgIFwidHlwZVwiOiBcImV4dGVybmFsXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwL29uYm9hcmRpbmdcIlxuICB9LFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJjb250ZW50X3NlY3VyaXR5X3BvbGljeVwiOiB7XG4gICAgICBcImNvbm5lY3Qtc3JjXCI6IFtcbiAgICAgICAgXCJodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwL2FwaVwiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlwiXG4gICAgfSxcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJEYXNoYm9hcmRWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmhvbWUub3ZlcnZpZXdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJQYXltZW50RGV0YWlsVmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5wYXltZW50LmRldGFpbFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjEuMVwiXG59O1xuIiwgIi8qKlxuICogRGFzaGJvYXJkIFZpZXdcbiAqXG4gKiBNYWluIHZpZXcgc2hvd24gb24gdGhlIFN0cmlwZSBEYXNoYm9hcmQgaG9tZSBwYWdlXG4gKiBEaXNwbGF5cyBzdXJjaGFyZ2Ugc2V0dGluZ3MgYW5kIGFuYWx5dGljc1xuICovXG5cbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250ZXh0VmlldyxcbiAgRGl2aWRlcixcbiAgSW5saW5lLFxuICBMaW5rLFxuICBTd2l0Y2gsXG4gIFRleHRGaWVsZCxcbiAgQmFkZ2UsXG4gIE5vdGljZSxcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwJztcblxuLy8gU3RhdGVzIHdoZXJlIHN1cmNoYXJnaW5nIGlzIHByb2hpYml0ZWRcbmNvbnN0IFBST0hJQklURURfU1RBVEVTID0gWydDQScsICdDVCcsICdNQScsICdNRScsICdQUiddO1xuXG5pbnRlcmZhY2UgTWVyY2hhbnRTZXR0aW5ncyB7XG4gIGlkOiBzdHJpbmc7XG4gIHN1cmNoYXJnZVJhdGU6IG51bWJlcjtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgZXhjbHVkZWRTdGF0ZXM6IHN0cmluZ1tdO1xuICBtYXN0ZXJjYXJkTm90aWZpZWRBdDogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIEFuYWx5dGljcyB7XG4gIHRvdGFsVHJhbnNhY3Rpb25zOiBudW1iZXI7XG4gIHRvdGFsU3VyY2hhcmdlczogbnVtYmVyO1xuICBsYXN0MzBEYXlzOiB7XG4gICAgZWxpZ2libGU6IG51bWJlcjtcbiAgICBpbmVsaWdpYmxlOiBudW1iZXI7XG4gICAgc3VyY2hhcmdlQW1vdW50OiBudW1iZXI7XG4gIH07XG59XG5cbmNvbnN0IERhc2hib2FyZFZpZXcgPSAoe1xuICB1c2VyQ29udGV4dCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZTxNZXJjaGFudFNldHRpbmdzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthbmFseXRpY3MsIHNldEFuYWx5dGljc10gPSB1c2VTdGF0ZTxBbmFseXRpY3MgfCBudWxsPihudWxsKTtcblxuICAvLyBGb3JtIHN0YXRlXG4gIGNvbnN0IFtzdXJjaGFyZ2VSYXRlLCBzZXRTdXJjaGFyZ2VSYXRlXSA9IHVzZVN0YXRlKCcyLjknKTtcbiAgY29uc3QgW2VuYWJsZWQsIHNldEVuYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtleGNsdWRlZFN0YXRlcywgc2V0RXhjbHVkZWRTdGF0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdCBzdHJpcGVBY2NvdW50SWQgPSB1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQ7XG5cbiAgLy8gRmV0Y2ggbWVyY2hhbnQgc2V0dGluZ3Mgb24gbW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXN0cmlwZUFjY291bnRJZCkgcmV0dXJuO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRFcnJvcihudWxsKTtcblxuICAgICAgICAvLyBGZXRjaCBvciBjcmVhdGUgbWVyY2hhbnRcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvbWVyY2hhbnRzL2J5LXN0cmlwZS8ke3N0cmlwZUFjY291bnRJZH1gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIG1lcmNoYW50IGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0vYXBpL21lcmNoYW50c2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHN0cmlwZUFjY291bnRJZCxcbiAgICAgICAgICAgICAgc3VyY2hhcmdlUmF0ZTogMC4wMjksXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGV4Y2x1ZGVkU3RhdGVzOiBQUk9ISUJJVEVEX1NUQVRFUyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIG1lcmNoYW50IHNldHRpbmdzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXJjaGFudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0U2V0dGluZ3MobWVyY2hhbnQpO1xuICAgICAgICBzZXRTdXJjaGFyZ2VSYXRlKChtZXJjaGFudC5zdXJjaGFyZ2VSYXRlICogMTAwKS50b0ZpeGVkKDEpKTtcbiAgICAgICAgc2V0RW5hYmxlZChtZXJjaGFudC5lbmFibGVkKTtcbiAgICAgICAgc2V0RXhjbHVkZWRTdGF0ZXMobWVyY2hhbnQuZXhjbHVkZWRTdGF0ZXMpO1xuXG4gICAgICAgIC8vIEZldGNoIGFuYWx5dGljc1xuICAgICAgICBjb25zdCBhbmFseXRpY3NSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGAke0FQSV9CQVNFX1VSTH0vYXBpL21lcmNoYW50cy8ke21lcmNoYW50LmlkfS9hbmFseXRpY3NgXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGFuYWx5dGljc1Jlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzRGF0YSA9IGF3YWl0IGFuYWx5dGljc1Jlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBzZXRBbmFseXRpY3MoYW5hbHl0aWNzRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtzdHJpcGVBY2NvdW50SWRdKTtcblxuICAvLyBTYXZlIHNldHRpbmdzXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZXR0aW5ncz8uaWQpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvbWVyY2hhbnRzLyR7c2V0dGluZ3MuaWR9YCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBzdXJjaGFyZ2VSYXRlOiBwYXJzZUZsb2F0KHN1cmNoYXJnZVJhdGUpIC8gMTAwLFxuICAgICAgICAgICAgZW5hYmxlZCxcbiAgICAgICAgICAgIGV4Y2x1ZGVkU3RhdGVzLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHNhdmUgc2V0dGluZ3MnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFNldHRpbmdzKHVwZGF0ZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2F2ZScpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3NldHRpbmdzPy5pZCwgc3VyY2hhcmdlUmF0ZSwgZW5hYmxlZCwgZXhjbHVkZWRTdGF0ZXNdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJTV0EgLSBTdXJjaGFyZ2UgQXV0b21hdGlvblwiPlxuICAgICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbGFyZ2UnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+TG9hZGluZyBzZXR0aW5ncy4uLjwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGV4dFZpZXc+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJTV0EgLSBTdXJjaGFyZ2UgQXV0b21hdGlvblwiPlxuICAgICAgICA8Tm90aWNlIHR5cGU9XCJjYXV0aW9uXCIgdGl0bGU9XCJFcnJvclwiPlxuICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgPC9Ob3RpY2U+XG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBvblByZXNzPXsoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCl9PlJldHJ5PC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoY2VudHM6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgfSkuZm9ybWF0KGNlbnRzIC8gMTAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0Vmlld1xuICAgICAgdGl0bGU9XCJTV0EgLSBTdXJjaGFyZ2UgQXV0b21hdGlvblwiXG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uUHJlc3M9e2hhbmRsZVNhdmV9IGRpc2FibGVkPXtzYXZpbmd9PlxuICAgICAgICAgIHtzYXZpbmcgPyAnU2F2aW5nLi4uJyA6ICdTYXZlIFNldHRpbmdzJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICB9XG4gICAgPlxuICAgICAgey8qIEFuYWx5dGljcyBTdW1tYXJ5ICovfVxuICAgICAge2FuYWx5dGljcyAmJiAoXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ2xhcmdlJyB9fT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICBMYXN0IDMwIERheXNcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBnYXA6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgIFN1cmNoYXJnZXMgQ29sbGVjdGVkXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3hsYXJnZScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3koYW5hbHl0aWNzLmxhc3QzMERheXMuc3VyY2hhcmdlQW1vdW50KX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgRWxpZ2libGUgVHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3hsYXJnZScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cbiAgICAgICAgICAgICAgICB7YW5hbHl0aWNzLmxhc3QzMERheXMuZWxpZ2libGV9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgIEluZWxpZ2libGVcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAneGxhcmdlJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgICAgICAgIHthbmFseXRpY3MubGFzdDMwRGF5cy5pbmVsaWdpYmxlfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIHsvKiBTZXR0aW5ncyAqL31cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ2xhcmdlJyB9fT5cbiAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJywgbWFyZ2luQm90dG9tOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICBTdXJjaGFyZ2UgU2V0dGluZ3NcbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICBsYWJlbD1cIkVuYWJsZSBTdXJjaGFyZ2luZ1wiXG4gICAgICAgICAgICBjaGVja2VkPXtlbmFibGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbmFibGVkKGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JywgbWFyZ2luVG9wOiAneHNtYWxsJyB9fT5cbiAgICAgICAgICAgIFdoZW4gZGlzYWJsZWQsIG5vIHN1cmNoYXJnZXMgd2lsbCBiZSBhcHBsaWVkXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJTdXJjaGFyZ2UgUmF0ZSAoJSlcIlxuICAgICAgICAgICAgdmFsdWU9e3N1cmNoYXJnZVJhdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN1cmNoYXJnZVJhdGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JywgbWFyZ2luVG9wOiAneHNtYWxsJyB9fT5cbiAgICAgICAgICAgIE1heGltdW06IDMlIChWaXNhL01DIHJ1bGVzKVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ3hzbWFsbCcsIGZvbnRXZWlnaHQ6ICdtZWRpdW0nIH19PlxuICAgICAgICAgICAgRXhjbHVkZWQgU3RhdGVzXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JywgbWFyZ2luQm90dG9tOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgU3RhdGVzIG1hcmtlZCB3aXRoICogYXJlIHByb2hpYml0ZWQgYnkgbGF3LlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGdhcDogJ3NtYWxsJywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICAgIHtbJ0NBJywgJ0NUJywgJ01BJywgJ01FJywgJ0NPJywgJ01UJywgJ05ZJywgJ1BSJ10ubWFwKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc1Byb2hpYml0ZWQgPSBQUk9ISUJJVEVEX1NUQVRFUy5pbmNsdWRlcyhzdGF0ZSk7XG4gICAgICAgICAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPSBleGNsdWRlZFN0YXRlcy5pbmNsdWRlcyhzdGF0ZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e3N0YXRlfVxuICAgICAgICAgICAgICAgICAgdHlwZT17aXNFeGNsdWRlZCA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUHJvaGliaXRlZH1cbiAgICAgICAgICAgICAgICAgIG9uUHJlc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUHJvaGliaXRlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFeGNsdWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEV4Y2x1ZGVkU3RhdGVzKGV4Y2x1ZGVkU3RhdGVzLmZpbHRlcigocykgPT4gcyAhPT0gc3RhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRFeGNsdWRlZFN0YXRlcyhbLi4uZXhjbHVkZWRTdGF0ZXMsIHN0YXRlXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N0YXRlfXtpc1Byb2hpYml0ZWQgPyAnKicgOiAnJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8RGl2aWRlciAvPlxuXG4gICAgICB7LyogQ29tcGxpYW5jZSBTZWN0aW9uICovfVxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbGFyZ2UnIH19PlxuICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIENvbXBsaWFuY2UgU3RhdHVzXG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJwb3NpdGl2ZVwiPkFjdGl2ZTwvQmFkZ2U+XG4gICAgICAgICAgICA8Qm94PkJJTiBEZXRlY3Rpb248L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5MZWZ0OiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgRGViaXQvcHJlcGFpZCBjYXJkcyBleGNsdWRlZCBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJwb3NpdGl2ZVwiPkFjdGl2ZTwvQmFkZ2U+XG4gICAgICAgICAgICA8Qm94PlN0YXRlIENvbXBsaWFuY2U8L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5MZWZ0OiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgQ0EsIENULCBNQSwgTUUsIFBSIGJsb2NrZWRcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICB7c2V0dGluZ3M/Lm1hc3RlcmNhcmROb3RpZmllZEF0ID8gKFxuICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cInBvc2l0aXZlXCI+Q29tcGxldGU8L0JhZGdlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJ3YXJuaW5nXCI+UGVuZGluZzwvQmFkZ2U+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJveD5NYXN0ZXJjYXJkIE5vdGlmaWNhdGlvbjwvQm94PlxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScsIG1hcmdpbkxlZnQ6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICB7c2V0dGluZ3M/Lm1hc3RlcmNhcmROb3RpZmllZEF0XG4gICAgICAgICAgICAgID8gYFNlbnQgJHtuZXcgRGF0ZShzZXR0aW5ncy5tYXN0ZXJjYXJkTm90aWZpZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9YFxuICAgICAgICAgICAgICA6ICdSZXF1aXJlZCAzMCBkYXlzIGJlZm9yZSBzdXJjaGFyZ2luZyd9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgeyFzZXR0aW5ncz8ubWFzdGVyY2FyZE5vdGlmaWVkQXQgJiYgKFxuICAgICAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnLCBtYXJnaW5MZWZ0OiAnbGFyZ2UnIH19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtBUElfQkFTRV9VUkx9L2FwaS9tZXJjaGFudHMvJHtzZXR0aW5ncz8uaWR9L2NvbXBsaWFuY2UvbWFzdGVyY2FyZC1sZXR0ZXJgfT5cbiAgICAgICAgICAgICAgICBHZW5lcmF0ZSBub3RpZmljYXRpb24gbGV0dGVyXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIHsvKiBJbnRlZ3JhdGlvbiAqL31cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ2xhcmdlJyB9fT5cbiAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJywgbWFyZ2luQm90dG9tOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICBJbnRlZ3JhdGlvblxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICBNZXJjaGFudCBJRDoge3NldHRpbmdzPy5pZH1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRleHRWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkVmlldztcbiIsICIvKipcbiAqIFBheW1lbnQgRGV0YWlsIFZpZXdcbiAqXG4gKiBTaG93biBvbiB0aGUgcGF5bWVudC9jaGFyZ2UgZGV0YWlsIHBhZ2UgaW4gU3RyaXBlIERhc2hib2FyZFxuICogRGlzcGxheXMgc3VyY2hhcmdlIGluZm9ybWF0aW9uIGZvciB0aGUgc3BlY2lmaWMgcGF5bWVudFxuICovXG5cbmltcG9ydCB7XG4gIEJveCxcbiAgQ29udGV4dFZpZXcsXG4gIERpdmlkZXIsXG4gIElubGluZSxcbiAgQmFkZ2UsXG59IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcblxuY29uc3QgUGF5bWVudERldGFpbFZpZXcgPSAoe1xuICBlbnZpcm9ubWVudCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICAvLyBHZXQgcGF5bWVudCBpbnRlbnQgZnJvbSBlbnZpcm9ubWVudCBjb250ZXh0XG4gIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBlbnZpcm9ubWVudD8ub2JqZWN0Q29udGV4dD8ub2JqZWN0O1xuXG4gIGlmICghcGF5bWVudEludGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJTV0EgU3VyY2hhcmdlIEluZm9cIj5cbiAgICAgICAgPEJveCBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgIE5vIHBheW1lbnQgaW5mb3JtYXRpb24gYXZhaWxhYmxlXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApO1xuICB9XG5cbiAgLy8gRXh0cmFjdCBTV0EgbWV0YWRhdGFcbiAgY29uc3QgbWV0YWRhdGEgPSBwYXltZW50SW50ZW50Lm1ldGFkYXRhIHx8IHt9O1xuICBjb25zdCBzd2FNZXJjaGFudElkID0gbWV0YWRhdGEuc3dhX21lcmNoYW50X2lkO1xuICBjb25zdCBzd2FCYXNlQW1vdW50ID0gcGFyc2VJbnQobWV0YWRhdGEuc3dhX2Jhc2VfYW1vdW50IHx8ICcwJywgMTApO1xuICBjb25zdCBzd2FTdXJjaGFyZ2VBbW91bnQgPSBwYXJzZUludChtZXRhZGF0YS5zd2Ffc3VyY2hhcmdlX2Ftb3VudCB8fCAnMCcsIDEwKTtcbiAgY29uc3Qgc3dhRWxpZ2libGUgPSBtZXRhZGF0YS5zd2FfZWxpZ2libGUgPT09ICd0cnVlJztcbiAgY29uc3Qgc3dhUmVhc29uID0gbWV0YWRhdGEuc3dhX3JlYXNvbiB8fCAndW5rbm93bic7XG5cbiAgLy8gQ2hlY2sgaWYgdGhpcyBwYXltZW50IHdhcyBwcm9jZXNzZWQgdGhyb3VnaCBTV0FcbiAgaWYgKCFzd2FNZXJjaGFudElkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlNXQSBTdXJjaGFyZ2UgSW5mb1wiPlxuICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgVGhpcyBwYXltZW50IHdhcyBub3QgcHJvY2Vzc2VkIHRocm91Z2ggU1dBXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoY2VudHM6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgfSkuZm9ybWF0KGNlbnRzIC8gMTAwKTtcbiAgfTtcblxuICBjb25zdCBnZXRSZWFzb25MYWJlbCA9IChyZWFzb246IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgbGFiZWxzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgZWxpZ2libGU6ICdTdXJjaGFyZ2UgQXBwbGllZCcsXG4gICAgICBzdGF0ZV9wcm9oaWJpdGVkOiAnU3RhdGUgUHJvaGliaXRlZCcsXG4gICAgICBkZWJpdF9jYXJkOiAnRGViaXQgQ2FyZCcsXG4gICAgICBwcmVwYWlkX2NhcmQ6ICdQcmVwYWlkIENhcmQnLFxuICAgICAgdW5rbm93bl9jYXJkX3R5cGU6ICdVbmtub3duIENhcmQgVHlwZScsXG4gICAgICBtZXJjaGFudF9kaXNhYmxlZDogJ1N1cmNoYXJnaW5nIERpc2FibGVkJyxcbiAgICAgIG1lcmNoYW50X2V4Y2x1ZGVkX3N0YXRlOiAnU3RhdGUgRXhjbHVkZWQgYnkgTWVyY2hhbnQnLFxuICAgIH07XG4gICAgcmV0dXJuIGxhYmVsc1tyZWFzb25dIHx8IHJlYXNvbjtcbiAgfTtcblxuICBjb25zdCBnZXRTdGF0dXNCYWRnZSA9ICgpID0+IHtcbiAgICBpZiAoc3dhRWxpZ2libGUgJiYgc3dhU3VyY2hhcmdlQW1vdW50ID4gMCkge1xuICAgICAgcmV0dXJuIDxCYWRnZSB0eXBlPVwicG9zaXRpdmVcIj5TdXJjaGFyZ2UgQXBwbGllZDwvQmFkZ2U+O1xuICAgIH1cbiAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJuZXV0cmFsXCI+Tm8gU3VyY2hhcmdlPC9CYWRnZT47XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dFZpZXcgdGl0bGU9XCJTV0EgU3VyY2hhcmdlIEluZm9cIj5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgIHtnZXRTdGF0dXNCYWRnZSgpfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ2xhcmdlJyB9fT5cbiAgICAgICAgPElubGluZSBjc3M9e3sgZ2FwOiAneGxhcmdlJyB9fT5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgQmFzZSBBbW91bnRcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdsYXJnZScsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+XG4gICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShzd2FCYXNlQW1vdW50KX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAge3N3YVN1cmNoYXJnZUFtb3VudCA+IDAgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgICAgU3VyY2hhcmdlXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdsYXJnZScsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3koc3dhU3VyY2hhcmdlQW1vdW50KX1cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgICAgVG90YWwgQ2hhcmdlZFxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnbGFyZ2UnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PlxuICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHN3YUJhc2VBbW91bnQgKyBzd2FTdXJjaGFyZ2VBbW91bnQpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdtZWRpdW0nLCBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgRWxpZ2liaWxpdHkgRGV0YWlsc1xuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgIHtzd2FFbGlnaWJsZSA/IChcbiAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJwb3NpdGl2ZVwiPkVsaWdpYmxlPC9CYWRnZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwid2FybmluZ1wiPk5vdCBFbGlnaWJsZTwvQmFkZ2U+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJveD57Z2V0UmVhc29uTGFiZWwoc3dhUmVhc29uKX08L0JveD5cbiAgICAgICAgICA8L0lubGluZT5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgeyFzd2FFbGlnaWJsZSAmJiAoXG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgIHtzd2FSZWFzb24gPT09ICdkZWJpdF9jYXJkJyAmJiAoXG4gICAgICAgICAgICAgICdTdXJjaGFyZ2luZyBkZWJpdCBjYXJkcyBpcyBwcm9oaWJpdGVkIGluIHRoZSBVUydcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3dhUmVhc29uID09PSAnc3RhdGVfcHJvaGliaXRlZCcgJiYgKFxuICAgICAgICAgICAgICBcIlRoZSBjdXN0b21lcidzIGJpbGxpbmcgc3RhdGUgcHJvaGliaXRzIHN1cmNoYXJnaW5nXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3dhUmVhc29uID09PSAncHJlcGFpZF9jYXJkJyAmJiAoXG4gICAgICAgICAgICAgICdTdXJjaGFyZ2luZyBwcmVwYWlkIGNhcmRzIGlzIG5vdCBhbGxvd2VkJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzd2FSZWFzb24gPT09ICd1bmtub3duX2NhcmRfdHlwZScgJiYgKFxuICAgICAgICAgICAgICAnQ291bGQgbm90IGRldGVybWluZSBjYXJkIHR5cGUnXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHtzd2FTdXJjaGFyZ2VBbW91bnQgPiAwICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+XG4gICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICBSYXRlIEFwcGxpZWQ6IHsoKHN3YVN1cmNoYXJnZUFtb3VudCAvIHN3YUJhc2VBbW91bnQpICogMTAwKS50b0ZpeGVkKDIpfSVcbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Db250ZXh0Vmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnREZXRhaWxWaWV3O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsVUFBQSxVQUFBLFVBQUE7QUFLYSxjQUFBLE9BQU0sR0FBQSxRQUFBLDRCQUErQyxLQUFLO0FBRTFELGNBQUEsVUFDWCxHQUFBLFFBQUEsNEJBQWtELFFBQVE7Ozs7Ozs7Ozs7QUNSNUQsVUFBQSxVQUFBLFVBQUE7QUFFYSxjQUFBLFNBQVEsR0FBQSxRQUFBLDRCQUFnRCxPQUFPO0FBRy9ELGNBQUEsVUFBUyxHQUFBLFFBQUEsNEJBQ3BCLFFBQVE7QUFJRyxjQUFBLGVBQWMsR0FBQSxRQUFBLDRCQUd6QixlQUFlO1FBQ2YsZUFBZSxDQUFDLGFBQWE7T0FDOUI7QUFHWSxjQUFBLFlBQVcsR0FBQSxRQUFBLDRCQUN0QixZQUNBO1FBQ0UsZUFBZSxDQUFDLE9BQU87T0FDeEI7QUFJVSxjQUFB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
