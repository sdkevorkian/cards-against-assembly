angular.module('CardsAgainstAssembly', ['CardsApp'])
.controller("CardsCtrl", ["$scope", "QuestionsFactory", function($scope, QuestionsFactory){
  $scope.qCards = QuestionsFactory.getCards();
  $scope.numPlayers = 3;
  $scope.errorMessage = "";

  $scope.$watch("numPlayers", function(newVal, oldVal){
    $scope.errorMessage = "";

    if(newVal <= 0){
      $scope.errorMessage = "It really isn't that fun to play by yourself. :(";
    }
    else if(newVal > 10){
      $scope.errorMessage = "That seems like too many people.";
    }
  });

  $scope.newQuestion = function(){
    $scope.displayCard = $scope.qCards[pickCardIndex($scope.qCards.length)];
  }

  $scope.newQuestion();
}]);

function pickCardIndex(size){
  return Math.floor(Math.random() * size);
}
