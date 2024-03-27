export const useUserStore = defineStore('users', () => {
  const users = ref([]);
  const isAuth = ref(false);
  const user = ref({});

  users.value = JSON.parse(localStorage.getItem('users')).value_ || [];
  const router = useRouter();

  const login = (email, password) => {
    user.value = users.value.find(
      u => u.email === email && u.password === password
    );
    if (user.value == undefined) {
      isAuth.value = true;
      console.log(user.value, 'user is');
      alert('Успешно авторизован!');

      router.push('/');
    } else {
      alert('Неверный email или пароль!');
    }
  };
  const signUp = tempUser => {
    users.value.push({ ...tempUser, myTours: [] });
    localStorage.setItem('users', users);
    alert('Успешно зарегистрирован!');
    router.push('/');
  };

  return {
    login,
    isAuth,
    user,
    signUp,
    users,
  };
});
