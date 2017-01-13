 //test.js
 var app = getApp()
 Page({
     data:{
         userInfo:{},
         imgUrls:[
             {
                 link:'/page/index/index',
                 url:'../imgs/1.png'
             },{
                 link:'/pages/logs/logs',
                 url:'../imgs/2.jpg'
             },{
                 link:'/pages/test/test',
                 url:'../imgs/3.jpg'
             }
         ],
     indicatorDots:true,
     autoplay:true,
     interval:5000,
     duration:1000,
     userInfo:{}
     },
 onLoad:function(){
console.log('onLoad test')
     }
 }) 
