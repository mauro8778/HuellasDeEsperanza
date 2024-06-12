const username = localStorage.getItem('name');
if (!username) {
    window.location.replace('/')
    throw new Error('usuario requerido')
}
const socket = io({
    auth: {
        token: "abc-123",
        name: username
    }
});

const Online = document.querySelector('#status-online')
const Offline = document.querySelector('#status-offline')
const lista = document.querySelector('.users')





socket.on('connect', () => {
    Online.classList.remove('hidden');
    Offline.classList.add('hidden');

    console.log('Conectado');
})

socket.on('disconnect', () => {
    Online.classList.add('hidden');
    Offline.classList.remove('hidden');

    console.log('Desconectado');
})

socket.on('welcome-message',(data) => {
    console.log(data);
})

socket.on('on-clients-changed',(data) => {
    lista.innerHTML = ''
    data.forEach((user) => {
        const liElement = document.createElement( 'li' );
        liElement.innerText = user.name;
        lista.appendChild(liElement)
    });

    console.log(data);
})