class People {
    static count: number;

    constructor() {
        // Assuming 'count' is incremented for every new instance
        People.count = (People.count || 0) + 1;
    }

    // Other methods and properties can be added here
}

// Example usage:
// Creating instances of the People class
new People();
new People();
new People();

// Logging the count of People instances
console.log(People.count); // Outputs: 3
