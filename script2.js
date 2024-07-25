document.addEventListener('DOMContentLoaded', function() {
    const chatLink = document.querySelector('.chat');
    const chatBox = document.getElementById('chatBox');
    const closeChat = document.getElementById('closeChat');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');

    chatLink.addEventListener('click', function(event) {
        event.preventDefault();
        chatBox.classList.remove('hidden');
        chatBox.classList.add('show');
    });

    closeChat.addEventListener('click', function() {
        chatBox.classList.remove('show');
        chatBox.classList.add('hidden');
    });

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            // Ajoutez le message à la fenêtre de chat
            const messageElement = document.createElement('div');
            messageElement.className = 'my-2 p-2 rounded-md bg-gray-100';
            messageElement.textContent = message;
            chatBox.querySelector('.overflow-y-auto').appendChild(messageElement);
            chatInput.value = '';
        }
    });
});