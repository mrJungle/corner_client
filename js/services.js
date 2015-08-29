angular.module("CornerApp.services", [])

.factory('RestaurantData', function() {
  var restaurant = [
      { restaurant_id:'1',
        nome: 'Il Bistrot',
        indirizzo: 'C.so Garibaldi 34, Milano',
        indirizzo_linik : 'http://goo.gl/maps/A7qs3',
        coordinate_lat: '00910910',
        coordinate_lon: '00910910',
        telefono: '+39 02 72 00 42 50',
        telefono_link: '00390272004250',
        mail: 'milanogaribaldi@moye.it',
        mappa_img: 'img/piatti/img_p1.jpg'},
      { restaurant_id:'2',
        nome: 'Velasca',
        indirizzo: 'Via Albricci 10, ang. p.zza Velasca, Milano',
        indirizzo_linik : 'http://goo.gl/maps/rYpnO',
        coordinate_lat: '00910910',
        coordinate_lon: '00910910',
        telefono: '+39 02 890 92 624',
        telefono_link: '00390289092624',
        mail: 'milanovelasca@moye.it',
        mappa_img: 'img/piatti/img_p2.jpg'},
      { restaurant_id:'3',
        nome: 'Bicocca',
        indirizzo: 'Via Chiese 60, Bicocca Village Milano',
        indirizzo_linik : 'http://goo.gl/maps/552YU',
        coordinate_lat: '00910910',
        coordinate_lon: '00910910',
        telefono: '+39 02 66 10 68 73',
        telefono_link: '00390266106873',
        mail: 'milanobicocca@moye.it',
        mappa_img: 'img/piatti/img_p3.jpg'},
      { restaurant_id:'4',
        nome: 'Firenze',
        indirizzo: "Via del Parione 16, ang.Via de' Tornabuoni, Firenze",
        indirizzo_linik : 'http://goo.gl/maps/KYXzc',
        coordinate_lat: '00910910',
        coordinate_lon: '00910910',
        telefono: '+39 055 28 56 35',
        telefono_link: '0039055285635',
        mail: 'firenzetornabuoni@moye.it',
        mappa_img: 'img/piatti/img_p4.jpg'}        
        ];
  return restaurant;
})








