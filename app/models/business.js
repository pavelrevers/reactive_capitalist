var Backbone = require('backbone');

var Business = Backbone.Model.extend({
    defaults: {
        quantity: 0,
        profitMultiplier: 1,
        speedMultiplier: 1,
        withManager: false,
        interval: 2000,
        timerStart: 0
    },
    buy: function (num) {
        this.trigger('requestCash', {business: this, sum: this.get('cost')});
    },
    start: function () {
        this.set('timerStart', Date.now());
        setTimeout(this.generateProfit.bind(this), this.get('interval') / this.get('speedMultiplier'));
    },
    generateProfit: function () {
        this.trigger('profit', this.get('profit') * this.get('quantity') * this.get('profitMultiplier'));
        this.set('timerStart', 0);
    },
    closeTransaction: function () {
        this.set('quantity', this.get('quantity') + 1);
        this.set('cost', Math.round(this.get('cost') * 1.07));
    }
});

module.exports = Business;