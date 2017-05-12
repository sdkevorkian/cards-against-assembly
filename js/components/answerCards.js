angular.module("CardsAgainstAssembly")
    .component("answerCards", {
        templateUrl: "js/components/views/answerCards.html",
        controller: ["$scope", "AnswersFactory", AnswerCardsController],
        controllerAs: "ac",
        scope: true
    });

function AnswerCardsController($scope, AnswersFactory) {
    var ac = this;

    console.log($scope.$parent.deckset)

    ac.answerCards = chooseDeck(cards, $scope.$parent.deckset)
    console.log('cards are', ac.answerCards)
    ac.answerCards = shuffleAndLimit(ac.answerCards, $scope.$parent.numPlayers)

    function chooseDeck(cards, deckset) {
        var cards

        if (deckset == "webdev") {
            cards = AnswersFactory.getDevCards()
        } else {
            cards = AnswersFactory.getCards()
        };

        return cards
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
