<template>
  <div class="pageB">
    <p class="page-title">自定义表单组件--原生元素</p>
    <formCom :config="formConfig"
             :defaultData="formData"
             @submitData="submitFunc"></formCom>
    <p>点击提交获取绑定的form数据:<br>{{parseData1}}</p>

    <!-- <p class="page-title">自定义表单组件--element-ui</p>
    <SearchForm :queryParam="pageQueryParam"
                :config="pageQueryParamConfig"
                @getTableData="changePage"
                :searchTitle="'报文查询'"></SearchForm>
    <p>绑定的form数据:<br>{{parseData2}}</p> -->
  </div>
</template>
<script>
import formCom from '@/components/formCom'
// import SearchForm from "@/components/SearchForm";
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
      },
      pageQueryParam: {
        demandCode: "3",
        demandName: "",
        demandDate: "",
        demandType: '',
        page: 1,
        pageSize: 100
      },
      pageQueryParamConfig: [
        {
          key: "demandCode",
          title: "需求编码"
        },
        {
          key: "demandName",
          title: "需求名称"
        },
        {
          key: "demandType",
          type: 'select',
          title: "需求类型",
          options: [
            {
              title: '类型一',
              value: 1,
            },
            {
              title: '类型二',
              value: 2,
            }
          ]
        },
        {
          key: "demandDate",
          title: "时间",
          type: "date"
        }
      ],
    }
  },
  computed: {
    parseData1 () {
      return JSON.stringify(this.formData)
    },
    parseData2 () {
      return JSON.stringify(this.pageQueryParam)
    }
  },
  methods: {
    submitFunc (data) {
      this.formData = data;
    },
    changePage (data) {
      this.pageQueryParam = data;
      //todo 查询事件
    }
  }
}
</script>