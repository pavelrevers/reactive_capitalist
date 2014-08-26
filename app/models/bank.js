var Backbone = require('backbone');

var Bank = Backbone.Model.extend({
    defaults: {
        cash: 0
    },
    putMoney: function (money) {
        this.set('cash', this.get('cash') + money);
    },
    requestMoney: function (money) {
        if (this.get('cash') >= money) {
            this.set('cash', this.get('cash') - money);
            return money;
        } else {
            return 0;
        }
    }
});

module.exports = Bank;