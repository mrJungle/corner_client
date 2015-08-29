
angular.module("CornerApp", ['ui.router', 'ui.bootstrap', 'CornerApp.services'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider

    .state('app', {
      abstract : true,
      sticky : true,
      views : {
        'app' : {
          template : '<div ui-view></div>'
        }
      }
    })

    .state('app.home', {
      url: "/home",
      cache : false,
      templateUrl: "templates/home.html",
      controller: 'HomeCtrl'
    })

    .state('app.restaurants', {
      url: "/restaurants",
      cache : false,
      templateUrl: "templates/restaurants.html",
      controller: 'RestaurantsCtrl'
    })
    .state('app.restaurantsdetail', {
      url: "/restaurants/:id",
      templateUrl: "templates/restaurantsdetail.html",
      controller: 'RestaturantsDetailCtrl'
    })
    .state('app.gallery', {
      url: "/gallery",
      templateUrl: "templates/contact.html",
      controller: 'ContactCtrl'
    })    


})

.run(function(){
    console.log("run here")



})

