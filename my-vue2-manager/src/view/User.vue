<template>
  <div class="message">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <el-form
        :rules="rules"
        :inline="true"
        ref="form"
        :model="form"
        label-width="80px"
        :before-close="handleClose"
      >
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sexLabel">
          <el-select v-model="form.sexLabel" placeholder="请选择">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <div class="block">
            <el-date-picker
              v-model="form.birth"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manager-header">
      <el-button type="primary" @click="handleAdd">+新增</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="180">
          <template slot-scope="scope">
            <span style="marign-left: 10px">{{
              scope.row.sex === 1 ? "男" : "女"
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
        <el-table-column
          prop="birth"
          label="出生日期"
          width="180"
          value-format="yyyy-MM-DD"
        >
        </el-table-column>
        <el-table-column prop="addr" label="地址" width="180">
        </el-table-column>
        <el-table-column prop="操作" label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" size="mini" @click="handleDel(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { addUser, getUser, editUser, delUser } from "../api";
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        age: "",
        sexLabel: "",
        birth: "",
        addr: "",
      },

      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
          },
        ],
        age: [
          {
            required: true,
            message: "请输入年龄",
          },
        ],
        sexLabel: [
          {
            required: true,
            message: "请输入性别",
          },
        ],
        birth: [
          {
            required: true,
            message: "请输入生日",
          },
        ],
        addr: [
          {
            required: true,
            message: "请输入地址",
          },
        ],
      },
      tableData: [],
      modalType: 0, //0表示新增，1表示编辑
    };
  },
  methods: {
    getList() {
      getUser().then(({ data }) => {
        console.log(data);
        this.tableData = data.data.list;
      });
    },
    //提交用户表单
    submit() {
      this.$refs.form.validate((valid) => {
        /*  console.log(valid, "valid"); //判断传入的数据是否合理 */
        if (valid) {
          if (this.modalType === 0) {
            addUser(this.form).then(() => {
              this.getList();
            });
          } else {
            editUser(this.form).then(() => {
              this.getList();
            });
          }
          console.log(this.form, "form"); //methods拿到data中的数据需要加上this
          this.dialogVisible = false;
          this.$refs.from.resetFields(); //表单节点的清空表单方法resetFields
        }
      });
    },
    //弹窗关闭的时候，清空数据,关闭 ，关闭前使用
    handleClose() {
      this.$refs.from.resetFields();
      this.dialogVisible = false;
    },
    //点击取消,使用关闭函数
    cancel() {
      this.handleClose();
    },
    handleEdit(row) {
      this.modalType = 1;
      this.dialogVisible = true;
      //这里需要深拷贝
      this.form = JSON.parse(JSON.stringify(row));
    },
    handleDel(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delUser({ id: row.id }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    handleAdd() {
      this.modalType = 0;
      dialogVisible = true;
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
