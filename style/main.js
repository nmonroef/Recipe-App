document.getElementById("button").addEventListener("click", runAPI);

function runAPI() {
    let userSearch = document.getElementById("input").value;
    fetch(`http://localhost:8000/api/${encodeURIComponent(userSearch)}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then(data => {
            console.log("Received data:", data); // Log received data
            let recipeImage = document.getElementById("recipeImage");
            let foodName = document.getElementById("foodName");
            recipeImage.src = data.image;
            foodName.innerText = data.name;
            listItems(data);
            listIngredients(data.ingredients);
            instructionsList(data.instructions);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            let errorMesg = document.getElementById("errorMesg");
            errorMesg.innerText = "Recipe not found. Please try another search.";
            // Clear previous recipe details
            document.getElementById("recipeImage").src = "";
            document.getElementById("foodName").innerText = "";
            document.getElementById("listItems").innerText = "";
            document.getElementById("ingredientsItems").innerText = "";
            document.getElementById("instructionsItems").innerText = "";
        });
}

function listItems(data) {
    let listItems = document.getElementById("listItems");
    listItems.innerHTML = ""; // Clear previous content

    const prepTime = document.createElement("li");
    prepTime.innerText = `Prep Time: ${data.prep}`;
    listItems.appendChild(prepTime);

    const totalTime = document.createElement("li");
    totalTime.innerText = `Total Time: ${data.total}`;
    listItems.appendChild(totalTime);

    const servings = document.createElement("li");
    servings.innerText = `Servings: ${data.servings}`;
    listItems.appendChild(servings);
}

function listIngredients(ingredients) {
    let ingredientsItems = document.getElementById("ingredientsItems");
    ingredientsItems.innerHTML = ""; // Clear previous content

    ingredients.forEach(element => {
        const li = document.createElement("li");
        li.innerText = element;
        ingredientsItems.appendChild(li);
    });
}

function instructionsList(instructions) {
    let instructionItems = document.getElementById("instructionsItems");
    instructionItems.innerHTML = ""; // Clear previous content

    instructions.forEach(element => {
        const li = document.createElement("li");
        li.innerText = element;
        instructionItems.appendChild(li);
    });
}
