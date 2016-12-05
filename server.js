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
      image: 'http://178.62.0.124/images/x-men-apocalypse.jpg',
      price: 3.99,
    },
    {
      id: 2,
      title: 'The Avengers',
      synopsis: '', image:
      'the-avengers.jpg',
      price: 7.99,
    },
    {
      id: 3,
      title: 'Fantastic Four',
      synopsis: '',
      image: 'http://178.62.0.124/images/fantastic-four.jpg',
      price: 5.99,
    },
    {
      id: 4,
      title: 'Batman v Superman: Dawn of Justice',
      synopsis: '',
      image: 'http://178.62.0.124/images/batman-v-superman-dawn-of-justice.jpg',
      price: 2.99,
    },
    {
      id: 5,
      title: 'Ant Man',
      synopsis: '',
      image: 'http://178.62.0.124/images/ant-man.jpg',
      price: 6.99,
    },
    {
      id: 6,
      title: 'The Amazing Spider-Man 2',
      synopsis: '',
      image: 'http://178.62.0.124/images/the-amazing-spider-man-2.jpg',
      price: 6.99,
    },
  ];

  res.json(movies);
});

app.listen(3000);
