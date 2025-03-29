// const mongodb = require('../data/database');
// const { ObjectId } = require('mongodb');

// const getAllContacts = async (req, res) => {
//   try {
//     const result = await mongodb.getDatabase().collection('contacts').find(); // No necesitas db('Project1')
//     const data = await result.toArray();
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const getSingleContact = async (req, res) => {
//   try {
//     const contactId = new ObjectId(req.params.id);
//     const result = await mongodb.getDatabase().collection('contacts').findOne({ _id: contactId }); // No necesitas db('Project1')
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const createContact = async (req, res) => {
//   try {
//     const contact = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       favoriteColor: req.body.favoriteColor,
//       birthday: req.body.birthday
//     };

//     const response = await mongodb.getDatabase().collection('contacts').insertOne(contact);
//     if (response.acknowledged) {
//       res.status(201).json(response.insertedId);
//     } else {
//       res.status(500).json({ error: 'Some error occurred while creating the contact.' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const updateContact = async (req, res) => {
//   try {
//     const contactId = new ObjectId(req.params.id);
//     const contact = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       favoriteColor: req.body.favoriteColor,
//       birthday: req.body.birthday
//     };

//     const response = await mongodb.getDatabase().collection('contacts').replaceOne({ _id: contactId }, contact);
//     if (response.modifiedCount > 0) {
//       res.status(204).send(); // No Content
//     } else {
//       res.status(404).json({ error: 'Contact not found' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// const deleteContact = async (req, res) => {
//   try {
//     const contactId = new ObjectId(req.params.id);
//     const response = await mongodb.getDatabase().collection('contacts').deleteOne({ _id: contactId });
//     if (response.deletedCount > 0) {
//       res.status(200).send(); // OK
//     } else {
//       res.status(404).json({ error: 'Contact not found' });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   getAllContacts,
//   getSingleContact,
//   createContact,
//   updateContact,
//   deleteContact
// };
const Contact = require('../models/contact');

const getAllContacts = async (req, res) => {
  try {
    console.log('Fetching contacts...'); // Registro de depuración
    const contacts = await Contact.find();
    console.log('Contacts found:', contacts); // Registro de depuración
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:',err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact._id);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Some error occurred while creating the contact.' });
  }
};

const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};