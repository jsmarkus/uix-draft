(function() {

    define(['uix/Codegen', 'zepto'], function(Codegen, $) {
        return {
            load: function(name, req, load, config) {
                var url = req.toUrl(name + '.json');
                var codegen = new Codegen();

                $.getJSON(url, function(json) {
                    var source = codegen.generate(json);
                    load.fromText(source);
                });
            }
        };
    });

}());