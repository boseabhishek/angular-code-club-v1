var express = require('express');
var app = express();

app.use(express.static('public'));

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
      synopsis: 'After the re-emergence of the world\'s first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.',
      image: 'http://178.62.0.124/images/x-men-apocalypse.jpg',
      price: 3.99,
    },
    {
      id: 2,
      title: 'The Avengers',
      synopsis: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
      image: 'http://178.62.0.124/images/the-avengers.jpg',
      price: 7.99,
    },
    {
      id: 3,
      title: 'Fantastic Four',
      synopsis: 'Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.',
      image: 'http://178.62.0.124/images/fantastic-four.jpg',
      price: 5.99,
    },
    {
      id: 4,
      title: 'Batman v Superman: Dawn of Justice',
      synopsis: 'Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.',
      image: 'http://178.62.0.124/images/batman-v-superman-dawn-of-justice.jpg',
      price: 2.99,
    },
    {
      id: 5,
      title: 'Ant Man',
      synopsis: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
      image: 'http://178.62.0.124/images/ant-man.jpg',
      price: 6.99,
    },
    {
      id: 6,
      title: 'The Amazing Spider-Man 2',
      synopsis: 'When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.',
      image: 'http://178.62.0.124/images/the-amazing-spider-man-2.jpg',
      price: 6.99,
    },
  ];

  res.json(movies);
});

app.listen(3000);
