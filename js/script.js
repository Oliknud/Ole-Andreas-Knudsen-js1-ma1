const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
const cat = {complain: function() {
        console.log("Meow!");
    }
};

cat.complain();

// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.setAttribute("class", "subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");

for (p of paragraphs) {
    p.style.color = "red";
};

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function catName(list) {
    for(listName of list) {
        console.log(listName.name);
    }
};

catName(cats);

// Question 8
const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
    for(let cat of cats) {
        if(cat.age === undefined) {
            cat.age = "Unknown";
        }
        let newDiv = "<div>";
        newDiv += `<h5>Name: ${cat.name}</h5>`;
        newDiv += `<p>Age: ${cat.age}</p>`;
        newDiv += "</div>";
        catContainer.innerHTML += newDiv;
    }
}

createCats(cats);