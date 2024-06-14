let hunger = 100;
let happiness = 100;
let energy = 100;
let petType = 'dog';

// Function to update the progress bars
function updateAttributes() {
    document.getElementById('hunger').value = hunger;
    document.getElementById('happiness').value = happiness;
    document.getElementById('energy').value = energy;
}

// Function to change the pet type
function selectPet() {
    petType = document.getElementById('pet-select').value;
    updatePetImage('default');
}

// Function to feed the pet
function feedPet() {
    hunger = Math.min(hunger + 10, 100);
    updateAttributes();
    updatePetImage('feed');
}

// Function to play with the pet
function playWithPet() {
    happiness = Math.min(happiness + 10, 100);
    energy = Math.max(energy - 10, 0);
    updateAttributes();
    updatePetImage('play');
}

// Function to put the pet to sleep
function putPetToSleep() {
    energy = Math.min(energy + 20, 100);
    updateAttributes();
    updatePetImage('sleep');
}

// Function to gradually decrease the pet's attributes over time
function decreaseAttributes() {
    hunger = Math.max(hunger - 1, 0);
    happiness = Math.max(happiness - 1, 0);
    energy = Math.max(energy - 1, 0);
    updateAttributes();
}

// Function to update the pet's image based on its state and type
function updatePetImage(action) {
    const petImage = document.getElementById('pet-image');
    const petAssets = {
        dog: {
            feed: 'assets/dog being pet.gif',
            play: 'assets/dog playing.gif',
            sleep: 'assets/dog sleeping.gif',
            default: 'assets/dog being pet.gif'
        },
        cat: {
            feed: 'assets/cat eating.gif',
            play: 'assets/cat playing.gif',
            sleep: 'assets/cat sleeping.gif',
            default: 'assets/cat playing.gif'
        },
        rabbit: {
            feed: 'assets/rabbit.gif',
            play: 'assets/rabbit.gif',
            sleep: 'assets/rabbit.gif',
            default: 'assets/rabbit.gif'
        }
    };

    petImage.src = petAssets[petType][action];

    // Ensure the GIFs loop endlessly
    petImage.onload = () => {
        petImage.style.animation = 'none';
        petImage.offsetHeight; // Trigger reflow
        petImage.style.animation = null;
    };
}

// Set interval to decrease attributes every 5 seconds
setInterval(decreaseAttributes, 5000);

// Initialize the attributes and pet image on page load
document.addEventListener('DOMContentLoaded', () => {
    updateAttributes();
    updatePetImage('default');
});
