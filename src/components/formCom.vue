<template>
  <div class="form-list">
    <div class="form-item"
         v-for="item in config"
         :key="item.key">
      <span class="form-label">{{item.label}}</span>
      <div class="form-box">
        <input type="text"
               v-if="item.type=='text'"
               v-model="comData[item.key]">
        <select v-model="comData[item.key]"
                v-else-if="item.type=='select'">
          <option value="">请选择</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <ul v-else-if="item.type=='checkbox'"
            class="checkbox-list">
          <li v-for="opt in item.options"
              :key="opt.value">
            <input type="checkbox"
                   :name="item.key"
                   :value="opt.value"
                   v-model="comData[item.key]">{{opt.text}}</li>
        </ul>

      </div>
    </div>
    <div class="form-btn">
      <button @click="submitData">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formCom',
  props: {
    config: Array,
    defaultData: Object,
  },
  data () {
    return {

    }
  },
  computed: {
    comData: function () {
      // return this.defaultData;
      //如果希望点击提交之后再同步数据到父元素，需要组件内深拷贝数据
      return JSON.parse(JSON.stringify(this.defaultData));
    },
  },
  methods: {
    submitData () {
      let self = this;
      self.$emit("submitData", self.comData);
    }
  }
}
</script>
<style  scoped>
.form-list {
  padding: 20px;
}
.form-item {
  width: 33%;
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
  vertical-align: top;
}
.form-label {
  width: 100px;
  position: absolute;
  top: 0;
}
.form-box {
  margin-left: 110px;
  margin-right: 100px;
}
.form-box input[type="text"] {
  width: 100%;
}
.form-box select {
  width: 100%;
}
.checkbox-list {
  list-style: none;
}
.checkbox-list li {
  display: inline-block;
  width: 50px;
}
</style>

