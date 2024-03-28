<template>
  <div
    class="container max-w-400 mx-auto h-[800px] flex justify-center items-center"
  >
    <div class="w-full">
      <div v-if="activeTab">
        <div class="max-w-2xl mx-auto">
          <form @submit.prevent="" class="space-y-8">
            <h2 class="text-center font-semibold text-2xl">Вход в аккаунт</h2>
            <input
              type="email"
              placeholder="Email"
              v-model="email"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-800"
            />
            <input
              type="password"
              placeholder="Пароль"
              v-model="password"
              required
              class="focus:outline-none rounded-lg focus:border-blue-800"
            />
            <button
              type="submit"
              class="w-full hover:opacity-90"
              @click="sign_in"
            >
              Войти
            </button>
            <div class="font-semibold text-m">
              <span class="text-gray-500"
                >Неучетной записи?
                <span
                  class="text-lg text-black cursor-pointer"
                  @click="activeTab = false"
                >
                  Зарегистрироваться</span
                >
              </span>
            </div>
          </form>
        </div>
      </div>
      <div v-else>
        <div class="max-w-2xl mx-auto">
          <form @submit.prevent="" class="space-y-8">
            <h2 class="text-center font-semibold text-2xl">Регистрация</h2>
            <input
              type="email"
              placeholder="Email"
              v-model="email"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-800"
            />
            <input
              type="password"
              placeholder="Пароль"
              v-model="password"
              required
              class="focus:outline-none rounded-lg focus:border-blue-800"
            />
            <button
              type="submit"
              class="w-full hover:opacity-90"
              @click="sign_up"
            >
              Зарегистрировать
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/UserStore';

const email = ref('');
const password = ref('');
const activeTab = ref(true);

const userStore = useUserStore();

function sign_in() {
  userStore.login(email.value, password.value);
  email.value = '';
  password.value = '';
  console.log(userStore.users, 'netu');
}
function sign_up() {
  userStore.signUp({ email: email.value, password: password.value });
  email.value = '';
  password.value = '';
}
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #021d46;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
</style>
