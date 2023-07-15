const TelegramBot = require('node-telegram-bot-api');

// Create a bot instance with your bot's API token
const bot = new TelegramBot('6340726107:AAG9KjxOBvfpVRHIaZWqpnoVYo-rDkRS6ng', { polling: true });


const userStates = {};

// Register a handler for the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from.first_name;
    const userId = msg.from.id;
    console.log(msg)
    let currentState = userStates[userId] || 'start';

    console.log(currentState);

    // Send the welcome message
    bot.sendMessage(chatId, `Dear ${username},\n\nYou’re Welcome To *The Haven Nation Church*. \n\nWe Are Focused On Raising Nation Giants \n\nWhat Are Your Interest Today?\n\nPlease reply with a menu number from below:\n\n1. Home\n2. About Us\n3. Ministries\n4. Giants Experience\n5. Giving\n6. Partnership\n7. Membership\n8. Media Studio\n9. ChatRoom\n10. Giants Leadership Academy`, { parse_mode: 'Markdown' });


    bot.on('callback_query', (query) => {
        const chatId = query.message.chat.id;
        const buttonId = query.data;
        console.log()

        let response;

        switch (buttonId) {
            case '/start':
                // Send the welcome message

                bot.sendMessage(chatId, `Dear ${username},\n\nYou’re Welcome To *The Haven Nation Church*. \n\nWe Are Focused On Raising Nation Giants \n\nWhat Are Your Interest Today?\n\nPlease reply with a menu number from below:\n\n1. Home\n2. About Us\n3. Ministries\n4. Giants Experience\n5. Giving\n6. Partnership\n7. Membership\n8. Media Studio\n9. ChatRoom\n10. Giants Leadership Academy`, { parse_mode: 'Markdown' });
                break;
            default:
                response = 'Invalid button';
        }

    });

    // bot.on('message', (msg)=>{
    //     console.log(msg)
    // })

    // Handle subsequent messages
    bot.onText(/(.+)/, (msg, match) => {
        const text = match[1]; // Extract the text from the message

        // Update the user's state
        userStates[userId] = text;

        // Delay function
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // Inline Button
        const keyboard = {
            inline_keyboard: [
                [
                    { text: 'Go to main Menu 🏡', callback_data: '/start' }
                ]
            ]
        };

        // Process the user's response
        async function processResponse(text) {
            switch (text) {
                case '1':
                    // await bot.sendMessage(chatId, 'You are welcome to the home of Giants.');
                    await bot.sendPhoto(chatId, "./assets/home.jpeg", {
                        caption: `We are delighted by your kind interest in our nation and excited that you have decided to be a great part of us
                                \n\nWe present to you a nation filled with giants, who are connected, who fellowship together and inspire each other to another high level of greatness  
                                \n\nKindly Visit The Church Website 
                                \nhttps://www.havenation.org
                                \n\nSend Us A Love Note Via Mail 
                                \ninfo@havenation.org
                                \n\nWe Love You And We Celebrate You
                                    `,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    })
                    break;

                case '2':
                    await bot.sendPhoto(chatId, "./assets/about.jpeg", {
                        caption: `The Haven Nation Church is an international organization envisioned by God to reach out to all nations. To equip, prepare and groom them into nation giants 
                        \nTo know more about THN Church 
                        \nKindly Visit The Church Website \nhttps://www.havenation.org/about-us`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(2000);
                    await bot.sendPhoto(chatId, "./assets/b.jpeg", {
                        caption: `The Haven Nation Church\n   .....The home of giants
                        
                        \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us-b',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(2000);
                    await bot.sendPhoto(chatId, "./assets/c.jpeg", {
                        caption: `The Haven Nation Church\n   .....The home of giants
                        
                        \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us-c',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(1500);
                    await bot.sendPhoto(chatId, "./assets/d.jpeg", {
                        caption: `The Haven Nation Church\n   .....The home of giants
                        
                        \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us-d',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(2000);
                    await bot.sendPhoto(chatId, "./assets/e.jpeg", {
                        caption: `The Haven Nation Church \n   .....The home of giants
                        
                        \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us-e',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(1500);
                    await bot.sendPhoto(chatId, "./assets/f.jpeg", {
                        caption: `The Haven Nation Church \n   .....The home of giants
                        
                        \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us-f',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(2000);
                    await bot.sendVideo(chatId, "./assets/g.mp4", {
                        caption: `The Haven Nation Church \n   .....The home of giants
                        
                        \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us-g',
                        // Explicitly specify the MIME type.
                        contentType: 'video/mp4',
                    })
                    break;


                case '3':
                    await bot.sendPhoto(chatId, "./assets/3a.jpeg", {
                        caption: `The Haven Nation Church\n   .....The home of giants
                            
                            \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us-b',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(2000);
                    await bot.sendPhoto(chatId, "./assets/3b.jpeg", {
                        caption: `The Haven Nation Church\n   .....The home of giants
                            
                            \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us-c',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(1500);
                    await bot.sendPhoto(chatId, "./assets/3c.jpeg", {
                        caption: `Join Us Today For Our Giants Services With Pastor Tomiwa And Olamide Oluyen\n\nVenue: Giants Theatre\nBeside PHCN Capital Building\nAdeoyo Roundabout\nRing Road, Ibadan \n\nKindly Visit The Church Website \nhttps://www.havenation.org/about-us\n\nWe Love You And We Celebrate You`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    }, {
                        // Explicitly specify the file name.
                        filename: 'about-us',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    break;


                case '4':

                    await bot.sendMessage(chatId, '⚡')
                    await bot.sendVideo(chatId, "./assets/experience.mp4", {
                        caption: `The Haven Nation Church\n   .....The home of giants
                    
                    \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown',
                    }, {
                        // Explicitly specify the file name.
                        filename: 'giving-video',
                        // Explicitly specify the MIME type.
                        contentType: 'video/mp4',
                    })
                    await bot.sendPhoto(chatId, "./assets/chatroom.jpeg", {
                        caption: `- Like Our Page On Facebook\nfacebook.com/thnchurch\n\n- Follow Us On Instagram \ninstagram.com/thnchurch\n\n- Follow Us On Twitter \ntwitter.com/thnchurch\n\n- Follow Us On Threads\nwww.threads.net/@thnchurch\n\n- Follow Us On TikTok\ntiktok.com/@thnchurch\n\n- Connect With Us On LinkedIn\nhttps://www.linkedin.com/in/thn-church-7a2136283`,
                        parse_mode: 'Markdown'
                    }, {
                        filename: 'experience',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendVideo(chatId, "./assets/experience-c.mp4", {
                        caption: `The Haven Nation Church\n   .....The home of giants
                        
                        \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    }, {
                        // Explicitly specify the file name.
                        filename: 'giving-video',
                        // Explicitly specify the MIME type.
                        contentType: 'video/mp4',
                    })
                    break;

                case '5':


                    await bot.sendPhoto(chatId, "./assets/givinga.jpeg", {
                        caption: `THN Giving Made Easy  \n\nTo Give Your First Fruit, Prophetic Seed, Offering And Pay Your Tithe\n\nName: The Haven Nation Church\nAccount Number: 7643025017\nBank: FCMB \n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'partner',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(2000);
                    await bot.sendPhoto(chatId, "./assets/givingb.jpeg", {
                        caption: `THN Giving Made Easy 🆓\n\nTo Give Your First Fruit, Prophetic Seed, Offering And Pay Your Tithe\n\nVisit Any To Give Online\n💳 havenation.org/give\n\n💳 paystack.com/pay/thn\n\nThank You For Your Generosity!\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'partner',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    await delay(2000);
                    await bot.sendVideo(chatId, "./assets/givingc.mp4", {
                        caption: `THN Giving Made Easy 🆓\n\nVisit Any To Give Online\n💳 havenation.org/give\n\n💳 paystack.com/pay/thn\n\nName: The Haven Nation Church\nAccount Number: 7643025017\nBank: FCMB \n\nThank You For Your Generosity!\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        // Explicitly specify the file name.
                        filename: 'partner',
                        // Explicitly specify the MIME type.
                        contentType: 'video/mp4',
                    })
                    await bot.sendVideo(chatId, "./assets/givingc.mp4", {
                        caption: `THN Giving Made Easy 🆓\n\nTo Give Your First Fruit, Prophetic Seed, Offering And Pay Your Tithe\n\nVisit Any To Give Online\n💳 havenation.org/give\n\n💳 paystack.com/pay/thn\n\nThank You For Your Generosity!\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    }, {
                        // Explicitly specify the file name.
                        filename: 'giving-video',
                        // Explicitly specify the MIME type.
                        contentType: 'video/mp4',
                    })
                    break;

                case '6':
                    await bot.sendPhoto(chatId, "./assets/6a.jpeg", {
                        parse_mode: 'Markdown'
                    }, {
                        filename: 'partner-a',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/6b.jpeg", {
                        parse_mode: 'Markdown'
                    }, {
                        filename: 'partner-b',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/6c.jpeg", {
                        parse_mode: 'Markdown'
                    }, {
                        filename: 'partner-c',
                        contentType: 'image/jpeg',
                    })

                    await bot.sendPhoto(chatId, "./assets/6d.jpeg", {
                        parse_mode: 'Markdown'
                    }, {
                        filename: 'partner-d',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/6e.jpeg", {
                        parse_mode: 'Markdown'
                    }, {
                        filename: 'partner-e',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/6f.jpeg", {
                        parse_mode: 'Markdown'
                    }, {
                        filename: 'partner-e',
                        contentType: 'image/jpeg',
                    })

                    await delay(2000);
                    await bot.sendPhoto(chatId, "./assets/partnerMain.jpeg", {
                        caption: `Partnering With THN Church Today Positions You To Be Making A Difference In The Lives of Many Across The World Without Seeing Them Physically \n\nEvery THN Partner Is A Bonafide Soul Winner For The Kingdom of God \n\nCheck Through The Partnership Packages That Is Convenient For You\n\nKindly Visit The Church Website \nhttps://www.havenation.org/about-us\n\nWe Love You and We Celebrate You`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    }, {
                        // Explicitly specify the file name.
                        filename: 'partner',
                        // Explicitly specify the MIME type.
                        contentType: 'image/jpeg',
                    })
                    break;

                case '7':
                    bot.sendPhoto(chatId, "./assets/membership.jpeg", {
                        caption: `We are delighted by your kind interest in our nation and excited that you have decided to be a great part of us \n\nWe Are Delighted By Your Sincere Interest In Beginning Your Journey To Becoming A Nation Giant\n\nGiants Membership Class Takes Place Every Sunday And Monday Either In Person Or Online With A Course Manual That Helps Us To Grow In Our Faith Journey\n\nKindly Fill The Membership Form And Join The Waiting List For The Giants Membership Class \nhttps://www.havenation.org/thn-membership-form \n\nWe Love You And We Celebrate You`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    })
                    break;

                case '8':

                    await bot.sendMessage(chatId, '⚡')
                    await bot.sendVideo(chatId, "./assets/8a.mp4", {
                        caption: `We Love You And We Celebrate You\n\nWe Love You And We Celebrate You\n\n The Haven Nation Church\n   .....The home of giants
                    
                    \n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown',
                    }, {
                        // Explicitly specify the file name.
                        filename: 'giving-video',
                        // Explicitly specify the MIME type.
                        contentType: 'video/mp4',
                    })
                    await bot.sendPhoto(chatId, "./assets/8b.jpeg", {
                        caption: `- Download Audio Sermons On Telegram\nhttps://t.me/thnchurch\n\nReminisce Giants Services On Telegram\nhttps://t.me/thnchurch\n\nStream Giants Services Live On YouTube\nhttps://youtube.com/@THNChurch\n\nStream Giants Services Live On Mixlr\nhttps://mixlr.com/thnchurch`,
                        parse_mode: 'Markdown'
                    }, {
                        filename: 'experience',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/8c.jpeg", {
                        caption: `#THNPraiseReport\n\nWe Make Boast Of A Father Who Does Mind Blowing Things In The House of THN Church\n\nPlease Share Your Testimonies By Emailing Us At info@havenation.org \n\nOr Contact Via SMS or WhatsApp +2347041000492 +2347041000493 \n\nYour Praise Report Can Be Sent In Audio, Video Or Text Format\n\nVisit The Media Studio In Church If You Want A Standard Video Shoot\n\nWe Love You & We Celebrate You\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        filename: '8c',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/8d.jpeg", {
                        caption: `For Prayers And Counseling Sessions\n\nPlease Send Your Name And Location via Mail, SMS or WhatsApp To The Church Lines \n\nContact:\n+2347041000492 \n+2347041000493\n\nEmail: info@havenation.org\nWebsite: www.havenation.org\n\nWe Love You & We Celebrate You\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        filename: '8d',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/8e.jpeg", {
                        caption: `➡️New Converts\n➡️New THN Members\n\nSend NEW LIFE via Text or What’sApp To Any of Our Care Lines\n\nTo request a PDF copy of the THN New Life Manual\n\nWe Love You & We Celebrate You\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown'
                    }, {
                        filename: '8e',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/8f.jpeg", {
                        caption: `Weakness Or Emptiness Is Never An Excuse In The Face of Challenges Or Life Threatening Situations\n\nConsistent Engagement With Prayers Ignites Power And A Deliverance That Is Beyond Your Imagination\n\nJoin Us At The NO MORE TEARS PRAYER CONFERENCE Holding Every Monday with Pastor Tomiwa Oluyen at 6:30a.m - 7:30am (GMT) #GiantsPrays #GiantsTheatre\n\nVenue: Giants Theatre\nBeside PHCN Capital Building \nAdeoyo Roundabout \nRing Road, Ibadan \n\nStream the service \nLive On YouTube \n\n youtube.com/c/THNChurch \n\nWe Love You And We Celebrate You `,
                        parse_mode: 'Markdown'
                    }, {
                        filename: '8e',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendPhoto(chatId, "./assets/8g.jpeg", {
                        caption: `The Beauty of Every Family Is In The Amplified Culture And Elevated System \n\nThe Culture You’re Raised In Always Influence The Dimension of God Extended To You \n\nAnointing Without Structure Is Like Lightening\n\nLearning Principles Is Key To Unhindered Productivity  `,
                        parse_mode: 'Markdown'
                    }, {
                        filename: '8g',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendMessage(chatId, `Join Us Every Friday For THN Family Meeting With Pastor Tomiwa Oluyen at 6pm (GMT)  #THNfamily \n\nAddress-:\nVenue: Giants Theatre \nBeside PHCN Capital Building\nAdeoyo Roundabout\nRing Road, Ibadan \n\nNote The Following: \n1. No Livestreams Option For This Meeting \n\n2. Always Come Prepared To Take Notes, Interact And Grow \n\n3. This Is A Compulsory Meeting For All Workforce Members But Legitimate Excuses Must Be Duly Noted And Approved By The CEO\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms
                    `)
                    await bot.sendPhoto(chatId, "./assets/8h.jpeg", {
                        caption: `The Expression Of Our Faith Is Not Complete Without The Presence of God \n\nWorship Is A Spiritual Structure Designed To Invoke A Presence \n\nJoin Us Today For Giants Bible Study With Pastor Tomiwa Oluyen At 6pm (GMT)  #THNwednesdays \n\nVenue: Giants Theatre \nBeside PHCN Capital Building \nAdeoyo Roundabout \nRing Road, Ibadan `,
                        parse_mode: 'Markdown'
                    }, {
                        filename: '8h',
                        contentType: 'image/jpeg',
                    })

                    await bot.sendMessage(chatId, `Also Stream The Service Live On Youtube\n\nyoutube.com/c/THNChurch\n\nVisit To Give Online\n💳 havenation.org/give\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms
                    `)
                    await bot.sendPhoto(chatId, "./assets/8i.jpeg", {
                        caption: `Join Us Today At The Giants Sunday Service with Pastor Tomiwa Oluyen at 9 a.m (GMT)  #THNsundays #GiantsDelight #GiantsTheatre\n\nVenue: Giants Theatre \nBeside PHCN Capital Building \nAdeoyo Roundabout \nRing Road, Ibadan \n\nStream the service \nLive On YouTube \n\n youtube.com/c/THNChurch \n\n Raising Nation Giants For Christ
                        \nWe Love You And We Celebrate You`,
                        parse_mode: 'Markdown'
                    }, {
                        filename: '8i',
                        contentType: 'image/jpeg',
                    })
                    await bot.sendVideo(chatId, "./assets/8j.mp4", {
                        caption: `➡️Digital Church Announcement\n\nWe Love You & We Celebrate You\n\n#Impact #Impactinglives #RaisingGiants #THN #GiantsTheatre  #OlamideTomiwaOluyen #TomiwaOluyen #Ptoms #Potoms`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    }, {
                        // Explicitly specify the file name.
                        filename: 'giving-video',
                        // Explicitly specify the MIME type.
                        contentType: 'video/mp4',
                    })
                    break;


                case '9':

                    bot.sendPhoto(chatId, "./assets/chatroom.jpeg", {
                        caption: `ChatRoom\nWhat Would You Like To Do ? \n\n- Join Giants Channel\nhttps://t.me/giantschannel \n\n- Join THN Global Community (Telegram)\nhttps://t.me/thnchurch\n\n- Join THN Global Community (WhatsApp)\nhttps://chat.whatsapp.com/ISzpHX6S8cJDgqLghCxLW8 \n\n- Direct Chat With THN Admin Personnel\nhttps://wa.link/xyqq50 \n\n- Direct Chat With THN Lead Pastor\nhttps://t.me/Oluyentomiwa \n\n- Direct Chat With THN Co - Lead Pastor\nhttps://t.me/Oluyenolamide \n\n- Direct Mail To The Church Admin\ninfo@havenation.org \n\n- Like Our Page On Facebook\nfacebook.com/thnchurch \n\n- Follow Us On Instagram\ninstagram.com/thnchurch \n\n- Follow Us On Twitter\ntwitter.com/thnchurch\n\n- Follow Us On Threads\nwww.threads.net/@thnchurch \n\n- Follow Us On TikTok\ntiktok.com/@thnchurch 
                        \nWe Love You And We Celebrate You`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    })
                    break;

                case '10':

                    bot.sendPhoto(chatId, "./assets/gla.jpeg", {
                        caption: `Giants Leadership Academy; Raising Giant Leaders\n\nGiants Leadership Academy Is The Academic Training Arm For THN Church That Equips Men And Women With Profitable Tools Needed For Kingdom Growth And Earthly Relevance\n\nClasses Takes Place In Person And Online Session Is Based On Special Request\n\nA Week Investment Training\nEvery First Week In The Month of March | June | September | December of The Year\n\nVisit Church Office To Pick Up Admission Form And Payments Quarters Will Be Communicated\n\nGiants Theatre\nBeside PHCN Capital Building \nAdeoyo Roundabout\nRing Road, Ibadan`,
                        parse_mode: 'Markdown',
                        reply_markup: JSON.stringify(keyboard)
                    })
                    break;
                // Handle other menu options

                default:
                    bot.sendMessage(chatId, 'Invalid menu option.');
                    break;
            }
        }

        processResponse(text)
    });
});



bot.on('polling_error', (error) => {
    console.log(error.code);  // => 'EFATAL'
});