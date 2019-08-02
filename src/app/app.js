var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

//Components
// var Map = require('./components/map/map.js');

var App = createReactClass({
    render : function () {
        return (
            <h1>Test only</h1>
        );
    }
});

ReactDOM.render(<App/>,document.getElementById('todo-wrapper'));