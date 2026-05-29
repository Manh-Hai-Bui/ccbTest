import express from 'express';
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));
app.use(express.json());
app.set('view engine', 'ejs');

/*app.get('/', (req, res) => {
    res.sendFile('index.html');
});*/

app.listen(PORT, () => console.log(`App started on Port ${PORT}`));

const client_id = "gsjj6f8warvn7lh8ju5c75wn";
const client_secret = "4hYqZRtfUSY7MAMtPVHdPp2B";
const account_id = "536006807";
const authEndPoint = "https://mcylpcb164lqpr204f900f3vyw-m.auth.marketingcloudapis.com";
const bookAPIUrl = 'https://mcylpcb164lqpr204f900f3vyw-m.pub.sfmc-content.com/omdx5y2sbpo';

app.post('/getBookCover', async (req, res) => {
  try {
    const { isbn } = req.body; // Get ISBN from POST body (not query params)

    if (!isbn) {
      return res.status(400).json({ error: 'ISBN is required' });
    }

    // --- TOKEN API Call ---
    const tokenRequestHeader = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "grant_type": "client_credentials",
            "client_id": client_id,
            "client_secret": client_secret,
            "account_id": account_id
        }) 
    }

    const tokenRequestUrl = authEndPoint + '/v2/token';
    const tokenResponse = await fetch(tokenRequestUrl, tokenRequestHeader);
    const tokenJSON = await tokenResponse.json();
    const token = tokenJSON.access_token;

    // --- BOOK COVER API Call ---

    // Using URLSearchParams for form-urlencoded data
    const params = new URLSearchParams();
    params.append('token', token);
    params.append('isbn', isbn);

    const bookAPIHeader = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: params
    }
    
    const bookAPIResponse = await fetch(bookAPIUrl, bookAPIHeader);
    const dataText = await bookAPIResponse.text();
    const data = JSON.parse(dataText);

    res.json(data);

  } catch (error) {
    res.status(500).json({ error: 'Server error' + error });
  }

});