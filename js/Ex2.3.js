/*console.log('hello worl');*/

function initialize(){
    cities();
};

function cities(){ 
  /*  var cities = [  //an array vairable called cities, in js an array is an object, can be accessed thru index 
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];*/
    //console.log(cities, population);
    //object to holed cities and population
    var cityObj={
        'Madison': 233209,
        'Milwaukee':594833,
        'Green Bay': 104057,
        'Superior': 27244
    };
    

    var table = document.createElement("table");  //"table " is a tag in html to creat a table //<table>

    var headerRow = document.createElement("tr"); //create table row //<tr>

    var cityHeader = document.createElement("th");//th is a header cell //<th>
    cityHeader.innerHTML = "City"; //innerhtml is property //<th>city<th>
    headerRow.appendChild(cityHeader); 
    //creates another th and add to the header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);
    //add header row to the table elemnt
    table.appendChild(headerRow);

    //create new role for each city with city name and pop value
    for (var cityKey in cityObj){  //define a count variable, ++ is adding 1 each time

        if (cityKey==='Madison'){
            console.log(cityObj[cityKey]);
        } else if (cityKey=='Milwaukee'){
            console.log('lake michigan');
        } else { 
            console.log('some other cities');

        }
        //console.log(city,cityObj['Madison']);
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityKey;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityObj[cityKey];
        tr.appendChild(pop);

        table.appendChild(tr);

    };
    //get mydiv element and append the table to it
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table); 
};
//run script once page is loaded
window.onload = initialize(); //then the initialize function calls function cities





