JS Design Patterns Homework
============================

1. An Explanation of Design Patterns
--------------------------------------
Design patterns are a reusable solution to a common occuring problem. Design Patterns are written for specific context to a software problem. A design pattern can be used as guidelines to create a finished design into source. A software architecture can be seen as a collection of Design Patterns and custom solutions to solve various problems. Design patterns also have the added bonus of adding common vocabulary to explain solutions. A well-written design pattern will also give pointers and when not to use the design pattern. It does this by giving it's weaknesses. A good design pattern will also reference other patterns it has been derived from, or new patterns that build and add to it's weaknesesses. 


2. An Explanation of each Respective Pattern
----------------------------------------------
The patterns I have used is the factory pattern, the mediator pattern, and the facade pattern.

1. The *factory pattern* is used to have one central control of your program creating various types of object classes. Each object will have it's own properties and methods. This pattern is used when the underlying creation process for a constructor is complex. This complexity can be factored out and added into the factory method. 

2. The *Mediator Pattern* is a continuation of the observer pattern. An issue with observer is that, since publishing and subscription are decoupled it is not possible for the publisher to know if subscriptions have failed or not. A mediator will hold all the channels. Each Channel is like a directory of messages are their subscriptions. By centralizing this functionality, prerequisites can be made before a subscription is created. However, I did not add this part to my mediator object.

3. The *Facade Pattern* is a pattern which abstracts the complexity of any interface functionality within a program. A Facade pattern should be used for complicated interface logic which is constantly re-used within a program. A facade pattern is a great way to create shorthand operations for developers who will be using the program. In the same way that the factory pattern abstracts complexity in object creation, the same can be said for how the facade pattern abstracts object interfacing. 


3. An Explanation of how each pattern works together
----------------------------------------------------
My program is a continutation of the factory pattern used in class to create link dom elements using an array of objects. However, the object will create any dom element of choice. A factory is created by passing the pattern element type as a string. Children will be passed to each factory object to create an instance of parent/children nodes. Instead of returing this instance to the original caller it passes it to a message publisher. This allows all subscribers to be alerted when a new object is created. Furthermore, the subscriber does not have to check exactly what kind of object is created. Instead the type of message will depend on the object being returned. 
<<<<<<< HEAD
Lastly, a facade pattern is used to check if the dom is ready. This will depend on the browser and how it implements event listening. The facade allows for a callback to be passed to the event listener regardless of browser types.
=======
Lastly, a facade pattern is used to check if the dom is ready. This will depend on the browser and how it implements event listening. The facede allows for a callback to be passed to the event listener regardless of browser types.
>>>>>>> ce6f05fcd91163e7b6bf89586f9f0ecd617e4e84
