// Task 1: Set up folders and move your files
const express = require('express')
const app = express()

const techReviews ={  
  Tech: [
    {
      path: "/tech/0",
    productName: "XPhone 15 Pro",
    releaseDate: "2024-09-20",
    manufacturer: "XTech",
    price: "$999",
    reviewRating: 4.7,
    imageUrl: "https://example.com/xphone15pro.jpg"
  },
    {
      path: "/tech/1",
    productName: "GalaxyTab X2",
    releaseDate: "2024-08-15",
    manufacturer: "SamTech",
    price: "$799",
    reviewRating: 4.5,
    imageUrl: "https://example.com/galaxytabx2.jpg"
    },
    {
      path: "/tech/2",
    productName: "VisionGo AR Glasses",
    releaseDate: "2024-07-10",
    manufacturer: "NeoVision",
    price: "$1299",
    reviewRating: 4.8,
    imageUrl: "https://example.com/visiongo.jpg"
    },
    {
      path: "/tech/3",
    productName: "HyperBook X500",
    releaseDate: "2024-06-25",
    manufacturer: "Hypertron",
    price: "$1999",
    reviewRating: 4.6,
    imageUrl: "https://example.com/hyperbookx500.jpg"
    },
    {
      path: "/tech/4",
    productName: "SmartFit Band 6",
    releaseDate: "2024-05-18",
    manufacturer: "FitWare",
    price: "$199",
    reviewRating: 4.2,
    imageUrl: "https://example.com/smartfitband6.jpg"
    },
    {
      path: "/tech/5",
    productName: "QuantumBuds Pro",
    releaseDate: "2024-10-05",
    manufacturer: "SoundNova",
    price: "$249",
    reviewRating: 4.7,
    imageUrl: "https://example.com/quantumbudspro.jpg"
    },
    {
      path: "/tech/6",
    productName: "c",
    releaseDate: "2024-11-12",
    manufacturer: "GameSphere",
    price: "$599",
    reviewRating: 4.9,
    imageUrl: "https://example.com/gameboxultra2.jpg"
    },
    {
      path: "/tech/7",
    productName: "EcoCharge 50K Power Bank",
    releaseDate: "2024-08-30",
    manufacturer: "GreenVolt",
    price: "$149",
    reviewRating: 4.4,
    imageUrl: "https://example.com/ecocharge50k.jpg"
    },
    {
      path: "/tech/8",
    productName: "NanoDrone Air S3",
    releaseDate: "2024-12-01",
    manufacturer: "SkyGadget",
    price: "$899",
    reviewRating: 4.6,
    imageUrl: "https://example.com/nanodroneairs3.jpg"
    },
    {
      path: "/tech/9",
    productName: "CyberCam 8K Pro",
    releaseDate: "2024-07-22",
    manufacturer: "LensTech",
    price: "$1499",
    reviewRating: 4.8,
    imageUrl: "https://example.com/cybercam8kpro.jpg"
    }
  ]
}


// Task 1: Set the view engine to EJS. 
app.set("view engine", "ejs")



app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

// Task 1: Set up the static middleware
app.use(express.static(__dirname + "/public"))



// Task 2: Set up the route handler for / to send back the index.html file
app.get ("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html")
})

app.get ("/tech", (req, res) =>{
  res.render("overview.ejs", techReviews)
})

app.get ("/tech/:id", (req, res) =>{
 const id = parseInt(req.params.id)
 const review = techReviews[id]

 res.render("post.ejs", techReviews.Tech[id] )
})



app.listen(3000, () => {
  console.log("Server running")
})