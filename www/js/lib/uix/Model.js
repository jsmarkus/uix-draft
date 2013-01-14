define(function(require) {

    var klass = require('klass');
    var EventEmitter = require('EventEmitter');

    var Model = klass(

    function Model() {
        this._attrs = {};
        this.event = new EventEmitter();
        this._bufferedChanges = {};
        this._setDefaultAttributes();
    }).methods({

        trigger : function (eventName, args) {
            args = args || [];
            var _args = [];
            // _args.push(eventName);
            _args.push(this);
            this.event.trigger.call(this.event, eventName, _args.concat(args));
        },

        _change : function (attr, options) {
            options = options || {};
            if(!attr) {
                var attrs = this._getAttributeDescriptions();
                for(attr in attrs) {
                    if(attr in this._bufferedChanges) {
                        this._change(attr, options);
                    }
                }
                return;
            }
            var desc = this._getAttributeDescription(attr);
            var val = this._attrs[attr];
            if(desc.change) {
                this[desc.change](attr, val);
            }
            if(!options.internal) {
                this.trigger('change_' + attr, val);
            }
            delete this._bufferedChanges[attr];
        },

        _populateAttrs : function (attrs) {
            for(var attrName in attrs) {
                if(attrs.hasOwnProperty(attrName)) {
                    this.set(attrName, attrs[attrName], {silent:true});
                }
            }
        },
        _setDefaultAttributes: function() {
            var attrs = this._getAttributeDescriptions();
            for(var attrName in attrs) {
                var desc = attrs[attrName];
                if('value' in desc) {
                    this.set(attrName, desc.value, {silent:true});
                }
            }
        },

        _getAttributeDescriptions: function() {
            var output = {};
            for(var propName in this) {
                if(0 === propName.indexOf('ATTR_')) {
                    output[propName.replace(/^ATTR_/, '')] = this[propName];
                }
            }
            return output;
        },

        _getAttributeDescription: function(attr) {
            var descName = 'ATTR_' + attr;
            return this[descName];
        },

        _validateAttribute : function (attr, val) {
            var desc = this._getAttributeDescription(attr);
            if(desc && desc.validate) {
                if('function' === typeof this[desc.validate]) {
                    this[desc.validate](attr, val);
                }
            }
        },

        set: function(attr, val, options) {
            options = options || {};
            var desc = this._getAttributeDescription(attr);
            if(!desc) {
                throw new Error('Model.set: no such attribute ' + attr);
            }
            this._validateAttribute(attr, val);
            if(this._attrs[attr] !== val) {
                this._bufferedChanges[attr] = val;
                this._attrs[attr] = val;
                if(!options.silent) {
                    this._change(attr);
                }
            }
        },

        get: function(attr) {
            var desc = this._getAttributeDescription(attr);
            if(!desc) {
                throw new Error('Model.set: no such attribute ' + attr);
            }
            return this._attrs[attr];
        }
    });

    return Model;
});