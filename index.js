// Express.js Intro - write your server here.
// Run it with: node index.js   (stop it with Ctrl + C)

// Part 1: create an express app, a GET /greet endpoint and app.listen(3000)

// Part 2: GET /greet/:name  and  GET /test (calls /greet/:name with fetch)

// Part 3: POST /action  ("joke" / "cat fact", otherwise 400 "body is malformed")


///PART I creat sn Express
const express = require("express");

const app=express();
const PORT = process.env.PORT||3000;

app.use(express.json());
app.get("/greet",(req,res)=>{
    const timestemp=new Date().toISOString();
    res.json({
        msg:`hi from get endpoint ${timestemp}`
    });

});


app.get("/greet/:name",(req,res)=>{
    const name= req.params.name;
    console.log(`i got name: ${name}`);
    res.json({

        msg:`got name: ${name}`
    });
});

app.get("/test", async (req, res) => {
    const name = "Bob";

    try {
        const response = await fetch(
            `http://localhost:${PORT}/greet/${name}`
        );

        const data = await response.json();

        if (response.ok && data.msg === `got name: ${name}`) {
            return res.json({ result: "ok" });
        }

        return res.json({ result: "fail" });

    } catch (error) {
        return res.json({ result: "fail" });
    }
});


//Part 3

 app.post("/action", async(req, res) => {

    const body = req.body;

    if(!body){
       return res.status(400).json({
        msg:"body is malformed"
       })
    }

    if (body.action!=="joke" && body.action!=="cat fact")
        {
       return res.status(400).json({
        msg:"body is malformed"
       })
    }

    if (Object.keys(body).length!==1) {
       return res.status(400).json({
        msg:"body is malformed"
       })
    }

    if (body.action ==="joke"){
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single&safe-mode");
        const data = await response.json();
        const upperJoke = data.joke.toUpperCase();
        return res.json({joke:upperJoke});
    }
     if (body.action ==="cat fact"){
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=11",{
            headers:{ "x-api-key":process.env.CAT_API_KEY}
        });
        const data = await response.json();
        return res.json({
            length:String(data.length)
        });
    }

});

app.listen(PORT,()=>{
    console.log(`The server running on port: ${PORT}`);
});