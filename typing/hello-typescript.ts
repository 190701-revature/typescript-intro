let hello = 'hello-world'; // es6 let declaration

class HelloSpeaker { // es6 class
    message; // field declaration (doesn't exist in JS)

    constructor(m) {
        this.message = m;
    }
    
    consoleMessage() {
        console.log(this.message);
    }
}

const speaker = new HelloSpeaker(hello); // es6 const declaration

speaker.consoleMessage(); // normal method call