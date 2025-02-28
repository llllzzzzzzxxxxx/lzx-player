<template>
  <!-- 遮罩层 -->
  <div v-if="useUserStore().isLogin" class="overlay" @click="closeLogin">
    <!-- 登录框 -->
    <div class="login-box" @click.stop>
      <div class="login-title">登录</div class="login-title">
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input type="number" id="username" v-model="uid" placeholder="请输入您的网易云UID" />
        </div>
        <button type="button" @click="closeLogin">关闭</button>
        <button type="button" @click="help">帮助</button>
        <button type="submit" @click="handleLogin">登录</button>
      </form>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import useUserStore from '@/stores/modules/user';
import usePlayListStore from '@/stores/modules/playlist';

// 控制登录框的显示与隐藏
const userStore = useUserStore();

// 关闭登录框
const closeLogin = () => {
  userStore.isLogin = false;
};
const help = () => {
  userStore.isHelp = true;
}
// 处理登录逻辑
const uid = ref('');
const handleLogin = () => {
  const uidNumber = Number(uid.value);
  if (!isNaN(uidNumber)) { // 检查是否为有效数字
    try {
      userStore.getUserData(uidNumber);
      userStore.hasLogin = true;
    } catch (error) {
      
    }
    closeLogin(); // 登录完成后关闭登录框
  } else {
    alert('请输入有效的网易云UID');
  }
};
</script>

<style scoped lang="scss">
/* 遮罩层样式 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
}

.overlay .login-box {
  transform: scale(1); /* 登录框显现时放大到正常大小 */
}

/* 登录框样式 */
.login-box {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 420px;
  text-align: center;
  transform: scale(0); /* 初始状态为缩小到0 */
  transition: transform 0.3s ease; /* 添加动画效果 */
}

.login-title {
  font-size: 17px;
  // font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
}

/* 表单样式 */
.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 15px;
  border: 1px solid hsla(0, 0%, 100%, .6);
  outline: 0;
  background: transparent;
  color: #fff;
  font-size: 14px;
  -webkit-box-shadow: inset 0 0 1px 0 #fff;
  box-shadow: inset 0 0 1px 0 #fff;
}

button {
  padding: 8px 15px;
  color: #8f8f8f;
  font-size: 14px;
  border: 1px solid hsla(0, 0%, 100%, 0.6);
  border-radius: 2px;
  margin-right: 10px;
  cursor: pointer;
  float: right;
}

button:hover {
  background-color: #FFFFFF;
  color: black;
}
</style>