app.factory('HomeManagerApi', ['$http', 'AppConfig', function($http, AppConfig) {

    var urlBase = 'https://home-manager-api.herokuapp.com/api';
    var HomeManagerApi = {};
    
    var dev = "";
    
    if (AppConfig.devMode) {
        dev = "?dev=true"
    }
    
    HomeManagerApi.shoppinglist = {
        getAllItems : function() {
            return $http.get(urlBase + '/shoppinglist' + dev);
        },
        createItem : function(name) {
            return $http.post(urlBase + '/shoppinglist' + dev, {
                name: name
            });
        },
        deleteItem : function(id) {
            return $http.delete(urlBase + '/shoppinglist/' + id + dev);
        },
        search : function(phrase) {
            return $http.get(urlBase + '/shoppinglist/search/' + phrase + dev);
        },
        mail : function(email) {
            return $http.post(urlBase + '/shoppinglist/mail' + dev, {
                email: email
            });
        }
    };
    
    HomeManagerApi.common = {
        getHomeImage : function() {
            return $http.get(urlBase + '/common/home-image' + dev);
        },
        getHomeMessage : function() {
            return $http.get(urlBase + '/common/home-message' + dev);
        }
    };
    
    HomeManagerApi.user = {
      getAllUsers : function() {
          return $http.get(urlBase + '/user' + dev);
      }  
    }
    
    return HomeManagerApi;
}]);