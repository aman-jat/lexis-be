'use strict';
const casual = require('casual');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const getRandomMovie = () => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    };

    const getRandomImageURL = () => {
      const width = 300; // Adjust as needed
      const height = 400; // Adjust as needed
      const randomImageID = Math.floor(Math.random() * 1000); // Generate a random image ID
      return `https://picsum.photos/id/${randomImageID}/${width}/${height}`;
    };

    const movieData = Array.from({ length: 500 }, (_, index) => {
      const { title, overview, release_date, genre, runtime } =
        getRandomMovie();
      return {
        id: index + 1,
        title,
        release_date,
        overview,
        poster_path: getRandomImageURL(),
        genre,
        runtime,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('Movies', movieData, {});

    console.log('Movies seeded successfully.');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {});
    console.log('Movies deleted successfully.');
  },
};
const movies = [
  {
    title: 'The Time Travelers',
    overview: 'A group of scientists accidentally travel back in time',
    release_date: '2025-01-10',
    poster_path: '/posters/timetravelers.jpg',
    genre: ['Sci-Fi', 'Adventure'],
    runtime: 120,
    id: 1,
  },
  {
    title: "A Cat's Tale",
    overview:
      'A pampered feline embarks on a journey of self-discovery after getting lost',
    release_date: '2024-12-21',
    poster_path: '/posters/acatstale.jpg',
    genre: ['Comedy', 'Family'],
    runtime: 90,
    id: 2,
  },
  {
    title: '3 Idiots',
    overview:
      'Two friends embark on a quest for a lost buddy. On this journey, they encounter a long-forgotten bet, a wedding they must crash, and a funeral that goes impossibly out of control.',
    release_date: '2009-12-25',
    poster_path: 'https://www.example.com/posters/3_idiots.jpg',
    genre: ['Comedy', 'Drama'],
    runtime: 170,
    id: 3,
  },
  {
    title: 'Andaz Apna Apna',
    overview:
      'Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal.',
    release_date: '1994-04-11',
    poster_path: 'https://www.example.com/posters/andaz_apna_apna.jpg',
    genre: ['Comedy', 'Family', 'Romance'],
    runtime: 160,
    id: 4,
  },
  {
    title: 'Lagaan: Once Upon a Time in India',
    overview:
      'The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.',
    release_date: '2001-06-15',
    poster_path: 'https://www.example.com/posters/lagaan.jpg',
    genre: ['Adventure', 'Drama', 'Musical'],
    runtime: 224,
    id: 5,
  },
  {
    title: 'Zindagi Na Milegi Dobara',
    overview:
      'Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.',
    release_date: '2011-07-15',
    poster_path: 'https://www.example.com/posters/zindagi_na_milegi_dobara.jpg',
    genre: ['Adventure', 'Comedy', 'Drama'],
    runtime: 155,
    id: 6,
  },
  {
    title: 'PK',
    overview:
      'An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.',
    release_date: '2014-12-19',
    poster_path: 'https://www.example.com/posters/pk.jpg',
    genre: ['Comedy', 'Drama', 'Fantasy'],
    runtime: 153,
    id: 7,
  },
  {
    title: 'Koi... Mil Gaya',
    overview:
      'A developmentally disabled young man tries to continue the work his scientist father did in communicating with extraterrestrials from outer space, which leads to something miraculous and wonderful.',
    release_date: '2003-08-08',
    poster_path: 'https://www.example.com/posters/koi_mil_gaya.jpg',
    genre: ['Drama', 'Fantasy', 'Romance'],
    runtime: 171,
    id: 8,
  },
  {
    title: 'Barfi!',
    overview:
      "Three young people learn that love can neither be defined nor contained by society's norms of normal and abnormal.",
    release_date: '2012-09-14',
    poster_path: 'https://www.example.com/posters/barfi.jpg',
    genre: ['Comedy', 'Drama', 'Romance'],
    runtime: 151,
    id: 9,
  },
  {
    title: 'City of Lights',
    overview: 'A love story set against the backdrop of a bustling metropolis',
    release_date: '2022-10-26',
    poster_path: '/posters/cityoflights.jpg',
    genre: ['Romance', 'Drama'],
    runtime: 95,
    id: 10,
  },
  {
    title: 'Dino Detectives',
    overview:
      'A group of curious kids solve prehistoric puzzles with their dinosaur companions',
    release_date: '2024-08-23',
    poster_path: '/posters/dinodetectives.jpg',
    genre: ['Adventure', 'Family', 'Comedy'],
    runtime: 85,
    id: 11,
  },
  {
    title: 'Space Farmers',
    overview: 'A family struggles to maintain their farm on a distant planet',
    release_date: '2022-04-07',
    poster_path: '/posters/spacefarmers.jpg',
    genre: ['Sci-Fi', 'Comedy', 'Drama'],
    runtime: 102,
    id: 12,
  },
  {
    title: 'The Haunted Mansion Musical',
    overview: 'A family inherits a spooky mansion filled with singing ghosts',
    release_date: '2023-10-27',
    poster_path: '/posters/hauntedmansionmusical.jpg',
    genre: ['Comedy', 'Musical', 'Family'],
    runtime: 115,
    id: 13,
  },
  {
    title: 'Robot Chef Showdown',
    overview:
      "A fierce competition to determine the galaxy's greatest robotic chef",
    release_date: '2024-02-09',
    poster_path: '/posters/robotchefshowdown.jpg',
    genre: ['Animation', 'Comedy', 'Adventure'],
    runtime: 88,
    id: 14,
  },
  {
    title: 'Underdog Uprising',
    overview:
      'A group of mistreated pets stage a hilarious rebellion against their owners',
    release_date: '2021-12-25',
    poster_path: '/posters/underdoguprising.jpg',
    genre: ['Comedy', 'Animation', 'Family'],
    runtime: 90,
    id: 15,
  },
  {
    title: 'The Lost City of Atlantis',
    overview:
      'A daring team of explorers searches for the sunken city of Atlantis',
    release_date: '2023-07-04',
    poster_path: '/posters/lostcityofatlantis.jpg',
    genre: ['Adventure', 'Action', 'Mystery'],
    runtime: 125,
    id: 16,
  },
  {
    title: "A Knight's Quest",
    overview: 'A young squire embarks on a quest to become a valiant knight',
    release_date: '2022-03-11',
    poster_path: '/posters/aknightsquest.jpg',
    genre: ['Fantasy', 'Adventure', 'Family'],
    runtime: 108,
    id: 17,
  },
  {
    title: 'Musical Monsters',
    overview:
      'Monsters with magical voices learn to overcome their differences through song',
    release_date: '2024-09-20',
    poster_path: '/posters/musicalmonsters.jpg',
    genre: ['Animation', 'Musical', 'Comedy'],
    runtime: 72,
    id: 18,
  },
  {
    title: 'Time Travel Trip-Up',
    overview: 'A time-traveling mishap leads to hilarious consequences',
    release_date: '2021-05-21',
    poster_path: '/posters/timetraveltripup.jpg',
    genre: ['Comedy', 'Sci-Fi', 'Adventure'],
    runtime: 97,
    id: 19,
  },
  {
    title: 'The Kung Fu Librarians',
    overview:
      'A team of bookish librarians use their martial arts skills to protect ancient knowledge',
    release_date: '2023-09-09',
    poster_path: '/posters/kungfulibrarians.jpg',
    genre: ['Action', 'Comedy', 'Adventure'],
    runtime: 112,
    id: 20,
  },
  {
    title: 'Galactic Gladiators',
    overview:
      'Elite warriors from across the cosmos clash in a spectacular arena',
    release_date: '2022-11-18',
    poster_path: '/posters/galacticgladiators.jpg',
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    runtime: 135,
    id: 21,
  },
  {
    title: 'The Culinary Challenge',
    overview:
      'Aspiring chefs compete for culinary glory in a high-pressure competition',
    release_date: '2024-04-12',
    poster_path: '/posters/culinarychallenge.jpg',
    genre: ['Comedy', 'Reality', 'Food'],
    runtime: 80,
    id: 22,
  },
  {
    title: 'The Secret of the Sphinx',
    overview:
      'A team of archaeologists unravels the ancient mysteries of the Sphinx',
    release_date: '2023-05-26',
    poster_path: '/posters/secretofthesphinx.jpg',
    genre: ['Adventure', 'Mystery', 'History'],
    runtime: 110,
    id: 23,
  },
  {
    title: 'Mecha Matchmakers',
    overview: 'Giant robots help lonely hearts find love in a futuristic world',
    release_date: '2021-08-13',
    poster_path: '/posters/mechamatchmakers.jpg',
    genre: ['Romance', 'Comedy', 'Sci-Fi'],
    runtime: 92,
    id: 24,
  },
  {
    title: 'The Great Pirate Race',
    overview:
      'A wacky crew of pirates compete in a zany race across the high seas',
    release_date: '2022-02-04',
    poster_path: '/posters/greatpiraterace.jpg',
    genre: ['Comedy', 'Adventure', 'Family'],
    runtime: 107,
    id: 25,
  },
  {
    title: 'Underdog Academy',
    overview:
      'Misunderstood pets train to become heroic companions at a special academy',
    release_date: '2024-10-25',
    poster_path: '/posters/underdogacademy.jpg',
    genre: ['Animation', 'Comedy', 'Family'],
    runtime: 78,
    id: 26,
  },
  {
    title: 'The Time Traveling Tourists',
    overview:
      'A group of tourists on a time travel vacation get stranded in the past',
    release_date: '2023-01-20',
    poster_path: '/posters/timetravelingtourists.jpg',
    genre: ['Comedy', 'Sci-Fi', 'Adventure'],
    runtime: 101,
    id: 27,
  },
  {
    title: 'Monster Mash Bash',
    overview:
      'Monsters throw a wild party that turns into a chaotic dance battle',
    release_date: '2021-06-18',
    poster_path: '/posters/monstermashbash.jpg',
    genre: ['Animation', 'Comedy', 'Musical'],
    runtime: 84,
    id: 28,
  },
  {
    title: 'The Superhero Academy',
    overview:
      'Teenagers with superpowers learn to control their abilities at a superhero school',
    release_date: '2024-07-19',
    poster_path: '/posters/superheroacademy.jpg',
    genre: ['Action', 'Adventure', 'Family'],
    runtime: 128,
    id: 29,
  },
  {
    title: "A Dog's Tale: Woof Around the World",
    overview: 'A curious dog travels the globe with his adventurous owner',
    release_date: '2022-09-23',
    poster_path: '/posters/adogswooftale.jpg',
    genre: ['Comedy', 'Adventure', 'Family'],
    runtime: 99,
    id: 30,
  },
  {
    title: 'Dilwale Dulhania Le Jayenge Again! (DDLJ Again!)',
    overview:
      "Raj and Simran's iconic love story gets a modern twist in this sequel.",
    release_date: '2025-12-18',
    poster_path: '/posters/ddljagain.jpg',
    genre: ['Romance', 'Comedy', 'Drama'],
    runtime: 150,
    id: 31,
  },
  {
    title: 'Dhoom 4: The International Chase',
    overview:
      'Jai and Ali chase a cunning international thief across exotic locations.',
    release_date: '2024-11-08',
    poster_path: '/posters/dhoom4.jpg',
    genre: ['Action', 'Thriller', 'Comedy'],
    runtime: 145,
    id: 32,
  },
  {
    title: 'Mughal-e-Disco: A Time Traveling Shaadi (Wedding)',
    overview:
      'A modern-day man travels back to the Mughal era and falls in love.',
    release_date: '2024-05-24',
    poster_path: '/posters/mughaledisco.jpg',
    genre: ['Comedy', 'Fantasy', 'Romance'],
    runtime: 130,
    id: 33,
  },
  {
    title: 'Andaz Apna Apna 2: Shuruat Phir Se (The Beginning Anew)',
    overview:
      'Amar and Prem return with their hilarious antics in a new generation.',
    release_date: '2023-09-15',
    poster_date: '/posters/andazapnaapna2.jpg',
    genre: ['Comedy', 'Romance', 'Family'],
    runtime: 120,
    id: 34,
  },
  {
    title: 'Lakhan (Remake): Ek Yodha Ki Kahani (The Story of a Warrior)',
    overview: 'A reimagining of the classic revenge drama with a modern touch.',
    release_date: '2024-02-16',
    poster_path: '/posters/lakhanremake.jpg',
    genre: ['Action', 'Drama', 'Thriller'],
    runtime: 165,
    id: 35,
  },
  {
    title: "Queen 2: Rani Ka Rajya (The Queen's Reign)",
    overview: `Rani inspires other women to embrace independence in her new role as a leader."`,
    release_date: '2023-04-21',
    poster_path: '/posters/queen2.jpg',
    genre: ['Comedy', 'Drama', 'Social'],
    runtime: 118,
    id: 36,
  },
  {
    title: 'PK 2: Aliens on Earth Again',
    overview: `PK returns to Earth, encountering new societal challenges and complexities.`,
    release_date: '2022-12-07',
    poster_path: '/posters/pk2.jpg',
    genre: ['Comedy', 'Sci-Fi', 'Social'],
    runtime: 140,
    id: 37,
  },
  {
    title: 'Kuch Kuch Hota Hai... 20 Years Later',
    overview:
      'Rahul, Anjali, and Tina reunite, exploring their lives and relationships 20 years on.',
    release_date: '2024-08-30',
    poster_path: '/posters/kkhh20years.jpg',
    genre: ['Romance', 'Drama', 'Musical'],
    runtime: 180,
    id: 38,
  },
];
