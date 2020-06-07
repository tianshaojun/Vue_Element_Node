<template>
  <div id="app">
    <el-form inline :model="data" :rules="rules" ref="form" validate-on-rule-change status-icon>
      <el-form-item label="审批人" prop="user" :validate-status="status" :error="error">
        <el-input v-model="data.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="data.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addRule">添加效验规则</el-button>
        <el-button type="success" @click="showSuccess">成功效验</el-button>
        <el-button type="danger" @click="showError">失败效验</el-button>
        <el-button type="warning" @click="showValidating">效验中</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "advance_form",
  data() {
    return {
      error: "",
      status: "",
      data: {
        user: "",
        region: ""
      },
      rules: {
        user: [{ required: true, trigger: "change", message: "用户名必须录入" }]
      }
    };
  },
  methods: {
    /* eslint-disable */
    onSubmit() {
      console.log(this.data);
      this.$refs.form.validate((isValid, errors) => {
        console.log(isValid, errors);
      });
    },
    addRule() {
      const userValidator = (rule, value, callback) => {
        if (value.length > 3) {
          //   this.inputError = "";
          //   this.inputValidateStatus = "";
          callback();
        } else {
          callback(new Error("用户名长度必须大于3"));
        }
      };
      const newRule = [
        ...this.rules.user,
        { validator: userValidator, trigger: "change" }
      ];
      this.rules = Object.assign({}, this.rules, { user: newRule });
    },
    showError() {
      this.status = "error";
      this.error = "用户名输入有误";
    },
    showSuccess() {
      this.status = "success";
      this.error = "";
    },
    showValidating() {
      this.status = "validating";
      this.error = "";
    }
  }
};
</script>