// const express = require('express');
// const router = express.Router();

// const contactsController = require('../controllers/contacts');

// // router.get('/', contactsController.getAllContacts);
// // router.get('/:id', contactsController.getSingleContact);
// // router.post('/', contactsController.createContact);
// // router.put('/:id', contactsController.updateContact);
// // router.delete('/:id', contactsController.deleteContact);

// // module.exports = router;
// /**
//  * @swagger
//  * /contacts:
//  * get:
//  * summary: Obtiene todos los contactos
//  * responses:
//  * 200:
//  * description: Lista de contactos
//  * content:
//  * application/json:
//  * schema:
//  * type: array
//  * items:
//  * type: object
//  * properties:
//  * _id:
//  * type: string
//  * firstName:
//  * type: string
//  * lastName:
//  * type: string
//  * email:
//  * type: string
//  * favoriteColor:
//  * type: string
//  * birthday:
//  * type: string
//  */
// router.get('/', contactsController.getAllContacts);

// /**
//  * @swagger
//  * /contacts/{id}:
//  * get:
//  * summary: Obtiene un contacto por ID
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * description: ID del contacto a obtener
//  * schema:
//  * type: string
//  * responses:
//  * 200:
//  * description: Contacto encontrado
//  * content:
//  * application/json:
//  * schema:
//  * type: object
//  * properties:
//  * _id:
//  * type: string
//  * firstName:
//  * type: string
//  * lastName:
//  * type: string
//  * email:
//  * type: string
//  * favoriteColor:
//  * type: string
//  * birthday:
//  * type: string
//  * 404:
//  * description: Contacto no encontrado
//  */
// router.get('/:id', contactsController.getSingleContact);

// /**
//  * @swagger
//  * /contacts:
//  * post:
//  * summary: Crea un nuevo contacto
//  * requestBody:
//  * required: true
//  * content:
//  * application/json:
//  * schema:
//  * type: object
//  * properties:
//  * firstName:
//  * type: string
//  * lastName:
//  * type: string
//  * email:
//  * type: string
//  * favoriteColor:
//  * type: string
//  * birthday:
//  * type: string
//  * responses:
//  * 201:
//  * description: ID del nuevo contacto creado
//  * content:
//  * application/json:
//  * schema:
//  * type: string
//  */
// router.post('/', contactsController.createContact);

// /**
//  * @swagger
//  * /contacts/{id}:
//  * put:
//  * summary: Actualiza un contacto por ID
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * description: ID del contacto a actualizar
//  * schema:
//  * type: string
//  * requestBody:
//  * required: true
//  * content:
//  * application/json:
//  * schema:
//  * type: object
//  * properties:
//  * firstName:
//  * type: string
//  * lastName:
//  * type: string
//  * email:
//  * type: string
//  * favoriteColor:
//  * type: string
//  * birthday:
//  * type: string
//  * responses:
//  * 204:
//  * description: Contacto actualizado correctamente
//  * 404:
//  * description: Contacto no encontrado
//  */
// router.put('/:id', contactsController.updateContact);

// /**
//  * @swagger
//  * /contacts/{id}:
//  * delete:
//  * summary: Elimina un contacto por ID
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * description: ID del contacto a eliminar
//  * schema:
//  * type: string
//  * responses:
//  * 200:
//  * description: Contacto eliminado correctamente
//  * 404:
//  * description: Contacto no encontrado
//  */
// router.delete('/:id', contactsController.deleteContact);

// module.exports = router;
const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

/**
 * @swagger
 * /contacts:
 *   get:
 *     tags:
 *       - Contacts
 *     summary: Obtiene todos los contactos
 *     description: Devuelve una lista de todos los contactos almacenados.
 *     responses:
 *       200:
 *         description: Lista de contactos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *                   favoriteColor:
 *                     type: string
 *                   birthday:
 *                     type: string
 */
router.get('/', contactsController.getAllContacts);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     tags:
 *       - Contacts
 *     summary: Obtiene un contacto por ID
 *     description: Devuelve los detalles de un contacto específico.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contacto a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contacto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 favoriteColor:
 *                   type: string
 *                 birthday:
 *                   type: string
 *       404:
 *         description: Contacto no encontrado
 */
router.get('/:id', contactsController.getSingleContact);

/**
 * @swagger
 * /contacts:
 *   post:
 *     tags:
 *       - Contacts
 *     summary: Crea un nuevo contacto
 *     description: Crea un nuevo contacto con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       201:
 *         description: ID del nuevo contacto creado
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.post('/', contactsController.createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     tags:
 *       - Contacts
 *     summary: Actualiza un contacto por ID
 *     description: Actualiza los datos de un contacto existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contacto a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       204:
 *         description: Contacto actualizado correctamente
 *       404:
 *         description: Contacto no encontrado
 */
router.put('/:id', contactsController.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     tags:
 *       - Contacts
 *     summary: Elimina un contacto por ID
 *     description: Elimina un contacto existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del contacto a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contacto eliminado correctamente
 *       404:
 *         description: Contacto no encontrado
 */
router.delete('/:id', contactsController.deleteContact);

module.exports = router;