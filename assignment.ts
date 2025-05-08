
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase();
        } else {
            return input.toUpperCase();
        }
    }
    

 

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
      }



    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((combined_array, new_make_array) => combined_array.concat(new_make_array), []);
    }
    // console.log(concatenateArrays(["a", "b"], ["c"],['g','g']));     
     


    class Vehicle {
        private make: string;
        private year: number;
    
        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }
    
        public getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    
    class Car extends Vehicle {
        private model: string;
    
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }
    
        public getModel(): string {
            return `Model: ${this.model}`;
        }
    }



    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length;
        } else {
            return value * 2;
        }
    }
   


    interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
          return null;
        }
      
        let highest_price_product = products[0];
        
        for (const product of products) {
          if (product.price > highest_price_product.price) {
            highest_price_product = product;
          }
        }
      
        return highest_price_product;
      }
      
      
      

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        if (day === Day.Sunday || day === Day.Saturday) {
          return "Weekend";
        } else {
          return "Weekday";
        }
      }
      
     



      async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          if (n < 0) {
            reject(new Error("Negative number not allowed"));
          } else {
            setTimeout(() => {
              resolve(n * n);
            }, 1000);
          }
        });
      }
      
      
      squareAsync(4).then(console.log);        
      squareAsync(-3).catch(console.error);    