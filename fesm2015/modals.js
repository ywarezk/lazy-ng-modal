import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ModalsService {
    constructor() { }
}
ModalsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModalsService.ctorParameters = () => [];
/** @nocollapse */ ModalsService.ngInjectableDef = defineInjectable({ factory: function ModalsService_Factory() { return new ModalsService(); }, token: ModalsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ModalsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ModalsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Modals',
                template: `
    <p>
      modals works!
    </p>
  `
            }] }
];
/** @nocollapse */
ModalsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LazyModalComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LazyModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-lazy-modal',
                template: "<p>\n  lazy-modal works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LazyModalComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ModalsModule {
}
ModalsModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [ModalsComponent, LazyModalComponent],
                exports: [ModalsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ModalsService, ModalsComponent, ModalsModule, LazyModalComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9tb2RhbHMvbGliL21vZGFscy5zZXJ2aWNlLnRzIiwibmc6Ly9tb2RhbHMvbGliL21vZGFscy5jb21wb25lbnQudHMiLCJuZzovL21vZGFscy9saWIvbGF6eS1tb2RhbC9sYXp5LW1vZGFsLmNvbXBvbmVudC50cyIsIm5nOi8vbW9kYWxzL2xpYi9tb2RhbHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1Nb2RhbHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbW9kYWxzIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxhenktbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF6eS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xhenktbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExhenlNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxzQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbHMuY29tcG9uZW50JztcbmltcG9ydCB7IExhenlNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbGF6eS1tb2RhbC9sYXp5LW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTW9kYWxzQ29tcG9uZW50LCBMYXp5TW9kYWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTW9kYWxzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFLYSxhQUFhO0lBRXhCLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pELE1BV2EsZUFBZTtJQUUxQixpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7OztHQUlUO2FBRUY7Ozs7Ozs7OztBQ1ZELE1BT2Esa0JBQWtCO0lBRTdCLGlCQUFpQjs7OztJQUVqQixRQUFRO0tBQ1A7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw0Q0FBMEM7O2FBRTNDOzs7Ozs7Ozs7QUNORCxNQVVhLFlBQVk7OztZQU54QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO2dCQUNuRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDM0I7Ozs7Ozs7Ozs7Ozs7OzsifQ==