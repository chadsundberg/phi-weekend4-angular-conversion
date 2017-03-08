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
