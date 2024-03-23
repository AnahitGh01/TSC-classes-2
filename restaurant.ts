class Restaurant {
    private menuItems: Map<string, number>;
    private ratings: number[];

    constructor() {
        this.menuItems = new Map();
        this.ratings = [];
    }

    // Method to add menu items with prices
    addMenuItem(item: string, price: number): void {
        this.menuItems.set(item, price);
    }

    // Method to remove menu items
    removeMenuItem(item: string): void {
        this.menuItems.delete(item);
    }

    // Method to add ratings
    addRating(rating: number): void {
        this.ratings.push(rating);
    }

    // Method to calculate average rating
    calculateAverageRating(): number {
        if (this.ratings.length === 0) {
            return 0;
        }
        const sum = this.ratings.reduce((acc, curr) => acc + curr, 0);
        return sum / this.ratings.length;
    }

    // Getter method for menu items
    getMenuItems(): Map<string, number> {
        return this.menuItems;
    }

    // Getter method for ratings
    getRatings(): number[] {
        return this.ratings;
    }
}


const restaurant = new Restaurant();
restaurant.addMenuItem("Pizza", 10);
restaurant.addMenuItem("Sushi", 9);
restaurant.addRating(4);
restaurant.addRating(5);


console.log("Menu Items:", restaurant.getMenuItems());
console.log("Ratings:", restaurant.getRatings());
console.log("Average Rating:", restaurant.calculateAverageRating());

//"Menu Items:",  Map (2) {"Pizza" => 10, "Sushi" => 9} 
//"Ratings:",  [4, 5] 
//"Average Rating:",  4.5 