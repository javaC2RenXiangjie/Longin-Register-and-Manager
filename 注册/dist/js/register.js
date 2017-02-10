var app = angular.module("register",[]);

app.config(function($provide){});

app.controller("RegisterController",function($scope,$http,$window){

  //班级选择
  // 可能可以直接用response.date传入数组
  $scope.classes = ["JavaC1","JavaC2"];

  // 点击注册
  $scope.sign = function(){
    var user = {};
    user.account = $scope.user.account;
    user.trueName = $scope.user.trueName;
    user.gender = $scope.user.gender;
    user.password = $scope.user.password;
    user.telephone = $scope.user.telephone;
    user.group = $scope.user.group;
    console.log(user.telephone);
    console.log(angular.isNumber($scope.user.telephone));
    console.log(user.gender);

  }

  // 返回登录页面
  $scope.backToLogin = function(){
    window.location.href="login.html";
  }

});
