"use strict";
var index_1 = require('./home/index');
var index_2 = require('./blank-page/index');
var index_3 = require('./bs-component/index');
var index_4 = require('./index');
exports.DashboardRoutes = [
    {
        path: 'dashboard',
        component: index_4.DashboardComponent,
        children: index_1.HomeRoutes.concat(index_3.BSComponentRoutes, index_2.BlankPageRoutes)
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsc0JBQTJCLGNBQWMsQ0FBQyxDQUFBO0FBQzFDLHNCQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELHNCQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBRXpELHNCQUFtQyxTQUFTLENBQUMsQ0FBQTtBQUVoQyx1QkFBZSxHQUFZO0lBQ3JDO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsU0FBUyxFQUFFLDBCQUFrQjtRQUM3QixRQUFRLEVBQ0osa0JBQVUsUUFDVix5QkFBaUIsRUFDakIsdUJBQWUsQ0FDbEI7S0FDRjtDQUNILENBQUMiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lUm91dGVzIH0gZnJvbSAnLi9ob21lL2luZGV4JztcbmltcG9ydCB7IEJsYW5rUGFnZVJvdXRlcyB9IGZyb20gJy4vYmxhbmstcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBCU0NvbXBvbmVudFJvdXRlcyB9IGZyb20gJy4vYnMtY29tcG9uZW50L2luZGV4JztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRSb3V0ZXM6IFJvdXRlW10gPSBbXG4gIFx0e1xuICAgIFx0cGF0aDogJ2Rhc2hib2FyZCcsXG4gICAgXHRjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICBcdGNoaWxkcmVuOiBbXG5cdCAgICBcdC4uLkhvbWVSb3V0ZXMsXG5cdCAgICBcdC4uLkJTQ29tcG9uZW50Um91dGVzLFxuXHQgICAgXHQuLi5CbGFua1BhZ2VSb3V0ZXNcbiAgICBcdF1cbiAgXHR9XG5dO1xuIl19
