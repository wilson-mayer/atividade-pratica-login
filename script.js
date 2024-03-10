const realizarLogin = async (event) => {
  event.preventDefault();

  if (emailUser.value === "") {
    alert("Por favor! preencha o campo E-mail");
    return;
  }

  if (password.value === "") {
    alert("Por favor! preencha o campo Senha");
    return;
  }

  try {
    const email = document.getElementById("emailUser").value;
    const password = document.getElementById("password").value;

    const data = {
      email: email,
      password: password,
    };
    localStorage.setItem("loginEnviado", JSON.stringify(data));

    const dataSaved = JSON.parse(localStorage.getItem("loginEnviado"));

    const response = await api.post("/login", dataSaved);
    if (response.status === 200) {
      window.location.href = "./recados.html";
      console.log(`Deu certo! ${response.data.message}`);
    } else if (response.status === 400) {
      const mensagem = response.data.message;
      alert(mensagem);
    }
  } catch (error) {
    alert(`Erro durante a requisição! verifique suas credenciais!`);
    console.log(`Erro durante a requisição : ${error.message}`);
  }
};
