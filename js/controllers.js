angular.module("CornerApp")
.controller('AppCtrl', function ($scope, $rootScope, RestaurantData, $state) {

console.log('avvio AppCtrl');


    $scope.sonoin = function(x){
        if ($state.current.name==x) {return true}
    }

})


.controller('HomeCtrl', function ($scope) {
    console.log("Home")

})


.controller('RestaurantsCtrl', function ($scope, RestaurantData) {
    console.log(RestaurantData);
    $scope.restaurants = RestaurantData;
// -------------------------------------------------------------------    
// Rimosso dal template    
// ui-sref="app.restaurantsdetail({id:restaurant.restaurant_id})"
// -------------------------------------------------------------------
})


.controller('RestaturantsDetailCtrl', function ($scope, $stateParams, RestaurantData) {
    console.log($stateParams.id);

    $scope.restaurant = _.findWhere(RestaurantData, {restaurant_id:$stateParams.id});
    console.log($scope.restaurant);




})


.controller('ContactCtrl', function ($scope, CarouselData, $window) {
      
//console.log(CarouselData);

if($(window).width()<479){
//$(document).ready(function(){
  $("#owl-carousel").owlCarousel({
  //itemsCustom:[[0, 1], [400, 1], [700, 2], [1000, 3], [1200, 3], [1600, 3]],
      //jsonPath :  'data/ctest.json';
    items :1,      
    navigation : true ,
      });

}

if($(window).width()>=479){
//$(document).ready(function(){
  $("#owl-carousel").owlCarousel({
  //itemsCustom:[[0, 1], [400, 1], [700, 2], [1000, 3], [1200, 3], [1600, 3]],
      //jsonPath :  'data/ctest.json';
    items :3,      
    navigation : true ,
      });
    
}

$scope.$watch(function(){
       return $(window).width();
    }, function(value) {
       console.log(value);
       console.log('sasa');
   });


//});


});

