## Please click on question to expand and see the answer.

<details>
  <summary><strong> What are some differences between interfaces and types in TypeScript?</strong></summary>



## Blog Post: ----->  
 There are two  ways to define custom data Type in Typescript: interfaces and type aliases. At first glance, they seem very similar — and for many use cases, they can be used interchangeably. But there are some key differences that every TypeScript developer should know.

In this post, we’ll break down their differences: 

## **interfaces**  

An interface in TypeScript is used to define the shape/type of an object or a class contract. It’s a great choice when you’re working with objects and want to extend or implement them later.
Example:
```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 30
};
``` 
## **types**  

In TypeScript, the type keyword is used to create an alias for a type. A type is more flexible. It can describe objects, but it can also handle primitives, unions, intersections, and tuples. Think of type as a powerful tool for combining different types together. Types are perfect when  need complex type compositions like unions (|) or intersections (&)
Example:
```typescript
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Jane",
  age: 25
};

``` 
## ** when and where should use interface vs type:**  
Interface should use when defining the type of an object, especially if someone want to extend or implement it later.
for example: 
```typescript
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}


``` 
Here, the Admin interface extends User and adds a role property. This is clean and easy to manage, especially when building object hierarchies.

On the other hand, type is more powerful and flexible when it comes to complex type compositions. Use type when  need unions (|), intersections (&), tuples, or want to work with utility types like Partial, Pick, or Record. It’s perfect for defining API responses, combining multiple types, or creating tuple and array types.

For example, 

```typescript
type Status = "success" | "error" | "loading";

type Point = [number, number];

type User = {
  name: string;
  age: number;
};

type AdminUser = User & { role: string };


``` 

# Interface vs Type in short tabular format

| **Feature**             | **Interface**                                                                     | **Type**                                                         |
| ----------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Extending**           | Can be extended using `extends` or multiple `extends`.                            | Can extend using intersection types (`&`).                       |
| **Declaration Merging** | Supports declaration merging (multiple interfaces with the same name are merged). | Does not support declaration merging.                        |
| **Usage**               | Best for defining object type and class contracts.                              | More flexible: can define primitives, unions, tuples, etc.       |
| **Complex Types**       | Only describes object type and method signatures.                               | Can compose types (unions `|`, intersections `&`, tuples).       |
| **Performance**         | Interfaces are sometimes slightly better optimized by the TypeScript compiler.    | Types are equally good but a bit more flexible in complex cases. |


## Conclusion

Both `interface` and `type` are powerful tools in TypeScript. Use `interface` when defining object shapes or working with class-based code. Choose `type` when need more flexibility like combining types, creating unions, or working with complex structures. In many cases, both can be used interchangeably

</details>


<details>
  <summary><strong> Provide an example of using union and intersection types in TypeScript</strong></summary>

 ## Blog Post: ----->  

 TypeScript is known for its powerful type system, which helps developers write safer and more predictable code. Two important features that make TypeScript so flexible are Union Types and Intersection Types.

## **Union Type**  
A union type allows a variable to hold more than one type. use the (|) symbol to define a union.

Example: 
```typescript
function displayScore(score: number | string) {
  console.log("Your score is: " + score);
}

displayScore(100);      
displayScore("A+");      
 displayScore(true); Not work  


``` 
here, score: number | string means score can be either a number or a string. We passed both 100 and "A+", and both worked fine. but  we try to pass a boolean or object, TypeScript will show an error. 

so we can say that To accept multiple types in a function or variable we use Union data type in tyPescript.


## **intersection Type**  

An interSection type combines multiple types into one. (&) symbol to define an intersection. A value of an intersection type must satisfy all of the types involved.

Example: 
```typescript
type User = {
  name: string;
  email: string;
};

type isAdmin = {
  is_admin: boolen;
};

type AdminUser = User & isAdmin;

const admin1: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  is_admin: true;
};

``` 
Here, AdminUser is an intersection of User and isAdmin. So any object of type AdminUser must have both user properties name, email and admin properties is_admin.

## **When Should You Use Union vs Intersection**  

Use Union: when a value can be either one type or another.

Use Intersection: when a value must satisfy both  types at the same time.

## Conclusion

IN conclusion we can say that using union types,  make  code flexible with multiple allowed types, and with intersection types,  combine multiple structures into one. both will help  write cleaner, safer, and more powerful TypeScript code!
</details>