// import axios from 'axios'

// const handler = (req, res) => {
//   const url = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1,1027,5426'
//   const config = {
//       headers: {
//           "Accept": "application/json",
//           "Accept-Encoding": "deflate, gzip",
//           "X-CMC_PRO_API_KEY": "22f54fb3-e4fe-45ca-810e-e1e4a44e4727",
//       }
//   }
//   axios.get(url, config).then(response => {
//       // price = response.data.data.BTC.quote.USD.price
//       res.status(200).send(response.data.data)
//   })
// }

// export default handler