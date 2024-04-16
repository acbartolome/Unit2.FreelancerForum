// create an array of objects that contains the freelancers

const freelancerToAdd = [
    {name: "Alice", occupation: "writer", price: 30},
    {name: "Bob", occupation: "teacher", price: 50},
    {name: "Carol", occupation: "programmer", price: 70},
    {name: "Jane", occupation: "professor", price: 80},
    {name: "Tim", occupation: "mechanic", price: 60},
    {name: "Irene", occupation: "musician", price: 70},
    {name: "Jake", occupation: "barista", price: 25},
    {name: "Sam", occupation: "actor", price: 70},
    {name: "Grant", occupation: "developer", price: 100},
    {name: "Sabrina", occupation: "animator", price: 90}
]


// setting an interval for the data to appear
const addFreelancersInterval = setInterval(() => addFreelancers(freelancerToAdd), 1000)


// create a function to add new freelancers to the list
function addFreelancers(freelancerToAdd) {
    if (freelancerToAdd.length) {
        const table = document.querySelector("table");
        const newFreelancers = freelancerToAdd.shift()
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${newFreelancers.name}</td><td>${newFreelancers.occupation}</td><td class = "price">$${newFreelancers.price}</td>`;
        table.append(newRow);
        averageTotalPrice()
    }
}

// average price
function averageTotalPrice() {
    const span = document.querySelector("span");
    const grabPrice = document.querySelectorAll(".price");
    console.log(grabPrice)
    let totalSum = 0;
    for (const el of grabPrice) {
        totalSum += +el.textContent.split("$")[1];
    }
    const averageTotalSum = totalSum / grabPrice.length;
    span.textContent = averageTotalSum;
    return averageTotalSum;
}
