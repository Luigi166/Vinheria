// Função para enviar o formulário e mostrar uma mensagem de sucesso
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para o servidor

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aqui você pode adicionar lógica para enviar os dados para o servidor, se necessário
    const responseMessage = document.getElementById("response-message");
    responseMessage.innerHTML = `<p>Obrigado pela sua mensagem, ${name}! Entraremos em contato em breve.</p>`;

    // Limpar o formulário após o envio
    document.getElementById("contact-form").reset();
});
