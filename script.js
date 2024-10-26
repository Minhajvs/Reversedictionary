const definitions = [
    "The art of wasting time without any guilt.",
    "A screwed or suspicious person, especially in politics.",
    "A lovable fool.","A Bad person with good thoughts",
    "A person who conquered hearts but failed in life",
    "Alive but dead","A safe place full of wild animals",
    "Peaceful regreting mind","Something somewhere some how happening",
        "The art of wasting time without any guilt.",
        "A shrewd or suspicious person, especially in politics.",
        "A lovable fool.",
        "A bad person with good thoughts.",
        "A person who conquered hearts but failed in life.",
        "Alive but dead.",
        "A safe place full of wild animals.",
        "Peacefully regretting mind.",
        "Something somewhere somehow happening.",
        "The sound of someone trying to eat spaghetti without using their hands.",
        "A meeting that could have been an email.",
        "The mysterious substance that collects under the couch cushions.",
        "The state of forgetting where you parked your car.",
        "The feeling you get when you realize you've been talking to a stranger.",
        "A dance move that looks like you’re trying to swat a fly.",
        "An enthusiast of collecting mismatched socks.",
        "A casual way to say you’re too lazy to get off the couch.",
        "The sound your stomach makes when you're too hungry to think.",
        "A personal assistant who doesn't get paid and is named 'Mom.'",
        "The art of holding onto the remote control with a death grip.",
        "A creature that only appears when you’re trying to sleep.",
        "A professional napper on a mission.",
        "An awkward moment captured forever in a family photo.",
        "A cooking technique that involves staring at a microwave.",
        "The universal sign for 'I have no idea what I'm doing.'",
        "The indescribable feeling of a cat judging your life choices.",
        "The ability to trip over flat surfaces.",
        "A person who thinks a ‘quick shower’ means a 30-minute concert in the bathroom.",
        "A spontaneous dance party in the kitchen.",
        "The look on your face when someone says 'we need to talk.'",
        "A snack that suddenly becomes a full meal when nobody's watching.",
        "An excuse for eating dessert before dinner.",
        "The sound made when someone sits down after a long day.",
        "An elaborate scheme to avoid doing laundry.",
        "The struggle of opening a snack bag without making a mess.",
        "An underappreciated superhero: ‘The Blanket Burrito.’",
        "The feeling of satisfaction after finishing a puzzle—until you realize a piece is missing.",
        "A mystical realm where lost socks and pens go to live.",
        "A fashion statement made solely by wearing sweatpants to a fancy dinner.",
        "The thrilling experience of sending a risky text and then waiting for a response.",
        "A secret language spoken only by cats and dogs.",
        "A person who takes 'just one more episode' way too seriously.",
        "The moment you realize you’ve been talking to a mirror.",
        "A procrastination tactic that involves reorganizing your desk.",
        "The phenomenon of forgetting why you walked into a room.",
        "The sound of a million 'you got this!' texts before an exam.",
        "A thrilling sport involving navigating a shopping cart through crowded aisles.",
        "The fear of running out of snacks during a binge-watching session.",
        "A ninja-like ability to sneak food into the movies.",
        "The decision to go for a jog, which quickly turns into a walk to the fridge.",
        "The art of making a salad look more exciting than it really is.",
        "The awkward silence that happens after a bad pun.",
        "A euphoric state achieved after finding a forgotten snack.",
        "The feeling of dread when you realize your phone is on 1% battery.",
        "A person who uses a 'study group' as an excuse to hang out.",
        "The moment you realize you've been wearing your shirt inside out all day.",
        "An Olympic event called 'Avoiding Eye Contact.'",
        "The joy of discovering a new streaming service during a marathon binge.",
        "A competition to see who can make the best weird face.",
        "The ability to remember every embarrassing moment from your past.",
        "The thrill of hearing the ice cream truck in the distance.",
        "A dramatic pause that lasts just long enough to make everyone uncomfortable.",
        "The internal debate about whether to get out of bed or just scroll on your phone.",
        "The overwhelming urge to take a nap after eating.",
        "A special talent for burning toast.",
        "The unspoken rule of only sharing snacks when you’re not hungry.",
        "A talent show for pets that only you and your cat know about.",
        "A reality show that tracks the life of a houseplant.",
        "The undeniable bond formed over shared bad coffee.",
        "A game where you pretend to know what a fancy cheese is.",
        "The horror of accidentally liking an old post while stalking someone on social media.",
        "A dance style that combines awkwardness and enthusiasm.",
        "The complicated math involved in calculating how many snacks you can eat before dinner.",
        "The moment you realize you’ve become your parents.",
        "The mystical power of a cozy blanket on a cold day.",
        "The urge to eat dessert first because, well, why not?",
        "A journey through the lost art of writing letters.",
        "The magical experience of finding money in an old coat pocket.",
        "A person who takes their coffee as seriously as their life choices.",
        "A philosophy that dictates you should always have snacks available.",
        "The awkwardness of not knowing how to end a conversation.",
        "A secret society dedicated to the appreciation of naps.",
        "The art of making excuses for not working out.",
        "A conspiracy theory about where all the missing forks go.",
        "The excitement of seeing a double rainbow.",
        "The strange phenomenon of talking to inanimate objects for comfort.",
        "The overwhelming joy of a fresh box of donuts.",
        "The fine line between being a couch potato and a couch potato who can multitask.",
        "A personal mantra that involves eating cake for breakfast.",
        "The fear of finding a spider in your shoe.",
        "The complicated relationship with laundry: 'Just one more day!'",
        "The thrill of discovering a new favorite TV show.",
        "A state of mind where all your worries are gone, replaced by pizza.",
        "The secret to happiness: unlimited access to funny cat videos."
    
    ];

// Function to get and display a definition for the last word and read it aloud
function getDefinition() {
    const inputText = document.getElementById('wordInput').value.trim();
    
    if (inputText) {
        const words = inputText.split(" ");
        const lastWord = words[words.length - 1]; // Get the last word

        const randomIndex = Math.floor(Math.random() * definitions.length);
        const definition = definitions[randomIndex];
        
        const outputText = `${lastWord}: ${definition}`; // Use backticks here
        document.getElementById('definitionOutput').innerText = outputText;

        // Read the definition aloud
        readAloud(outputText);
    } else {
        const errorMessage = "Please enter a word or sentence.";
        document.getElementById('definitionOutput').innerText = errorMessage;
        readAloud(errorMessage);
    }
}


// Function to read text aloud using SpeechSynthesis
function readAloud(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// Event listener for button click
document.getElementById('getDefinitionBtn').addEventListener('click', getDefinition);

// Event listener for pressing "Enter" key
document.getElementById('wordInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getDefinition(); // Call the function when "Enter" is pressed
    }
});
