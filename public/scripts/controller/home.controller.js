myApp.controller('HomeController', ['TaskFactory', function(TaskFactory){
  console.log('home controller was loaded');
  var self = this;
  self.someMessage = 'This site is amazing!!';
}]);
