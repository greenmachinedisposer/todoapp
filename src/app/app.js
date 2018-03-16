var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Components
var Map = require('./components/map/map.js');

var App = createReactClass({
    render : function () {
        return (
            <Map/>
        );
    }
});

ReactDOM.render(<App/>,document.getElementById('todo-wrapper'));