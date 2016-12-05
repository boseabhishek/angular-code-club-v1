var express = require('express');
var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/movies.json', function (req, res) {
  var movies = [
    {
      id: 1,
      title: 'X-Men: Apocalypse',
      synopsis: '',
      image: 'images/xmen-apocalypse.jpg',
      price: 3.99,
    },
    {
      id: 2,
      title: 'The Avengers',
      synopsis: '', image:
      'images/the-avengers.jpg',
      price: 7.99,
    },
    {
      id: 3,
      title: 'Fantastic Four',
      synopsis: '',
      image: 'images/fantastic-four.jpg',
      price: 5.99,
    },
    {
      id: 4,
      title: 'Batman vs. Superman',
      synopsis: '',
      image: 'images/batman-vs-superman.jpeg',
      price: 2.99,
    },
    {
      id: 5,
      title: 'Ant Man',
      synopsis: '',
      image: 'images/ant-man.jpg',
      price: 6.99,
    },
    {
      id: 6,
      title: 'Spider-Man',
      synopsis: '',
      image: 'images/the-amazing-spider-man.jpg',
      price: 6.99,
    },
  ];

  res.json(movies);
});

app.listen(3000);
