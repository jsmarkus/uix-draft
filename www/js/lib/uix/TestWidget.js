define(function(require) {
    // var Model = require('./Model');
    var Widget = require('./Widget');

    return Widget.extend(function TestWidget() {
    }).methods({
        _description : JSON.parse(require('text!./testWidget.uix.json'))
    });
});