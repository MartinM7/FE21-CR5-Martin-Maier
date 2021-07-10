var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var btnasc = document.getElementById('asc');
var btndesc = document.getElementById('desc');
var content = document.getElementById("locations");
var arrayOfObjects = [];
var Locations = /** @class */ (function () {
    function Locations(locationName, city, zipCode, address, teaserImg, visited) {
        this.locationName = locationName;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.teaserImg = teaserImg;
        this.visited = visited;
        arrayOfObjects.push(this);
    }
    Locations.prototype.display = function () {
        return "<div class=\"col-12 col-md-6 col-xl-3 mb-4\">\n              <div class=\"card mx-auto h-100\" style=\"width: 18rem;\">\n                  <img src=\"" + this.teaserImg + "\" class=\"img-fluid d-none d-sm-none d-md-block card-img-top\" style=\"width: 300px; height: 200px;\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.locationName + "</h5>\n                    <p class=\"card-text\">" + this.zipCode + " " + this.city + " <br>" + this.address + " <br>Created: " + this.visited.getDate() + "." + (this.visited.getMonth() + 1) + "." + this.visited.getFullYear() + " " + this.visited.getHours() + ":" + this.visited.getMinutes() + "</p>\n                    <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> --!>\n                  ";
    };
    Locations.prototype.closingDiv = function () {
        return "</div>\n        </div>\n      </div>";
    };
    return Locations;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(locationName, city, zipCode, address, teaserImg, visited, telephoneNumber, typeOfCuisine, webAddress) {
        var _this = _super.call(this, locationName, city, zipCode, address, teaserImg, visited) || this;
        _this.locationName = locationName;
        _this.city = city;
        _this.zipCode = zipCode;
        _this.address = address;
        _this.teaserImg = teaserImg;
        _this.visited = visited;
        _this.telephoneNumber = telephoneNumber;
        _this.typeOfCuisine = typeOfCuisine;
        _this.webAddress = webAddress;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return _super.prototype.display.call(this) + " \n    <p class=\"card-text\">" + this.typeOfCuisine + " <br>" + this.telephoneNumber + " <br>" + this.webAddress + "</p>\n    ";
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(locationName, city, zipCode, address, teaserImg, visited, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, locationName, city, zipCode, address, teaserImg, visited) || this;
        _this.locationName = locationName;
        _this.city = city;
        _this.zipCode = zipCode;
        _this.address = address;
        _this.teaserImg = teaserImg;
        _this.visited = visited;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.display = function () {
        return _super.prototype.display.call(this) + "\n    <p class=\"card-text\">" + this.eventDate + " <br>" + this.eventTime + "</p>\n    <p class=\"card-text\">" + this.ticketPrice + " EUR</p>";
    };
    return Events;
}(Locations));
var location1 = new Locations('St. Charles Church', 'Vienna', 1010, 'Karlsplatz 1', 'img/St_Charles_Church.jpg', new Date(2015, 11, 10, 12, 10));
var location2 = new Locations('Zoo Vienna', 'Wien', 1130, 'Maxingstraße 13b', 'img/Zoo_Vienna.jpg', new Date(2017, 5, 3, 15, 10));
var restaurant1 = new Restaurants('Lemon Leaf Thai Restaurant', 'Vienna', 1050, 'Kettenbrückengasse 19', 'img/Lemon_Leaf_Thai Restaurant.png', new Date(2014, 2, 23, 20, 10), '+43(1)5812308', 'Thai Restaurant', 'www.lemonleaf.at');
var restaurant2 = new Restaurants('SIXTA', 'Wien', 1050, 'Schönbrunner Straße 21', 'img/SIXTA.png', new Date(2020, 10, 9, 21, 10), '+43 15852856, +43 15852856', 'Classic Restaurant', 'http://www.sixta-restaurant.at/');
var event1 = new Events('Kris Kristofferson', 'Wien', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'img/Kris_Kristofferson.jpg', new Date(2020, 2, 8, 21, 30), 'Fr., 15.11.2021', '20:00', '58,50');
var event2 = new Events('Lenny Kravitz', 'Wien', 1150, 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1', 'img/Lenny_Kravitz.jpg', new Date(2021, 3, 11, 20, 15), 'Sat, 09.12.2029', '19:30', '47,80');
btnasc.addEventListener('click', function () {
    content.innerHTML = '';
    arrayOfObjects.sort(function (a, b) {
        if (a.visited > b.visited)
            return 1;
        if (a.visited < b.visited)
            return -1;
    });
    render(arrayOfObjects);
});
btndesc.addEventListener('click', function () {
    content.innerHTML = '';
    arrayOfObjects.sort(function (a, b) {
        if (a.visited > b.visited)
            return -1;
        if (a.visited < b.visited)
            return 1;
    });
    render(arrayOfObjects);
});
function render(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var val = array_1[_i];
        content.innerHTML += val.display() + val.closingDiv();
    }
}
render(arrayOfObjects);
