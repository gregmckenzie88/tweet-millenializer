# tweet-millenializer

To initialize, add a file in the root folder called config.js

Paste the following into the file.  

```
module.exports = {
  consumer_key:         'YOUR_KEY',
  consumer_secret:      'YOUR_SECRET',
  access_token:         'YOUR_TOKEN',
  access_token_secret:  'YOUR_TOKEN_SECRET',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
}
```

Fill in the blanks with the credentilas you get from https://apps.twitter.com/

Start the server in the command line with 'node server'.

