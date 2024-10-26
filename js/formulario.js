// function enviarFormulario() {
//     // Captura os valores dos campos
//     const nome = document.getElementById('nome').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const mensagem = document.getElementById('mensagem').value.trim();

//     // Verifica se os campos estão preenchidos corretamente
//     if (nome !== '' && email !== '' && mensagem !== '') {
//         // Exibe uma mensagem de confirmação
//         const status = document.getElementById('status');
//         status.style.display = 'block';
//         status.innerHTML = 'Mensagem enviada com sucesso! Obrigado, ' + nome + '.';

//         // Limpa o formulário
//         document.getElementById('contatoForm').reset();
//     } else {
//         alert('Por favor, preencha todos os campos corretamente.');
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menuButton');
    const navMobile = document.querySelector('.navMobile');
    const menuLinks = document.querySelectorAll('.navMobile ul li a'); // Seleciona todos os links dentro do navMobile

    // Função para mostrar ou esconder o menu ao clicar no botão
    menuButton.addEventListener('click', function () {
        if (navMobile.style.display === 'none' || navMobile.style.display === '') {
            navMobile.style.display = 'block'; // Mostra o menu
        } else {
            navMobile.style.display = 'none'; // Esconde o menu
        }
    });

    // Função para esconder o menu ao clicar em qualquer link
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMobile.style.display = 'none'; // Esconde o menu após o clique em um link
        });
    });

    
    const enviContbutt = document.querySelector('#enviarContatobutton');
    // Função que valida o formulario
    enviContbutt.addEventListener('click', function () {
        // Captura os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Verifica se os campos estão preenchidos corretamente
        if (nome !== '' && email !== '' && mensagem !== '') {
            // Exibe uma mensagem de confirmação
            const status = document.getElementById('status');
            status.style.display = 'block';
            status.innerHTML = 'Mensagem enviada com sucesso! Obrigado, ' + nome + '.';

            // Limpa o formulário
            document.getElementById('contatoForm').reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
});