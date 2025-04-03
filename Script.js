function pickRandomItem() {
    let items = [
        "Ghost Hunter AU", "Vampire AU", "Surgeon AU", "Everyone Dies AU", "Everyone Lives AU", 
        "Book Shop AU", "Surfer AU", "Magic AU", "Dystopia AU", "Powers/Superhero AU", 
        "Coffee Shop AU", "Amnesia AU", "Mafia AU", "Secret identity AU", "Soul Mates AU", 
        "Doomed Love AU", "Post-Apocalyptic AU", "Haunted Memories AU", "Trapped in Time AU", 
        "Lost Soul AU", "Betrayal AU", "Last Stand AU", "Shape Shifter AU", "Casino AU", 
        "Military AU", "Game Show AU", "Beauty and the Beast AU", "Hospital AU", "Western AU", 
        "Police AU", "Politician AU", "Singer AU", "Witch/Wizard AU", "Virtual Reality AU", 
        "FireFighter AU", "Candy/Sweet Shop AU", "Vet AU", "Fae AU", "Academia AU", 
        "Scientists AU", "1960s AU", "Lawyers AU", "Pianist AU", "College/University AU", 
        "Amusement Park AU", "Rome AU", "Royalty AU", "Skating AU", "1980s AU", "Pirate AU", 
        "Priest AU", "Secret Garden AU", "Cinderella AU", "Time Traveler AU", "Victorian AU", 
        "Small Town AU", "Library AU", "Countryside AU", "Med School AU", "Affair AU", 
        "Modern AU", "Siren AU", "Midwife AU", "Sleeping Beauty AU", "Werewolf AU", 
        "Movie Star AU", "Hollywood AU", "Dracula AU", "1920s AU", "Journalist AU", 
        "Radio Host AU", "Bar/Pub Owner AU", "Serial Killer AU", "FBI AU", "Mermaid AU", 
        "Dark Timeline AU", "Motel AU", "Angels And Demons AU", "Ancient Greek AU", 
        "Gods and Goddesses AU", "Crimes & Criminals AU", "Hairdresser AU", "Explorer AU", 
        "Waitress or Waiter AU", "Dinosaurs AU", "Vampire Slayer AU", "Fallout (Video Game) Setting AU", 
        "Noir AU", "Zombies AU", "Cruise Ship AU", "British Soap AU", "Arranged Marriage AU", 
        "Gothic Horror AU", "Model AU", "British Gangsters AU", "Elizabethan Era AU", 
        "World War II AU", "Ballet AU", "World War I AU", "Pirate AU", "Bed & Breakfast AU", 
        "Bakery AU", "Record Store AU", "Ancient Egyptian AU", "Band AU", "Comedy Club AU", 
        "Artist AU", "Titanic AU", "Solarpunk Heist AU", "Mythological Mafia AU", 
        "Dystopian Fairy Tale AU", "Burlesque Club AU", "Alien Invasion AU", "Cyberpunk AU", 
        "Industrial Revolution AU", "1940s AU", "Hunger Games Setting AU"
    ];
    let randomIndex = Math.floor(Math.random() * items.length);
    const screen = document.getElementById("result");
    
    // Simulate TV flicker effect
    screen.style.opacity = "0";
    setTimeout(() => {
        screen.innerText = "Your Prompt: " + items[randomIndex];
        screen.style.opacity = "1";
    }, 200);
      }
