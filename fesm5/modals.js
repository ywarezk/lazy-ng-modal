import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ModalsService = /** @class */ (function () {
    function ModalsService() {
    }
    ModalsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModalsService.ctorParameters = function () { return []; };
    /** @nocollapse */ ModalsService.ngInjectableDef = defineInjectable({ factory: function ModalsService_Factory() { return new ModalsService(); }, token: ModalsService, providedIn: "root" });
    return ModalsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    /**
     * @return {?}
     */
    ModalsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ModalsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-Modals',
                    template: "\n    <p>\n      modals works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ModalsComponent.ctorParameters = function () { return []; };
    return ModalsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LazyModalComponent = /** @class */ (function () {
    function LazyModalComponent() {
    }
    /**
     * @return {?}
     */
    LazyModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LazyModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-lazy-modal',
                    template: "<p>\n  lazy-modal works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LazyModalComponent.ctorParameters = function () { return []; };
    return LazyModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ModalsModule = /** @class */ (function () {
    function ModalsModule() {
    }
    ModalsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [ModalsComponent, LazyModalComponent],
                    exports: [ModalsComponent]
                },] }
    ];
    return ModalsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ModalsService, ModalsComponent, ModalsModule, LazyModalComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9tb2RhbHMvbGliL21vZGFscy5zZXJ2aWNlLnRzIiwibmc6Ly9tb2RhbHMvbGliL21vZGFscy5jb21wb25lbnQudHMiLCJuZzovL21vZGFscy9saWIvbGF6eS1tb2RhbC9sYXp5LW1vZGFsLmNvbXBvbmVudC50cyIsIm5nOi8vbW9kYWxzL2xpYi9tb2RhbHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1Nb2RhbHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbW9kYWxzIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxhenktbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF6eS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xhenktbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExhenlNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxzQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IExhenlNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbGF6eS1tb2RhbC9sYXp5LW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTW9kYWxzQ29tcG9uZW50LCBMYXp5TW9kYWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTW9kYWxzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3dCQUpEO0NBRUE7Ozs7OztBQ0ZBO0lBYUU7S0FBaUI7Ozs7SUFFakIsa0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDhDQUlUO2lCQUVGOzs7O0lBUUQsc0JBQUM7Q0FoQkQ7Ozs7OztBQ0ZBO0lBU0U7S0FBaUI7Ozs7SUFFakIscUNBQVE7OztJQUFSO0tBQ0M7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiw0Q0FBMEM7O2lCQUUzQzs7OztJQVFELHlCQUFDO0NBWkQ7Ozs7OztBQ0ZBO0lBSUE7S0FNNkI7O2dCQU41QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO29CQUNuRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCOztJQUMyQixtQkFBQztDQU43Qjs7Ozs7Ozs7Ozs7Ozs7In0=