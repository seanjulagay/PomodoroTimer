productivityTypesCounter = 0;
productivityTypes = [
    "Work Time!",
    "Short Break Time!",
    "Long Break Time!"
]

const timeToggleLeftButton = document.querySelector("#time-toggle-bar-left-button");
const timeToggleRightButton = document.querySelector("#time-toggle-bar-right-button");
const timeToggleText = document.querySelector(".time-toggle-text");

timeToggleLeftButton.addEventListener("click", function() {
    changeProductivityType("left");
});

timeToggleRightButton.addEventListener("click", function() {
    changeProductivityType("right");
});

function changeProductivityType(type) {
    if(type == "left") {
        productivityTypesCounter--;
    } else if(type == "right") {
        productivityTypesCounter++;
    }

    console.log(productivityTypesCounter);

    if(productivityTypesCounter == productivityTypes.length) {
        productivityTypesCounter = 0;
    } else if(productivityTypesCounter < 0) {
        productivityTypesCounter = (productivityTypes.length - 1);
    }
    timeToggleText.innerHTML = productivityTypes[productivityTypesCounter];
}