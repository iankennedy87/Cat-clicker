//MODEL

function cat(name, path, count) {
        this.name = name;
        this.path = path;
        this.count = count;
        this.increment = function() {
            this.count++;
        }
    };

var model = {
    

    cats : [
        new cat("tiger", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTd8cP8NBHDmMCFfcUKyorEicc57MwGVoPcPqoOBtTRNvznligHD5FLn3o", 0),
        new cat("mittens", "http://theheightsanimalhospital.com/clients/15389/images/playful-kitten-6683.jpg", 0),
        new cat("bogie", "http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16123158-1280-800.jpg", 0),
        new cat("bella", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTATz6htw-u6LPwmgeYt7VXmtupF8uN3WDf81DXHyNGpD8TnfjDTw", 0),
        new cat("timmy", "http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-my-first-kitten.jpg", 0)
    ],

    currentCat : null,

}

//OCTOPUS
function getCat(i) {
    return model.cats[i];
}

function numCats() {
    return model.cats.length;
}

function createCatElem(cat) {
    //var cat = getCat(i);
    var elem = document.createElement('li');
    elem.textContent = cat.name;
    document.getElementById("cat_list").appendChild(elem);
    return elem;
}

function getCatPic() {
    return document.getElementsByClassName("cat_pic")[0];
}

function renderCat(cat, id) {
    //...and appends the current cat's id and source
    pic.id = id;
    pic.src = cat.path;

    //...then adds cat's name and count to the DOM
    document.getElementById("cat_name").textContent = cat.name;
    document.getElementById("cat_count").textContent = "Count: " + cat.count;
}

function incrementCounter(cat, id) {
    //checks to see if current picture matches id of cat 
    /*--(pic references the pic DIV on the DOM, not a specific cat pic. therefore, 
        if you omit this id check, then any time any the pic div is clicked, 
        regardless of which picture is displayed, each cat will increment their counter)--*/
    if (+pic.id == id) {
        //if so, increments that cat's counter and renders count on DOM
        cat.increment();
        document.getElementById("cat_count").textContent = "Count: " + cat.count;
    }
}


function init() {
    model.currentCat = model.cats[0];
    renderCat(model.currentCat, 0);
}

//VIEW
var pic = getCatPic();
init();
// Loop over the cats in our array
for (var i = 0; i < numCats(); i++) {

    // This is the cat we're on...
    var cat = getCat(i);
    var id = i;

    // //...add the list item to the cat list...

    var elem = createCatElem(cat);

    //retrieves the cat pic img from the DOM..

    var pic = getCatPic();

    //...then add an event listener to display appropriate cat when list item is clicked
    elem.addEventListener('click', (function(catCopy, idCopy) {
        return function() {

            renderCat(catCopy, idCopy);
            
        };
    })(cat, id));

    //finally add an event listener to pick for this cat
    pic.addEventListener('click', (function(catCopy, idCopy) {
        return function() {

            incrementCounter(catCopy, idCopy)

        };
    })(cat, id)); 
}


