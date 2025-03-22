const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
  try {
    const result = await mongodb.getDatabase().collection('contacts').find(); // No necesitas db('Project1')
    const data = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingleContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().collection('contacts').findOne({ _id: contactId }); // No necesitas db('Project1')
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact
};