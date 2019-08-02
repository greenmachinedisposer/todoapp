var React = require('react');
var createReactClass = require('create-react-class');
var L = require('leaflet');

require('./map.css');

var MAP_CONTAINER = "map-container"
var Map = createReactClass({
    getInitialState : function () {
        return {
            map : null
        }
    },
    render : function () {
        return (
            <div id={MAP_CONTAINER} className="map"></div>
        );
    },
    componentDidMount : function () {
        var map = L.map(MAP_CONTAINER);
        map.setView([0,0],11);
    }
});

module.exports = Map;