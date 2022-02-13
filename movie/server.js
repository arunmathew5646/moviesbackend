// const express = require('express');
// const cors = require('cors');
// const movies = require('./GET/movies');
// const genres = require('./GET/genres');
// const artists = require('./GET/artists');

// const app = express();
// app.use(cors());

// app.use(express.urlencoded({ extended: false }));

// app.use('/', movies);
// app.use('/', genres);
// app.use('/', artists);

// const port = process.env.PORT || 9000;

// app.listen(port, () => console.log(`All Movies Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));
// app.listen(port, () => console.log(`All Genres Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));
// app.listen(port, () => console.log(`All Artists Data in JSON format from Mongo DB ${9000}, http://localhost:${9000}`));


// const db = require("./app/models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
    
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Movie App')
})

app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`)
})

