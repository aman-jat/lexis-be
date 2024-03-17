const db = require('../db');

const getAll = async (req, res) => {
  try {
    const { start = 0, end = 10 } = req.query;

    const startIndex = parseInt(start, 10);
    const endIndex = parseInt(end, 10);

    const movies = await db.movie.findAll({
      offset: startIndex,
      limit: endIndex - startIndex,
    });

    res.status(200).json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching movies.' });
  }
};

module.exports = {
  getAll,
};
