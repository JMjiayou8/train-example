<template>
  <div class="compA">
    <p>这是子组件compA</p>
    <p>父组件传递的props参数:{{msg}}</p>
    <button @click="emitData">点击按钮，将子组件属性值传递给父元素</button>
  </div>
</template>

<script>
export default {
  name: 'compA',
  props: {
    msg: String
  },
  data () {
    return {
      comData: 'compAData'
    }
  },
  methods: {
    emitData () {
      let self = this;
      self.$emit("getComAData", self.comData);
    }
  }
}
</script>
<style  scoped>
.compA {
  border: 1px solid #333;
  padding: 10px;
}
</style>

