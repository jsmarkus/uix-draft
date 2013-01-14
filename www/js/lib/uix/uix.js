define(function(require) {
    require('./shim');
    var uix = {};

    uix.$ = require('zepto');

    var _maxUid = 1;
    uix.createUid = function() {
        return _maxUid++;
    };

    return uix;
});