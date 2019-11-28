const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
  // kita get dahulu headernya
  const authHeader = req.headers['authorization']

  // lalu kita ambil tokenya dengan cara melakukan split bearer dan token, lalu kita ambil tokennya di index ke 1, 
  // lalu kita perlu pengkondisian, jika headernya tidak ada kita akan mengembalikan null dan  menginformasikan bahwa permintaan Unauthorized
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null){
      res.status(401).send({"message": "Unauthorized"})
  }

  // Lalu jika terdapat header kita juga perlu memastikan apakah token yang kita dapatkan valid
  // untuk ini kita dapat menggunakan jwt.verify, lalu kita menggunakan collback untuk memberikan informasi ke user
  jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, user) => {
      if(err){
          return res.status(403).send({"message": "Your Token No Longer Valid"})
      }
      next()
  })
}