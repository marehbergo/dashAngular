"use strict";
var index_1 = require('./login/index');
var index_2 = require('./dashboard/index');
var index_3 = require('./login/index');
exports.routes = index_1.LoginRoutes.concat(index_2.DashboardRoutes, [
    { path: '**', component: index_3.LoginComponent }
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxzQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsc0JBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFFcEQsc0JBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRWxDLGNBQU0sR0FDZixtQkFBVyxRQUNYLHVCQUFlO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsc0JBQWMsRUFBRTtFQUN6QyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9naW5Sb3V0ZXMgfSBmcm9tICcuL2xvZ2luL2luZGV4JztcbmltcG9ydCB7IERhc2hib2FyZFJvdXRlcyB9IGZyb20gJy4vZGFzaGJvYXJkL2luZGV4JztcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuXHQuLi5Mb2dpblJvdXRlcyxcblx0Li4uRGFzaGJvYXJkUm91dGVzLFxuXHR7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfVxuXTtcbiJdfQ==
