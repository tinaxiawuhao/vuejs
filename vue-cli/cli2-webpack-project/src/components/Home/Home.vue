<template>
  <div>
    这是首页
  </div>
</template>

<script>
    export default { //抛出组件，供别的地方引用
        name:'Home', // 这个name在做全局组件的时候比较有用，还记得全局组件怎么创建吗？vue.component('Home',{})，第一个参数就是组件名称，其他组件使用这个全局组建的时候就靠的这个组件名称，而我们这里写的name，就可以起到这个作用，将来别人挂载你的组件的时候，就用它
        data(){
            return{

            }
        }

    }
</script>

<style>

</style>
