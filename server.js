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
      
        "servings": "6",
        "ingredients":["1/3 cup butter", "1/3 cup chopped onion", "1/3 cup flour", "1/2 teaspoon salt", "1/4 teaspoon pepper",
            "step1  3/4 cups chicken broth", "1/2 cup milk", "2 1/2 cups shredded chicken", "2 cups frozen mixed vegetables"],

        "instructions": [" Step 1: Heat oven to 425°F. Prepare pie crusts as directed on box for Two-Crust Pie using 9-inch glass pie pan.",
            "Step 2: In 2-quart saucepan, melt butter over medium heat. Add onion; cook 2 minutes, stirring frequently, until tender. Stir in flour, salt and pepper until well blended. Gradually stir in broth and milk, cooking and stirring until bubbly and thickened.",
            "Step 3: Stir in chicken and mixed vegetables. Remove from heat. Spoon chicken mixture into crust-lined pan. Top with second crust; seal edge and flute. Cut slits in several places in top crust.",
            "Step 4: Bake 30 to 40 minutes or until crust is golden brown. During last 15 to 20 minutes of baking, cover crust edge with strips of foil to prevent excessive browning. Let stand 5 minutes before serving."
        ]
     },
      "vegetable stir fry": {
        "name": "Vegetable Stir Fry",
        "image": "https://playswellwithbutter.com/wp-content/uploads/2022/02/Beef-and-Vegetable-Stir-Fry-16.jpg",
        "prep": "15min",
        "total": "30min",
        "ingredients": ["Vegetable Oil", "Garlic", "Ginger", "Broccoli", "Carrots", "Bell Peppers", "Soy Sauce", "Cornstarch", "Rice"],
        "instructions": ["Step 1: In a bowl, mix together the soy sauce, sherry, brown sugar, cornstarch, sriracha, and ginger. Set aside. ",
             "Step 2: Heat the oil in a large skillet over medium-high heat. Add the onion and peppers, and stir, cooking for 2 to 3 minutes. Add the garlic and cook for 30 seconds to 1 minute more, stirring continuously. Add the zucchini and stir it around, cooking it for 2 minutes more. Add the baby corn and broccoli and cook for a couple of minutes, then, while the veggies are still firm, pour in the sauce.",
             "Step 3: Stir the veggies in the sauce, cooking for 1 to 2 minutes more, or until the sauce is very thick. If it needs to be a little saucier, pour in 1/4 to 1/2 cup hot water and splash in a little more soy sauce. Serve over noodles or rice, with a sprinkling of sesame seeds. Tips: Prep all the veggies and make the sauce up to 24 hours ahead of time. Keep in separate containers in the fridge."
            ]
      },
      "tater tot casserole": {
        "name": " Tater Tot Casserole",
        "image": "https://www.saltandlavender.com/wp-content/uploads/2022/03/tater-tot-casserole-1-720x1080.jpg",
        "prep": "10min",
        "total": "1 hour 10 min",
        "servings": "6",
        "ingredients": ["1 pound lean ground beef","1/2 medium onion chopped","3 cloves garlic minced","1 tablespoon Worcestershire sauce","1/2 teaspoon Italian seasoning","1 (10.5 ounce) can condensed cream of mushroom soup","1 (12 ounce) can corn drained","32 ounces frozen tater tots","2 cups shredded cheddar divided"],
           
        "instructions": ["Step 1: Preheat your oven to 375F and move the rack to the top third of the oven." ,
             "Step 2: Add the beef and onions to a skillet and cook over medium-high heat, stirring occasionally and breaking the beef up with your spoon, until it's browned and the onions have softened (about 7-8 minutes). If there's a lot of excess fat, spoon most of it out",
             "Step 3: Add the garlic, Worcestershire sauce, and Italian seasoning to the skillet and cook for about a minute.",
             "Step 4: Transfer ground beef mixture to the prepared baking dish and spread evenly. ",
             "Step 5: Top with cream of mushroom soup, followed by (12 ounce) can corn drained.",
             "Step 6: Finally, top with tater tots.",
             "Step 7: Bake for 35 to 40 minutes or until tater tots are golden brown and cheese is melted."
            ]
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

