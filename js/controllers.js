angular.module("CornerApp")
.controller('AppCtrl', function ($scope, $rootScope) {

console.log('avvio AppCtrl');

})


.controller('HomeCtrl', function ($scope) {
    console.log("Home")

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


})




.controller('RestaurantsCtrl', function ($scope) {
    console.log("RestaurantsCtrl")

})

.controller('BooksDetailCtrl', function ($scope, $stateParams) {

  Restangular.all('books/books').get($stateParams.id)
  .then(function(data){
      $scope.book = data
  })

})


.controller('ContactCtrl', function ($scope) {
    console.log("contactCtrl");



});

