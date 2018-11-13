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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var home_module_1 = require('./home/home.module');
var blankPage_module_1 = require('./blank-page/blankPage.module');
var bsComponent_module_1 = require('./bs-component/bsComponent.module');
var dashboard_component_1 = require('./dashboard.component');
var index_1 = require('../shared/index');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                home_module_1.HomeModule,
                bsComponent_module_1.BSComponentModule,
                blankPage_module_1.BlankPageModule,
            ],
            declarations: [dashboard_component_1.DashboardComponent, index_1.SidebarComponent],
            exports: [dashboard_component_1.DashboardComponent, index_1.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2hFLG1DQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRXRFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNELHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBY25EO0lBQUE7SUFBK0IsQ0FBQztJQVpoQztRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTtnQkFDZixxQkFBWTtnQkFDWix3QkFBVTtnQkFDVixzQ0FBaUI7Z0JBQ2Qsa0NBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx3QkFBZ0IsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx3QkFBZ0IsQ0FBQztTQUNsRCxDQUFDOzt1QkFBQTtJQUU2QixzQkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsdUJBQWUsa0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgQmxhbmtQYWdlTW9kdWxlIH0gZnJvbSAnLi9ibGFuay1wYWdlL2JsYW5rUGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQlNDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2JzLWNvbXBvbmVudC9ic0NvbXBvbmVudC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICBcdFJvdXRlck1vZHVsZSxcbiAgICBcdEhvbWVNb2R1bGUsXG4gICAgXHRCU0NvbXBvbmVudE1vZHVsZSxcbiAgICAgICAgQmxhbmtQYWdlTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbRGFzaGJvYXJkQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbRGFzaGJvYXJkQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==
