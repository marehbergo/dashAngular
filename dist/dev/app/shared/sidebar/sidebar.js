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
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.showMenu = '';
    }
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-cmp',
            templateUrl: 'sidebar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFRMUM7SUFBQTtRQUNDLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFRdkIsQ0FBQztJQVBBLHlDQUFjLEdBQWQsVUFBZSxPQUFZO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO0lBQ0YsQ0FBQztJQWRGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsY0FBYztTQUMzQixDQUFDOzt3QkFBQTtJQVdGLHVCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3QkFBZ0IsbUJBUzVCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnc2lkZWJhci1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ3NpZGViYXIuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcblx0c2hvd01lbnU6IHN0cmluZyA9ICcnO1xuXHRhZGRFeHBhbmRDbGFzcyhlbGVtZW50OiBhbnkpIHtcblx0XHRpZiAoZWxlbWVudCA9PT0gdGhpcy5zaG93TWVudSkge1xuXHRcdFx0dGhpcy5zaG93TWVudSA9ICcwJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93TWVudSA9IGVsZW1lbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0=
