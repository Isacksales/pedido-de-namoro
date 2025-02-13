function showPhoto() {
  const proposalPhoto = document.getElementById('proposal-photo');
  proposalPhoto.style.display = 'block';
}

function showMessage(resposta) {
  const messageDiv = document.getElementById('message');

  let message;
  switch (resposta) {
    case 'Sim':
      message = 'Estou muito feliz por ter aceitado, saiba que lutarei por nós sempre, vou fazer valer a pena esse sim, te amo muito.';
      setTimeout(() => {
        window.location.href = "https://isacksales.github.io/ela-disse-sim/";
      }, 10000); // 10000 milissegundos = 10 segundos
      break;
    case 'Não':
      message = 'Que pena, mas tudo bem, talvez ainda não seja o momento, mas saiba que te amo muito e, se você permitir, irei tentar te conquistar mais a cada dia, até que aceite.';
      break;
  }

  messageDiv.innerText = message;
}
