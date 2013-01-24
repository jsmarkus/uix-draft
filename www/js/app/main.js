define(function(require) {

    require('css!bootstrap/css/bootstrap.css');
    require('css!bootstrap/css/bootstrap-responsive.css');

    var MyScreen = require('uix/json!./test.uix');
    var screen = new MyScreen({});
    console.dir(screen);
    screen.render().appendTo('body');

});