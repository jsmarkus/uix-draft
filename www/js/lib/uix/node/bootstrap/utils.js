define(function(require) {
    function validateClassAttribute(mapping, name, value) {
        if(value === null) {
            return;
        }
        if(!mapping.hasOwnProperty(value)) {
            throw new Error('bootstrap.utils.validateClassAttribute');
        }
    }

    function setClassAttribute(mapping, element, name, value) {
        for(var typeName in mapping) {
            var cssClass = mapping[typeName];
            if(cssClass) {
                element.removeClass(cssClass);
            }
        }
        if(null !== value) {
            var newClass = mapping[value];
            if(newClass) {
                element.addClass(newClass);
            }
        }

    }

    return {
        validateClassAttribute: validateClassAttribute,
        setClassAttribute: setClassAttribute
    };
});