const login = async () => {
  let userPwd = document.getElementById('signin-password').value;
  let userEmail = document.getElementById('signin-email').value;
  try {
    let response = await axios.post('https://reqres.in/api/login', {
      email: userEmail,
      password: userPwd,
    });
    console.log('response from server after validation is', response);
    location.href = '/users_list/user_list.html';
  } catch (err) {
    console.log('err');
  }
};

const register = async () => {
  let userEmail = document.getElementById('signup-email').value;
  let userPwd = document.getElementById('signup-password').value;
  let response = axios
    .post('https://reqres.in/api/register', {
      email: userEmail,
      password: userPwd,
    })
    .then(() => {
      console.log('register ', response);
    })
    .catch((err) => {
      console.log(err);
    });
};
