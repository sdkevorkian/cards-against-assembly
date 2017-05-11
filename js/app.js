/*global angular*/
angular.module('CardsAgainstAssembly', ['CardsApp'])
    .controller("CardsCtrl", ["$scope", "QuestionsFactory", function($scope, QuestionsFactory) {
        console.log("Cards Controller");

        // loads cards from QuestionFactory
        var questionCards = QuestionsFactory.getCards();
        $scope.displayCard = 'loading...';
        $scope.numPlayers = 3;

        $scope.newQuestion = function() {
            $scope.displayCard = questionCards[pickCardIndex(questionCards.length)].question;
        };

        // runs on page load. has to come after function declared
        $scope.newQuestion();

    }]);

function pickCardIndex(deckSize) {
    return Math.floor(Math.random() * deckSize);
}
