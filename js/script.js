const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    document.getElementById('name').value === '' ||
    document.getElementById('email').value === ''
  ) {
    alert(
      'Preencha os campos: Seu Nome e Seu Email \n para resgatar seu cupom'
    );
  } else {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
      name,
      email,
    };

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('sucesso');

    let gerando = `<p>gerando cupom...</p>`;

    let enviado = `<p>Cupom enviado para o seu email</p>`;

    content.innerHTML = gerando;

    setTimeout(() => {
      content.innerHTML = enviado;
      document.getElementById('name').value = ''; // Limpa o campo input
      document.getElementById('email').value = ''; // Limpa o campo input
      document.getElementById('resgate').value = 'CUPOM RESGATADO';
    }, 2000);
  }
});
