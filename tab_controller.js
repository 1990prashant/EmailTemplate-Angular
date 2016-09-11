angular.module('w3Mail', [])
  .controller('tabController', function($scope){
    $scope.activeTab = 'primary';
    $scope.setActiveTab = function(tabToSet) {
      $scope.activeTab = tabToSet;
    }
    $scope.inboxMails = [
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in inbox primary", tag: "inbox", label: "primary"},
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in inbox primary", tag: "inbox", label: "primary"},
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in inbox social", tag: "inbox", label: "social"},
      {from: "pmmishra78@gmail.com", subject: "Test Mail", body: "Mail in inbox promotion", tag: "inbox", label: "promotion"}
    ];

    $scope.sentMails = [
      {to: "prashantkm91@gmail.com", subject: "Test Mail", body: "Mail in sent box", tag: "sent"},
      {to: "prashant.mishra@w3villa.com", subject: "Test Mail", body: "Mail in sent box", tag: "sent"}
    ];

    $scope.trashMails = [
      {}
    ];

    $scope.defaultTag = 'inbox';
    $scope.setCurrentTag = function(tagToSet) {
      $scope.defaultTag = tagToSet;
    }

    $scope.defaultName = 'primary';
    $scope.setDefaultName = function(nameToSet) {
      $scope.defaultName = nameToSet;
    }

    $scope.open = function () {
      console.log('opening pop up');
      var modalInstance = $modal.open({
        templateUrl: 'popup.html',
        controller: 'PopupCont',
      });
    }

  });