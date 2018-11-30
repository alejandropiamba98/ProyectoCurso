const express = require('express'); 
const router = express.Router(); 
const usersController = require('../controllers/usersController'); 

router.get('/',usersController.index); 
router.get('/login', usersController.index); 
router.post('/login', usersController.login); 
router.get('/home/dashboard', usersController.dashboard); 
router.get('/signup', usersController.signup); 
router.post('/signup', usersController.signup); 
router.get('/logout', usersController.logout);

//update

router.get('/usersup', usersController.list);

router.post('/users/update', usersController.update);
router.get('/users/delete/:id_news', usersController.delete);

router.get('/users/redir/:id', usersController.redir)

module.exports= router;