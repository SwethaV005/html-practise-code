// 1. Standard Generic Array Syntax
const score: Array<number> = [];
const names: Array<string> = [];

// 2. Union Types (Restricted to boolean or number)
function identityOne(val: boolean | number): boolean | number {
    return val;
}

// 3. 'any' Type (Loses all TypeScript type checking - NOT recommended)
function identityTwo(val: any): any {
    return val;
}

// 4. Generic Identity Function (Preserves whatever type is passed in)
function identityThree<Type>(val: Type): Type {
    return val;
}

// 5. Generic Shortcut (Using 'T' as the standard convention)
function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string;
    type: number;
}

const myBottle: Bottle = { brand: "Hydro Flask", type: 1 };
const result = identityFour<Bottle>(myBottle); // Explicitly passing the type

// 6. Generic Function with Array Input returning a Single Item
function getSearchProducts<T>(products: T[]): T {
    // Array index returns a single element of type T
    return products[3];
}

// 7. Generic Arrow Function with Trailing Comma (<T,>)
// The comma differentiates generic syntax from JSX tags (e.g., in React/TSX)
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const index = 4;
    return products[index];
};

// 8. Generic Constraints (U extends Database)
interface Database {
    connection: string;
    username: string;
    password: string;
}

// U MUST provide at least connection, username, and password
function another<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1,
        val2
    };
}

// Execution: T is inferred as number, U matches the Database interface
another(3, { connection: "mySQL", username: "admin", password: "admin123" });

// 9. Generic Classes
interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}

// Usage of Generic Class:
const quizCart = new Sellable<Quiz>();
quizCart.addToCart({ name: "TypeScript Basics", type: "Multiple Choice" });

const courseCart = new Sellable<Course>();
courseCart.addToCart({ name: "React Bootcamp", author: "Hitesh", subject: "Web Dev" });