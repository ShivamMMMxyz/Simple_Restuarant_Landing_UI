document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let food = document.getElementById("food").value;
    let quantity = document.getElementById("quantity").value;

    if(name && phone && food && quantity > 0) {
        document.getElementById("orderMessage").style.color = "lightgreen";
        document.getElementById("orderMessage").innerText = `Thank you ${name}, your order for ${quantity} ${food} has been placed!`;
        document.getElementById("orderForm").reset();
    } else {
        document.getElementById("orderMessage").style.color = "red";
        document.getElementById("orderMessage").innerText = "Please fill all fields correctly.";
    }
});
