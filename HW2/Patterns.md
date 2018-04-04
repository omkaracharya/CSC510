# Design Patterns

## OO Patterns

### Category 1: Creational Patterns

### 1. Singleton Pattern
* **Definition:** The singleton pattern is one of the Creational Design patterns that restricts the instantiation of a class to one object (hence known as *Singleton*).
* **Description:** This pattern is used whenever a software needs a single instance of the class i.e. only one global point of access. In OOP, making the `constructor` as `private` and `accessor function` as `static` would achieve this design pattern.    
e.g. Consider a class `President`. Each nation has only one president so this can be easily achieved using `Singleton` pattern. Its `Java` implementation would be like:
```
class President {
    private static President presidentObject;
 
    // Private Constructor
    private President() {
    
    }
 
    // Static Accessor Function
    public static President getPresident() {
        if (presidentObject == null) {
            presidentObject = new President();
        }
        return presidentObject;
    }
}
```

### 2. Abstract Factory Pattern
* **Definition:** The Abstract Factory Pattern is one of the Creational Design patterns which provides an interface for creating families of related or dependent objects without specifying their concrete classes.
* **Description:** This pattern is used whenever *Platform independence* needs to be achieved. It involves only one `factory` object which provides creation services for the entire platform family. `User` never creates platform objects directly, he asks the `factory` object to do that for them.   
e.g. Consider an example of *Restaurant Management System*. Here, the `factory` object is `Kitchen` as the customers can't directly talk with the `Chef`s. They first ask `Kitchen` and then `Kitchen` talks with the different `Chef`s considering which order is placed.

### Category 2: Structural Patterns

### 1. Proxy Pattern
* **Definition:** The Proxy Pattern is one of the Structural Design patterns which defines a `proxy` for the `real` object to guarantee the controlled access to the object and to provide the additional functionality when accessing the object.
* **Description:** This pattern is used whenever there is a need to support resource-hungry objects, so that they are not instantiated unless they are actually requested by the user. Whenever user needs to access the `real` object first time, the real object is instantiated. Then `proxy` object remembers the identity of this `real` object and then all subsequent requests are simply forwarded directly to the encapsulated `real` object.  
e.g. Consider a `Payroll` system. A `paycheck` is a `proxy` object which substitutes for the actual `money`. Whenever `money` is required, `paycheck` can be used to get it.

### 2. Decorator Pattern
* **Definition:** The Decorator Pattern is one of the Structural Design patterns that allows behavior to be added to an individual object dynamically. It takes care that the behavior of other objects which belong to the same class is not affected.
* **Description:** This pattern is used whenever there is a need to attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality. `Proxy` pattern provides the same interface to its subject, whereas, `Decorator` pattern provides an enhanced one.  
e.g. Consider an example of `Pizza`. It can *dynamically* be changed into `Veg` pizza or `Cheese` pizza based on the customer's demand.

### Category 3: Behavioral Patterns

### 1. Iterator Pattern
* **Definition:** The Iterator Design Pattern is one of the Behavioral patterns which provides a way to access the elements of an `aggregate` object sequentially without exposing its underlying representation.
* **Description:** This pattern is used whenever there is a need to `abstract` the traversal of different data structures. It focuses mainly on the common communication patterns between objects. The idea behind this pattern is to take the responsibility for `access` and `traversal` out of the aggregate object and put it into an `iterator` object. Here, the `iterator` object defines a standard traversal protocol.  
e.g. Consider an old `Television` system. Whenever the user wanted to switch between the channels, he could do it using `next` and `previous` buttons on the remote control. Irrespective of the channel numbers, he had to go in the sequential manner iterating over all the intermediate channels.

### 2. Observer Pattern
* **Definition:** The Observer Pattern is one of the Behavioral Design patterns which defines a `one-to-many` dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
* **Description:** This pattern is used whenever there is an hierarchy of the objects in the system. This pattern is widely used when the software follows the famous `Model-View-Controller (MVC)` architecture. In this pattern, the differentiation of the `Core` component and `Dependent` components becomes crucial.  
e.g. Consider an example of `Amazon`. When the user doesn't get an item online which he wants, he signs up for a notification when the item becomes available. This system can be built using `Observer` pattern as the `independent` entity being the `item` and the `dependent` entity being the `user`.

## Free Style

## 1. Configuration Pattern
* A lot of applications these days need to have some default configurations to run. There are various ways to set these default parameters.
* One could use a `.config` file to do so, one could hard code them in the functionality, or one could set them as the environment variables through the command line.
* This pattern could create an abstract to deal with maintaining the configuration details in the application and reading and passing them around to serve the other purposes.


## 2. Be Active Pattern
* Some applications like WiFi need to be on for like `24*7` basis. There's need of a monitor to keep an eye on all the activities going in the application and but, all the other modules can be only called when needed.
* e.g. There's no need for a `display` manager to be active all the time. Some other manager can do the job of tracking all the events currently going and if needed, can call `display` manager based on demand.
* This pattern provides a lightweight functionality for the application to run behind the scenes to save the resources available to the system.
* It also ensures that the user will not be disconnected from the application because there always be a lightweight module running in the background.


## 3. Pool Pattern
* This pattern is similar to that of `Pool` pattern in `Python`, which prefers to use a set of initialized objects rather than allocating and destroying them on demand.
* A user requests an object from the `pool` and performs operations on the returned object. When he is done using that, rather than using a destructor to destroy that object, he needs to return it back to the pool.
* This can be achieved either manually or automatically.
* Performance improvement is the main focus of this design pattern.
