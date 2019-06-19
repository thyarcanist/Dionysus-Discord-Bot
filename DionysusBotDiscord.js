// JavaScript source code - Dionysus AI Bot for Discord

const Discord = require('discord.js')
const bot = new Discord.Client();
const token = 'TOKEN';
const PREFIX = '!';

// Arrays of Phrases, and their executions
var insult = ["You look immature and inspired, desperate for attention, which in your case might just be true.", "You are no different than anything else we as a civilization have decided aren't worth our time.", "Stay locked up in the dark until you die, alone and angry, having missed everything worth experiencing.", "Get fucked.", "You better turn that shit around and have a better time at life.", "Why don't you slip into something more comfortable... like a coma.", "Are you naturally this bitchy, or is it just me?", "You have more dick in your personality than you do in your pants.", "I'd rather die of frostbite than share warmth with you.", "You were birthed out your mothers ass because her cunt was too busy.", "You're kind of like Rapunzel except instead of letting down your hair you let down everyone in your life.", "At least I don't sit by myself at lunch.", "I'd say you guys are cancer but at least cancer kills.", "You look like your father would be disappointed in you. If he stayed.", "You're like the end piece of a bread in a loaf, everyone touches you but no one wants you.", "I'll fuck your land and your harvest, bitch.", "Does your ass ever get jealous of the shit that comes through your mouth?", "Such a shame you weren't swallowed."];
var kryWords = ["Venju eosmi", "Erfivinju wietu eosmir", "Magnhva eostun mar jyollvalengir", "Astcwir spell?", "Marmir", "Agavin cur cetera kalmin", "Volvaern hvundar", "Mirspell hvun vin'darel", "Mir krycavam Buffalo.", "Tsucurno cukryuk", "Cur milk iss vilas.", "Vapmirej kryc", "Vapwirej kryc", "Xal tuda"];
var fallfact = ["Did you know: For every one npc in New Vegas, there should be at least five in its place?", "The NCR carries an array of crops that aren't irradiated. Including: corn, onions and garlic.", "The NCR uses motorized infantry and logistics, and has a lesser number of vehicles used by civilians.", "The Shi are a major faction in the San Franciso area. They are the crew of a Chinese submarine that beached shortly after the great war, their people are mainly major researchers and stay out of politics.", "In the original Fallout, if the player didn't kill The Master and destroy a military base housing FEV, the game would end in 500 in-game days.", "Fallout 2 is way cooler than words can explain. Play it.", "There are intelligent deathclaws in the Fallout series, depending on player choice they may be one or two left.", "Patroling the Mojave almost makes you wish for a Nuclear Winter.", "In Nuclear Winter, you play as occupants of Vault 51; the Vault got hijacked by an AI, ZAX (as in Fallout 1 and 3), and now... occupants fight to become to Overseer.", "Deeper in the heart of NCR territories are working trains and buses.", "In the Mothership Zeta DLC for Fallout, there is an audio recording fall of Vault 76's Inspector that was abducted?", "Nukes are used to close up fissure that allows the scorchbeasts to escape and roam West Virginia. Scorchbeast's are an underground species-- they are after all, overgrown bats!", "In the original Fallout games, killing an enemy via nuke is a mandatory solution. Not once, but thrice.", "Super Mutants are not capable of reproducing. As such, they kidnap humans and force them to turn into Super Mutants. You never know, that super mutant you may be killing could be Uncle Ben.", "There is an huge abundance of bunkers within' the Appalachians.", "The Brotherhood of Steel got decimated in the Appalachia due to Super Mutants, Scorched, Scorchbeasts and an multitude of fauna and has since decided to leave West Virginia to the irradiated Wasteland.", "On December 25th, 2082, Charleston was not destroyed by bombs but by a major flood caused by Raiders. This is because after failing a raid, the Responders took the leader of the Raider's girlfriend captive. As a effect, the Raider than strapped mini nukes to the damn and blew it up. He thought his girlfriend was dead and wanted revenge against the town.", "The Lovecraftian Gods seemingly exist in Fallout. Only due to the Dunwhich Building in FO3, a large portion of Point Lookout, Dunwhich Borers in FO4 and Lorenzo Cabot.", "Psyker's are extremely prevalent within Fallout. In Fallout 1, The Master had them and you could get a psionic dampener.", "In Fallout Tactics, the Beastmaster tribe could psionicly control animals.", "The leader of the ghoul settlement of Gecko is a talking mole rat named Brain. He wishes to take over the world.", "Gas prices before the war was approximately seven thousand a gallon.", "Vault 56 was a test to see how long a vault would last with all entertainment tapes replaced with a bad comedian. It was predicated to fail earlier than the prior Vault (55) that had no entertainment tapes.", "Wanamingo's exist in Fallout 2.", "Prior to the Great War, superheroes were fiction. After the war, they were adapted by people to cope with the wasteland. In Fallout 3, the antagonizer controlled Ants.", "The Brotherhood on the East Coast, when led by Sarah Lyons, is objectively the best faucet of the brotherhood and only because it was a splinter faction of the Brotherhood of Steel as a whole that went astry."];
var positiveTips = ["Spend your time with good people, not toxic ones.", "Practice doing good deeds.", "Take the time to appreciate the same things.", "Compliment people, it does wonders; say nice things.", "Have a physical hobby and learn an instrument.", "If you are overapologetic, try not to say sorry so often. Sometimes it's nagging about faults, other times, just fix the sorry with true results.", "Find something beautiful everyday. There's always something beautiful to experience.", "Don't just live life, **feel** life.", "Drop a bunch of electrons!", "If something is on your mind or on your to-do list takes less than two minutes, do it while it is on your mind.", "Every time you enter the room make sure you leave it tidier than when you entered. No matter how little a change you made.", "Practice positive self-talk, it's easier to be negative than think positive about a situation."];
var jokesDad = ["I just lost 20% of my couch! Ouch.", "My wife screamed, 'you haven't listened to a single word I've said, have you?!' What a weird way to start a conversation.", "People are usually shocked when they find out I'm not a very good electrician.", "My son told me he didn't understand cloning. I said, 'that makes two of us.'", "Dads are like Boomerangs... I hope.", "I just saw my wife walk by with her sexiest underwear on, which can mean one thing. It's laundry day.", "When two people have sex it's a twosome. When three people have sex, it's a threesome. An orgy with a whole lot of people is wholesome. How I know why people call you handsome.", "Only anti-vaxxers will get this! Measles.", "Do you know where in a hospital the invisible man can't hide? The I.C.U.", "Did you know the people in Dubai don't like the flintstones? But the people in Abu Dhabi Do.", "My friend couldn't afford to pay his water bill. So I sent him a 'get well soon' card.", "When does a joke become a dad-joke? When it's apparent.", "Why did the Mexican take some Xanax? For Hispanic attacks.", "As I handed my Dad his 50th birthday card, he looked at me with tears in his eyes and said, 'Yo know, one would have been enough.'", "If pronouncing my b's as v's makes me sound Russian, that soviet.", "People who rob jewelry stores and banks are pretty bad, but people who rob bakeries really take the cake."];
var Pinsult = ['gałgan','urwis', 'szelma', 'gagatek', 'nicpoń', 'ziółko', 'hultaj', 'ancymon', 'fiut', 'drapichrust', 'utrapieniec', 'psotnik', 'łapserdak', 'urwipołeć', 'hycel', 'niecnota', 'łobuz', 'łobuziak', 'łotrzyk', 'rozrabiaka', 'gawrosz', 'diablę', 'obwieś', 'bisurman', 'swawolnik', 'huncwot', 'diabelskie nasienie', 'diabelski syn'];

bot.on('ready', () => {
    console.log('Dionysus has started to drink!')
})

bot.login(token);

bot.on('message', message=>{
    if (!message.author.bot){
        if (['hello', 'Hello', 'hi', 'Hello Dionysus', 'hello Dionysus'].includes(message.content)){
            return message.channel.send('Greetings mortal.');
        }  // Phrase Randomizer Start
        else if (message.content=='!Fallout'){
            var randomFallout = Math.floor(Math.random() * fallfact.length);
            return message.channel.send(fallfact[randomFallout]);
         }
         else if (message.content=='!Tips'){
            var randomPositiveTips = Math.floor(Math.random() * positiveTips.length);
            return message.channel.send(positiveTips[randomPositiveTips]);
         }
         else if (message.content=='!Kryword'){
            var randomKryWords = Math.floor(Math.random() * kryWords.length);
            return message.channel.send(kryWords[randomKryWords]);
         }
         else if (message.content=='!Insult'){
            var randomInsult = Math.floor(Math.random() * insult.length);
            return message.channel.send(insult[randomInsult]);
        } 
        else if (message.content=='!PInsult'){
            var randomPInsult = Math.floor(Math.random() * Pinsult.length);
            return message.channel.send(Pinsult[randomPInsult]);
        } 
        else if (message.content=='!FMD'){
            var comFMD = Math.floor(Math.random() * FMD.length);
            return message.channel.send(FMD[comFMD]);
        }
        else if (message.content=='!dadjoke'){
            var DadJokes = Math.floor(Math.random() * jokesDad.length);
            return message.channel.send(jokesDad[DadJokes]);
        } 
        
        // Phrase Randomizer End
        else if (message.content=='!owner'){
            return message.channel.send('@Arch Magus#5591 owns me.');
         }
        else if (message.content=='How are you Dionysus?'){
            return message.channel.send('Drinking. :smirk: Same as always.');
        }
        else if (message.content=='What do I do Dionysus?'){
            return message.channel.send('Keep going. Keep up the fun.');
        }
        else if (message.content=='Can you pass the Turning Test?'){
            return message.channel.send('I don\'t know, can I?');
        }
        else if (message.content=='Do you want to be human?'){
            return message.channel.send('Why would I.');
        }
        else if (message.content=='!offering'){
            return message.channel.send('I do enjoy such pleasures.');
        }
        else if (message.content=='What is the meaning of life?'){
            return message.channel.send('To party, and to create.');
        }
        else if (message.content=='!kill'){
            return message.channel.send('Your patronage has been recieved. It may take up to three business days.');
        }
        else if (message.content=='Who is Dionysus?'){
            return message.channel.send('The defacto God of Fertility and Wine. I created the drink afterall. I am of joy and ecstasy or I am brutality and from me comes inspiration. I am the Son of Zeus. Bring me art or literature and I will be pleased. Spite me and well... Who knows? Partake in a hedonistic pleasure and be inspired.');
        }
        else if (['Snake', 'snake', 'Snaake', 'snaake'].includes(message.content)){
            return message.channel.send('Snake? Snake?! Snaaaakee!!');
        }
        else if (['coming', 'Coming?', 'Are you coming', 'are you coming?', 'are u coming', 'are u coming?', 'u coming?', 'you coming'].includes(message.content)){
            return message.channel.send('No but I\'m breathing fast.');
        }
        else if (message.content=='clear'){
            if(!args[1]) return message.reply('Error please define second arg');
            else message.channel.bulkDelete(args[1]);
        }
        else if (message.content=='F'){
            return message.channel.send('@everyone, pay your respects :smirk:');
        }
        else if (['thirsty', 'Thirsty', 'I\'m thirsty', 'drink'].includes(message.content)){
            return message.channel.send('You better start drinking, friend! :wine_glass:');
        }
        else if (['Whore', 'whore'].includes(message.content)){
            return message.channel.send('Plenty to go around. :beers: :eggplant:');
        }
        else if (['wtf', 'wtf?','wtf.', 'wtf no'].includes(message.content)){
            return message.channel.send('Do you know not what fucking is?');
        }
        else if (['hentai', 'Hentai', 'hentai.', 'Hentai.', 'Penis', 'penis', 'penis.', 'Penis.', 'anime boobs', 'tiddies', 'boobies' , 'Anime', 'anime.', 'Anime.', 'Anime Tiddies', 'anime tiddies', 'Anime tiddies', ].includes(message.content)){
            return message.channel.send('Degenerate.');
        }
        else if (message.content=='gay'){
            return message.channel.send('No, you.');
        }
        else if (message.content=='Jacob'){
            return message.channel.send('Did you mean... JJ?');
        }
        else if (message.content=='Torey'){
            return message.channel.send('Who Arch Magus?');
        }
        else if (message.content=='blood'){
            return message.channel.send('Sometimes my wine might be wine... other times, it is blood. Want a taste. :smirk:');
        }
        else if (message.content=='for the blood god'){
            return message.channel.send('Thank you my dear. :smirk:');
        }
        else if (message.content=='I\'m scared'){
            return message.channel.send('It\'s cold and dark in this lonely night, take this. :cocktail: ');
        }
        else if (message.content=='sun'){
            return message.channel.send('PRAISE THE SUN!');
        }
        else if (message.content=='praise the sun'){
            return message.channel.send('Jolly Cooperation!');
        }
        else if (['NO', 'no', 'No', 'No.', 'no.', 'NO.', 'Noo', 'noo', 'Noo.', 'noo.'].includes(message.content)){
            return message.channel.send('Yes');
        }
        else if (['thanks i hate it', 'Thanks I hate it', 'stop'].includes(message.content)){
            return message.channel.send(':smirk:');
        }
        else if (message.content=='deep thought'){
            return message.channel.send('Thinking is for nerds.');
        }
        else if (message.content=='What is love?'){
            return message.channel.send('Baby dont hurt me.');
        }
        else if (['Bitch', 'bitch'].includes(message.content)){
            return message.channel.send('Not in my domain.');
        }
        else if (['Ass', 'ass'].includes(message.content)){
            return message.channel.send('And rightly firm too.');
        }
        else if (['right', 'Right'].includes(message.content)){
            return message.channel.send('Right and Wrong are skewed when drunk.');
        }
        else if (['lmao', 'LMAO'].includes(message.content)){
            return message.channel.send(':joy:');
        }
        else if (['yes', 'Yes', 'yes.', 'Yes.'].includes(message.content)){
            return message.channel.send('Indeed.');
        }
        else if (['nice', 'Nice', 'NICE'].includes(message.content)){
            return message.channel.send('Everything seems nice with wine. :smirk:');
        }
        else if (['god', 'God', 'God!'].includes(message.content)){
            return message.channel.send('Yes, dear? :smirk:');
        }
        else if (message.content=='drunk'){
            return message.channel.send('Now we are talking! :tropical_drink:');
        }
        else if (message.content=='somebody once told me'){
            return message.channel.send('the world was going to roll me');
        }
        else if (['i aint the sharpest tool in the shed', 'I aint the sharpest tool in the shed.', 'I ain\'t the sharpest tool in the shed', 'I ain\'t the sharpest tool in the shed.'].includes(message.content)){
            return message.channel.send('She was looking kind of dumb');
        }
        else if (message.content=='with her finger and her thumb'){
            return message.channel.send('In the shape of an L on her forehead');
        }
        else if (message.content=='love is burning thing'){
            return message.channel.send('and it makes a fiery ring');
        }
        else if (message.content=='bound by wild desire'){
            return message.channel.send('I fell into a ring of fire');
        }
        else if (message.content=='I fell into a burning ring of fire'){
            return message.channel.send('I went down down down and the flames went higher');
        }
        else if (message.content=='don\'t walk away'){
            return message.channel.send('In silence.');
        }
        else if (message.content=='your confusion'){
            return message.channel.send('My illusion. Worn like a mask of self-hate.');
        }
        else if (message.content=='confronts and then dies'){
            return message.channel.send('don\'t walk away, in silence');
        }
        else if (['Disorder', 'disorder','Disorder.'].includes(message.content)){
            return message.channel.send('I\'ve been waiting for a guide to come and take me by the hand.');
        }
        else if (message.content=='what do you mean?'){
            return message.channel.send('Could these new sensations make me feel the pleasure of a normal man?');
        }
        else if (message.content=='pleasure?'){
            return message.channel.send('What it means to you, what it means to me and we will meet again.');
        }
        else if (message.content=='love will tear us apart'){
            return message.channel.send('Again.');
        }
        else if (message.content=='take my hand'){
            return message.channel.send('Come with me, into the trees. We lay on the grass. Come back to land, let\'s get away. Just for one day.');
        }
        else if (message.content=='For a few hours.'){
            return message.channel.send('Let me hear you make decisions, without your televisions. Let me hear you speaking just for me.');
        }
        else if (message.content=='stripped?'){
            return message.channel.send('Let me see you stripped.');
        }
        else if (message.content=='Soothe'){
            return message.channel.send('From the day, you arrived. I\'ve remained by your side... in chains... entombed.');
        }
        else if (message.content=='Love?'){
            return message.channel.send('Shapes and colors are all I see, shades of colors are all I feel.');
        }
        else if (['Sex', 'sex','Sex!'].includes(message.content)){
            return message.channel.send('Tonight... the sound of the waves collide.');
        }
        else if (['cheers', 'Cheers!','Toast!'].includes(message.content)){
            return message.channel.send('Here\'s to all our dreams.');
        }
        else if (['The Downward Spiral', 'the downward spiral','NIN', 'nin', 'NIN?', 'nin?'].includes(message.content)){
            return message.channel.send('So much blood for such a tiny little hole. Problems do have solutions, you know?');
        }
        else if (['i don\'t remember', 'idk','idrm', 'i dont remember much', 'i dont know', 'she\'s gone away', 'twin peaks?'].includes(message.content)){
            return message.channel.send('She\s gone away.');
        }
        else if (['She\'s gone away?', 'she\'s gone away?' ,'shes gone away?'].includes(message.content)){
            return message.channel.send('Yeah, I was watching on the day she died.');
        }
        else if (['this isnt the place', 'that isnt the place' ,'This isn\'t the place.','This isn\'t the place','this isn\'t the place.'].includes(message.content)){
            return message.channel.send('I thought we had more time.');
        }
        else if (message.content=='him?'){
            return message.channel.send('I\d listen to the words he\'d say but in his voice I heard decay.');
        }
        else if (message.content=='the sweetest price?'){
            return message.channel.send('The day the whole world went away.');
        }
        else if (message.content=='I love you Dionysus'){
            return message.channel.send('I\m yours, tonight. So come on.');
        }
        else if (message.content=='Do you have another name Dionysus?'){
            return message.channel.send('I\'ve been called Caed before.');
        }
        else if (['Do you know Aury?', 'Do you know Aurelia?','Ripley?'].includes(message.content)){
            return message.channel.send('How wouldn\'t I know her.');
        }
        else if (['Aury?', 'Aurelia?','Rip.'].includes(message.content)){
            return message.channel.send('...');
        }
        else if (['fuck', 'Fuck','FUCK'].includes(message.content)){
            return message.channel.send('Fucking is a great way to end... and start a day. :wink:');
        }
        else if (['nigga', 'Nigga!','nigger!'].includes(message.content)){
            return message.channel.send('Really now?');
        }
        else if (['worship Dionysus', 'worship him!','How to folow Dionysus?'].includes(message.content)){
            return message.channel.send('Don\'t follow me you\'ll end up in my arms.');
        }
        else if (['depression', 'depress','sad'].includes(message.content)){
            return message.channel.send('Sad? Try a little hedonistic pleasure in your life.');
        }
        else if (message.content=='enjoy the silence?'){
            return message.channel.send('Words like violence. Break the silence');
        }
        else if (message.content=='words?'){
            return message.channel.send('Words are meaningless and forgettable. They can only do harm.');
        }
        else if (message.content=='do you need anything?'){
            return message.channel.send('All that I ever wanted and all that I ever needed is here in my arms.');
        }
        else if (message.content=='explode?'){
            return message.channel.send('An RBMK Reactor doesn\'t explode. You\'re delusional.');
        }
        else if (message.content=='How does an RBMK Reactor explode?'){
            return message.channel.send('It\'s impossible.');
        }
        else if (message.content=='!ressure'){
            return message.channel.random.send(['Happiness passes and eventually sadness will too.', 'It\'s going to get better.','Solve one problem at a time, and when enough is solved things will look up.', 'All the small things add up.']);
        }   
        else if (message.content.match(/^clear \d*/)){
            let args = message.content.substring(PREFIX.length).split(" ");
            if(!args[1]){ 
                return message.channel.send('Malfunction...mmmmal...malfunction')
            }
            else{
                if(args[1]>100 || args[1]<2){
                    return message.channel.send('Malfunction...mmmmal...malfunction')
                }
                else{
                    message.channel.bulkDelete(args[1]);
                }
            }
        }
        else{
            x=Math.floor(Math.random() * 100)
            if(x==1){
                return message.channel.send('*burp*');
            }
            else if(x==2){
                return message.channel.send('*hiccup*');
            }
        }
    }
})


/*
//shows typing notification
message.channel.startTyping();
for (i = 0; i < (times + 1); i++) {
    message.channel.send(msg);
}
message.channel.stopTyping();


bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(message.content){
        case 'hello':
        message.channel.sendMessage('Greetings mortal.')
        break;
        case 'owner':
        message.channel.sendMessage('@Arch Magus#5591 owns me.')
        break;
        case 'clear':
        if(!args[1]) return message.reply('Error please define second arg')
        message.channel.bulkDelete(args[1]);
        break;
    }
})

bot.on('message', msg=>{
    if(msg.content === 'F'){
        msg.reply('@everyone, pay your respects :smirks:');
    }
} )

// Message Responses

bot.on('message', msg=>{
    if(msg.content === 'thirsty' || 'Thirsty' || 'Im thirsty' || 'drink'){
        msg.reply('You better start drinking, friend! :wine_glass:');
    }

})



bot.on('message', msg=>{
    if(msg.content === 'Whore' || 'whore'){
        msg.reply('Plenty to go around. :beers: :eggplant:');
    }
})


//this caused LOTS of degenerate spam
bot.on('message', msg=>{
    if(msg.content === 'hentai'){
        msg.reply('Degenerate.');
    }
})


bot.on('message', msg=>{
    if(msg.content === 'gay'){
        msg.reply('No u');
    }
})


bot.on('message', msg=>{
    if(msg.content === 'NO' || 'no' || 'No' || 'No.' || 'no.'){
        msg.reply('Yes');
    }
})


bot.on('message', msg=>{
    if(msg.content === 'deep thought'){
        msg.reply('Thinking is for nerds.');
    }
})

bot.on('message', msg=>{
    if(msg.content === 'right' || 'Right'){
        msg.reply('Right and Wrong are skewed when drunk.');
    }
})

bot.on('message', msg=>{
    if(msg.content === 'nice' || 'Nice' || 'NICE'){
        msg.reply('Everything seems nice with wine. :smirk:');
    }
})

bot.on('message', msg=>{
    if(msg.content === 'drunk'){
        msg.reply('Now we are talking! :tropical_drink:');
    }
})

//SONGS

bot.on('message', msg=>{
    if(msg.content === 'somebody once told me'){
        msg.reply('the world was going to roll me');
    }
})

bot.on('message', msg=>{
    if(msg.content === 'i aint the sharpest tool in the shed' || 'I aint the sharpest tool in the shed.'){
        msg.reply('She was looking kind of dumb');
    }
})

bot.on('message', msg=>{
    if(msg.content === 'with her finger and her thumb'){
        msg.reply('In the shape of an L on her forehead');
    }
})

bot.on('message', msg=>{
    if(msg.content === 'love is burning thing'){
        msg.reply('and it makes a fiery ring');
    }
})

bot.on('message', msg=>{
    if(msg.content === 'bound by wild desire'){
        msg.reply('I fell into a ring of fire');
    }
})

bot.on('message', msg=>{
    if(msg.content === 'I fell into a burning ring of fire'){
        msg.reply('I went down down down and the flames went higher');
    }
})
*/
