/*global angular*/
angular.module('CardsAgainstAssembly', ['CardsApp'])
    .controller("CardsCtrl", ["$scope", "QuestionsFactory", function($scope, QuestionsFactory) {
        console.log("Cards Controller");


        // loads cards from QuestionFactory
        var questionCards = QuestionsFactory.getCards();
        $scope.displayCard = 'loading...';
        $scope.numPlayers = 3;
        $scope.players = [];
        $scope.gameStarted = false;
        console.log($scope.players);
        // push objects to array after game started (on new round button click)
        //# of objects pushed = numPlayers
        // for player in players, inputfield with name and button to submit name
        // $index passed into click function to add player name at that index
        // can delete players which will update numPlayers

        $scope.newQuestion = function() {
            $scope.displayCard = questionCards[pickCardIndex(questionCards.length)].question;

        };
        // runs on page load. has to come after function declared
        // $scope.newQuestion();

        $scope.addPlayers = function() {
            if ($scope.players.length !== $scope.numPlayers) {
                var playersToAdd = $scope.numPlayers - $scope.players.length;

                // this handles if greater than, will need if
                if (playersToAdd > 0) {
                    for (var i = 0; i < playersToAdd; i++) {
                        $scope.players.push({ playerName: "" });
                    }
                }
            }
        };

        $scope.startGame = function() {
            $scope.gameStarted = true;
            $scope.newQuestion();
        };

    }]);

function pickCardIndex(deckSize) {
    return Math.floor(Math.random() * deckSize);
}
