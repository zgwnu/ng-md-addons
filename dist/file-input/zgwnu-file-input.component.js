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
// imports generic angular 2 modules
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var ZgwnuFileInputComponent = /** @class */ (function () {
    function ZgwnuFileInputComponent(mdIconRegistry, sanitizer) {
        this.mdIconRegistry = mdIconRegistry;
        this.sanitizer = sanitizer;
        this.iconsPath = 'assets/icons/material-design/';
        this.fileIconsPath = this.iconsPath + 'file/';
        this.multipleFiles = false;
        this.onFilesSelected = new core_1.EventEmitter();
        mdIconRegistry.addSvgIconInNamespace('zgwnu_file_input', 'file_upload', sanitizer.bypassSecurityTrustResourceUrl(this.fileIconsPath + 'ic_file_upload_24px.svg'));
    }
    ZgwnuFileInputComponent.prototype.ngOnInit = function () {
    };
    ZgwnuFileInputComponent.prototype.onSelectFiles = function (filesSelectEvent) {
        var selectedFiles = filesSelectEvent.target.files;
        this.onFilesSelected.emit(selectedFiles);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ZgwnuFileInputComponent.prototype, "fileInputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ZgwnuFileInputComponent.prototype, "acceptFiles", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ZgwnuFileInputComponent.prototype, "multipleFiles", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ZgwnuFileInputComponent.prototype, "onFilesSelected", void 0);
    ZgwnuFileInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zgwnu-file-input',
            templateUrl: 'zgwnu-file-input.component.html',
            styleUrls: ['zgwnu-file-input.component.css'],
        }),
        __metadata("design:paramtypes", [material_1.MdIconRegistry,
            platform_browser_1.DomSanitizer])
    ], ZgwnuFileInputComponent);
    return ZgwnuFileInputComponent;
}());
exports.ZgwnuFileInputComponent = ZgwnuFileInputComponent;
//# sourceMappingURL=zgwnu-file-input.component.js.map