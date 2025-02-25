function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
        setTimeout(function() {
        console.log(message[i]);
        }, parseInt(Math.random() * 1000));
    }
}
  
randomDelayPrint("Hello, world!");