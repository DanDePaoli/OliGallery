var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'oligallery'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to DB')
  }
});

module.exports = connection;