"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var zgwnu_toolbar_button_properties_1 = require("./zgwnu-toolbar-button-properties");
var ZgwnuToolbarService = /** @class */ (function () {
    function ZgwnuToolbarService() {
        this.mainTitle = 'ZgwnuModules2';
        this.subTitle = '';
        this.menuButton = new zgwnu_toolbar_button_properties_1.ZgwnuToolbarButtonProperties(true, 'menu');
        this.saveButton = new zgwnu_toolbar_button_properties_1.ZgwnuToolbarButtonProperties(false, 'save');
        this.sendButton = new zgwnu_toolbar_button_properties_1.ZgwnuToolbarButtonProperties(false, 'send');
        this.cancelButton = new zgwnu_toolbar_button_properties_1.ZgwnuToolbarButtonProperties(false, 'cancel');
        this.settingsButton = new zgwnu_toolbar_button_properties_1.ZgwnuToolbarButtonProperties(false, 'settings');
        this.exitButton = new zgwnu_toolbar_button_properties_1.ZgwnuToolbarButtonProperties(true, 'exit');
    }
    Object.defineProperty(ZgwnuToolbarService.prototype, "componentReference", {
        get: function () {
            return this._componentReference;
        },
        set: function (reference) {
            this.menuButton.active = true;
            this.settingsButton.active = false;
            this.saveButton.active = false;
            this.sendButton.active = false;
            this.cancelButton.active = false;
            this.exitButton.active = true;
            this._componentReference = reference;
        },
        enumerable: true,
        configurable: true
    });
    ZgwnuToolbarService = __decorate([
        core_1.Injectable()
    ], ZgwnuToolbarService);
    return ZgwnuToolbarService;
}());
exports.ZgwnuToolbarService = ZgwnuToolbarService;
//# sourceMappingURL=zgwnu-toolbar.service.js.map