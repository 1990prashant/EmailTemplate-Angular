angular.module('w3Mail', [])
  .controller('tabController', function($scope){
    $scope.activeTab = 'primary';
    $scope.setActiveTab = function(tabToSet) {
      $scope.activeTab = tabToSet;
    }
    $scope.mails = [
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in inbox primary", tag: "inbox", label: "primary"},
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in inbox primary", tag: "inbox", label: "primary"},
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in inbox social", tag: "inbox", label: "social"},
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in inbox promotion", tag: "inbox", label: "promotion"},
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in sent box", tag: "sent"}
    ]
    $scope.defaultTag = 'inbox';
    $scope.setCurrentTag = function(tagToSet) {
      $scope.defaultTag = tagToSet;
    }

    $scope.defaultName = 'primary';
    $scope.setDefaultName = function(nameToSet) {
      $scope.defaultName = nameToSet;
    }
  });