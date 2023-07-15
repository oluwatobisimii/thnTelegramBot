const TelegramBot = require('node-telegram-bot-api');

// Create a bot instance with your bot's API token
const bot = new TelegramBot('YOUR_API_TOKEN', { polling: true });

// In-memory state management
const userState = {};

// Define the conversation flow
const conversationFlow = {
  start: {
    prompt: 'Welcome! Please select an option:',
    options: ['Option 1', 'Option 2'],
    next: {
      'Option 1': 'option1',
      'Option 2': 'option2',
    },
  },
  option1: {
    prompt: 'You selected Option 1. Choose the next option:',
    options: ['Option 1.1', 'Option 1.2'],
    next: {
      'Option 1.1': 'option1.1',
      'Option 1.2': 'option1.2',
    },
  },
  "option1.1": {
    prompt: 'You selected Option 1.1. Thank you!',
    options: [],
    next: null,
  },
  "option1.2": {
    prompt: 'You selected Option 1.2. Thank you!',
    options: [],
    next: null,
  },
  option2: {
    prompt: 'You selected Option 2. Thank you!',
    options: [],
    next: null,
  },
};

// Register a handler for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const text = msg.text;

  // Get the user's current state
  let currentState = userState[userId] || 'start';

  // Retrieve the current state's configuration
  const stateConfig = conversationFlow[currentState];

  // Process the user's input based on the current state
  if (stateConfig) {
    // Check if the user's input matches one of the available options
    if (stateConfig.options.includes(text)) {
      // Update the state based on the user's selection
      currentState = stateConfig.next[text];
    }

    // Retrieve the next state's configuration
    const nextStateConfig = conversationFlow[currentState];

    // Update the user's state
    userState[userId] = currentState;

    // Send the prompt and available options for the next state
    bot.sendMessage(chatId, nextStateConfig.prompt, {
      reply_markup: {
        keyboard: [nextStateConfig.options],
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, 'Invalid input.');
  }
});
