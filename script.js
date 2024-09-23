function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon i');
    const slashEyeIcon = document.querySelector('.eye-icon .fa-eye-slash');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.style.display = 'none';
        slashEyeIcon.style.display = 'inline-block';
    } else {
        passwordInput.type = 'password';
        eyeIcon.style.display = 'inline-block';
        slashEyeIcon.style.display = 'none';
    }
}

// Validação básica do formulário de contato (adicione mais validações conforme necessário)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode adicionar lógica para enviar os dados do formulário para o servidor
    console.log(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

    // Limpar o formulário após o envio (opcional)
    contactForm.reset();

    // Exibir uma mensagem de sucesso (opcional)
    alert("Mensagem enviada com sucesso!");
});

// Lógica para lidar com o envio do formulário de login (se necessário)
const loginForm = document.getElementById('loginForm'); 
if (loginForm) { 
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aqui você adicionaria a lógica para enviar os dados de login para o servidor e autenticar o usuário

        console.log(`Email: ${email}\nSenha: ${password}`); 
    });
}