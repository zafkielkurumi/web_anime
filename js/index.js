var app = angular.module("myM", ['ionic']);
app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
        .state('news',{
            templateUrl:'pub/news.html',
            url:'/news',
            controller:'pagelist'
        })
        .state('newsdetail',{
            templateUrl:'pub/detail/news.html',
            url:'/news/:id',
            controller:'pagedetail'
        })
        .state('comic',{
            templateUrl:'pub/comic.html',
            url:'/comic',
            controller:'pagelist'
        })
        .state('comicdetail',{
            templateUrl:'pub/detail/comic.html',
            url:'/comic/:id',
            controller:'pagedetail'
        })
        .state('fate',{
            templateUrl:'pub/fate.html',
            url:'/fate',
            controller:'pagelist'

        })
        .state('fatedetail',{
            templateUrl:'pub/detail/fate.html',
            url:'/fate/:id',
            controller:'pagedetail'

        })
        .state('yys',{
            templateUrl:'pub/yys.html',
            url:'/yys',
            controller:'pagelist'

        })
        .state('yysdetail',{
            templateUrl:'pub/detail/yys.html',
            url:'/yys/:id',
            controller:'pagedetail'

        })
        .state('bizhi',{
            templateUrl:'pub/bizhi.html',
            url:'/bizhi',
            controller:'pagelist'
        })
        .state('bizhidetail',{
            templateUrl:'pub/detail/bizhi.html',
            url:'/bizhi/:id',
            controller:'pagedetail'
        })
        .state('picture',{
            templateUrl:'pub/picture.html',
            url:'/pict',
            controller:'pagelist'
        })
        .state('pictdetail',{
            templateUrl:'pub/detail/picture.html',
            url:'/pict/:id',
            controller:'pagedetail'
        })
        .state('home',{
            templateUrl:'pub/home.html',
            url:'/home'
        });
    $urlRouterProvider.otherwise('/news');
})
//ajax
app.factory('$mHttp', function ($http,$ionicLoading) {
    return {
        mget: function (url,fn) {
            $ionicLoading.show();
            $http.get(url).success(function (data) {
                fn(data);
                $ionicLoading.hide();
            })
        }
    }
});
//app.service('$gMore', function ($scope, $mHttp) {
//    this.gmore= function (url,fn) {
//        $mHttp.mget(url,function (data) {
//            fn(data);
//            $scope.$broadcast("scroll.infiniteScrollComplete")
//        })
//    }
//})
//app.factory('$gMore', function ($scope,$mHttp) {
//    return {
//        getmore: function (url, fn) {
//            $mHttp.mget(url,function (data) {
//               fn(data);
//                $scope.$broadcast("scroll.infiniteScrollComplete")
//            })
//        }
//    }
//});
//更多请求
//app.factory('$gMore',['$scope','$mHttp', function ( $scope,$mHttp) {
//    return {
//        getmore: function (url, fn) {
//            $mHttp.mget(url,function (data) {
//               fn(data);
//                $scope.$broadcast("scroll.infiniteScrollComplete")
//            })
//        }
//    }
//}]);
//父控制器//跳转
app.controller("jump",['$scope','$state', function ($scope, $state) {
    $scope.uid=1;
    $scope.jumpTo= function (state, arg) {
        $state.go(state,arg)
    }
}]);
//获取当前页面
app.controller("pagelist",['$scope','$mHttp','$location','$ionicSlideBoxDelegate',function ($scope, $mHttp,$location,$ionicSlideBoxDelegate) {
    $scope.pageNo=1;
    $scope.mySlide=0;
    $scope.show=true;
    $scope.list='';
    var path=$location.path();
    var tname=path.slice(1);
    $mHttp.mget('data/pagelist.php?tname='+tname,function (data) {
        $scope.list=data;
    });
    $scope.moreContent= function () {
        $scope.pageNo++;
        $mHttp.mget('data/pagelist.php?pageNo='+$scope.pageNo+"&tname="+tname,function (data) {
            $scope.list=$scope.list.concat(data)
            if(data.length<9){
                $scope.show=false
            }
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    }
    //滑动匡

}]);
//详情页
app.controller('pagedetail',['$scope','$stateParams','$mHttp','$location',function ($scope, $stateParams,$mHttp,$location) {
    var id=$stateParams.id;
    var path=$location.path();
    var i=path.lastIndexOf('/');
    var tname=path.slice(1,i);
    $mHttp.mget('data/pagedetail.php?id='+id+'&tname='+tname,function (data) {
        $scope.list=data;
        content.innerHTML=data.content;
    });
}]);
