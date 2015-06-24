var cards = require("../../../../../../assets/data/cards");
var deck = require("../../../../../../assets/data/deck");

module.exports = {

  template: require('../views/deck-builder.html'),

  data: function() {
    return {
      cards: [],
      deck: [],

      leaders: [],
      leader: null,

      factionFilter: 'Northern Realm'
    }
  },

  ready: function() {
    this.cards = cards;
  },

  methods: {
    changeDeck: function(deck) {
      $('.all-cards').addClass('remove');
      this.factionFilter = deck;
      $('.all-cards').scrollTop(0);

      setTimeout(function() {
        $('.all-cards').removeClass('remove');
      }, 600);
    }
  }
};