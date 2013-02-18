// Types.js - Constructors used behind the scenes

// A constructor for defining new cars

var ListOfVehicles = {
  car: function (options){

    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
  },

  truck: function(options){

    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
  },

  boat: function(options){

  }

}

function Car( options ) {

  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";

}

// A constructor for defining new trucks
function Truck( options){

  this.state = options.state || "used"; this.wheelSize = options.wheelSize || "large"; this.color = options.color || "blue";
}


// FactoryExample.js

// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {

  this.vehicleClass =  ListOfVehicles.hasOwnProperty(options.vehicleType) ? ListOfVehicles[options.vehicleType] : ListOfVehicles.car ;

  return new this.vehicleClass( options );

};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( { 
            vehicleType: "car", 
            color: "yellow", 
            doors: 6 } );

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log( car instanceof ListOfVehicles.car ); 

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );