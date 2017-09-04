"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZgwnuToolbarButtonProperties = /** @class */ (function () {
    function ZgwnuToolbarButtonProperties(active, tooltip, tooltipPosition) {
        this.disabled = false;
        this.tooltipPosition = 'below';
        this.active = active;
        this.tooltip = tooltip;
        if (tooltipPosition) {
            this.tooltipPosition = tooltipPosition;
        }
    }
    return ZgwnuToolbarButtonProperties;
}());
exports.ZgwnuToolbarButtonProperties = ZgwnuToolbarButtonProperties;
//# sourceMappingURL=zgwnu-toolbar-button-properties.js.map