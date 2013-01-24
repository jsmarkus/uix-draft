(function() {

    define(['uix/Codegen'], function(Codegen) {

        var buildMap = {};

        return {
            load: function(name, req, load, config) {
                var codegen = new Codegen();
                var url = req.toUrl(name + '.json');
                if('undefined' !== typeof process) {
                    var fs = require.nodeRequire('fs');
                    fs.readFile(url, 'utf8', function(err, text) {
                        var json = JSON.parse(text);
                        var source = codegen.generate(json);
                        buildMap[name] = source;
                        load.fromText(name, source);
                    });
                } else {
                    require(['zepto'], function($) {
                        $.getJSON(url, function(json) {
                            var source = codegen.generate(json);
                            source = source.replace(/NAME\,/g, '');
                            load.fromText(name, source);
                        });
                    });
                }
            },

            write: function(pluginName, moduleName, write) {
                if(moduleName in buildMap) {
                    var content = buildMap[moduleName];
                    write.asModule(pluginName+'!'+moduleName, content);
                }
            }
        };
    });

}());