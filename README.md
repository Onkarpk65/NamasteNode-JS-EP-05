# NamasteNode-JS-EP05: Diving into the NodeJS Github repo
----------------------------------------------------------------
In this episode we will be diving into NodeJS Github Repo.
<br>
In this episode, we will explore how modules actually work behind the scenes.

- We will dive into how modules load into a page and how Node.js handles multiple modules, focusing on a deep dive into the *module.exports* and *require* functions. 
<br>

**Behind the scenes**

```javascript
function x() {
    const a = 10;
    function b() {
        console.log("b");
    }
    
    console.log(a);
    // will you be able to access this value? no 
}
```

**If we execute the above code, we wont be able to access *a* outside the function.**

- We cannot access *a* value outside the *function x()* because it is defined within the function's scope. Each function creates its own scope, so variables inside a function are not accessible from outside the function.
  
**Important concept**
- Modules in Node.js work similarly to function scopes. When we *require* a file, Node.js wraps the code from that file inside a function. This means that all the variables and functions in the module are contained within that function's scope and cannot be accessed from outside the module unless explicitly exported. 
- To expose variables or functions to other modules, we use *module.exports*. This allows us to export specfic elements from the module, making them accessible when required in our application.
- All the code of a module is wrapped inside a function when we call *require*. Now this function is not a regular function; it's special type known as an **IIFE (Immediately Invoked Function Expression).**
- Here's how it works: 

```javascript
    (function () {
        // All the code of the module runs inside here
    })();
```    
- In this pattern, we can create a function and then immediaely invoke it.
- This is different from a normal function in JavaScript, which is defined and then called separately.
  
```javascript
 A normal JavaScript function
    function x() {}
    x();
```   

**In Node.js, Before passing the code to the V8 engine, it wraps the module code inside an IIFE. The purpose of IIFE is to:**
- *Immediately Invoke Code:* The function runs as soon as it is defined.
- *Keep variables and Functions Private:* By wrapping the code within the IIFE, it prevents variables and dunctions from interfering with other partss of the code.
- This ensures that the code within the IIFE remains independent and private.