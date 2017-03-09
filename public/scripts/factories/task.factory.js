myApp.factory('TaskFactory', ['$http', function($http) {

var factoryTasks = { list: [] };

getTasks();

function getTasks() {
  $http({
    method: 'GET',
    url: '/tasks'
  }).then(function(response) {
    console.log(response.data);
    factoryTasks.list = response.data;
  });
}

function completeTask(taskId) {
  $http({
  method: 'PUT',
  url: '/tasks/complete/' + taskId
  }).then(function(response) {
  getTasks();
});
}

function addTask(newTask) {
  $http({
  method: 'POST',
  url: '/tasks',
  data: newTask
}).then(function(newTask){
  console.log(newTask);

  // self.newTask = {};
  getTasks();
});
}

  return {
    allTasks: factoryTasks,
    updateTasks: getTasks,
    completeTask: completeTask,
    addTask: addTask
  };
}]);
