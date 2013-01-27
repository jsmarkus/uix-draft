# API proposal

## Classes

`Model` - base class. Observable attributes holder.

`Node` (extends `Model`) - simple DOM asset.

`Widget` (extends Node) - complex structure, made of nodes and widgets. Can address its assets by name.

`Factory` - resolves nodes(widgets) names to classes in runtime.
Generated factories are used internally by widgets, compiled by `uix/json!` plugin.
Static factories are used in static (non-AMD) builds.

`Resolver` - resolves nodes(widgets) names to modules paths. Used internally by `uix/json!` plugin.

`Codegen` - generates widget class code by its description. Used internally by `uix/json!` plugin.


## Model

```javascript
//Create a model.
var m = new Model();

//Set model's attribute
m.set(attrName, attrValue);
```

## Node

```javascript
//Create a node.
var n = new Node();

//Set node's attribute.
n.set(attrName, attrValue);

//Add child node.
n.add Child(childNode[, atIndex]);

//Render the node.
var dom = n.render();
```

## Widget

```javascript
//Create a widget
var w = new Widget();

//Set the factory that will create widgets and nodes from names.
//Called internally in compiled widgets.
//Must be called after creation in runtime widgets.
w.setFactory(factory);

//Build widget's structure (when factory is set).
//Called internally in compiled widgets.
//Must be called after setFactory() in runtime widgets.
w.build();

//Set an attribute
w.set(attrName, attrValue);

//Add child
//Virtual in base Widget class, you may implement own addChild() method.
w.addChild(childNode[, atIndex]);

//Render the widget
var dom = w.render();

//var node = w.getByName(name);
```