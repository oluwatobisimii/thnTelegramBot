// const userState = {};

// const conversationFlow = {
//     start: "",
//     1: {
//         prompt: `We are delighted by your kind interest in our nation and excited that you have decided to be a great part of us
//  
//         \n\nWe present to you a nation filled with giants, who are connected, who fellowship together and inspire each other to another high level of greatness  

//         \n\nKindly Visit The Church Website 
//         \nhttps://www.havenation.org

//         \n\nSend Us A Love Note Via Mail 
//         \ninfo@havenation.org

//         \n\nWe Love You And We Celebrate You`
//     }

// }
// Register a handler for incoming messages


// // Register a handler for the /start command
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const username = msg.from.first_name;
//     const userId = msg.from.id;

//     let currentState = userState[userId] || 'start';

//     console.log(currentState)
//     console.log(userState)

//     const stateConfig = conversationFlow[currentState];

//     // Send the welcome message
//     bot.sendMessage(chatId, `Dear ${username},\n\nYou’re Welcome To *The Haven Nation Church*. \n\nWe Are Focused On Raising Nation Giants \n\nWhat Are Your Interest Today?\n\nPlease reply with a menu number from below:\n\n1. Home\n2. About Us\n3. Ministries\n4. Giants Experience\n5. Giving\n6. Partnership\n7. Membership\n8. Media Studio\n9. ChatRoom\n10. Giants Leadership Academy`, { parse_mode: 'Markdown' });

//     bot.on('message', (msg) => {
//         const chatId = msg.chat.id;
//         const text = msg.text;
//         console.log(msg)

//         // bot.getChatMember(chatId, userId).then((response) => {
//         //     const username = response.user.username;

//         //     if (username) {
//         //         bot.sendMessage(chatId, `Username: @${username}`);
//         //     } else {
//         //         bot.sendMessage(chatId, 'The user does not have a username.');
//         //     }
//         // })

//         // Process the user's response
//         switch (text) {
//             case '1':
//                 bot.sendMessage(chatId, 'You are welcome to the home of Giants.');
//                 bot.sendPhoto(chatId, "./assets/home.jpeg", {
//                     caption: `
//                 We are delighted by your kind interest in our nation and excited that you have decided to be a great part of us
//             \n\nWe present to you a nation filled with giants, who are connected, who fellowship together and inspire each other to another high level of greatness  
//             \n\nKindly Visit The Church Website 
//             \nhttps://www.havenation.org
//             \n\nSend Us A Love Note Via Mail 
//             \ninfo@havenation.org
//             \n\nWe Love You And We Celebrate You
//                 `,
//                     parse_mode: 'Markdown'
//                 })
//                 break;
//             case '2':
//                 bot.sendPhoto(chatId, "./assets/about.jpeg", {
//                     caption: `
//                     The Haven Nation Church is an international organization envisioned by God to reach out to all nations. To equip, prepare and groom them into nation giants 

// To know more about THN Church 

// Kindly Visit The Church Website 
// https://www.havenation.org/about-us
//                 `,
//                     parse_mode: 'Markdown'
//                 })
//                 break;
//             case '3':
//                 bot.sendMessage(chatId, 'You selected Get Help.');
//                 break;
//             case '4':
//                 bot.sendMessage(chatId, 'You selected Give.');
//                 break;
//             case '5':
//                 bot.sendMessage(chatId, 'You selected Membership.');
//                 break;
//             case '6':
//                 bot.sendMessage(chatId, 'You selected Downloads.');
//                 break;
//             case '7':
//                 bot.sendMessage(chatId, 'You selected Download Mobile App.');
//                 break;
//             case '8':
//                 bot.sendMessage(chatId, 'You selected Daystar Leadership Academy.');
//                 break;
//             default:
//                 bot.sendMessage(chatId, 'You selected Daystar Leadership Academy.');
//                 break;
//         }
//     });


// });