/** @jsx React.DOM */

var React = require('react');
var Page = require('./../../components/page/page.js');
var Item = require('./../../components/item/item.js');

var Game = React.createClass({
    render: function () {
        var state = this.props.state;
        var businesses = this.props.state.get('businesses').map(function (business) {
            return <Item business={business} />
        });
        return (
            <div className="game">
                <div className="game__cash">{this.props.state.get('bank').get('cash')/100}</div>
                {businesses}
            </div>
        )
    }
});

module.exports = Game;