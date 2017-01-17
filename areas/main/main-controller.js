/// <reference path="../../ts/typings/globals/zepto/index.d.ts" />
angular.module('main.controller', [])

.controller('mainCtrl', function($scope,Chats,$timeout,$ionicModal,$ionicActionSheet,$ionicPopup,$ionicLoading) {
    $scope.array = ['aaa','bbb','ccc','ddd','eee']
    
    //main8
    //$scope.ok = true;

    //main12
    //下拉
  //   $scope.items = ['赵','钱','孙','李','周','吴','郑','王','冯','陈','楚','魏'] 

  //   var j = 1;
  //   $scope.doRefresh = () =>{

  //       $timeout(function(){
  //           $scope.items[$scope.items.length] = '张' + j++;

  //        // 停止广播ion-refresher
  //      $scope.$broadcast('scroll.refreshComplete');

  //       },3000)    
  //   } 

  //   //上拉
  //   $scope.loadMore = () =>{   
  //       $timeout( () => {
  //           for(var i=0;i<5;i++){
  //           $scope.items[$scope.items.length] = '张' + j++;
  //       }

  //            $scope.$broadcast('scroll.infiniteScrollComplete');
  //       },3000)
  //   }
  //   //监听
  //   $scope.$on('stateChangeSuccess', function() {
  //   $scope.loadMore();
  // });

  //main14
  // $scope.items2 = [1,2,3,4,5,6]
  // $scope.moveItem = function(item, fromIndex, toIndex) {
  //   //把该项移动到数组中
  //   $scope.items2.splice(fromIndex,1);
  //   $scope.items2.splice(toIndex,0,item);
  //   console.log('fromIndex:'+fromIndex)
  //   console.log('toIndex:'+toIndex)
  // };

  //main15
  //  $scope.items3 = [];
  // for (var i = 0; i < 1000; i++) {
  //   $scope.items3.push('Item ：' + i);
  // }

  // $scope.getItemHeight = function(item, index) {
  //   //余2，所有能整除2的下标也就是所有偶数，三目运算余2为0的时候高度为50，否则高度为60（所有奇数），例如
  //   return (index % 2) === 0 ? 50 : 60;
  // };

  //   //栅格用法
  //  $scope.images = [];
  // for (var i = 1; i < 10; i++) {
  //   $scope.images.push('./img/adam' + i + '.jpg');
  // }

  //main16滑动块
      $scope.myActiveSlide=1; ////初始化索引为下标2第三个页面
      //带options属性自定义滑动块
//   $scope.options = {
//   loop: false,
//   effect: 'fade',   //幻灯片以淡入渐变的形式切换，默认为slide位移切换
//   speed: 500,   //滑动速度
// }
  


//main17模态框
// $ionicModal.fromTemplateUrl('my-modal.html', {
//     scope: $scope,
//     animation: 'slide-in-up'
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
//   $scope.openModal = function() {
//     $scope.modal.show();
//   };
//   $scope.closeModal = function() {
//     $scope.modal.hide();
//   };
//   //当我们用到模型时，清除它！
//   $scope.$on('$destroy', function() {
//     $scope.modal.remove();
//   });
//   // 当隐藏的模型时执行动作
//   $scope.$on('modal.hide', function() {
//     // 执行动作
//   });
//   // 当移动模型时执行动作
//   $scope.$on('modal.removed', function() {
//     // 执行动作
//   });

  //main18操作表
  // 点击按钮触发，或一些其他的触发条件
//  $scope.show = function() {

//    // 显示操作表
//      $ionicActionSheet.show({
//      buttons: [
//        { text: '<b>Share</b> This' },
//        { text: 'Move' },
//      ],
//      destructiveText: 'Delete',
//      titleText: 'Modify your album',
//      cancelText: 'Cancel',
//      buttonClicked: function(index) {
//        return true;
//      }
//    });


//  };

 //main19弹窗服务
 //触发一个按钮点击，或一些其他目标
//  $scope.showPopup = function() {
//    $scope.data = {}

//    //一个精心制作的自定义弹窗
//    var myPopup = $ionicPopup.show({
//      template: `
//        <div>
//         <input type="password" ng-model="data.wifi" placeholder="请猴子输入">
//       </div>
//      `,
//      title: '你是猴子派来链接 Wi-Fi 的吗',
//      subTitle: '请输入暗号...',
//      scope: $scope,
//      buttons: [
//        { text: '取消' },
//        {
//          text: '<b>保存</b>',
//          type: 'button-positive',
//          onTap: function(e) {
//            if (!$scope.data.wifi) {
//              //不允许用户关闭，除非他键入wifi密码
//              e.preventDefault();
//            } else {
//              return $scope.data.wifi;
//            }
//          }
//        },
//      ]
//    });
//   //  myPopup.then(function(res) {
//   //    console.log('Tapped!', res);
//   //  });
//   //  $timeout(function() {
//   //     myPopup.close(); //由于某种原因3秒后关闭弹出
//   //  }, 3000);


//  }

//   // 一个确认对话框
//    $scope.showConfirm = function() {
//      var confirmPopup = $ionicPopup.confirm({
//        title: '温馨提示',
//        template: `
//        <div>
//           <h4>脑残</h4>
//           <span>由于你的智商不足，请及时充值！</span>
//        </div>  
//        `,
//        cancelText:'取消',
//        okText:'好吧',
//      });
//      confirmPopup.then(function(res) {
//        if(res) {
//          console.log('我确定');
//        } else {
//          console.log('我不确定');
//        }
//      });
//    };


//     // 一个提示对话框
//    $scope.showAlert = function() {
//      var alertPopup = $ionicPopup.alert({
//        title: 'Don\'t eat that!',
//        template: '滚犊子'
//      });
//      alertPopup.then(function(res) {
//        console.log('看来你是明智的');
//      });
//    };


//    //加载
//    $scope.show2 = function() {
//     $ionicLoading.show({
//       template: 'Loading...',
//       duration:5000,
//     });
//   };
//   $scope.hide2 = function(){
//     $ionicLoading.hide();
//   };

  //main20 swiper滑动
  //  var mySwiper = new Swiper ('.swiper-container', {
  //   direction: 'vertical',  //horizontal横    //vertical竖
  //   loop: true,

  //   // 如果需要分页器
  //   pagination: '.swiper-pagination',
    
  //   // 如果需要前进后退按钮
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
    
  //   // 如果需要滚动条
  //   scrollbar: '.swiper-scrollbar',



  // })    

  //main21轮播
//   var mySwiper2 = new Swiper('.swiper-container2', {
//   initialSlide :0,//初始化索引为下标2第三个页面
// 	autoplay: 500,//可选选项，自动滑动
//   //autoplayStopOnLast : true,//如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
//   direction: 'horizontal',//滑动的方向不设置默认为horizontal横向
//   speed:2000,//滑动速度
//   loop:true,//循环
//   autoplayDisableOnInteraction : false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。

//   slidesPerView: 3,   //视图幻灯片的数量
//   spaceBetween: 40,   //幻灯片之间的间隔
 

//  //类似于响应式布局的media screen
//   breakpoints: { 
//     //当宽度小于等于320
//     320: {
//       slidesPerView: 1,
//       spaceBetweenSlides: 10
//     },
//    //当宽度小于等于480
//     480: { 
//       slidesPerView: 2,
//       spaceBetweenSlides: 20
//     },
//     //当宽度小于等于640
//     640: {
//       slidesPerView: 3,
//       spaceBetweenSlides: 30
//     }
//   }
// })


//main22视差parallax
//  var mySwiper3 = new Swiper('.swiper-container3',{
//             parallax : true,
//             nextButton: '.swiper-button-next',
//             prevButton: '.swiper-button-prev',
//     })

    //main23
  // var mySwiper4 = new Swiper('.swiper-container4', {
  //       //history: 'slides',
  //       //autoplay:1000,
        
  //       // nextButton: '.swiper-button-next',
  //       // prevButton: '.swiper-button-prev',
  //       //width : 150,  //你的slide宽度
  //       //width : window.innerWidth,  //全屏的宽度
  //       //direction: 'vertical',    //高度必须配合direction: 'vertical',
  //       //height: 100,    //你的slide高度
  //       //height : window.innerHeight,  //全屏的高度
  //       // roundLengths : true,    //设备分辨率取整
  //       watchSlidesProgress : true, //监视进度进程
  //       slideToClickedSlide:true,   //点击的slide会居中显示
  //       slidesPerView : 3,    //视图每行显示的幻灯片数量
  //       centeredSlides : true,  //当前幻灯片居中
  //       spaceBetween : 5,    //幻灯片之间的间隔默认单位px

  //       //effect : 'coverflow',
  //       effect : 'coverflow',
  //       coverflow: {
  //                   rotate: 30,   //slide做3d旋转时Y轴的旋转角度。
  //                   stretch: 5,    //每个slide之间的拉伸值，越大slide靠得越紧。
  //                   depth: 100,    //slide的位置深度。值越大z轴距离越远（看起来相邻的幻灯片越小）。
  //                   modifier: 2.5,    //depth和rotate和stretch的倍率，值越大这三个参数的效果越明显（3为侧90度，超过就翻过来了）。
  //                   slideShadows : true,   ////开启slide阴影
  //               }

  //       })
  //   //mySwiper4.progress;
  //   //mySwiper4.slides[5].progress;

  //   $scope.butclick = () =>{
  //     console.log(mySwiper4.progress)
  //     console.log(mySwiper4.slides)
  //   }

    // main24
    // var mySwiper5 = new Swiper('.swiper-container5',{
    //   //freeMode : true,    //自由滑动（不以整块视图滑动），默认为false
    //   //freeModeMomentum : false, //自由滑动是否带惯性（必须配合freeMode : true,一起使用），默认为true

    //   //slidesPerView : 3,    //视图每行显示的幻灯片数量
     
    //   //slidesPerGroup : 3,   //幻灯片每次滑动的长度，默认为1
    //   //spaceBetween : 20,    //幻灯片之间的间隔默认单位px
    //   //slidesPerColumn : 2,    //视图每列显示的幻灯片数量
    //   //slidesPerColumnFill : 'row',  //幻灯片以行顺序布局，默认为列布局
    //   //effect : 'fade',    //幻灯片以淡入渐变的形式切换，默认为slide位移切换
    //   //effect : 'cube',    //以3D盒子的形式进行幻灯片的切换
    //   //effect : 'coverflow',    //以3D关门的形式进行切换
    //   //effect : 'flip',    //以3D翻转的形式进行切换
    //   //onlyExternal : true,  //slide滑动无效
    //   //longSwipesRatio : 0.1,  //进行longSwipes时触发swiper所需要的最小滑动距离比例，默认为0.5一半（0~1）
    //   //touchAngle : 10,    //设置滑动slide的角度，默认为45
  


    //   //effect : 'cube',3D盒子带阴影的应用小实例
    //   autoplay: 2000,
    //   centeredSlides : true,  //当前幻灯片居中 
    //   loop:true,
    //   effect : 'cube',
    //     cube: {
    //       slideShadows: true,   //开启slide阴影
    //       shadow: true,         //开启投影
    //       shadowOffset: 100,    //投影的距离
    //       shadowScale: 0.6,      //投影的比例
    //     }


      
    // })

    //main25
    //  var mySwiper6 = new Swiper('.swiper-container6',{

    //     //swipeHandler : '.swipe-handler',  //设置值为类的元素才是滑动幻灯片的区域（注意：有可能会影响别的属性功能）
    //     //preloadImages:false,    //Swiper是否强制加载所有图片，默认为true强制加载，图片数量少使用
    //     //lazyLoading : true,     //懒加载，图片多时使用
    //     //lazyLoadingInPrevNext : true,   //设置为true允许将延迟加载应用到最接近的slide的图片（前一个和后一个slide）
    //     //lazyLoadingInPrevNextAmount : 8,  //设置在延迟加载图片时提前多少个slide。个数不可少于slidesPerView的数量
    //     zoom:true,    //焦距功能：双击slide会放大图片
    //     zoomMax :8,     //焦距放大的倍率，默认为3
    //     //zoomToggle :false,    //是否允许双击缩放,设置为false，不允许双击缩放，只允许手机端触摸缩放。
    //  })


    //zepto26触屏滑动事件
    // show delete buttons on swipe
  $('#items li').swipe(function(){
    $('.delete').hide()
    $('.delete', this).show()
  })

  // delete row on tapping delete button
  $('.delete').tap(function(){
    $(this).parent('li').remove()
  })
  
})
