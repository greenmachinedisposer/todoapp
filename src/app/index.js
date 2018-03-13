var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Todo = createReactClass({
    render : function () {
        return (
            <h1>Hello</h1>
        );
    }
});

ReactDOM.render(<Todo/>,document.getElementById('todo-wrapper'));