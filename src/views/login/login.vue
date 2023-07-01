<template>
  <section class="loginBox">
    <h2>通用的后台管理系统</h2>
    <a-form
      ref="formRef"
      :model="formModel"
      :rules="rules"
      :wrapper-col="{span: 16}"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item name="username" label="账号">
        <a-input v-model:value="formModel.username" placeholder="请输入账号" allow-clear></a-input>
      </a-form-item>

      <a-form-item name="pwd" label="密码">
        <a-input v-model:value="formModel.pwd" type="password" placeholder="请输入密码" allow-clear></a-input>
      </a-form-item>

      <a-form-item :wrapper-col="{offset: 8, span: 16}">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </section>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import { LoginModel } from '@/types/userInfo'
import { Rule } from 'ant-design-vue/es/form'
import { FormInstance } from 'ant-design-vue'

const formRef = ref<FormInstance>()

const formModel = reactive<LoginModel>({
  username: '',
  pwd: ''
})

const rules: Record<string, Rule[]> = {
  username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
  pwd: [{ required: true, trigger: 'blur', message: '请输入密码' }]
}

const onFinish = function () {}
const onFinishFailed = function () {}
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 40px;
}
.loginBox {
  width: 500px;
  height: 300px;
  border: 1px solid #ccc;
  margin: 100px auto;
  padding: 20px;
}

</style>
