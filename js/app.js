
angular.module("CornerApp", ['ui.router', 'ui.bootstrap', 'angular-owl-carousel'])

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
      templateUrl: "templates/home.html",
      controller: 'HomeCtrl'
    })
    .state('app.restaurants', {
      url: "/books",
      templateUrl: "templates/restaurants.html",
      controller: 'RestaurantsCtrl'
    })
    .state('app.restaurantsdetail', {
      url: "/books/:id",
      templateUrl: "templates/restaurantsdetail.html",
      controller: 'RestaurantsDetailCtrl'
    })
    .state('app.contact', {
      url: "/contact",
      templateUrl: "templates/contact.html",
      controller: 'ContactCtrl'
    })    


})

.run(function(){
    console.log("run here")
})
