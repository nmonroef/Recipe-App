console.log("Testing Node");


const express = require("express");
const path = require("path");
const PORT = 8000;
const app = express();




const recipe = {
     "chicken pot pie": {
        "name": "Chicken Pot Pie",
        "image": "https://mojo.generalmills.com/api/public/content/_XHjxLAiTEyvoW0PpTwakw_webp_base.webp?v=cdc0b2dd&t=e724eca7b3c24a8aaa6e089ed9e611fd",
        "prep": "25min",
        "total": "1Hr 5min",
        "ingredients": ["Butter","Onions","All-Purpose Flour","Salt and Pepper","Milk","Chicken Broth","Chicken","Frozen Mixed Veggies","Pie Crust"],
        "servings": "6",
        "filling":["1/3 cup butter", "1/3 cup chopped onion", "1/3 cup flour", "1/2 teaspoon salt", "1/4 teaspoon pepper",
            "step1  3/4 cups chicken broth", "1/2 cup milk", "2 1/2 cups shredded chicken", "2 cups frozen mixed vegetables"],

        "instructions": [" Step 1: Heat oven to 425°F. Prepare pie crusts as directed on box for Two-Crust Pie using 9-inch glass pie pan.",
            "Step 2: In 2-quart saucepan, melt butter over medium heat. Add onion; cook 2 minutes, stirring frequently, until tender. Stir in flour, salt and pepper until well blended. Gradually stir in broth and milk, cooking and stirring until bubbly and thickened.",
            "Step 3: Stir in chicken and mixed vegetables. Remove from heat. Spoon chicken mixture into crust-lined pan. Top with second crust; seal edge and flute. Cut slits in several places in top crust.",
            "Step 4: Bake 30 to 40 minutes or until crust is golden brown. During last 15 to 20 minutes of baking, cover crust edge with strips of foil to prevent excessive browning. Let stand 5 minutes before serving."
        ]
     },
      "vegetable stir fry": {
        "name": "Vegetable Stir Fry",
        "prepTime": "15min",
        "totalTime": "30min",
        "ingredients": ["Vegetable Oil", "Garlic", "Ginger", "Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Cornstarch", "Rice"]
      }
};
app.use('/images', express.static(path.join(__dirname, 'style', 'images')));
app.use(express.static(path.join(__dirname, "style",)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "style", "index.html"))
});

app.get("/api/:recipeName", (req, res)=> {
    const recipeName = req.params.recipeName.toLowerCase();
    if(recipe[recipeName]) {
        
        console.log(`Found recipe: ${recipeName}`);
        res.json(recipe[recipeName])
    }else {
        res.status(404).json({error: "recipe not found "})
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`the server is runing on port ${PORT}`)
});

