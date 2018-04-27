angular.module('starter').controller('registerController',function($scope,$http){
    $scope.main.dragContent = false;
    $scope.data = {};
    $scope.data.Location = '';
    $scope.data.Date = '';
    $scope.login = function(){
        var location = $scope.data.Location;
        var date = $scope.data.Date;
        var link = 'http://52.91.213.235/addReportConor.php?location='+location+'&date='+date;
        $http.get(link).success(function(result){
            //success result         
        });    
    }
})