export const useUserStore = defineStore('user', () => {
  const isAuth = ref(false);
  const user = ref();
  const router = useRouter();

  function handleAuth() {
    if (JSON.parse(localStorage.getItem('user')).email) {
      console.log('Fine');
    }
  }

  const login = (email, password) => {
    user.value = JSON.parse(localStorage.getItem('user'));
    if (user.value.email === email && user.value.password === password) {
      isAuth.value = true;
      alert('Успешно авторизован!');
      router.push('/');
    } else {
      alert('Неверный email или пароль!');
    }
  };
  const signUp = tempUser => {
    user.value = { ...tempUser, myTours: [] };
    localStorage.setItem('user', JSON.stringify(user.value));
    alert('Успешно зарегистрирован!');
    router.push('/');
  };

  const logOut = () => {
    isAuth.value = false;
    router.push('/auth');
  };

  return {
    login,
    isAuth,
    handleAuth,
    user,
    signUp,
    logOut,
  };
});
