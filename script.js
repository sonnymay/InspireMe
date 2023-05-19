// messageGenerator.js

const messageComponents = {
    start: ['Believe in yourself', 'Never give up', 'Embrace the unknown'],
    middle: ['and keep pushing forward,', 'and continue to grow,', 'and step out of your comfort zone,'],
    end: ['no matter what.', 'every single day.', 'because this is your journey.'],
    asciiArt: [
        `
         _____  ____  _   _ _   ___     __  __  __      __     __
        / ____|/ __ \| \ | | \ | \ \   / / |  \/  |   /\\ \   / /
       | (___ | |  | |  \| |  \| |\ \_/ /  | \  / |  /  \\ \_/ / 
        \___ \| |  | | . \` | . \` | \   /   | |\/| | / /\ \\   /  
        ____) | |__| | |\  | |\  |  | |    | |  | |/ ____ \| |   
       |_____/ \____/|_| \_|_| \_|  |_|    |_|  |_/_/    \_\_|   
        `,
        // Add more ASCII art options here
      ]
    };
  
  function generateRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  
  function generateMessage() {
    const message = [];
  
    for (let component in messageComponents) {
      let componentOptions = messageComponents[component];
  
      if (component === 'asciiArt') {
        let randomIndex = generateRandomIndex(componentOptions);
        let selectedComponent = componentOptions[randomIndex];
        message.push(selectedComponent);
      } else {
        let randomIndex = generateRandomIndex(componentOptions);
        let selectedComponent = componentOptions[randomIndex];
        message.push(selectedComponent);
      }
    }
  
    return message.join(' ');
  }
  
  function displayRandomMessage() {
    const randomMessage = generateMessage();
    const lastComponent = randomMessage[randomMessage.length - 1];
  
    if (messageComponents.asciiArt.includes(lastComponent)) {
      console.log(lastComponent + '\n' + randomMessage.slice(0, -1).join(' '));
    } else {
      console.log(randomMessage);
    }
  }
  
  displayRandomMessage();
  