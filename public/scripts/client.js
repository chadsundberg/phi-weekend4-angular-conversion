var myApp = angular.module('TaskApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html'
    })
    .when('/todoList', {
      templateUrl: '/views/todoList.html'
    })
    .when('/about', {
      templateUrl: '/views/about.html'
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);























myApp.controller('TaskController', ['$http', function($http){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.taskList = [];

  getTasks();

  function getTasks() {
    $http({
      method: 'GET',
      url: '/tasks'
    }).then(function(response) {
      console.log(response.data);
      self.taskList = response.data;
    });
  }

  self.addTask = function() {
    $http({
      method: 'POST',
      url: '/tasks',
      data: self.newTask
    }).then(function(response){
      console.log(response);
      getTasks();
      self.newTask = {};
    });
  }

  self.deleteTask = function(taskId) {
    $http({
      method: 'DELETE',
      url: '/tasks/' + taskId
    }).then(function(response){
      getTasks();
    });
  }

  self.completeTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/tasks/' + taskId
    }).then(function(response){
      getTasks();
    });
  }



}]);
