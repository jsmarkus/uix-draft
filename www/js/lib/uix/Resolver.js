define(function(require) {
    var Boop = require('boop');

    return Boop.extend({
        defaultNs : 'node',
        nsMap : {
            'bs' : 'node/bootstrap',
            'w' : 'widget'
        },
        parseName: function(name) {
            var parts = ('' + name).split('.', 2);
            var namespace, module;
            if(parts.length === 1) {
                namespace = null;
                module = parts[0];
            } else {
                namespace = parts[0];
                module = parts[1];
            }
            return {
                namespace: namespace,
                module: module
            };
        },

        resolve: function(ns, module) {
            namespace = this.nsMap[ns] || this.defaultNs;
            return 'uix/' + namespace + '/' + module;
        }
    });
});