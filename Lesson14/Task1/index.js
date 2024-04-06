let message = 'Just learn it';

 function sendMessage(name) {
    const sender ='Gromcode';
    console.log(`${name}, ${message}! You ${sender}`);
}

 function setMessage(text) {
    message = text;
}

setMessage('Good job');
sendMessage('Ann');