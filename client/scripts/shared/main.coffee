'use strict';

angular.module('app.controllers', [])

# overall control
.controller('AppCtrl', [
    '$scope', '$rootScope', 'localize'
    ($scope, $rootScope, localize) ->
        $window = $(window)

        $scope.main =
            brand: 'Trung Tâm tư vấn du học Himawari'

        $scope.admin =
            layout: 'wide'          # 'boxed', 'wide'
            menu: 'vertical'        # 'horizontal', 'vertical'
            fixedHeader: true       # true, false
            fixedSidebar: false     # true, false

        $scope.color =
            primary:    '#1BB7A0'
            success:    '#94B758'
            info:       '#56BDF1'
            infoAlt:    '#7F6EC7'
            warning:    '#F3C536'
            danger:     '#FA7B58'

])

.controller('HeaderCtrl', [
    '$scope'
    ($scope) ->

        $scope.introOptions =
            steps: [
                element: '#step1',
                intro: "<strong>Heads up!</strong> You can change the layout here"
                position: 'bottom'
            ,
                element: '#step2'
                intro: "Select a different language",
                position: 'right'
            ,
                element: '#step3'
                intro: "Runnable task App",
                position: 'left'
            ,
                element: '#step4'
                intro: "Collapsed nav for both horizontal nav and vertical nav",
                position: 'right'
            ]


])

.controller('NavContainerCtrl', [
    '$scope'
    ($scope) ->


])
.controller('NavCtrl', [
    '$scope', 'taskStorage', 'filterFilter'
    ($scope, taskStorage, filterFilter) ->
        # init
        tasks = $scope.tasks = taskStorage.get()
        $scope.taskRemainingCount = filterFilter(tasks, {completed: false}).length

        $scope.$on('taskRemaining:changed', (event, count) ->
            $scope.taskRemainingCount = count
        )
])

.controller('DashboardCtrl', [
    '$scope'
    ($scope) ->

])