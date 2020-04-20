import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' //@还记得吗，表示src文件夹的根路径
//引入组件
import Course from '@/components/Course/Course'
import Home from '@/components/Home/Home'
// console.log(Course);
//给Vue添加vue-router功能，使用别人提供的功能都要用Vue来use一下
Vue.use(Router)

//创建路由对象
export default new Router({
  mode:'history', //去掉浏览器地址栏的#号
  //配置路由信息
  routes: [

    {
      path: '/',
      // redirect:'Home' //直接跳转Home名字对应的path路径上
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    }

  ]
})
