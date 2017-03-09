myApp.controller('TaskController', ['$http', 'TaskFactory', function($http, TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.taskList = TaskFactory.allTasks;

  // TaskFactory.allTasks = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  // self.taskList = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  self.addTask = function() {
    TaskFactory.addTask(self.newTask);
    // $http({
    //   method: 'POST',
    //   url: '/tasks',
    //   data: self.newTask
    // }).then(function(response){
    //   console.log(response);
    //   TaskFactory.updateTasks();
    //   self.newTask = {};
    // });
  }

  self.deleteTask = function(taskId) {
    $http({
      method: 'DELETE',
      url: '/tasks/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }



// self.completeTask will stay here because it's the glue between the controller and the view
  self.completeTask = function(taskId) {
    TaskFactory.completeTask(taskId);
    //$http request moves to factory because it's the glue between the factory and the server

  }

  self.uncompleteTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/tasks/uncomplete/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }


}]);
