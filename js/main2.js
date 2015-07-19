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
        new cat("Tiger", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTd8cP8NBHDmMCFfcUKyorEicc57MwGVoPcPqoOBtTRNvznligHD5FLn3o", 0),
        new cat("Mittens", "http://theheightsanimalhospital.com/clients/15389/images/playful-kitten-6683.jpg", 0),
        new cat("Bogie", "http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16123158-1280-800.jpg", 0),
        new cat("Bella", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTATz6htw-u6LPwmgeYt7VXmtupF8uN3WDf81DXHyNGpD8TnfjDTw", 0),
        new cat("Timmy", "http://cdn.cutestpaw.com/wp-content/uploads/2012/04/l-my-first-kitten.jpg", 0)
    ],

    currentCat : null,

}

//OCTOPUS

var octopus = {
    getCat : function(i) {
        return model.cats[i];
    },

    getCurrentCat : function() {
        return model.currentCat;
    },


    incrementCounter : function(cat) {
        model.currentCat.increment();
        catView.render(model.currentCat);
    },

    init : function() {
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
    }
}


//VIEW


var catListView = {

    init : function() {
        this.render();
    },

    createCatElem : function(cat) {

    var elem = document.createElement('li');
    elem.textContent = cat.name;
    document.getElementById("cat_list").appendChild(elem);
    return elem;

    },

    render : function() {
        for (var i = 0; i < model.cats.length; i++) {

            // This is the cat we're on...
            var cat = octopus.getCat(i);
            var id = i;

            // //...add the list item to the cat list...

            var elem = this.createCatElem(cat);

            //...then add an event listener to display appropriate cat when list item is clicked
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    model.currentCat = catCopy;
                    catView.render(catCopy);
                    
                };
            })(cat));
        }
    }
}

var catView = {

    init : function () {

        this.pic = document.getElementById("cat_pic");
        this.pic.addEventListener('click', (function(catCopy) {
            return function() {

                octopus.incrementCounter(catCopy)

            };
        })(cat)); 

        this.render(model.currentCat);
    },

    render : function(cat) {

        //...and appends the current cat's id and source
        this.pic.src = cat.path;

        //...then adds cat's name and count to the DOM
        document.getElementById("cat_name").textContent = cat.name;
        document.getElementById("cat_count").textContent = "Count: " + cat.count;

    }
}

octopus.init();



