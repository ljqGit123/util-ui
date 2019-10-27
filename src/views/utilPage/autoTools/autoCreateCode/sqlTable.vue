<template>
    <div>
      <el-table
        :data="this.$route.params.data"
        border
        style="width: 100%">
        <el-table-column
          prop="dataType"
          label="数据库类型"
          width="100">
        </el-table-column>
        <el-table-column
          prop="url"
          label="数据库Url">
        </el-table-column>
        <el-table-column
          prop="databaseName"
          label="数据库名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="数据用户名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="password"
          label="数据库密码"
          width="120">
        </el-table-column>
        <el-table-column
          prop="tableName"
          label="数据库表"
          width="300">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改属性</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      name: "sqlTable",
      methods: {
        handleClick(row) {
          let routeData = this.$router.resolve({ name: 'SqlTableDetail',
            query: { url: row.url, dataType: row.dataType, databaseName: row.databaseName, userName: row.userName, password: row.password,tableName: row.tableName }});
          window.open(routeData.href, '_blank');
        }
      },
    }
</script>

<style scoped>

</style>
