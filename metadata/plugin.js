var l = Object.defineProperty;
var d = (t, e, s) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var n = (t, e, s) => (d(t, typeof e != "symbol" ? e + "" : e, s), s);
const r = "0.0.22", i = {
  "@qatium/sdk": r
}, u = (t) => {
  _registerPlugin(t, i);
};
class c {
  constructor() {
    n(this, "selectedElement");
  }
  run() {
    var s;
    const e = sdk.map.getSelectedElement();
    if ((e == null ? void 0 : e.id) !== ((s = this.selectedElement) == null ? void 0 : s.id))
      return this.selectedElement = e, sdk.ui.sendMessage({
        event: "selected-element",
        selectedElement: e
      });
  }
  onMessage(e) {
    if (e.event === "close-valve")
      return sdk.network.setStatus(e.valveId, "CLOSED");
  }
}
u(new c());
