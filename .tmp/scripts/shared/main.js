(function() {
  'use strict';
  angular.module('app.controllers', []).controller('AppCtrl', [
    '$scope', '$rootScope', 'localize', function($scope, $rootScope, localize) {
      var $window;
      $window = $(window);
      $scope.main = {
        brand: 'Trung Tâm tư vấn du học Himawari'
      };
      $scope.admin = {
        layout: 'wide',
        menu: 'vertical',
        fixedHeader: true,
        fixedSidebar: false
      };
      return $scope.color = {
        primary: '#1BB7A0',
        success: '#94B758',
        info: '#56BDF1',
        infoAlt: '#7F6EC7',
        warning: '#F3C536',
        danger: '#FA7B58'
      };
    }
  ]).controller('HeaderCtrl', [
    '$scope', function($scope) {
      return $scope.introOptions = {
        steps: [
          {
            element: '#step1',
            intro: "<strong>Heads up!</strong> You can change the layout here",
            position: 'bottom'
          }, {
            element: '#step2',
            intro: "Select a different language",
            position: 'right'
          }, {
            element: '#step3',
            intro: "Runnable task App",
            position: 'left'
          }, {
            element: '#step4',
            intro: "Collapsed nav for both horizontal nav and vertical nav",
            position: 'right'
          }
        ]
      };
    }
  ]).controller('NavContainerCtrl', ['$scope', function($scope) {}]).controller('NavCtrl', [
    '$scope', 'taskStorage', 'filterFilter', function($scope, taskStorage, filterFilter) {
      var tasks;
      tasks = $scope.tasks = taskStorage.get();
      $scope.taskRemainingCount = filterFilter(tasks, {
        completed: false
      }).length;
      return $scope.$on('taskRemaining:changed', function(event, count) {
        return $scope.taskRemainingCount = count;
      });
    }
  ]).controller('DashboardCtrl', ['$scope', function($scope) {}]);

}).call(this);
