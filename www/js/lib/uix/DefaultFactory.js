define(function (require) {
    var Factory = require('./Factory');


    var Checkbox = require('./node/Checkbox');
    var Text = require('./node/Text');
    var BS = {};
    BS.Component = require('./node/bootstrap/Component');
    BS.Container = require('./node/bootstrap/Container');
    BS.Row = require('./node/bootstrap/Row');
    BS.Button = require('./node/bootstrap/Button');
    BS.IconButton = require('./node/bootstrap/IconButton');
    BS.Icon = require('./node/bootstrap/Icon');
    BS.TextInput = require('./node/bootstrap/TextInput');

    var W = {};
    W.Test = require('./TestWidget');


    var DefaultFactory = Factory.extend({
        initialize : function () {
            Factory.prototype.initialize.apply(this, arguments); //super

            this.addType('checkbox', Checkbox);
            this.addType('text', Text);
            this.addType('bs.component', BS.Component);
            this.addType('bs.container', BS.Container);
            this.addType('bs.row', BS.Row);
            this.addType('bs.button', BS.Button);
            this.addType('bs.icon', BS.Icon);
            this.addType('bs.iconButton', BS.IconButton);
            this.addType('bs.textInput', BS.TextInput);
            this.addType('w.test', W.Test);
        }
    });

    return DefaultFactory;

});