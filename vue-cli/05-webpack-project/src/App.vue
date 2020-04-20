<template>
  <div id="app">
    <router-link :to="{name:'Home'}">首页</router-link>
    <!--<router-link :to="{name:'Home',query:{user_id:2}}">首页</router-link>-->
    <!--query:{user_id:2} 是query参数，拼接到路径上是这样的/home?user_id=2，这也是动态路由的一种，之前我们说了一个param参数，这个param参数是/home/2，拼接在路径上的-->
    <router-link :to="{name:'Course'}">免费课程</router-link>
    <!-- 组件出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return{

            }
        },
    }
</script>

<style>

</style>
