<template>
  <div class="pageB">
    <p class="page-title">基础组件用法</p>
    <compA :msg="msg"
           @getComAData="getComADataFunc"></compA>
    <p>显示子组件传递的值：{{comData}}</p>
  </div>
</template>
<script>
import compA from '@/components/compA'
export default {
  components: { compA },
  data () {
    return {
      msg: 'hello pageB',
      comData: ''
    }
  },
  methods: {
    getComADataFunc (data) {
      this.comData = data;
    }
  }
}
</script>