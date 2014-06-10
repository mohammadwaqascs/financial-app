﻿
//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var FinancialApp;
(function(FinancialApp) {

    var controllerInitializer = {

        registerControllers: function($app) {
                    $app.controller('ArchiveController', FinancialApp.ArchiveController);
                    $app.controller('DefaultController', FinancialApp.DefaultController);
                    $app.controller('MenuController', FinancialApp.MenuController);
                    $app.controller('SheetController', FinancialApp.SheetController);
            },

        registerControllerRoutes: function($routeProvider) {
                $routeProvider.when('/archive', 
                {
                    controller: 'ArchiveController',
                    templateUrl: '/Angular/Archive.html'
                });
                $routeProvider.when('/', 
                {
                    controller: 'DefaultController',
                    templateUrl: '/Angular/Default.html'
                });
                $routeProvider.when('/sheet/:year/:month', 
                {
                    controller: 'SheetController',
                    templateUrl: '/Angular/Sheet.html'
                });
            },
    };

    FinancialApp.ControllerInitializer = controllerInitializer;

})(FinancialApp || (FinancialApp = {}));


