/** @jsx React.DOM */

var React = require('react');

var Item = React.createClass({
    generateProfit: function () {
        this.props.business.start();
    },
    buy: function () {
        this.props.business.buy();
    },
    render: function () {
        var style = {
            width: 200
        };
        var timerStart = this.props.business.get('timerStart');
        var inProgress = !!timerStart;
        var quantity = this.props.business.get('quantity');
        var cost = (this.props.business.get('cost')/100).toFixed(2);
        if (inProgress) {
            var p = this.props.business.get('interval') / 255;
            var i = Math.round((Date.now() - timerStart) / p); 
            style.backgroundColor = 'rgb(' + (255 - i) + ',' + i + ',0)';
        }
        return (
            <div className="item">
                <div className="item__name">{this.props.business.get('name')}</div>
                <div className="item__cost">{cost}</div>
                <button onClick={this.buy} type="button" role="button" className="item__action">{cost}</button>
                <button onClick={(inProgress || !quantity) ? null : this.generateProfit} type="button" role="button" className="item__action" style={style}>{this.props.business.get('profit')/100 * quantity} {i}</button>
            </div>
        )
    }
});

module.exports = Item;