function domReady(callback){
  if (document.addEventListener){
    document.addEventListener('DOMContentLoaded', callback, false);
  }else {
    document.attachEvent('onDOMContentLoaded', callback);
  }
}


// FactoryExample.js

// Define a skeleton vehicle factory
function LinkObjectFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car

// Our Factory method for creating new Vehicle instances
LinkObjectFactory.prototype.createLinks = function ( options ) {
var links = [];


for (var i in options){
  var l = document.createElement('li');
  var a = document.createElement('a');

for (var property in options[i])
  {
     a[property]= options[i][property];
  }

  function remove(options){


  }(options)

  l.appendChild(a);
  links.push(l);
}
  return links;
};

// Create an instance of our factory that makes cars
domReady(function(){

  var aFactory = new LinkObjectFactory();
  var aLinks = aFactory.createLinks([
              {
                href: "http://www.google.com/",
                textContent: "Google"
              },

              {
                href: "http://www.yahoo.com/",
                textContent: "Yahoo"
              },
              {
                href: "http://www.njit.edu",
                textContent: "NJIT"
              }
              ]);

  // Test to confirm our car was created using the vehicleClass/prototype Car
  // Outputs: true

  // Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
  console.log( aLinks );

  list = document.getElementById('links');

  // console.log(linkDiv);
  for (var i in aLinks){
    list.appendChild(aLinks[i]);
  }


});
