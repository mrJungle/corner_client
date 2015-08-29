angular.module("CornerApp")
.controller('AppCtrl', function ($scope, $rootScope, RestaurantData, $state) {

  $rootScope.isCollapsed = true;

  console.log('avvio AppCtrl');

  $scope.sonoin = function(x){
      if ($state.current.name==x) {return true}
  }

})


.controller('HomeCtrl', function ($scope) {

})


.controller('RestaurantsCtrl', function ($scope, $rootScope, RestaurantData) {

    console.log(RestaurantData);

    $scope.restaurants = RestaurantData;

    $scope.detectmob = function() { 
         if(typeof window.orientation !== 'undefined')
         {
            return true;
          }
         else {
            return false;
          }
    }

})


.controller('RestaturantsDetailCtrl', function ($scope, $stateParams, RestaurantData) {
    console.log($stateParams.id);

    $scope.restaurant = _.findWhere(RestaurantData, {restaurant_id:$stateParams.id});
    console.log($scope.restaurant);

})


.controller('ContactCtrl', function ($scope, $window, $rootScope) {
  
  $scope.orientazione = window.orientation;
  $scope.dimensione = $(window).width();

  //$(window).resize(function(){
      //console.log(window.innerWidth);
  //    $scope.$apply(function(){
        //$scope.dimensione = window.innerWidth;
        //$scope.dimensionaCarosello(window.innerWidth);
  //    });
  //});

  $scope.dimensionaCarosello = function(d){
    console.log(d);
    if(d<785){

      $("#owl-carousel").owlCarousel({
        items :1,      
        navigation : true ,
          });
    }
    if(d>=785 & d<1000){
      $("#owl-carousel").owlCarousel({
        items :2,      
        navigation : true ,
          });
    }
    if(d>=1000){
      $("#owl-carousel").owlCarousel({
        items :3,      
        navigation : true ,
          });
    }
  }

  $scope.dimensionaCarosello(window.innerWidth);
});

