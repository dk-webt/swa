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
  var BUILD_TIME = "2026-01-11 07:20:21.347717257 +0000 UTC m=+0.847666660";
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
          "https://backend-production-5e37.up.railway.app/api/merchants",
          "https://backend-production-5e37.up.railway.app/api/compliance"
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
    "version": "0.1.2"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHNhaWwvdWkvaW5kZXgudHMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHJpcGUrdWktZXh0ZW5zaW9uLXNka0AzLjIuMF9AcmVtb3RlLXVpK3JwY0AxLjQuNy9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvQHNhaWwvY2hhcnRzL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzdHJpcGUtaW50ZXJuYWwvdGFpbG9yLWRhc2hib2FyZC1jb21wb25lbnRzL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3RyaXBlK3VpLWV4dGVuc2lvbi1zZGtAMy4yLjBfQHJlbW90ZS11aStycGNAMS40Ljcvbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAibWFuaWZlc3QuanMiLCAiLi4vc3JjL3ZpZXdzL0Rhc2hib2FyZFZpZXcudHN4IiwgIi4uL3NyYy92aWV3cy9QYXltZW50RGV0YWlsVmlldy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5pbXBvcnQgRGFzaGJvYXJkVmlldyBmcm9tICcuLi9zcmMvdmlld3MvRGFzaGJvYXJkVmlldyc7aW1wb3J0IFBheW1lbnREZXRhaWxWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9QYXltZW50RGV0YWlsVmlldyc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjYtMDEtMTEgMDc6MjA6MjEuMzQ3NzE3MjU3ICswMDAwIFVUQyBtPSswLjg0NzY2NjY2MCc7XG5cbmV4cG9ydCB7IFxuICBEYXNoYm9hcmRWaWV3LFx0XG5cbiAgUGF5bWVudERldGFpbFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJhcHBfYmFja2VuZFwiOiB7XG4gICAgXCJ3ZWJob29rc1wiOiBudWxsXG4gIH0sXG4gIFwiY29ubmVjdF9wZXJtaXNzaW9uc1wiOiBudWxsLFxuICBcImRpc3RyaWJ1dGlvbl90eXBlXCI6IFwicHJpdmF0ZVwiLFxuICBcImljb25cIjogXCIuL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJjb20uc3dhLnN1cmNoYXJnZVwiLFxuICBcIm5hbWVcIjogXCJTV0EgLSBTdXJjaGFyZ2UgQXV0b21hdGlvblwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjdXN0b21lcl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkIGN1c3RvbWVyIGJpbGxpbmcgYWRkcmVzcyBmb3Igc3RhdGUgY29tcGxpYW5jZSBjaGVja3Mgd2hlbiBkZXRlcm1pbmluZyBzdXJjaGFyZ2UgZWxpZ2liaWxpdHlcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9tZXRob2RfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiRGV0ZWN0IGNhcmQgZnVuZGluZyB0eXBlIChjcmVkaXQgdnMgZGViaXQpIHRvIGFwcGx5IHN1cmNoYXJnZXMgb25seSB0byBlbGlnaWJsZSBjcmVkaXQgY2FyZCB0cmFuc2FjdGlvbnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicGF5bWVudF9pbnRlbnRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlVwZGF0ZSBwYXltZW50IGFtb3VudCB0byBpbmNsdWRlIGNhbGN1bGF0ZWQgc3VyY2hhcmdlIGFuZCBzdG9yZSB0cmFja2luZyBtZXRhZGF0YVwiXG4gICAgfVxuICBdLFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjoge1xuICAgIFwidHlwZVwiOiBcImV4dGVybmFsXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwL29uYm9hcmRpbmdcIlxuICB9LFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJjb250ZW50X3NlY3VyaXR5X3BvbGljeVwiOiB7XG4gICAgICBcImNvbm5lY3Qtc3JjXCI6IFtcbiAgICAgICAgXCJodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwL2FwaS9tZXJjaGFudHNcIixcbiAgICAgICAgXCJodHRwczovL2JhY2tlbmQtcHJvZHVjdGlvbi01ZTM3LnVwLnJhaWx3YXkuYXBwL2FwaS9jb21wbGlhbmNlXCJcbiAgICAgIF0sXG4gICAgICBcImltYWdlLXNyY1wiOiBudWxsLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkRhc2hib2FyZFZpZXdcIixcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlBheW1lbnREZXRhaWxWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLnBheW1lbnQuZGV0YWlsXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjAuMS4yXCJcbn07XG4iLCAiLyoqXG4gKiBEYXNoYm9hcmQgVmlld1xuICpcbiAqIE1haW4gdmlldyBzaG93biBvbiB0aGUgU3RyaXBlIERhc2hib2FyZCBob21lIHBhZ2VcbiAqIERpc3BsYXlzIHN1cmNoYXJnZSBzZXR0aW5ncyBhbmQgYW5hbHl0aWNzXG4gKi9cblxuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRleHRWaWV3LFxuICBEaXZpZGVyLFxuICBJbmxpbmUsXG4gIExpbmssXG4gIFN3aXRjaCxcbiAgVGV4dEZpZWxkLFxuICBCYWRnZSxcbiAgTm90aWNlLFxufSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vYmFja2VuZC1wcm9kdWN0aW9uLTVlMzcudXAucmFpbHdheS5hcHAnO1xuXG4vLyBTdGF0ZXMgd2hlcmUgc3VyY2hhcmdpbmcgaXMgcHJvaGliaXRlZFxuY29uc3QgUFJPSElCSVRFRF9TVEFURVMgPSBbJ0NBJywgJ0NUJywgJ01BJywgJ01FJywgJ1BSJ107XG5cbmludGVyZmFjZSBNZXJjaGFudFNldHRpbmdzIHtcbiAgaWQ6IHN0cmluZztcbiAgc3VyY2hhcmdlUmF0ZTogbnVtYmVyO1xuICBlbmFibGVkOiBib29sZWFuO1xuICBleGNsdWRlZFN0YXRlczogc3RyaW5nW107XG4gIG1hc3RlcmNhcmROb3RpZmllZEF0OiBzdHJpbmcgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgQW5hbHl0aWNzIHtcbiAgdG90YWxUcmFuc2FjdGlvbnM6IG51bWJlcjtcbiAgdG90YWxTdXJjaGFyZ2VzOiBudW1iZXI7XG4gIGxhc3QzMERheXM6IHtcbiAgICBlbGlnaWJsZTogbnVtYmVyO1xuICAgIGluZWxpZ2libGU6IG51bWJlcjtcbiAgICBzdXJjaGFyZ2VBbW91bnQ6IG51bWJlcjtcbiAgfTtcbn1cblxuY29uc3QgRGFzaGJvYXJkVmlldyA9ICh7XG4gIHVzZXJDb250ZXh0LFxufTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2V0dGluZ3MsIHNldFNldHRpbmdzXSA9IHVzZVN0YXRlPE1lcmNoYW50U2V0dGluZ3MgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2FuYWx5dGljcywgc2V0QW5hbHl0aWNzXSA9IHVzZVN0YXRlPEFuYWx5dGljcyB8IG51bGw+KG51bGwpO1xuXG4gIC8vIEZvcm0gc3RhdGVcbiAgY29uc3QgW3N1cmNoYXJnZVJhdGUsIHNldFN1cmNoYXJnZVJhdGVdID0gdXNlU3RhdGUoJzIuOScpO1xuICBjb25zdCBbZW5hYmxlZCwgc2V0RW5hYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2V4Y2x1ZGVkU3RhdGVzLCBzZXRFeGNsdWRlZFN0YXRlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIGNvbnN0IHN0cmlwZUFjY291bnRJZCA9IHVzZXJDb250ZXh0Py5hY2NvdW50Py5pZDtcblxuICAvLyBGZXRjaCBtZXJjaGFudCBzZXR0aW5ncyBvbiBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghc3RyaXBlQWNjb3VudElkKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgICAgIC8vIEZldGNoIG9yIGNyZWF0ZSBtZXJjaGFudFxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS9tZXJjaGFudHMvYnktc3RyaXBlLyR7c3RyaXBlQWNjb3VudElkfWBcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAvLyBDcmVhdGUgbWVyY2hhbnQgaWYgZG9lc24ndCBleGlzdFxuICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfS9hcGkvbWVyY2hhbnRzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgc3RyaXBlQWNjb3VudElkLFxuICAgICAgICAgICAgICBzdXJjaGFyZ2VSYXRlOiAwLjAyOSxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZXhjbHVkZWRTdGF0ZXM6IFBST0hJQklURURfU1RBVEVTLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbWVyY2hhbnQgc2V0dGluZ3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lcmNoYW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRTZXR0aW5ncyhtZXJjaGFudCk7XG4gICAgICAgIHNldFN1cmNoYXJnZVJhdGUoKG1lcmNoYW50LnN1cmNoYXJnZVJhdGUgKiAxMDApLnRvRml4ZWQoMSkpO1xuICAgICAgICBzZXRFbmFibGVkKG1lcmNoYW50LmVuYWJsZWQpO1xuICAgICAgICBzZXRFeGNsdWRlZFN0YXRlcyhtZXJjaGFudC5leGNsdWRlZFN0YXRlcyk7XG5cbiAgICAgICAgLy8gRmV0Y2ggYW5hbHl0aWNzXG4gICAgICAgIGNvbnN0IGFuYWx5dGljc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfS9hcGkvbWVyY2hhbnRzLyR7bWVyY2hhbnQuaWR9L2FuYWx5dGljc2BcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoYW5hbHl0aWNzUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEYXRhID0gYXdhaXQgYW5hbHl0aWNzUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldEFuYWx5dGljcyhhbmFseXRpY3NEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3N0cmlwZUFjY291bnRJZF0pO1xuXG4gIC8vIFNhdmUgc2V0dGluZ3NcbiAgY29uc3QgaGFuZGxlU2F2ZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNldHRpbmdzPy5pZCkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIHNldFNhdmluZyh0cnVlKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtBUElfQkFTRV9VUkx9L2FwaS9tZXJjaGFudHMvJHtzZXR0aW5ncy5pZH1gLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHN1cmNoYXJnZVJhdGU6IHBhcnNlRmxvYXQoc3VyY2hhcmdlUmF0ZSkgLyAxMDAsXG4gICAgICAgICAgICBlbmFibGVkLFxuICAgICAgICAgICAgZXhjbHVkZWRTdGF0ZXMsXG4gICAgICAgICAgfSksXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gc2F2ZSBzZXR0aW5ncycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0U2V0dGluZ3ModXBkYXRlZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBzYXZlJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbc2V0dGluZ3M/LmlkLCBzdXJjaGFyZ2VSYXRlLCBlbmFibGVkLCBleGNsdWRlZFN0YXRlc10pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlNXQSAtIFN1cmNoYXJnZSBBdXRvbWF0aW9uXCI+XG4gICAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdsYXJnZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5Mb2FkaW5nIHNldHRpbmdzLi4uPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICApO1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlNXQSAtIFN1cmNoYXJnZSBBdXRvbWF0aW9uXCI+XG4gICAgICAgIDxOb3RpY2UgdHlwZT1cImNhdXRpb25cIiB0aXRsZT1cIkVycm9yXCI+XG4gICAgICAgICAge2Vycm9yfVxuICAgICAgICA8L05vdGljZT5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX0+UmV0cnk8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChjZW50czogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQoY2VudHMgLyAxMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3XG4gICAgICB0aXRsZT1cIlNXQSAtIFN1cmNoYXJnZSBBdXRvbWF0aW9uXCJcbiAgICAgIGFjdGlvbnM9e1xuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17aGFuZGxlU2F2ZX0gZGlzYWJsZWQ9e3NhdmluZ30+XG4gICAgICAgICAge3NhdmluZyA/ICdTYXZpbmcuLi4nIDogJ1NhdmUgU2V0dGluZ3MnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIH1cbiAgICA+XG4gICAgICB7LyogQW5hbHl0aWNzIFN1bW1hcnkgKi99XG4gICAgICB7YW5hbHl0aWNzICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbGFyZ2UnIH19PlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgIExhc3QgMzAgRGF5c1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGdhcDogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgU3VyY2hhcmdlcyBDb2xsZWN0ZWRcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAneGxhcmdlJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShhbmFseXRpY3MubGFzdDMwRGF5cy5zdXJjaGFyZ2VBbW91bnQpfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgICBFbGlnaWJsZSBUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAneGxhcmdlJywgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgICAgICAgICAgIHthbmFseXRpY3MubGFzdDMwRGF5cy5lbGlnaWJsZX1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgSW5lbGlnaWJsZVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICd4bGFyZ2UnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAge2FuYWx5dGljcy5sYXN0MzBEYXlzLmluZWxpZ2libGV9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgey8qIFNldHRpbmdzICovfVxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbGFyZ2UnIH19PlxuICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIFN1cmNoYXJnZSBTZXR0aW5nc1xuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgIGxhYmVsPVwiRW5hYmxlIFN1cmNoYXJnaW5nXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2VuYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVuYWJsZWQoZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICAgICAgV2hlbiBkaXNhYmxlZCwgbm8gc3VyY2hhcmdlcyB3aWxsIGJlIGFwcGxpZWRcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIlN1cmNoYXJnZSBSYXRlICglKVwiXG4gICAgICAgICAgICB2YWx1ZT17c3VyY2hhcmdlUmF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VyY2hhcmdlUmF0ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICAgICAgTWF4aW11bTogMyUgKFZpc2EvTUMgcnVsZXMpXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAneHNtYWxsJywgZm9udFdlaWdodDogJ21lZGl1bScgfX0+XG4gICAgICAgICAgICBFeGNsdWRlZCBTdGF0ZXNcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknLCBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICBTdGF0ZXMgbWFya2VkIHdpdGggKiBhcmUgcHJvaGliaXRlZCBieSBsYXcuXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgZ2FwOiAnc21hbGwnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICAgICAge1snQ0EnLCAnQ1QnLCAnTUEnLCAnTUUnLCAnQ08nLCAnTVQnLCAnTlknLCAnUFInXS5tYXAoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzUHJvaGliaXRlZCA9IFBST0hJQklURURfU1RBVEVTLmluY2x1ZGVzKHN0YXRlKTtcbiAgICAgICAgICAgICAgY29uc3QgaXNFeGNsdWRlZCA9IGV4Y2x1ZGVkU3RhdGVzLmluY2x1ZGVzKHN0YXRlKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17c3RhdGV9XG4gICAgICAgICAgICAgICAgICB0eXBlPXtpc0V4Y2x1ZGVkID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQcm9oaWJpdGVkfVxuICAgICAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQcm9oaWJpdGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0V4Y2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RXhjbHVkZWRTdGF0ZXMoZXhjbHVkZWRTdGF0ZXMuZmlsdGVyKChzKSA9PiBzICE9PSBzdGF0ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHNldEV4Y2x1ZGVkU3RhdGVzKFsuLi5leGNsdWRlZFN0YXRlcywgc3RhdGVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c3RhdGV9e2lzUHJvaGliaXRlZCA/ICcqJyA6ICcnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIHsvKiBDb21wbGlhbmNlIFNlY3Rpb24gKi99XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdsYXJnZScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIG1hcmdpbkJvdHRvbTogJ21lZGl1bScgfX0+XG4gICAgICAgICAgQ29tcGxpYW5jZSBTdGF0dXNcbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICA8QmFkZ2UgdHlwZT1cInBvc2l0aXZlXCI+QWN0aXZlPC9CYWRnZT5cbiAgICAgICAgICAgIDxCb3g+QklOIERldGVjdGlvbjwvQm94PlxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScsIG1hcmdpbkxlZnQ6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICBEZWJpdC9wcmVwYWlkIGNhcmRzIGV4Y2x1ZGVkIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxJbmxpbmUgY3NzPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICA8QmFkZ2UgdHlwZT1cInBvc2l0aXZlXCI+QWN0aXZlPC9CYWRnZT5cbiAgICAgICAgICAgIDxCb3g+U3RhdGUgQ29tcGxpYW5jZTwvQm94PlxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScsIG1hcmdpbkxlZnQ6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICBDQSwgQ1QsIE1BLCBNRSwgUFIgYmxvY2tlZFxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Cb3R0b206ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPElubGluZSBjc3M9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICAgIHtzZXR0aW5ncz8ubWFzdGVyY2FyZE5vdGlmaWVkQXQgPyAoXG4gICAgICAgICAgICAgIDxCYWRnZSB0eXBlPVwicG9zaXRpdmVcIj5Db21wbGV0ZTwvQmFkZ2U+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cIndhcm5pbmdcIj5QZW5kaW5nPC9CYWRnZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Qm94Pk1hc3RlcmNhcmQgTm90aWZpY2F0aW9uPC9Cb3g+XG4gICAgICAgICAgPC9JbmxpbmU+XG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdzbWFsbCcsIGNvbG9yOiAnc2Vjb25kYXJ5JywgbWFyZ2luTGVmdDogJ2xhcmdlJyB9fT5cbiAgICAgICAgICAgIHtzZXR0aW5ncz8ubWFzdGVyY2FyZE5vdGlmaWVkQXRcbiAgICAgICAgICAgICAgPyBgU2VudCAke25ldyBEYXRlKHNldHRpbmdzLm1hc3RlcmNhcmROb3RpZmllZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1gXG4gICAgICAgICAgICAgIDogJ1JlcXVpcmVkIDMwIGRheXMgYmVmb3JlIHN1cmNoYXJnaW5nJ31cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7IXNldHRpbmdzPy5tYXN0ZXJjYXJkTm90aWZpZWRBdCAmJiAoXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcsIG1hcmdpbkxlZnQ6ICdsYXJnZScgfX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake0FQSV9CQVNFX1VSTH0vYXBpL21lcmNoYW50cy8ke3NldHRpbmdzPy5pZH0vY29tcGxpYW5jZS9tYXN0ZXJjYXJkLWxldHRlcmB9PlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlIG5vdGlmaWNhdGlvbiBsZXR0ZXJcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cblxuICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgey8qIEludGVncmF0aW9uICovfVxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbGFyZ2UnIH19PlxuICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBtYXJnaW5Cb3R0b206ICdtZWRpdW0nIH19PlxuICAgICAgICAgIEludGVncmF0aW9uXG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgIE1lcmNoYW50IElEOiB7c2V0dGluZ3M/LmlkfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGV4dFZpZXc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRWaWV3O1xuIiwgIi8qKlxuICogUGF5bWVudCBEZXRhaWwgVmlld1xuICpcbiAqIFNob3duIG9uIHRoZSBwYXltZW50L2NoYXJnZSBkZXRhaWwgcGFnZSBpbiBTdHJpcGUgRGFzaGJvYXJkXG4gKiBEaXNwbGF5cyBzdXJjaGFyZ2UgaW5mb3JtYXRpb24gZm9yIHRoZSBzcGVjaWZpYyBwYXltZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgQm94LFxuICBDb250ZXh0VmlldyxcbiAgRGl2aWRlcixcbiAgSW5saW5lLFxuICBCYWRnZSxcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuXG5jb25zdCBQYXltZW50RGV0YWlsVmlldyA9ICh7XG4gIGVudmlyb25tZW50LFxufTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XG4gIC8vIEdldCBwYXltZW50IGludGVudCBmcm9tIGVudmlyb25tZW50IGNvbnRleHRcbiAgY29uc3QgcGF5bWVudEludGVudCA9IGVudmlyb25tZW50Py5vYmplY3RDb250ZXh0Py5vYmplY3Q7XG5cbiAgaWYgKCFwYXltZW50SW50ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlNXQSBTdXJjaGFyZ2UgSW5mb1wiPlxuICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgTm8gcGF5bWVudCBpbmZvcm1hdGlvbiBhdmFpbGFibGVcbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICAvLyBFeHRyYWN0IFNXQSBtZXRhZGF0YVxuICBjb25zdCBtZXRhZGF0YSA9IHBheW1lbnRJbnRlbnQubWV0YWRhdGEgfHwge307XG4gIGNvbnN0IHN3YU1lcmNoYW50SWQgPSBtZXRhZGF0YS5zd2FfbWVyY2hhbnRfaWQ7XG4gIGNvbnN0IHN3YUJhc2VBbW91bnQgPSBwYXJzZUludChtZXRhZGF0YS5zd2FfYmFzZV9hbW91bnQgfHwgJzAnLCAxMCk7XG4gIGNvbnN0IHN3YVN1cmNoYXJnZUFtb3VudCA9IHBhcnNlSW50KG1ldGFkYXRhLnN3YV9zdXJjaGFyZ2VfYW1vdW50IHx8ICcwJywgMTApO1xuICBjb25zdCBzd2FFbGlnaWJsZSA9IG1ldGFkYXRhLnN3YV9lbGlnaWJsZSA9PT0gJ3RydWUnO1xuICBjb25zdCBzd2FSZWFzb24gPSBtZXRhZGF0YS5zd2FfcmVhc29uIHx8ICd1bmtub3duJztcblxuICAvLyBDaGVjayBpZiB0aGlzIHBheW1lbnQgd2FzIHByb2Nlc3NlZCB0aHJvdWdoIFNXQVxuICBpZiAoIXN3YU1lcmNoYW50SWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiU1dBIFN1cmNoYXJnZSBJbmZvXCI+XG4gICAgICAgIDxCb3ggY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICBUaGlzIHBheW1lbnQgd2FzIG5vdCBwcm9jZXNzZWQgdGhyb3VnaCBTV0FcbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRleHRWaWV3PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBmb3JtYXRDdXJyZW5jeSA9IChjZW50czogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQoY2VudHMgLyAxMDApO1xuICB9O1xuXG4gIGNvbnN0IGdldFJlYXNvbkxhYmVsID0gKHJlYXNvbjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBsYWJlbHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICBlbGlnaWJsZTogJ1N1cmNoYXJnZSBBcHBsaWVkJyxcbiAgICAgIHN0YXRlX3Byb2hpYml0ZWQ6ICdTdGF0ZSBQcm9oaWJpdGVkJyxcbiAgICAgIGRlYml0X2NhcmQ6ICdEZWJpdCBDYXJkJyxcbiAgICAgIHByZXBhaWRfY2FyZDogJ1ByZXBhaWQgQ2FyZCcsXG4gICAgICB1bmtub3duX2NhcmRfdHlwZTogJ1Vua25vd24gQ2FyZCBUeXBlJyxcbiAgICAgIG1lcmNoYW50X2Rpc2FibGVkOiAnU3VyY2hhcmdpbmcgRGlzYWJsZWQnLFxuICAgICAgbWVyY2hhbnRfZXhjbHVkZWRfc3RhdGU6ICdTdGF0ZSBFeGNsdWRlZCBieSBNZXJjaGFudCcsXG4gICAgfTtcbiAgICByZXR1cm4gbGFiZWxzW3JlYXNvbl0gfHwgcmVhc29uO1xuICB9O1xuXG4gIGNvbnN0IGdldFN0YXR1c0JhZGdlID0gKCkgPT4ge1xuICAgIGlmIChzd2FFbGlnaWJsZSAmJiBzd2FTdXJjaGFyZ2VBbW91bnQgPiAwKSB7XG4gICAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJwb3NpdGl2ZVwiPlN1cmNoYXJnZSBBcHBsaWVkPC9CYWRnZT47XG4gICAgfVxuICAgIHJldHVybiA8QmFkZ2UgdHlwZT1cIm5ldXRyYWxcIj5ObyBTdXJjaGFyZ2U8L0JhZGdlPjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlNXQSBTdXJjaGFyZ2UgSW5mb1wiPlxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbWVkaXVtJyB9fT5cbiAgICAgICAge2dldFN0YXR1c0JhZGdlKCl9XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiAnbGFyZ2UnIH19PlxuICAgICAgICA8SW5saW5lIGNzcz17eyBnYXA6ICd4bGFyZ2UnIH19PlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICBCYXNlIEFtb3VudFxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ2xhcmdlJywgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5cbiAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHN3YUJhc2VBbW91bnQpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICB7c3dhU3VyY2hhcmdlQW1vdW50ID4gMCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgICBTdXJjaGFyZ2VcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ2xhcmdlJywgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShzd2FTdXJjaGFyZ2VBbW91bnQpfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgICBUb3RhbCBDaGFyZ2VkXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBjc3M9e3sgZm9udFNpemU6ICdsYXJnZScsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3koc3dhQmFzZUFtb3VudCArIHN3YVN1cmNoYXJnZUFtb3VudCl9XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cblxuICAgICAgPERpdmlkZXIgLz5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ21lZGl1bScsIG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICBFbGlnaWJpbGl0eSBEZXRhaWxzXG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpbkJvdHRvbTogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8SW5saW5lIGNzcz17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnc21hbGwnIH19PlxuICAgICAgICAgICAge3N3YUVsaWdpYmxlID8gKFxuICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT1cInBvc2l0aXZlXCI+RWxpZ2libGU8L0JhZGdlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9XCJ3YXJuaW5nXCI+Tm90IEVsaWdpYmxlPC9CYWRnZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Qm94PntnZXRSZWFzb25MYWJlbChzd2FSZWFzb24pfTwvQm94PlxuICAgICAgICAgIDwvSW5saW5lPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7IXN3YUVsaWdpYmxlICYmIChcbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250U2l6ZTogJ3NtYWxsJywgY29sb3I6ICdzZWNvbmRhcnknIH19PlxuICAgICAgICAgICAge3N3YVJlYXNvbiA9PT0gJ2RlYml0X2NhcmQnICYmIChcbiAgICAgICAgICAgICAgJ1N1cmNoYXJnaW5nIGRlYml0IGNhcmRzIGlzIHByb2hpYml0ZWQgaW4gdGhlIFVTJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzd2FSZWFzb24gPT09ICdzdGF0ZV9wcm9oaWJpdGVkJyAmJiAoXG4gICAgICAgICAgICAgIFwiVGhlIGN1c3RvbWVyJ3MgYmlsbGluZyBzdGF0ZSBwcm9oaWJpdHMgc3VyY2hhcmdpbmdcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzd2FSZWFzb24gPT09ICdwcmVwYWlkX2NhcmQnICYmIChcbiAgICAgICAgICAgICAgJ1N1cmNoYXJnaW5nIHByZXBhaWQgY2FyZHMgaXMgbm90IGFsbG93ZWQnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N3YVJlYXNvbiA9PT0gJ3Vua25vd25fY2FyZF90eXBlJyAmJiAoXG4gICAgICAgICAgICAgICdDb3VsZCBub3QgZGV0ZXJtaW5lIGNhcmQgdHlwZSdcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cblxuICAgICAge3N3YVN1cmNoYXJnZUFtb3VudCA+IDAgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRTaXplOiAnc21hbGwnLCBjb2xvcjogJ3NlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgIFJhdGUgQXBwbGllZDogeygoc3dhU3VyY2hhcmdlQW1vdW50IC8gc3dhQmFzZUFtb3VudCkgKiAxMDApLnRvRml4ZWQoMil9JVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0NvbnRleHRWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudERldGFpbFZpZXc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxVQUFBLFVBQUEsVUFBQTtBQUthLGNBQUEsT0FBTSxHQUFBLFFBQUEsNEJBQStDLEtBQUs7QUFFMUQsY0FBQSxVQUNYLEdBQUEsUUFBQSw0QkFBa0QsUUFBUTs7Ozs7Ozs7OztBQ1I1RCxVQUFBLFVBQUEsVUFBQTtBQUVhLGNBQUEsU0FBUSxHQUFBLFFBQUEsNEJBQWdELE9BQU87QUFHL0QsY0FBQSxVQUFTLEdBQUEsUUFBQSw0QkFDcEIsUUFBUTtBQUlHLGNBQUEsZUFBYyxHQUFBLFFBQUEsNEJBR3pCLGVBQWU7UUFDZixlQUFlLENB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
