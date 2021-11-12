function drawElement(tagName, containerName, tagClasses, type) {
    //declaration of variables
    let tag = tagName;
    let container = containerName;
    let tagClass = tagClasses;
    let elementType = type;

    //loop through class array
        tagClass.forEach(function(classItem) {
            console.log("logging item from class array - " + classItem);
        });

    //Generate element and assign to parent
        console.log("Creating new " + tag);
            let newDiv = document.createElement(tag);
        console.log("New " + tag + " successfully created");

        //assign ID to element
        console.log("Generating new " + tag + " ID");
            newDiv.id="newCard1";
        console.log("New " + tag + " ID successfully generated");

    //assign classes to element
        console.log("Getting documentID for container");
            let targetDiv = document.getElementById(container);
                targetDiv.appendChild(newDiv).className = "expandedCard cardShadow";

    //debug console logs
    console.log("New " + tag + " successfully placed inside of " + container);

}

let storage = window.localStorage;
window.localStorage.clear();


function writeStorage(storage) {
    console.log("Writing Local Storage...");
        //localStorage.setItem(val);
        //localStorage.getItem(val);
        //localStorage.removeItem(val);
        //localStorage.clear(val);

    //parsed input

    let arrayData0 = [
        {"column":0, "question":1, "description":"This card has a single description. Pretty nifty, huh?"},
        {"column":0, "question":2, "description":"This card has a single description. Pretty nifty, huh?"}]

    const treatedInput = JSON.stringify(arrayData0);
    storage.setItem("0", treatedInput);

    let parsedInput = JSON.parse(treatedInput);
    console.log("Here is the parsed input");
    console.log(parsedInput);

    for (const key in parsedInput) {
        console.log(`${key}: ${parsedInput[key].column} ${parsedInput[key].question} ${parsedInput[key].description} `);




    }

    //parsed input





    let arrayData1 = [
        {"Question":3, "Column":1, "description":"This card has a single description. Pretty nifty, huh?"},
        {"Question":4, "Column":0, "description":"This card has a single description. Pretty nifty, huh?"}]
    const treatedInput1 = JSON.stringify(arrayData1);
    storage.setItem("1", treatedInput1);

    let arrayData2 = [
        {"Question":5, "Column":2, "description":"This card has a single description. Pretty nifty, huh?"},
        {"Question":6, "Column":0, "description":"This card has a single description. Pretty nifty, huh?"}]
    const treatedInput2 = JSON.stringify(arrayData2);
    storage.setItem("2", treatedInput2);

    let arrayData3 = [
        {"Question":7, "Column":3, "description":"This card has a single description. Pretty nifty, huh?"},
        {"Question":8, "Column":0, "description":"This card has a single description. Pretty nifty, huh?"}]
    const treatedInput3 = JSON.stringify(arrayData3);
    storage.setItem("3", treatedInput3);

    console.log("Completed Writing Local Storage...");
}


function getStorage(storage) {
    //loop through class array
    console.log("Printing each variable from Local Storage...");

    for (let i = 0; i < storage.length; i++) {
        console.log(storage.getItem(i));
    }
}















function insertCard(storage, name, description){


}
document.getElementById("newCard").onclick=function(){
    //location.reload();
    let tagClasses = ["expandedCard", "cardShadow"];
    drawElement("div", "column0", tagClasses);
}
let tagClasses = ["expandedCard", "cardShadow"];

writeStorage(storage);
getStorage(storage);


let cardData = [{"Question":1, "Column":0, "description":"This card has a single description. Pretty nifty, huh?"}, {"Question":2, "Column":0, "description":"This card has a single description. Pretty nifty, huh?"}]
console.log(cardData[1].Question);