var React = require('react');
var Game = require('./build/views/scenes/game/game.js');
var Backbone = require('backbone');
var Business = require('./build/models/business.js');

var Businesses = Backbone.Collection.extend({
    model: Business
});

var GameState = Backbone.Model.extend({
    initialize: function () {
        this.get('businesses').on('requestCash', function (request) {
            if (this.get('cash') >= request.sum) {
                this.set('cash', this.get('cash') - request.sum);
                request.business.closeTransaction();
            }
        }, this);
        this.get('businesses').on('profit', function (profit) {
            this.set('cash', this.get('cash') + profit);
        }, this);
        this.get('businesses').on('change', function () {
            this.trigger('change');
        }, this);
    }
});

var gameState = new GameState({
    cash: 0,
    businesses: new Businesses([
        {
            name: 'lemon',
            profit: 100,
            cost: 400,
            quantity: 1
        },
        {
            name: 'newspaper',
            profit: 400,
            cost: 1600
        },
        {
            name: 'pizza',
            profit: 1600,
            cost: 6400
        },
        {
            name: 'car wash',
            profit: 1600,
            cost: 6400
        }
    ])
});

var game = React.renderComponent(Game({state: gameState, cash: 0}), document.getElementsByTagName('body')[0].getElementsByTagName('div')[0]);

var update = function () {
    game.setProps({state: gameState});
};

// gameState.on('change', function () {
//     console.log('change');
//     update();
// });

(function loop () {
    update();
    requestAnimationFrame(loop);
})();