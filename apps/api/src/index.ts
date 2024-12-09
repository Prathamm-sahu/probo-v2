import express from "express"
import dotenv from "dotenv"
import { RedisManager } from "./RedisManager"
import db from "@repo/db/prismaClient"
import { CREATE_USER, ONRAMP, SELL_ORDER, USER_BALANCE ,MINT, STOCK_SYMBOL, BUY_ORDER ,CREATE_MARKET, RESETALL} from "./types/toEngine"
dotenv.config()

const PORT = process.env.PORT || 3005
const app = express()
app.use(express.json())


//user creation endpoint
app.post("/user/create/:userId", async (req, res) => {
  const userId = req.params.userId

  const response = await RedisManager.getInstance().sendAndAwait({
    type: CREATE_USER,
    data: {
      userId: userId
    }
  })
  res.json(response.payload)
})

//onRamped user balance

app.post("/onramp/inr", async (req, res) => {
  const { userId, amount } = req.body
  let num = Number(amount)

  const user = await db.user.findFirst({
    where: {
      id: userId
    }
  })

  if(!user) {
    res.json({
      msg: "User does not exist."
    })
    return;
  }

  const response = await RedisManager.getInstance().sendAndAwait({
    type: ONRAMP,
    data: {
      userId,
      amount: num
    }
  })

  await db.user.update({
    where: {
      id: userId
    },
    data: {
      availableInrBalance: user.availableInrBalance + amount
    }
  })
  res.json(response.payload)
})

//sell order endpoint 

app.post("/order/sell", async (req, res) => {
  const { userId, stockSymbol, quantity, price, stockType } = req.body
  const response = await RedisManager.getInstance().sendAndAwait({
    type: SELL_ORDER,
    data: {
      userId, 
      stockSymbol, 
      quantity, 
      price, 
      stockType
    }
  })
  res.json(response.payload)
})

//get user balance
app.get('/balance/inr/:userId', async (req, res) => {
  const userId = req.params.userId;
  const response = await RedisManager.getInstance().sendAndAwait({
    type: USER_BALANCE,
    data: {
      userId: userId
    }
  })

  res.json(response.payload)
})

app.get('/balance/stock/:userId', async (req, res) => {
  const userId = req.params.userId;
  const response = await RedisManager.getInstance().sendAndAwait({
    type: "STOCK_BALANCE",
    data: {
      userId
    }
  })
})

// get ORDERBOOK FOR A SPECIFIC STOCKSYMBOL
app.get('/orderbook/:stocksymbol', async(req,res)=>{
  const stockSymbol = req.params.stocksymbol;
  const response = await RedisManager.getInstance().sendAndAwait({
    type: STOCK_SYMBOL,
    data:{
      stockSymbol:stockSymbol
    }
  })
  res.json(response.payload)
})



//minting
app.post('/trade/mint', async (req, res) => {
  const { userId, stockSymbol, price } = req.body;

  const user = await db.user.findFirst({
    where: {
      id: userId
    }
  })

  if(!user) {
    res.json({
      msg: "User does not exist."
    })
    return;
  }

  const orderbook = db.orderBook.findFirst({
    where: {
      stockSymbol
    }
  })

  if(!orderbook) {
    res.json({
      msg: "Market doesn't exist"
    })
  }

  

  const response = await RedisManager.getInstance().sendAndAwait({
    type: MINT,
    data: {
      userId: userId,
      stockSymbol: stockSymbol,
      price: price
    }

  })
  res.json(response.payload)
})

app.post('/order/buy', async (req, res) => {
  const { userId, stockSymbol, quantity, price, stockType } = req.body
  const response = await RedisManager.getInstance().sendAndAwait({
    type: BUY_ORDER,
    data:{
      userId: userId,
      stockSymbol: stockSymbol,
      quantity,
      price ,
      stockType     
    }
  })

  res.json(response.payload)

})

//create new market

app.post('/create/market', async (req,res)=>{
  const { stockSymbol, name, description } = req.body

  await db.orderBook.create({
    data: {
      name,
      stockSymbol,
      description,
    }
  })

  const response = await RedisManager.getInstance().sendAndAwait({
    type: CREATE_MARKET,
    data:{
      stockSymbol: stockSymbol
    }
  })

  res.json(response.payload)
})

app.get("/markert", async (req, res) => {
  const { marketName } = req.body
  const response = await RedisManager.getInstance().sendAndAwait({
    type: "GET_MARKET",
    data: {
      marketName
    }
  })

  res.json(response.payload)
})

app.post("/reset", async (req, res) => {
  const response = await RedisManager.getInstance().sendAndAwait({
    type: RESETALL,
  })

  res.json(response)
})


app.listen(PORT, () => console.log(`server started on port: ${PORT}`))