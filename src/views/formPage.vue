<template>
  <div class="pageB">
    <p class="page-title">基础组件用法</p>
    <formCom :config="formConfig"
             :defaultData="formData"
             @submitData="submitFunc"></formCom>
    <p>点击提交获取绑定的form数据:<br>{{parseData}}</p>
  </div>
</template>
<script>
import formCom from '@/components/formCom'
export default {
  components: { formCom },
  data () {
    return {
      formConfig: [
        {
          key: 'text1',
          type: 'text',
          label: '输入框'
        },
        {
          key: 'text2',
          type: 'text',
          label: '输入框'
        },
        {
          key: 'selectValue',
          type: 'select',
          label: '下拉选择',
          options: [
            {
              value: 1,
              text: 1
            },
            {
              value: 2,
              text: 2
            },
            {
              value: 3,
              text: 3
            }]
        },
        {
          key: 'checkedValue',
          type: 'checkbox',
          label: '多选框',
          options: [
            {
              value: 1,
              text: 1
            },
            {
              value: 2,
              text: 2
            },
            {
              value: 3,
              text: 3
            }]
        }
      ],
      formData: {
        text1: '',
        text2: '',
        selectValue: 1,
        checkedValue: [1]
      }
    }
  },
  computed: {
    parseData () {
      return JSON.stringify(this.formData)
    }
  },
  methods: {
    submitFunc (data) {
      this.formData = data;
    }
  }
}
</script>