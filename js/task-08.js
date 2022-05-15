const refs = {
  form: document.querySelector(".login-form"),
};
const LOGIN_LIST = [];
console.log(LOGIN_LIST);

const getLogin = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value && password.value !== "") {
    const loginList = {
      email: email.value,
      password: password.value,
    };
    LOGIN_LIST.push(loginList);
  } else return alert("Fill the empty fields!");
  refs.form.reset();
};

refs.form.addEventListener("submit", getLogin);
