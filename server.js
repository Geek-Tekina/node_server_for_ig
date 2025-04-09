import express from "express";

const app = express();
const port = 3000;

const values = {};
app.get('/', (req, res) => {
//   res.send('Welcome to my server!');


  res.json(
    {
        "access_token": values[access_token],
        "token_type": values[token_type],
        "expires_in": values[expires_in]
      }
  );
});

app.post('/insta', (req, res) => {
    const {access_token, token_type, expires_in} = req.query;
    values[access_token] = access_token;
    values[token_type] = token_type;
    values[expires_in] = expires_in;
    console.log("Post ")
    res.send("Access tokens saved.")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});