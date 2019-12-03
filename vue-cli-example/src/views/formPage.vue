<template>
  <div class="app-content">
    <SearchForm :queryParam="pageQueryParam"
                :config="pageQueryParamConfig"
                @getTableData="changePage"
                :searchTitle="'主任务查询'"
                :selectOption="selectOption"></SearchForm>
   </div>
</template>

<script>
import SearchForm from "@/components/SearchForm";

export default {
  components: { SearchForm },
  data () {
    return {
      //页面
      pageQueryParam: {
        TASK_ID: "",
        TASK_NAME: "",
        USE_TAG: "",
        page: 1,
        pageSize: 10
      },
      pageQueryParamConfig: [
        {
          key: "TASK_ID",
          title: "任务编号"
        },
        {
          key: "TASK_NAME",
          title: "任务名称"
        },
        {
          key: "USE_TAG",
          title: "任务启动标识",
          type: "select",
          cKey: "USE_TAG"
        }
      ],
      selectOption: {
        USE_TAG: [
          { PARAM_VALUE: "0", PARAM_NAME: "未启动" },
          { PARAM_VALUE: "1", PARAM_NAME: "已启动" }
        ],
        SUPPORT_TYPE: [
          { PARAM_VALUE: "0", PARAM_NAME: "否" },
          { PARAM_VALUE: "1", PARAM_NAME: "是" }
        ],
        GROUP_ID: []
      },   
    };
  },
  created () {
    this.getTableData()  

  },
  methods: {
    //主页面
    async getTableData () {
      //todo ajax请求
      this.$message.success('请求数据'+JSON.stringify(this.pageQueryParam,null,4))
    },
    changePage (data) {
      this.pageQueryParam=data;
      this.getTableData();
    }
  }
};
</script>
