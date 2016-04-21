/**
 * Created by ericshape on 4/21/16.
 */

var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
    var o = {
        posts: []
    };
    return o;
}])

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){
        $scope.test = 'Hello world!';

        $scope.posts = posts.posts;

        $scope.addPost = function(){
            if(!$scope.title || $scope.title === '') { return; }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0
            });
            $scope.title = '';
            $scope.link = '';
        };
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };
    }]);


