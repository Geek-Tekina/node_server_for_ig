import express from "express";
import NodeCache from "node-cache";

const app = express();
const port = 3000;

const myCache = new NodeCache({ stdTTL: 3600 }); // 1 hour TTL

app.get('/', (req, res) => {
  console.log("Server is live !!");
  res.send("Success");
});

app.get('/insta', (req, res) => {
  const { code } = req.query;

//   console.log("Query values >>>>>>>>", access_token, token_type, expires_in);

  myCache.set("access_token", code);
  res.redirect(`myinstagramapp://auth?code=${code}`);

//   myCache.set("token_type", token_type);
//   myCache.set("expires_in", expires_in);

  console.log("Tokens saved to cache");
  res.send("Access tokens saved.");
});

app.get('/getTokens', (req, res) => {
  console.log("Get tokens API hit >>");

  res.json({
    access_token: myCache.get("access_token"),
    // token_type: myCache.get("token_type"),
    // expires_in: myCache.get("expires_in"),
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
