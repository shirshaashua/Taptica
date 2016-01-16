app.factory("getPubService", function ($http) {
    var getPubService = {};
    getPubService.getPubs = function () {
        return $http.get("json/publishers.json");
    
    };

    return getPubService;
});
app.factory("getGeoService", function ($http) {
    var getGeoService = {};
    getGeoService.getGeos = function () {
        return $http.get("json/geo.json");

    };

    return getGeoService;
});