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

  const mensagemResposta = document.getElementById("mensagem-resposta");

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

    mensagemResposta.innerHTML = `<p> A requisição deu certo 
      <br>
      ${response.data.message}
      </p>`;
    window.location.href = "./recados.html";

    localStorage.removeItem("loginEnviado");
  } catch (error) {
    mensagemResposta.innerHTML = `<p> A requisição falhou 
    <br>
    ${error.message}
    </p>`;
  }
};
