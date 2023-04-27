// @ts-nocheck
<template>
  <div class="Main">
    <h1>登录</h1>
    <nut-form>
      <nut-form-item label="账号" required="true">
        <nut-input v-model="root"  class="nut-input-text" placeholder="请输入账号" type="text" />
      </nut-form-item>
      <nut-form-item label="密码" required="true">
        <nut-input v-model="password"  class="nut-input-text" placeholder="请输入密码" type="text" />
      </nut-form-item>
      <img class="image_Captcha" src="http://127.0.0.1:8085/getLoginCaptcha" alt="登录验证码图片">
      <nut-form-item label="验证码" required=true>
        <nut-input v-model="Captcha"  class="nut-input-text" placeholder="请输入验证码" type="text" />
      </nut-form-item>
      <nut-button type="primary" @click="Login">登录</nut-button>
    </nut-form>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
  import { ref } from "vue";
  import useCurrentInstance from "../useCurrentInstance";
  import {useRouter} from "vue-router";
  import {useStore} from "../state/store";
  // import { showNotify } from '@nutui/nutui';
  let { proxy } = useCurrentInstance();
  let router = useRouter();
  let store = useStore();
  let root = ref("");
  let password = ref("");
  let Captcha = ref("");
  const demoURL = "http://127.0.0.1:8085";
  const realURL = "http://polaris.lyyfsq.club:8085";
  function Login():void {
    let params = new URLSearchParams();
    params.append("root",root.value);
    params.append("password",password.value);
    params.append("Captcha",Captcha.value);
    console.log(params);
    proxy
        .$http
          .post(demoURL+"/Login",params)
            .then((resp:any)=>{
              console.log(resp.data);
              if (resp.data !== "failed" && resp.data !== "") {
                store.changeToken(resp.data.token);
                store.changeRoot(resp.data.root);
                store.changeUsername(resp.data.username);
                alert("登陆成功");
                router.push("/MyInf");
              }
              else {
                alert("登陆失败");
              }
            })
  }
</script>

<style scoped lang="scss">
@import "../theme-chalk/index.scss";
@import "../theme-chalk/Login.scss";
@media screen and (min-width: 1000px) {
  .contain {
    @include containFunction();
  }
  .Main {
    @include baseSizeFunction(65vw,35vh);
  }
  .image_Captcha {
    @include baseSizeFunction(6vw,8vh);
  }
}
</style>
