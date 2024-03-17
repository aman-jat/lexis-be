const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const register = async (req, res) => {
  try {
    const { name, email, password: Password } = req.body;

    // Check if the user already exists
    const existingUser = await db.user.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        message: 'Email already exists. Please choose a different email.',
      });
    }

    // Validate password
    if (!/^[a-zA-Z0-9]{4,}$/.test(Password)) {
      return res.status(400).json({
        message:
          'Password must be at least 4 characters long and can contain numbers, lowercase letters, and uppercase letters.',
      });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const user = await db.user.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const sessionToken = jwt.sign(
      { userId: user.id },
      process.env.AUTH_SECRET_KEY,
      {
        expiresIn: '2h',
      }
    );
    await user.update({ sessionToken });
    const { password, ...rest } = user.toJSON();
    return res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({
      message: 'An unexpected error occurred while creating the user.',
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password: Password } = req.body;

    // Check if the user exists
    const user = await db.user.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(
      Password,
      user.toJSON().password
    );
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate JWT token
    const sessionToken = jwt.sign(
      { userId: user.id },
      process.env.AUTH_SECRET_KEY,
      {
        expiresIn: '2h',
      }
    );

    await user.update({ sessionToken });
    const { password, ...rest } = user.toJSON();
    return res.status(201).json(rest);
  } catch (error) {
    console.error('Error logging in:', error);
    return res
      .status(500)
      .json({ message: 'An unexpected error occurred while logging in.' });
  }
};

const logout = async (req, res) => {
  try {
    await req.user.update({ sessionToken: null });
    return res.status(200).json({ message: 'Logout successful.' });
  } catch (error) {
    console.error('Error logging out:', error);
    return res
      .status(500)
      .json({ message: 'An unexpected error occurred while logging out.' });
  }
};

const getUser = async (req, res) => {
  try {
    const { password, ...rest } = req.user.toJSON();
    return res.status(200).json(rest);
  } catch (error) {
    console.error('Error logging out:', error);
    return res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

module.exports = {
  login,
  register,
  logout,
  getUser,
};
