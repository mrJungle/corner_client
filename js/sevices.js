angular.module("CornerApp.services", [])

.factory('RestaurantData', function() {
  var restaurant = [
      { nome: 'Il Bistrot',
        indirizzo: 'C.so Garibaldi 34, Milano',
        indirizzo_linik : ''
        coordinate_lat: '00910910',
        coordinate_lon: '00910910',
        telefono: '+39 02 72 00 42 50',
        telefono_link: '00390272004250'
        mail: 'milanogaribaldi@moye.it'},
      { nome: 'Moyé Velasca',
        indirizzo: 'Via Albricci 10, ang. p.zza Velasca, Milano',
        indirizzo_linik : ''
        coordinate_lat: '00910910',
        coordinate_lon: '00910910',
        telefono: '+39 02 890 92 624',
        telefono_link: '00390289092624'
        mail: 'milanovelasca@moye.it'},
      { nome: 'Moyé Bicocca',
        indirizzo: 'Via Chiese 60, Bicocca Village Milano',
        indirizzo_linik : ''
        coordinate_lat: '00910910',
        coordinate_lon: '00910910',
        telefono: '+39 02 66 10 68 73',
        telefono_link: '00390266106873'
        mail: 'milanobicocca@moye.it'},
      { nome: 'Moyé Firenze',
        indirizzo: 'Via del Parione 16, ang.Via de’ Tornabuoni, Firenze',
        indirizzo_linik : ''
        coordinate_lat: '00910910',
        coordinate_lon: '00910910',
        telefono: '+39 055 28 56 35',
        telefono_link: '0039055285635'
        mail: 'firenzetornabuoni@moye.it'}        
        ];
  return restaurant;
});


