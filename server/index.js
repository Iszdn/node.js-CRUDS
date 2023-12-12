import express from 'express'
const app = express()
const port = 3000
app.use(express.json())
let arr=[
    {
    "id": 2,
    "description": "Sweet and savory sauces relishes spreads and seasonings",
    "name": "Condiments"
    },
    {
    "id": 1,
    "description": "Soft drinks coffees teas beers and ales",
    "name": "Beverages"
    },
    {
    "id": 3,
    "description": "Desserts candies and sweet breads",
    "name": "Confections"
    },
    {
    "id": 4,
    "description": "Cheeses",
    "name": "Dairy Products"
    },
    {
    "id": 5,
    "description": "Breads crackers pasta and cereal",
    "name": "Grains/Cereals"
    },
    {
    "id": 6,
    "description": "Prepared meats",
    "name": "Meat/Poultry"
    },
    {
    "id": 7,
    "description": "Dried fruit and bean curd",
    "name": "Produce"
    },
    {
    "id": 8,
    "description": "Seaweed and fish",
    "name": "Seafood"
    }
    ]
let counter=9
app.get('/', (req, res) => {
  res.send(arr)
})
app.get('/:id', (req, res) => {
    const {id}=req.params
    const index=arr.find(x=>x.id===+id)
    res.send(index)
  })
app.post('/', (req, res) => {

arr.push({id:counter++,...req.body})
res.send(arr)
  })

  app.put('/:id', (req, res) => {
    const {id}=req.params
    const index=arr.findIndex(x=>x.id===+id)
    arr[index]={id:+id,...req.body}
    res.send(arr)
  })

  app.delete('/:id', (req, res) => {

const {id}=req.params
 arr=arr.filter(x=>x.id!==+id)
res.send(arr)
    
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


