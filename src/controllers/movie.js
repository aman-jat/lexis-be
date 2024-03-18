const db = require('../db');
const { Op } = require('sequelize');

const getAll = async (req, res) => {
  try {
    const { query, start = 0, end = 10 } = req.query;
    const startIndex = parseInt(start, 10);
    const endIndex = parseInt(end, 10);

    let whereCondition = {};

    if (query) {
      whereCondition = {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } }, // Search by title
          { overview: { [Op.iLike]: `%${query}%` } }, // Search by overview
        ],
      };
    }

    const movies = await db.movie.findAll({
      where: whereCondition,
      offset: startIndex,
      limit: endIndex - startIndex,
    });

    res.status(200).json(movies);
  } catch (error) {
    console.error('Error searching movies:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while searching movies.' });
  }
};

module.exports = {
  getAll,
};
