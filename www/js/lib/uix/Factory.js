define(function(require) {
    var klass = require('klass');
    var Node = require('./Node');
    var Widget = require('./Widget');

    var Factory = klass(function() {
        this._typeMap = {};
        this._defaultClass = Node;
    }).methods({
        addType: function(type, klass) {
            this._typeMap[type] = klass;
        },

        _getClass: function(type) {
            if(this._typeMap.hasOwnProperty(type)) {
                var klass = this._typeMap[type];
                return klass;
            }
            return this._defaultClass;
        },

        create: function(desc, nodeCallback) {
            var type = desc[0];
            var attrs = desc[1];
            var children = desc[2] || [];
            var klass = this._getClass(type);
            var childNodes = [];
            var result;
            for(var i = 0; i < children.length; i++) {
                childNodes.push(this.create(children[i], nodeCallback));
            }
            if(klass.prototype.IS_WIDGET) {
                result = new klass(this, attrs);
            } else {
                result = new klass(type, attrs, childNodes);
            }
            if(nodeCallback) {
                nodeCallback(result);
            }
            return result;
        }
    });

    return Factory;
});