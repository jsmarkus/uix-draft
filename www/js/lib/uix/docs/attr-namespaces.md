# Namespaced attributes.

Subj allows to define rules for setting groups of attributes with one set of rules.

Useful for working with infinite number of attrs, like HTML-attributes, CSS-classes, CSS-styles.

    //attr namespace definition in class
    ATTRNS_html : {
        validate : '_validate_ns_html',
        change : '_uiSet_ns_html'
    },
    //optionally define namespaced attr separately
    "ATTR_html:src" : {
        validate : '_validate_html_src',
        change : '_uiSet_html_src'
    },

    //setting namespaced attribute programmatically
    entity.set('html:src', '/img.js')

    //JSON
    ["img, {"html:src": "/img.js"}]