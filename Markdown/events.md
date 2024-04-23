# Events in JavaScript
There is not much theory on this topic in javascript you need to try this in order to properly understand this, so below is the snippet attached

## Event Propagation and usage of events in javascript
what is event propagation?
- Event propagation is a mechanism that defines the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event (a click, for example).

propagation has two phases:
- capturing phase
- bubbling phase

### Capturing phase
- The event is captured by the outermost element and propagated to the innermost element.

### Bubbling phase
- The event is captured by the innermost element and propagated to the outermost element.

### Event object
- The event object is the object that is passed to the event handler as a parameter.
- The event object contains useful information about the event, such as the type of event, the target element, and the key that was pressed.
- The event object is automatically passed to the event handler as a parameter.

### Event properties
- type -> returns the type of the event
- target -> returns the element that triggered the event
- currentTarget -> returns the element that the event handler is attached to
- clientX -> returns the horizontal coordinate of the mouse pointer when the event was triggered
- clientY -> returns the vertical coordinate of the mouse pointer when the event was triggered
- screenX -> returns the horizontal coordinate of the mouse pointer when the event was triggered, relative to the screen
- screenY -> returns the vertical coordinate of the mouse pointer when the event was triggered, relative to the screen
- altKey -> returns whether the "ALT" key was pressed when the event was triggered and __various keys like this__ which can be used to check the key pressed
- stopPropagation() -> stops the event from bubbling up the event chain
- preventDefault() -> prevents the default behavior of the event, example: prevent url from opening when clicked on a link
- stopImmediatePropagation() -> stops the event from bubbling up the event chain and prevents other event handlers on the same element from running

### Event listeners
- Event listeners are used to listen for events on the DOM elements, they start listening as soon as they are activated and they don't have any information about any value being passed or the event happend before they started listening

### Event delegation
- Event delegation is a technique in which we attach a single event listener to a parent element that will fire for all children matching a selector, whether they are present now or added in the future.
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>htnml Events </title>
</head>
<body style="background-color: #414141; color: aliceblue;">
    <h2>Amazing image</h2>
    <div >
        <ul id="images">
            <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
            <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" ></li>
            <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
   </div>
</body>
<script>
// do not use this method

    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

    // events are invoked only when something happens 

     // attachEvent()
    // jQuery - on


    // STUDY THESE TOPICS

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // event propagation => includes two things bubbling and capturing

    // false => bubbling, true => capturing

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation() // to stop the event propagation => bubbling
    //     console.log("google clicked");
    // }, false)
   
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }
    
        
    })
    
    //removeIt.parentNode.removeChild(removeIt)

    // bubbling => event starts from the target element and goes up to the parent element in propagation
    // capturing => event starts from the parent element and goes down to the target element in propagation 
    // event.stopPropagation() => stops the event propagation
    // event.preventDefault() => stops the default behaviour of the event
    // event.stopImmediatePropagation() => stops the event propagation and other event listeners attached to the same element
    // this happens when we have multiple event listeners like in the above example
</script>
</html>
```


## Events and Functions

### setInterval

- setInterval() is a method that calls a function or evaluates an expression at specified intervals (in milliseconds).
- The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
- The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

### setTimeout

- setTimeout() is a method that calls a function or evaluates an expression after a specified number of milliseconds.
- The setTimeout() method will only call the function once.
- The ID value returned by setTimeout() is used as the parameter for the clearTimeout() method.
- clearTimeout() is a method that stops the execution of the function specified in the setTimeout() method.

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Chai aur code</h1>
    <button id="stop">Stop</button>
</body>
<script>
    const sayHitesh = function(){
        console.log("Hitesh");
    }
    const changeText = function(){
        document.querySelector('h1').innerHTML = "best JS series"
    }

    const changeMe = setTimeout(changeText, 2000)

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe)
        console.log("STOPPED")
    })
</script>
</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Chai aur Javascript</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
    const sayDate = function(str){
        console.log(str, Date.now());
    }

    const intervalId = setInterval(sayDate, 1000, "hi") // hi is the parametet which will be passed to the function sayDate

    clearInterval(intervalId)
</script>
</html>
```