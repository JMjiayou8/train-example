<template>
  <div class="pageA">
    <p class="page-title">静态语法实例</p>
    <h6>1. 模板语法{{}}</h6>
    <p>msg:{{msg}}</p>

    <h6>2. v-if控制显示</h6>
    <input type="checkbox"
           v-model="showTip">显/隐msg
    <p v-if="showTip">{{msg}}</p>
    <h6>3. v-for循环展示数据</h6>
    <ul>
      <li v-for="item in arr"
          :key="item.index">{{item.name}}</li>
    </ul>
    <h6>4. v-bind:attr="xxx"绑定属性,缩写:attr="xxx"</h6>
    <p v-bind:title="msg">悬浮显示title:{{msg}}</p>
    <p :title="msg">悬浮显示title:{{msg}}</p>
    <h6>5. v-on:event="func"绑定属性,缩写@event="func"</h6>
    <p v-on:click="onFunc">点击弹出信息：{{msg}}</p>
    <p @click="onFunc">点击弹出信息：{{msg}}</p>
    <h5>6. 双向绑定</h5>
    <h6>6.1. 输入框双向绑定msg变量v-model</h6>
    <input type="text"
           v-model="msg">
    <textarea v-model="msg"></textarea>
    <h6>6.2. 下拉框绑定v-model</h6>
    <select v-model="selected">
      <option disabled
              value="">请选择</option>
      <option>A</option>
      <option>B</option>
    </select>
    <p>select选中：{{selected}}</p>
    <h6>6.3. radio绑定v-model</h6>
    <input type="radio"
           value="One"
           v-model="pickedRadio">
    <input type="radio"
           value="Two"
           v-model="pickedRadio">
    <p>radio选中:{{pickedRadio}}</p>

  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello pageA',
      arr: [{ index: 0, name: 'arrItem0' }, { index: 1, name: 'arrItem1' }, { index: 2, name: 'arrItem2' }],
      showTip: false,
      pickedRadio: 'One',
      selected: ''
    }
  },
  methods: {
    onFunc () {
      alert(this.msg)
    }
  }
}
</script>