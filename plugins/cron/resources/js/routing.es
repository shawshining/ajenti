angular.module('cron').config(($routeProvider) => {
    $routeProvider.when('/view/cron', {
        templateUrl: '/cron:resources/partial/index.html',
        controller: 'CronIndexController',
    });
});
