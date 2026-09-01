// Abstract class acts as a blueprint
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    // Abstract method: MUST be implemented by any child class
    abstract getSepia(): void;

    // Concrete/Default method: Can be used as-is OR overridden by child classes
    getReel(): number {
        return 8;
    }
}

// Cannot create an instance directly from an abstract class:
// const test = new TakePhoto("test", "TEST"); // ❌ Error!

// Child class inheriting the abstract class
class Instagram extends TakePhoto {
    constructor(
        // Note: Do NOT add 'public' here; parameter modifiers belong in the parent class
        cameraMode: string,
        filter: string,
        public burst: number // Only declare new properties with access modifiers
    ) {
        // Pass parent properties to the abstract class constructor
        super(cameraMode, filter);
    }

    // Mandatory implementation of the abstract method
    getSepia(): void {
        console.log("Applying sepia filter...");
    }
}

// Works! You can create objects from child classes that inherit abstract classes
const hitesh = new Instagram("test", "TEST", 3);
hitesh.getSepia(); // Logs: "Applying sepia filter..."
console.log(hitesh.getReel()); // Logs: 8