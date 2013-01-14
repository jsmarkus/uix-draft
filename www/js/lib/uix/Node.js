define(function(require) {

    var uix = require('uix/uix');
    var klass = require('klass');
    var Model = require('./Model');

    var $ = uix.$;


    var Node = Model.extend(function Node(type, attrs, children) {
        this.set('id', uix.createUid(), {silent:true});
        this.type = type;
        this.attrs = attrs || {};
        this.children = children || [];
        this._populateAttrs(this.attrs);
    }).methods({
        ATTR_id : {
            change : '_uiSet_id',
            validate : '_validate_id'
        },

        ATTR_name : {},

        ATTR_text : {
            change : '_uiSet_text'
        },

        ATTR_html : {
            change : '_uiSet_html'
        },

        ATTR_color : {
            change : '_uiSet_color'
        },

        render: function() {
            var dom = this._dom = this._createDom();
            //Rendering children nodes.
            this._renderChildren();
            //Calling `_change` in order to reflect current attributes' values to UI.
            this._change(null, {internal:true});
            if('function' === typeof this._bindEvents) {
                this._bindEvents();
            }
            return dom.root;
        },

        _renderChildren : function () {
            var childrenContainer = this._dom.children;
            if(!childrenContainer) {
                return;
            }
            for(var i = 0; i < this.children.length; i++) {
                childrenContainer.append(this.children[i].render());
            }
        },

        _createDom : function () {
            var root = $(document.createElement(this.type.toUpperCase()));
            return {
                root : root,
                children : root
            };
        },

        _validate_id: function(name, value) {
            if(this.get('id')) {
                throw new Error('Node._validate_id');
            }
        },

        _uiSet_id: function(name, value) {
            this._dom.root.attr('data-uix-id', value);
        },

        _uiSet_text: function(name, value) {
            this._dom.root.text(value);
        },

        _uiSet_html: function(name, value) {
            this._dom.root.html(value);
        },

        _uiSet_color: function(name, value) {
            this._dom.root.css('color', value);
        }

    });

    return Node;
});