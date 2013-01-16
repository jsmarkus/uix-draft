define(function (require) {
    var uix = require('uix/uix');
    var Node = require('../Node');

    var $ = uix.$;

    var Checkbox = Node.extend({
        ATTR_label : {
            change : '_uiSet_label'
        },
        ATTR_checked : {
            change : '_uiSet_checked'
        },

        _createDom : function () {
            var root = $('<label>');
            var input = $('<input type="checkbox">');
            var label = $('<span>');
            root.append(input);
            root.append(label);
            return {
                root  : root,
                input : input,
                label : label
            };
        },

        _uiSet_checked : function(name, value) {
            this._dom.input.attr('checked', !!value);
        },

        _uiSet_label : function(name, value) {
            this._dom.label.text(value);
        }
    });

    return Checkbox;


});