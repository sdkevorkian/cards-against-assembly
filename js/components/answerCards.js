angular.module("CardsAgainstAssembly")
.component("answerCards", {
  templateUrl: "js/components/views/answerCards.html",
  controller: ["$scope", "AnswersFactory", AnswerCardsController],
  controllerAs: "ac",
  scope: true
});

function AnswerCardsController($scope, AnswersFactory){
  var ac = this;
  var cards = AnswersFactory.getCards();
  ac.aCards = shuffleArray(cards, $scope.$parent.numPlayers);

  $scope.$parent.reset = function(num){
    if(num >= 0 && num <= 10){
      ac.aCards = shuffleArray(cards, num);
      $scope.$parent.newQuestion();
    }
  }
}

function shuffleArray(arr, limit){
  if(limit > arr.length){
    limit = arr.length;
  }
  var shuffled = arr.sort(function(){
    return 0.5 - Math.random(); //not actually that random, but whatevs
  });
  return shuffled.slice(0, limit);
}
