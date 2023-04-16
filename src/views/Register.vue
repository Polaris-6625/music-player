<template>
  <div class="Main">
    <h1>注册</h1>
    <nut-form>
      <nut-form-item label="用户名" required="true">
        <nut-input v-model="username"  class="nut-input-text" placeholder="请输入用户昵称" type="text" />
      </nut-form-item>
      <nut-form-item label="账号" required="true">
        <nut-input v-model="root"  class="nut-input-text" placeholder="请输入账号" type="text" />
      </nut-form-item>
      <nut-form-item label="密码" required="true">
        <nut-input v-model="password"  class="nut-input-text" placeholder="请输入密码" type="text" />
      </nut-form-item>
      <nut-form-item>
        <nut-radio-group v-model="sex">
          <nut-radio shape="button" label="男">男</nut-radio>
          <nut-radio shape="button" label="女">女</nut-radio>
        </nut-radio-group>
      </nut-form-item>
      <img class="image_Captcha" src="http://127.0.0.1:8085/getLoginCaptcha" alt="登录验证码图片">
      <nut-form-item label="验证码" required="true">
        <nut-input v-model="Captcha"  class="nut-input-text" placeholder="请输入验证码" type="text" />
      </nut-form-item>
    </nut-form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
let username = ref("");
let root = ref("");
let password = ref("");
let sex = ref("男");
let Captcha = ref("");
</script>

<style scoped lang="scss">
@import "../theme-chalk/index.scss";
.contain {
  @include containFunction();
}
.Main {
  @include baseSizeFunction(65vw,35vh);
}
.image_Captcha {
  @include baseSizeFunction(6vw,8vh);
}
</style>
