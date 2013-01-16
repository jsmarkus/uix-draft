define(function(require) {
    // var uix = require('uix/uix');
    var Widget = require('uix/Widget');
    require('css!bootstrap/css/bootstrap');
    require('css!bootstrap/css/bootstrap-responsive');
    var DefaultFactory = require('uix/DefaultFactory');
    var f = new DefaultFactory();



    var MyScreen = Widget.extend({
        _description : JSON.parse(require('text!./test.uix.json')),
        _connect : [
            ['num_1', 'click', '_onNumClick'],
            ['num_2', 'click', '_onNumClick'],
            ['num_3', 'click', '_onNumClick'],
            ['num_4', 'click', '_onNumClick'],
            ['num_5', 'click', '_onNumClick'],
            ['num_6', 'click', '_onNumClick'],
            ['num_7', 'click', '_onNumClick'],
            ['num_8', 'click', '_onNumClick'],
            ['num_9', 'click', '_onNumClick'],
            ['num_0', 'click', '_onNumClick']
        ],
        _onNumClick : function (source) {
            console.log(source.get('name'));
        }
    });



    // var n = f.create(['bs.button', {text:'7', span:2} ]);
    // var n = f.create(
    // );
    var screen = new MyScreen(new DefaultFactory(), {});

    var dom = screen.render();
    // var dom = n.render();
    console.log(dom);
    dom.appendTo('body');
    // var helloButton = screen.byName('helloworldWidget').byName('helloButton');
    // console.log(helloButton);
    // var display = screen.byName('display');
    // display.set('size', 'XXLARGE');
    // helloButton.event.on('click',
    //     function () {
    //         helloButton.set('text', 'Goodbye,');
    //         helloButton.set('type', 'DANGER');

    //     }
    // );

});