

document.getElementById("button").addEventListener("click", runAPI);


function runAPI () {
    let userSearch = document.getElementById("input").value;
    fetch(`http://localhost:8000/api/${encodeURIComponent(userSearch)}`)
    .then(res => {
        if(!res.ok) {
            throw new Error("Network response was not ok")
        }
        return res.json()
    })
    .then(data => {
        let recipeImage = document.getElementById("recipeImage");
        let foodName = document.getElementById("foodName");
        console.log(foodName)
        recipeImage.src = data.image;
        foodName.innerText = data.name;
        listItems(data)
        listIngredients(data.filling);
        instructionsList(data.instructions)
    })
    .catch(err => {
        console.error('Error fetching data:', err)
    });
}
// function to display timing and portions 
function listItems(data) {
 let listItems = document.getElementById("listItems");
 listItems.innerText = "";

 const prepTime = document.createElement("li");
 prepTime.innerText = `Prep Time: ${data.prep}`;
 listItems.appendChild(prepTime);

 const totalTime = document.createElement("li")
 totalTime.innerText = `Total Time: ${data.total}`
 listItems.appendChild(totalTime)

 const servings = document.createElement("li");
 servings.innerText = `Servings: ${data.servings}`
 listItems.appendChild(servings);
}
// function to display ingredients

function listIngredients(ingredients) {
    let ingredientsItems = document.getElementById("ingredientsItems");
    ingredientsItems.innerText = "";

    ingredients.forEach(element => {
        const li = document.createElement("li");
        li.innerText = element;
        ingredientsItems.appendChild(li);
    });

}

// function for instructions

function instructionsList(instructions) {
    let instructionItems = document.getElementById("instructionsItems");
    instructionItems.innerText = "";

    instructions.forEach(element => {
        const li = document.createElement("li")
        li.innerText = element;
        instructionItems.appendChild(li)
    })
}
