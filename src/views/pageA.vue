<template>
  <div class="pageA">
    <p class="page-title">静态语法实例</p>
    <h4>1. 模板语法{{}}</h4>
    <p>msg:{{msg}}</p>

    <h4>2. v-if控制显示</h4>
    <input type="checkbox"
           v-model="showTip">显/隐msg
    <p v-if="showTip"><span class="code-text">v-if:</span> {{msg}}</p>
    <p v-show="showTip"><span class="code-text">v-show:</span> {{msg}}</p>
    <h4>3. v-for循环展示数据</h4>
    <ul>
      <li v-for="item in arr"
          :key="item.index">{{item.index}}+{{item.name}}</li>
    </ul>
    <h4>4. v-bind:attr="xxx"绑定属性,缩写:attr="xxx"</h4>
    <p v-bind:title="msg">悬浮显示title <span class="code-text">v-bind:title="msg"</span></p>
    <p :title="msg">悬浮显示title <span class="code-text">:title="msg"</span></p>
    <h4>5. v-on:event="func"绑定属性,缩写@event="func"</h4>
    <p v-on:click="onFunc">点击弹出信息：<span class="code-text">v-on:click="onFunc"</span></p>
    <p @click="onFunc">点击弹出信息：<span class="code-text">@click="onFunc"</span></p>
    <h4>6. 双向绑定</h4>
    <h6>6.1. 输入框双向绑定msg变量v-model</h6>
    <input type="text"
           v-model="modelText">
    <textarea v-model="modelText"></textarea>
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
    <h6>6.4. checkbox绑定v-model</h6>
    <input type="checkbox"
           value="One"
           v-model="pickedCheck">
    <input type="checkbox"
           value="Two"
           v-model="pickedCheck">
    <input type="checkbox"
           value="Three"
           v-model="pickedCheck">
    <p>check选中:{{pickedCheck}}</p>

  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello pageA',
      arr: [{ index: 0, name: 'arrItem0' }, { index: 1, name: 'arrItem1' }, { index: 2, name: 'arrItem2' }],
      showTip: true,
      pickedRadio: 'One',
      selected: 'A',
      pickedCheck:['One'],
      modelText:'modelText'
    }
  },
  methods: {
    onFunc () {
      alert(this.msg)
    }
  }
}
</script>
<style lang="scss" scoped>
h4{
  margin: 10px 0;
  font-size: 16px;
  border-left: 4px solid #aaa;
  line-height: 16px;
  padding-left: 10px;
}
h6{
   font-size: 14px;
}
p{
  margin: 5px 0;
}
.code-text{
  background: #aaa;
}
</style>