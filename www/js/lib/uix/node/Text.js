define(function (require) {
    var uix = require('uix/uix');
    var Node = require('../Node');

    var $ = uix.$;

    var Checkbox = Node.extend({
        ATTR_value : {
            change : '_uiSet_value',
            value : 'qqqqqqqqqqqqq'
        },
        _createDom : function () {
            var root = $('<input type="text">');
            return {
                root : root
            };
        },

        _uiSet_value : function(name, value) {
            this._dom.root.val(value);
        }
    });

    return Checkbox;


});