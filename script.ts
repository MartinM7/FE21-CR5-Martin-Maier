let arrayOfObjects: any = [];

class Locations {
  constructor(
    public locationName: string,
    public city: string,
    public zipCode: number,
    public address: string,
    public teaserImg: string,
    public visited: Date
  ) {
    
    arrayOfObjects.push(this);
    
    }

  display() {
    return `<div class="col-12 col-md-6 col-xl-3 mb-4">
              <div class="card mx-auto" style="width: 18rem;">
                  <img src="${this.teaserImg}" class="img-fluid d-none d-sm-none d-md-block card-img-top" style="width: 300px; height: 200px;">
                  <div class="card-body">
                    <h5 class="card-title">${this.locationName}</h5>
                    <p class="card-text">${this.zipCode} ${this.city} <br>${this.address} <br>Created: ${this.visited.getDate()}.${this.visited.getMonth() + 1}.${this.visited.getFullYear()} ${this.visited.getHours()}:${this.visited.getMinutes()}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --!>
                  `;
  }

  closingDiv() {
    return `</div>
        </div>
      </div>`;
  }
}

class Restaurants extends Locations{
  constructor(
    public locationName: string,
    public city: string,
    public zipCode: number,
    public address: string,
    public teaserImg: string,
    public visited: Date,
    public telephoneNumber: string,
    public typeOfCuisine: string,
    public webAddress: string) {
    super(locationName, city, zipCode, address, teaserImg, visited);
  }

  display() {
    return `${super.display()} 
    <p class="card-text">${this.typeOfCuisine} <br>${this.telephoneNumber} <br>${this.webAddress}</p>
    `;
  }
}

class Events extends Locations {
  constructor(
    public locationName: string,
    public city: string,
    public zipCode: number,
    public address: string,
    public teaserImg: string,
    public visited: Date,
    public eventDate: string,
    public eventTime: string,
    public ticketPrice: string) {
    super(locationName, city, zipCode, address, teaserImg, visited);
  }

  display() {
    return `${super.display()}
    <p class="card-text">${this.eventDate} <br>${this.eventTime}</p>
    <p class="card-text">${this.ticketPrice} EUR</p>`;
  }
}

let location1 = new Locations('St. Charles Church','Vienna', 1010, 'Karlsplatz 1', 'img/St_Charles_Church.jpg', new Date(2015, 11, 10, 12, 10));
let location2 = new Locations('Zoo Vienna', 'Wien', 1130, 'Maxingstraße 13b', 'img/Zoo_Vienna.jpg', new Date(2017, 5, 3, 15, 10));
let restaurant1 = new Restaurants('Lemon Leaf Thai Restaurant', 'Vienna', 1050, 'Kettenbrückengasse 19', 'img/Lemon_Leaf_Thai Restaurant.png', new Date(2014, 2, 23, 20, 10), '+43(1)5812308', 'Thai Restaurant', 'www.lemonleaf.at');
let restaurant2 = new Restaurants('SIXTA', 'Wien', 1050, 'Schönbrunner Straße 21', 'img/SIXTA.png', new Date(2020, 10, 9, 21, 10), '+43 15852856, +43 15852856', 'Classic Restaurant', 'http://www.sixta-restaurant.at/');
let event1 = new Events('Kris Kristofferson', 'Wien', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'img/Kris_Kristofferson.jpg', new Date(2020, 2, 8, 21, 30), 'Fr., 15.11.2021', '20:00', '58,50');
let event2 = new Events('Lenny Kravitz', 'Wien', 1150, 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1', 'img/Lenny_Kravitz.jpg', new Date(2021, 3, 11, 20, 15), 'Sat, 09.12.2029', '19:30', '47,80');
console.log(arrayOfObjects);

for (const val of arrayOfObjects) {
  document.getElementById("locations")!.innerHTML += val.display() + val.closingDiv();

}
