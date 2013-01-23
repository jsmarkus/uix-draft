define(function(require) {
    
    var Codegen = require('uix/Codegen');


    require('css!bootstrap/css/bootstrap');
    require('css!bootstrap/css/bootstrap-responsive');

    var MyScreen = require('uix/json!./test.uix');
    var screen = new MyScreen({});
    console.dir(screen);
    screen.render().appendTo('body');

//     var cg = new Codegen();
//     var code = cg.generate(            ["bs.Row", {"fluid":true, "span":8}, [
//                 ["bs.Button", {"name":"num_7", "text":"7", "span":2} ],
//                 ["bs.Button", {"name":"num_8", "text":"8", "span":2} ],
//                 ["bs.Button", {"name":"num_9", "text":"9", "span":2} ],
//                 ["bs.Button", {"text":"+", "span":2} ]
//             ] ]
// );

//     console.log(code);

});