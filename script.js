
  
  var texto = document.getElementById("texto");
  
  texto.addEventListener("pointermove", function () {
    texto.innerText = "Choraaaaaaadeira pirocudo";
  })

  texto.addEventListener("pointerout", function () {
    texto.innerText = "Cade eleeee??";
  })

  var userName = document.getElementById("name");
  var userApelido = document.getElementById("apelido");
  var userIdade = document.getElementById("idade");

  function mandarDados() {
    alert("Dados enviados com sucesso")
  };

  function validacaoDeDados() {
    if (userName.value === "") {
        alert("Por favor, insira o nome.")
        return;
    } 

    if (userIdade.value === "" || userIdade.value <= 18 || userIdade.value > 100) {
        alert("Por favor, insira a sua idade acima de 18 anos.")
        return;
    } 

    if (userApelido.value === "") {
        alert("Por favor, insira a apelido.")
        return;
    } 


    mandarDados();
  };

  

  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    validacaoDeDados();
    
  })

  var body = document.getElementById("body");
  var tema = "claro";
  var mudatema = document.getElementById("mudatema");
  mudatema.addEventListener("click", function() {
    console.log("working");
    if (tema === "claro") {
        body.className = "dark";
        tema = "escuro";
        console.log("escuro")
    } else if (tema === "escuro") {
        body.className = "light";
        tema = "claro";
        console.log("claro")
    }
  })

