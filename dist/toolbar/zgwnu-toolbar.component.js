"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var zgwnu_toolbar_service_1 = require("./zgwnu-toolbar.service");
var ZgwnuToolbarComponent = /** @class */ (function () {
    function ZgwnuToolbarComponent(toolbarService, mdIconRegistry, sanitizer) {
        this.toolbarService = toolbarService;
        this.mdIconRegistry = mdIconRegistry;
        this.sanitizer = sanitizer;
        this.iconsPath = 'assets/icons/material-design/';
        this.contentIconsPath = this.iconsPath + 'content/';
        this.navigationIconsPath = this.iconsPath + 'navigation/';
        this.actionIconsPath = this.iconsPath + 'action/';
        // register all used material icons here
        mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'save', sanitizer.bypassSecurityTrustResourceUrl(this.contentIconsPath + 'ic_save_24px.svg'));
        mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'close', sanitizer.bypassSecurityTrustResourceUrl(this.navigationIconsPath + 'ic_close_24px.svg'));
        mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'cancel', sanitizer.bypassSecurityTrustResourceUrl(this.navigationIconsPath + 'ic_cancel_24px.svg'));
        mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'menu', sanitizer.bypassSecurityTrustResourceUrl(this.navigationIconsPath + 'ic_menu_24px.svg'));
        mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'send', sanitizer.bypassSecurityTrustResourceUrl(this.contentIconsPath + 'ic_send_24px.svg'));
        mdIconRegistry.addSvgIconInNamespace('zgwnu_toolbar', 'settings', sanitizer.bypassSecurityTrustResourceUrl(this.actionIconsPath + 'ic_settings_black_24px.svg'));
    }
    ZgwnuToolbarComponent.prototype.ngOnInit = function () {
        console.log('InitZgwnuToolbarComponent');
    };
    ZgwnuToolbarComponent.prototype.onClickExit = function () {
        this.toolbarService.componentReference.onToolbarClickExit();
    };
    ZgwnuToolbarComponent.prototype.onClickSettings = function () {
        this.toolbarService.componentReference.onToolbarClickSettings();
    };
    ZgwnuToolbarComponent.prototype.onClickSave = function () {
        this.toolbarService.componentReference.onToolbarClickSave();
    };
    ZgwnuToolbarComponent.prototype.onClickCancel = function () {
        this.toolbarService.componentReference.onToolbarClickCancel();
    };
    ZgwnuToolbarComponent.prototype.onClickMenu = function () {
        this.toolbarService.componentReference.onToolbarClickMenu();
    };
    ZgwnuToolbarComponent.prototype.onClickSend = function () {
        this.toolbarService.componentReference.onToolbarClickSend();
    };
    ZgwnuToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zgwnu-toolbar',
            templateUrl: 'zgwnu-toolbar.component.html',
            styleUrls: ['zgwnu-toolbar.component.css'],
        }),
        __metadata("design:paramtypes", [zgwnu_toolbar_service_1.ZgwnuToolbarService,
            material_1.MdIconRegistry,
            platform_browser_1.DomSanitizer])
    ], ZgwnuToolbarComponent);
    return ZgwnuToolbarComponent;
}());
exports.ZgwnuToolbarComponent = ZgwnuToolbarComponent;
//# sourceMappingURL=zgwnu-toolbar.component.js.map