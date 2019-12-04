<template>
  <div class="index-page">
    <div>
      <p class="page-title">左侧是vue-cli脚手架默认的页面</p>
      <img :src="require('@/assets/logo.png')">
      <div>
        <p>
          If Element is successfully added to this project, you'll see an
          <code v-text="'<el-button>'"></code>
          below
        </p>
        <el-button>el-button</el-button>
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <div>
      <p class="page-title">右侧是自建的demo页面列表</p>
      <ul>
        <li>
          <router-link to="/pageA">基础语法</router-link>
        </li>
        <li>
          <router-link to="/pageB">基础组件</router-link>
        </li>

        <li>
          <router-link to="/formPage">简单form组件例子</router-link>
        </li>
        <li>
          <router-link to="/axiosDemo">模拟请求数据样例</router-link>
        </li>
        <li>
          <router-link to="/vuexPage">简易vuex样例</router-link>
        </li>
        <li>
          <router-link to="/elementPage">引入element-ui</router-link>
        </li>
        <li>
          <router-link to="/echartsPage">绘制echarts图表</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}
</style>
