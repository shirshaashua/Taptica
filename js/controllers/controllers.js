app.controller('mainController', function ($scope) {

    $scope.tabs = [
        { title:'Pie Chart', content:'templates/chart.html'},
        { title:'Table', content:'templates/table.html' }
    ];

});

app.controller('tableArrange', function ($scope,getPubService) {
    $scope.pubInfo="";

    var myDataPromise = getPubService.getPubs($scope.query);
     myDataPromise.then(function (result) {  // this is only run after $http completes
     $scope.pubInfo = result.data;
     });

    $scope.search = function (row) {
        if (!$scope.query) {
            return true;
        }

        return (row["1"].indexOf($scope.query || '') !== -1);
    };

    //order by:
    $scope.predicate = 4;//date as default
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

});
app.controller('chartArrange', function ($scope, getGeoService) {
    $scope.geoInfo="";
    $scope.labels =[];
    $scope.data = [];

    var myDataPromise = getGeoService.getGeos($scope.query);
    myDataPromise.then(function (result) {  // this is only run after $http completes
        $scope.geoInfo = result.data.data.geo;

        angular.forEach( $scope.geoInfo, function(value, key) {
            $scope.labels.push(value.country);
            $scope.data.push(value.count);
        });

    });

});
