angular.module('CardsAgainstAssembly', ['CardsApp'])
    .controller("CardsCtrl", ["$scope", "QuestionsFactory", function($scope, QuestionsFactory) {
        console.log("Cards Controller");


        var questionCards = QuestionsFactory.getCards();
        $scope.numPlayers = 3;

        $scope.newRound = function() {
            $scope.displayCard = questionCards[pickCardIndex(questionCards.length)].question;
        }

        $scope.newRound();

    }]);

function pickCardIndex(deckSize) {
    return Math.floor(Math.random() * deckSize);
}
