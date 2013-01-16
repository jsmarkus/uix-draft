define(function(require) {
    var uix = require('uix/uix');
    var Node = require('../../Node');

    var $ = uix.$;

    var Component = Node.extend({
        // - span : Number, 1..12
        // - offset : Number, 1..12
        // - visiblePhone : Boolean
        // - hiddenPhone : Boolean
        // - visibleTablet : Boolean
        // - hiddenTablet : Boolean
        // - visibleDesktop : Boolean
        // - hiddenDesktop : Boolean
        ATTR_span: {
            change: '_uiSet_span'
        },
        ATTR_offset: {
            change: '_uiSet_offset'
        },
        ATTR_visiblePhone: {
            change: '_uiSet_visiblePhone'
        },
        ATTR_hiddenPhone: {
            change: '_uiSet_hiddenPhone'
        },
        ATTR_visibleTablet: {
            change: '_uiSet_visibleTablet'
        },
        ATTR_hiddenTablet: {
            change: '_uiSet_hiddenTablet'
        },
        ATTR_visibleDesktop: {
            change: '_uiSet_visibleDesktop'
        },
        ATTR_hiddenDesktop: {
            change: '_uiSet_hiddenDesktop'
        },

        _createDom: function() {
            var root = $('<div>');
            return {
                root: root,
                children: root
            };
        },

        _uiSet_span: function(name, value) {
            this._dom.root.removeClass(function(index, className) {
                return (/^span\d+/).test(className) ? className : '';
            });
            if(value) {
                this._dom.root.addClass('span' + value);
            }
        },

        _uiSet_offset: function(name, value) {
            this._dom.root.removeClass(function(index, className) {
                return (/^offset\d+/).test(className) ? className : '';
            });
            if(value) {
                this._dom.root.addClass('offset' + value);
            }
        },

        _uiSet_visiblePhone: function(name, value) {
            if(value) {
                this._dom.root.addClass('visible-phone');
            } else {
                this._dom.root.removeClass('visible-phone');
            }
        },

        _uiSet_hiddenPhone: function(name, value) {
            if(value) {
                this._dom.root.addClass('hidden-phone');
            } else {
                this._dom.root.removeClass('hidden-phone');
            }
        },

        _uiSet_visibleTablet: function(name, value) {
            if(value) {
                this._dom.root.addClass('visible-tablet');
            } else {
                this._dom.root.removeClass('visible-tablet');
            }
        },

        _uiSet_hiddenTablet: function(name, value) {
            if(value) {
                this._dom.root.addClass('hidden-tablet');
            } else {
                this._dom.root.removeClass('hidden-tablet');
            }
        },

        _uiSet_visibleDesktop: function(name, value) {
            if(value) {
                this._dom.root.addClass('visible-desktop');
            } else {
                this._dom.root.removeClass('visible-desktop');
            }
        },

        _uiSet_hiddenDesktop: function(name, value) {
            if(value) {
                this._dom.root.addClass('hidden-desktop');
            } else {
                this._dom.root.removeClass('hidden-desktop');
            }
        }

    });

    return Component;

});