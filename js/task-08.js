const refs = {
  form: document.querySelector(".login-form"),
};

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
    console.log(loginList);
  } else return alert("Fill the empty fields!");
  refs.form.reset();
};

refs.form.addEventListener("submit", getLogin);
