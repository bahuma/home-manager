app.factory('HomeManagerApi', ['$http', function($http) {

    var urlBase = 'https://home-manager-api.herokuapp.com/api';
    var HomeManagerApi = {};
    
    HomeManagerApi.shoppinglist = {
        getAllItems : function() {
            return $http.get(urlBase + '/shoppinglist');
        },
        createItem : function(name) {
            return $http.post(urlBase + '/shoppinglist', {
                name: name
            });
        },
        deleteItem : function(id) {
            return $http.delete(urlBase + '/shoppinglist/' + id);
        },
        search : function(phrase) {
            return $http.get(urlBase + '/shoppinglist/search/' + phrase);
        },
        mail : function(email) {
            return $http.post(urlBase + '/shoppinglist/mail', {
                email: email
            });
        }
    };
    
    HomeManagerApi.common = {
        getHomeImage : function() {
            return $http.get(urlBase + '/common/home-image');
        },
        getHomeMessage : function() {
            return $http.get(urlBase + '/common/home-message')
        }
    }
    
    return HomeManagerApi;
}]);