<template>
  <div class="overview">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="toModify(scope.row)">修改</el-button>
          <el-button type="text" size="small" @click="toDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 删除 -->
    <el-dialog
      title="提示"
      :visible.sync="deleteDialog"
      width="300px">
      <span>确定删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialog = false">取 消</el-button>
        <el-button type="primary" @click="deleteDialog = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog
      title="修改"
      :visible.sync="modifyDialog"
      width="500px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="日期">
          <el-input v-model="form.date"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyDialog = false">取 消</el-button>
        <el-button type="primary" @click="modifyDialog = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="pageBox">
      <el-pagination
        background
        layout="total, prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data () {
    return {
      modifyDialog: false,
      deleteDialog: false,
      form: {
        date: '',
        name: '',
        address: ''
      },
      tableData: [{
        date: '2019-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2019-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2019-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2019-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    // 修改
    toModify () {
      this.modifyDialog = true
    },
    // 删除
    toDelete () {
      this.deleteDialog = true
    }
  }
}
</script>

<style lang="scss">
.pageBox {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
