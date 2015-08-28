angular.module("CornerApp")
.directive('appNavbar', [function () {
    return {
        restrict: 'A',
        templateUrl : 'templates/app_navbar.html',
        replace : true,
        link: function (scope, iElement, iAttrs) {
            
        }
    };
}])

.directive('appFooter', [function () {
    return {
        restrict: 'A',
        templateUrl : 'templates/footer.html',
        replace : true,
        link: function (scope, iElement, iAttrs) {
            
        }
    };
}])