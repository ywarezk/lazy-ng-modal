(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('modals', ['exports', '@angular/core'], factory) :
    (factory((global.modals = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ModalsService = /** @class */ (function () {
        function ModalsService() {
        }
        ModalsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModalsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ModalsService.ngInjectableDef = i0.defineInjectable({ factory: function ModalsService_Factory() { return new ModalsService(); }, token: ModalsService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.ModalsService = ModalsService;
    exports.ModalsComponent = ModalsComponent;
    exports.ModalsModule = ModalsModule;
    exports.ɵa = LazyModalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbW9kYWxzL2xpYi9tb2RhbHMuc2VydmljZS50cyIsIm5nOi8vbW9kYWxzL2xpYi9tb2RhbHMuY29tcG9uZW50LnRzIiwibmc6Ly9tb2RhbHMvbGliL2xhenktbW9kYWwvbGF6eS1tb2RhbC5jb21wb25lbnQudHMiLCJuZzovL21vZGFscy9saWIvbW9kYWxzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItTW9kYWxzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG1vZGFscyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1sYXp5LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhenktbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXp5LW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMYXp5TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsc0NvbXBvbmVudCB9IGZyb20gJy4vbW9kYWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXp5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2xhenktbW9kYWwvbGF6eS1tb2RhbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW01vZGFsc0NvbXBvbmVudCwgTGF6eU1vZGFsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW01vZGFsc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NEJBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFhRTtTQUFpQjs7OztRQUVqQixrQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDhDQUlUO3FCQUVGOzs7O1FBUUQsc0JBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBU0U7U0FBaUI7Ozs7UUFFakIscUNBQVE7OztZQUFSO2FBQ0M7O29CQVZGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsNENBQTBDOztxQkFFM0M7Ozs7UUFRRCx5QkFBQztLQVpEOzs7Ozs7QUNGQTtRQUlBO1NBTTZCOztvQkFONUJDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUM7d0JBQ25ELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDM0I7O1FBQzJCLG1CQUFDO0tBTjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9