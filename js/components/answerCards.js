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
    // this is assigned to 'ac'
    var ac = this;
    var cards = AnswersFactory.getCards();
    // $parent lets us access a variable in scope of parent controller
    ac.answerCards = shuffleAndLimit(cards, $scope.$parent.numPlayers);
    console.log(ac.answerCards);
}

function shuffleAndLimit(cards, limit) {
    if (limit > cards.length) {
        limit = cards.length;
    }
    var shuffled = cards.sort(function() {
        // random sorting 50-50 on pos or neg
        return 0.5 - Math.random();
    });

    return shuffled.slice(0, limit);
}
