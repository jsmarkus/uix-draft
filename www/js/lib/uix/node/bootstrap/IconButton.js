define(function(require) {
    var uix = require('uix/uix');
    var Node = require('uix/Node');
    var Button = require('./Button');
    var Component = require('./Component');
    var Icon = require('./Icon');
    var utils = require('./utils');

    var $ = uix.$;

    return Button.extend({
        initialize : function (type, attrs, children) {
            this._iconLeft = new Icon();
            this._span = new Node('span');
            this._iconRight = new Icon();
            Button.prototype.initialize.apply(this, arguments); //super
        },

        ATTR_iconLeft : {
            change : '_uiSet_icon',
            value : null
        },

        ATTR_iconRight : {
            change : '_uiSet_icon',
            value : null
        },

        _createDom: function() {
            var root = $('<button class="btn">');
            var iconLeft = this._iconLeft.render();
            var span = this._span.render();
            var iconRight = this._iconRight.render();
            root.append(iconLeft);
            root.append(span);
            root.append(iconRight);
            return {
                root: root,
                children: null
            };
        },

        _uiSet_icon : function (name, value) {
            if(name === 'iconRight') {
                this._iconRight.set('glyph', value);
            } else if(name === 'iconLeft'){
                this._iconLeft.set('glyph', value);
            }
        },

        _uiSet_text : function (name, value) {
            this._span.set('text', ' ' + value + ' ');
        },

        _uiSet_html : function (name, value) {
            this._span.set('html', ' ' + value + ' ');
        },

        _uiSet_type : function (name, value) {
            if(value === 'PRIMARY' || value === 'INVERSE') {
                this._iconLeft.set('white', true);
                this._iconRight.set('white', true);
            } else {
                this._iconLeft.set('white', false);
                this._iconRight.set('white', false);
            }
            Button.prototype._uiSet_type.call(this, name, value); //super
        }

    });

});