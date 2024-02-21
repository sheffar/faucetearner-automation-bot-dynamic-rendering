const express = require("express")
const { mineLogic } = require("./mineLogic")

const app = express()

const PORT = process.env.PORT || 4000

app.get("/", (req,res) => {
  console.log('Ping');
  const { uname, pswd } = req.query;
  res.send('Intialising bot for uname:' + uname + ' pswd:' + pswd)
  mineLogic(res,uname,pswd);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  // mineLogic(null,'kayks','kayks1234');
})
