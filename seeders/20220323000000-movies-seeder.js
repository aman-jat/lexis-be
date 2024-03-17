'use strict';

const casual = require('casual');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const randomDate = (start, end) =>
      new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );

    const randomRuntime = () =>
      Math.floor(Math.random() * (180 * 60 * 1000)) + 60 * 60 * 1000; // Between 60 and 240 minutes

    const randomGenre = () => {
      const genres = [
        'Comedy',
        'Horror',
        'Action',
        'Drama',
        'Thriller',
        'Adventure',
        'Science Fiction',
        'Fantasy',
        'Animation',
        'Romance',
        'Crime',
        'Mystery',
      ];
      return genres[Math.floor(Math.random() * genres.length)];
    };

    const movieData = Array.from({ length: 5000 }, (_, index) => ({
      id: index + 501,
      title: casual.title,
      release_date: randomDate(new Date(1970, 0, 1), new Date()),
      overview: casual.description,
      poster_path: casual.url,
      genre: randomGenre(),
      runtime: randomRuntime(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Movies', movieData, {});

    console.log('Movies seeded successfully.');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {});
    console.log('Movies deleted successfully.');
  },
};
