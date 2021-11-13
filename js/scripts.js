

function drawElement(cardId, tagName, containerName, tagClasses) {
    //declaration of variables
    let id = cardId;
    let tag = tagName;
    let container = containerName;
    let tagClass = tagClasses;
    let parsedClass = "";
    //loop through class array
        tagClass.forEach(function(classItem) {
            console.log("logging item from class array - " + classItem);
            parsedClass += classItem + " ";
            console.log(parsedClass);
        });

    //Generate element and assign to parent
        console.log("Creating new " + tag);
            let newDiv = document.createElement(tag);
        console.log("New " + tag + " successfully created");




        //assign ID to element
        console.log("Generating new " + tag + " ID");
            newDiv.id=id;
        console.log("New " + tag + " ID successfully generated");

    //assign classes to element
        console.log("Getting documentID for container");
            let targetDiv = document.getElementById(container);
                targetDiv.appendChild(newDiv).className = parsedClass;


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

    let arrayData = [
        {"id":1,"column":0, "question":1, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":2,"column":0, "question":2, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":3,"column":1, "question":3, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":4,"column":3, "question":2, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":5,"column":0, "question":3, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":6,"column":3, "question":2, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":7,"column":1, "question":3, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":8,"column":0, "question":2, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":9,"column":0, "question":3, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":10,"column":2, "question":2, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":11,"column":1, "question":3, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":12,"column":3, "question":2, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":13,"column":1, "question":3, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":14,"column":2, "question":2, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":15,"column":1, "question":3, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":16,"column":1, "question":4, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":17,"column":2, "question":5, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":18,"column":2, "question":6, "description":"This card has a single description. Pretty nifty, huh?"},
        {"id":19,"column":0, "question":7, "description":"This card has a single description. Pretty nifty, huh?"},]

    const treatedInput = JSON.stringify(arrayData);
    storage.setItem("0", treatedInput);

    let parsedInput = JSON.parse(treatedInput);
    console.log("Here is the parsed input");
        console.log(parsedInput);

    for (const key in parsedInput) {

        //Card Generating Function
        function generateCard(x) {
            let color = x;
                let classVar = ["expandedCard","cardShadow"];

            console.log(`${key}: ${parsedInput[key].column} ${parsedInput[key].question} ${parsedInput[key].description} `);
            drawElement("card"+parsedInput[key].id,"div", "column"+parsedInput[key].column, classVar);

                //Card Color Title
                let classVar2 = ["card", color+"Card"];
                drawElement("titleCard"+parsedInput[key].id,"div", "card" + parsedInput[key].id, classVar2);

                    //Paragraph Title
                    let classVar3 = ["card_title"];
                    drawElement("cardTitleP"+parsedInput[key].id,"p", "titleCard" + parsedInput[key].id, classVar3);
                    const node = document.createTextNode("Item ");
                    document.getElementById("cardTitleP"+parsedInput[key].id).appendChild(node);


                //Paragraph Description
                let classVar4 = ["card_description"];
                drawElement("cardDescP"+parsedInput[key].id,"p", "card"+parsedInput[key].id, classVar4);
                const node2 = document.createTextNode(parsedInput[key].description);
                document.getElementById("cardDescP"+parsedInput[key].id).appendChild(node2);

        }

        //Generate Blue Cards in Column 0
        if (parsedInput[key].column == 0) {
            generateCard("blue");
        }

        //Generate Orange Cards in Column 1
        if (parsedInput[key].column == 1) {
            generateCard("orange");
        }
        //Generate Red Cards in Column 2
        if (parsedInput[key].column == 2) {
            generateCard("red");
        }

        //Generate Green Cards in Column 3
        if (parsedInput[key].column == 3) {
            generateCard("green");
        }
    }

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


