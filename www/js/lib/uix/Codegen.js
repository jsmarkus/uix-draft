define(function(require) {
    var Boop = require('boop');
    var Resolver = require('uix/Resolver');

    return Boop.extend({
        initialize: function() {
            this.resolver = new Resolver();
        },


        _processNode: function(node, cb) {
            var name = node[0];
            var attrs = node[1];
            var children = node[2];
            cb.call(this, node);
            if(children) {
                for(var i = 0; i < children.length; i++) {
                    this._processNode(children[i], cb);
                }
            }
        },

        _generateRequires: function(description) {
            var nameToPath = {};
            this._processNode(description, onNode);

            function onNode(node) {
                var name = node[0];
                var moduleObject = this.resolver.parseName(name);
                var modulePath = this.resolver.resolve(moduleObject.namespace, moduleObject.module);
                nameToPath[name] = modulePath;
            }

            return nameToPath;
        },

        _generateFactoryTypes: function(requires) {
            var out = [];
            for(var name in requires) {
                var path = requires[name];
                out.push(JSON.stringify(name) + ': require(' + JSON.stringify('' + path) + ')');
            }
            return '{\n' + (out.join(',\n')) + '\n}';
        },

        _template: function(REQUIRE) {
            var Boop = REQUIRE('boop');
            var Widget = REQUIRE('uix/Widget');
            var Factory = REQUIRE('uix/Factory');
            return Widget.extend({
                initialize : function(attrs) {
                    var factory = new Factory();
                    factory.addTypes(TYPES);
                    Widget.prototype.initialize.call(this, factory, attrs); //super
                },
                _description : DESCRIPTION
            });
        },

        generate: function(description) {
            var requires = this._generateRequires(description);
            var facTypes = this._generateFactoryTypes(requires);
            var source = 'de' + 'fine(' + this._template.toString() + ');';
            source = source.replace(/REQUIRE/g, 're' + 'quire');
            source = source.replace(/TYPES/g, facTypes);
            source = source.replace(/DESCRIPTION/g, JSON.stringify(description, null, 4));
            return source;
        }
    });
});