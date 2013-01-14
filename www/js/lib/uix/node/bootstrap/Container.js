define(function(require) {
    var uix = require('uix/uix');
    var Component = require('./Component');

    var $ = uix.$;

    return Component.extend(function Container(type, attrs, children) {}).methods({
        ATTR_fluid : {
            change : '_uiSet_fluid',
            value : false
        },
        _createDom: function() {
            var root = $('<div class="container">');
            return {
                root: root,
                children: root
            };
        },
        _uiSet_fluid : function (name, value) {
            var root = this._dom.root;
            if(value) {
                root.removeClass('container');
                root.addClass('container-fluid');
            } else {
                root.removeClass('container-fluid');
                root.addClass('container');
            }
        }
    });

});