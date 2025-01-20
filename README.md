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

## **In Node.js, Before passing the code to the V8 engine, it wraps the module code inside an IIFE. The purpose of IIFE is to:**
- *Immediately Invoke Code:* The function runs as soon as it is defined.
- *Keep variables and Functions Private:* By wrapping the code within the IIFE, it prevents variables and dunctions from interfering with other partss of the code.
- This ensures that the code within the IIFE remains independent and private.
- Using IIFE solves multiple problems by providing scope isolation and immediate execution.

## **How are variables and functions private in different modules?**
- Because of IIFE and the require(), wrapping code inside IIFE function.
  
## **How do we get access to *module.exports*? Where does this *module* come from?** 
- In Node.js, when our code is wrapped inside an IIFE function, this IIFE function has a parameter named *module*. This parameter is an **object** provided by Node.js that includes *module.exports*.
- When we are using *module.exports*, we are modifying the *exports* object of the current module. Node.js relies on this object to determine what will be exported from the module when it's required in another file.
- The *module* object is automatically provided by Node.js and is passed as a parameter to the function that wraps our code.
- This mechanism allows us to define which parts of our module are accessible externally.

##  **How require() works Behind the scenes**

1. **Resolving the Module:**
- Node.js first determines the path of the module. It checks whether the path is local file `(./local)`, a JSON file (`.json`), or a module (`.js`).
2. **Loading the Module:**`
- Once the path is resolved, Node.js loads the file content based on its type. The loading process varies and depends on file type. 
3. **Wrapping The Code Inside an IIFE Function:**
- The module code is wrapped in an Immediately Invoked Function Expression (IIFE). This wrapping helps encapsulate the module's scope keeping the variables and functions private to the module.
4. **Code Evaluation and Module Exports:**
- After wrapping the code, Node.js evaluates the module's code. During this evaluation, `module.exports` is set to export the module's functionality or data. *This step essentially makes the module's exports available to other files*.
5. **Caching (very imp):**
- **Importance:** Caching is crucial for performance optimization. Node.js caches the result of the `require()` call so that the *module is only loaded and executed only once*.  