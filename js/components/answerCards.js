/*global angular*/

// no dependencies, name and then options

angular.module("CardsAgainstAssembly")
    .component("answerCards", {

        templateUrl: 'js/components/views/answerCards.html',
        controller: ['$scope', "AnswersFactory", AnswerCardsController],
        // give alias so we don't have to use this keyword and its more identifiable
        controllerAs: 'ac',

        scope: true
    });

function AnswerCardsController($scope, AnswersFactory) {

    var ac = this;

    console.log($scope.$parent.deckset);

    var cards = chooseDeck($scope.$parent.deckset);
    console.log('cards are', cards);

    // this may be where we need to add the watch group on both numPlayers and deckset
    $scope.$watch('$parent.numPlayers', function(newVal, oldVal) {
        ac.answerCards = shuffleAndLimit(cards, $scope.$parent.numPlayers);
    });

    function chooseDeck(deckset) {
        var themedCards = [];
        if (deckset == "webdev") {
            themedCards = AnswersFactory.getDevCards();
        } else {
            themedCards = AnswersFactory.getCards();
        }

        return themedCards;
    }

    function shuffleAndLimit(cards, limit) {
        if (limit > cards.length) {
            limit = cards.length;
        }

        var shuffled = cards.sort(function() {
            return 0.5 - Math.random();
        });

        return shuffled.slice(0, limit);
    }


}
