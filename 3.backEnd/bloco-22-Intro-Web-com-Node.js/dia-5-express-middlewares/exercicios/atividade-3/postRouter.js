const express = require("express");
const router = express.router();

//const router = require('express').Router(); // assim no GABARITO

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

router.get('/', function (req, res) {
  return res.status(200).json({ posts });
});

router.get('/:id', function (req, res) {
    const { id } = req.params;
    const post = posts.find(el => el.id === parseInt(id)); 
    
    if (!post) 
    // return res.status(404).json({ message: 'post not found' });
    return next({ statusCode: 404, message: 'post not found' }); // assim é o gabarito, porque tem o next aqui?

    return res.status(200).json(post)
});

module.exports = router;