define(function(require) {
    var uix = require('uix/uix');
    var Component = require('./Component');
    var utils = require('./utils');

    var $ = uix.$;

    return Component.extend(function Button(type, attrs, children) {}).methods({
        ATTR_type : {
            change : '_uiSet_type',
            validate : '_validate_type',
            value : null
        },
        ATTR_size : {
            change : '_uiSet_size',
            validate : '_validate_size',
            value : 'DEFAULT'
        },
        _btnTypes : {
            'PRIMARY':'btn-primary',
            'INFO':'btn-info',
            'SUCCESS':'btn-success',
            'WARNING':'btn-warning',
            'DANGER':'btn-danger',
            'INVERSE':'btn-inverse',
            'LINK':'btn-link'
        },
        _btnSizes : {
            'LARGE':'btn-large',
            'DEFAULT':false,
            'SMALL':'btn-small',
            'MINI':'btn-mini'
        },
        _createDom: function() {
            var root = $('<button class="btn">');
            return {
                root: root,
                children: root
            };
        },

        _bindEvents : function () {
            this._dom.root.on('click', this._onDomClick.bind(this));
        },

        _onDomClick : function () {
            this.trigger('click');
        },

        _validate_type : function (name, value) {
            utils.validateClassAttribute(this._btnTypes, name, value);
        },

        _uiSet_type : function (name, value) {
            utils.setClassAttribute(this._btnTypes,
                this._dom.root, name, value);
        },

        _validate_size : function (name, value) {
            utils.validateClassAttribute(this._btnSizes, name, value);
        },

        _uiSet_size : function (name, value) {
            utils.setClassAttribute(this._btnSizes,
                this._dom.root, name, value);
        }
    });

});