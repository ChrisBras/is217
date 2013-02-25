'use strict';

function domReady(callback){
  if (document.addEventListener){
    document.addEventListener('DOMContentLoaded', callback, false);
  }else {
    document.attachEvent('onDOMContentLoaded', callback);
  }
}


var mediator = (function(){
     var subscribe = function(channel, fn){
          if(!mediator.channels[channel]) {
            mediator.channels[channel] = [];
          }
          mediator.channels[channel].push({ context : this, callback : fn });
          return this;
     };
     var publish = function(channel){
          if(!mediator.channels[channel]) {
            return false;
          }

          var args = Array.prototype.slice.call(arguments, 1);
          for(var i = 0, l = mediator.channels[channel].length; i < l; i++){
               var subscription = mediator.channels[channel][i];
               subscription.callback.apply(subscription.context.args, args);
          }
          return this;
     };
     return {
          channels : {},
          publish : publish,
          subscribe : subscribe,
          installTo : function(obj){
               obj.subscribe = subscribe;
               obj.publish = publish;
          }
     };
}());


function DOMElementFactory(element) {
  this.element = element;

}

DOMElementFactory.prototype.createChildren = function ( options ) {
var domObjects = [],
element = this.element,
childrenType = options.childrenType;

for (var i in options.children){
  var l = document.createElement(element);
  var a = document.createElement(childrenType);

for (var property in options.children[i])
  {
     a[property]= options.children[i][property];
  }

  l.appendChild(a);
  domObjects.push(l);
}
  mediator.publish(element + '-' + childrenType + '-' + 'Created', domObjects);
};

function ScreenEvents(){

  mediator.subscribe('li-a-Created', function(links){
    for (var i in links){
      console.log(this);
      var list = document.getElementById('links');
      list.appendChild(links[i]);
    }
  });

}


domReady(function(){
  new ScreenEvents();

  var liFactory = new DOMElementFactory('li');
  liFactory.createChildren(
   { childrenType: 'a',
    children: [
              {
                href: 'http://www.google.com/',
                textContent: 'Google'
              },

              {
                href: 'http://www.yahoo.com/',
                textContent: 'Yahoo'
              },
              {
                href: 'http://www.njit.edu',
                textContent: 'NJIT'
              }
              ]});

});
