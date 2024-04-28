console.log("Aing teh Mulai Belajar JawirScript,Doakeun Yeu.")


/* contoh mengubah value dari properti sebuah object menggunakan operator "=" */
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.name = "HelloWorld";
const newSpaceship = { ...spaceship } /* spread operator untuk memisahkan tiap value dari properti dari tiap objek */
console.log(newSpaceship);
console.log(spaceship.maxSpeed);




/* Spread Operator untuk menyebarkan data array */
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [...favorites, ...others];
console.log(allFavorites);



/* membuat sebuah array yang berisi bilangan genap dari angka 1-100 */
const evenNumber = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i);
    };
};
console.log(evenNumber);




/* Destructing = mengeluarkan nilai dalam suatu objek*/
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
console.log(firstName, lastName, age)




/* Destructing Object */
const profil = {
    namaDepan: "John",
    namaBelakang: "Doe",
    usia: 18
}
const { namaDepan, namaBelakang, usia } = profil; /* yang di dalam kurung kurawal adalah variabel untuk menampung value dari masing2 object sesuai namanya */
console.log(namaDepan, namaBelakang, usia);



/* Destrcuturing dengan menginisiasikan variabel baru */
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
console.log(localFirstName);
console.log(localLastName);
console.log(typeof (localAge))



/* Map (set and get) */
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
    ["Amsterdam", "Netherlands"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));



/* data Set */

const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);



/* WeakMap dan WeakSet */

/* map biasa */

const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

let john = { age: 23 };
countUser(john);

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
    console.log(visitsCountMap);
}, 10000)


/* weakMap */


const visitsCountWeakMap = new WeakMap(); // Menyimpan daftar user

function countUsers(users) {
    let hitung = visitsCountWeakMap.get(users) || 0;
    visitsCountWeakMap.set(users, hitung + 1);
}

let jonis = { name: "Jonis" };
countUsers(jonis);  // Menambahkan user "Jonas"

jonis = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
    console.log(visitsCountWeakMap, { showHidden: true });
}, 1000);


/*Function in JavaScript */

//Function dengan Parameter berupa objek

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

//Function dengan Rest Parameter
function sum(...numbers) { //suatu parameter yang digunakan ketika jumlah dari parameter fungsinya tidak pasti
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5)); //lihat,parameternya tergantung keinginan kita ingin memasukkan berapa parameter.





/* Arrow Function */

const multiple = (a, b) => {
    return a * b;
};

console.log(multiple(4, 3));

//arrow function bisa dituliskan 1 baris dan ada uniknya 

const sayName = name => console.log(`Halo nama saya ${name}`);
sayName("rehan");


/* Variable Scope */

function multiply(num) {
    let total = num * num;
    return total;
};

let total = 9;
let number = multiply(20);

console.log(total); //outputnya akan 9 karena variabel total yang berada di dalam fungsi bersifat lokal hanya bisa diakses didalam fungsi.






/* Closure adalah suatu fungsi yang dapat mengakses variabel di fungsi induk.*/

const init = (a, b) => {
    let result = a * b;
    return result;

    function desc() {
        console.log(`Hasilnya adalah ${result}`);
    }

    desc();
}

console.log(init(4, 5));

//closure dapat membuat fungsi dan variabel seolah terlihat private

const add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
};
const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* Latihan Modul Dicoding */
const minimal = (a, b) => {
    if (a === b) {
        return a;
    } else if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    }
}
console.log(minimal(3, 3))


const findIndex = (array, number) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i;
        }
    }
    return -1
}

console.log(findIndex([1, 2, 3, 4, 5, 6, 7], 5));
console.log(findIndex([1, 2, 3, 4, 5, 6, 7], 8));


/* maksud fungsi dibawah adalah melakukan cek posisi dari currentmin dan currentmax dan perkondisian if elsenya memaksa 
agar posisi dari currentmin dan currentmax terus bergeser karena dibandingkan dengan value yang ada pada index sehingga
posisi dari currentmin dan currentmax awalnya diinisiasikan di index 0 tetapi karena perkondisian if elsenya memaksa currentmin
dan currentmax posisinya bergeser terus menerus hingga akhir index.*/

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);


//tidak mengembalikan nilai maka outputnya undefined
function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);



/* Object Oriented Programming (OOP) In JavaScript */

function Car(brand, name, color, maxVelo) {
    this.brand = brand
    this.name = name
    this.color = color
    this.maxVelo = maxVelo
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
}

Car.prototype.drive = function () {
    console.log(`${this.color} ${this.brand} ${this.name} is driven by ali`)
}

Car.prototype.reverse = function () {
    console.log(`${this.color} ${this.brand} ${this.name} is reversing`)
}


const car1 = new Car("Toyota", "Zenix", "Silver", 260)
const car2 = new Car("Honda", "CR-V", "Black", 240)
const car3 = new Car("Toyota", "Fortuner", "White", 230)
const car4 = new Car("Mazda", "3 Hatchback", "Red", 180)

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)

car1.drive();
car2.drive();
car3.drive();
car4.drive();
car1.reverse();



//sintaks class dalam javascript tetapi tetap berupa function
// contoh penggunaan setter getter untuk wrapper
class Mobil {
    #chassisNumber = null; //enclosing class

    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.#chassisNumber = this.#generateChassisNumber() //nama properti diawali dgn # menandakan bahwa bersifat private
    }

    get chassisNumber() {
        return this.#chassisNumber
    };

    set chassisNumber(chassisNumber) {
        console.log("Gaboleh diganti woi!!")
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
    #generateChassisNumber() {
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
}

const mobil1 = new Mobil('Toyota', 'Silver', 200, 'to-1');
const mobil2 = new Mobil('Honda', 'Black', 180, 'ho-1');
const mobil3 = new Mobil('Suzuki', 'Red', 220, 'su-1');

console.log(mobil1);
console.log(mobil2);
console.log(mobil3);
// mobil1.#generateChassisNumber(); //gabisa di set karena bersifat private
// console.log(mobil1.#chassisNumber); //syntax error jg alasannya sama kek baris atas ini

mobil1.drive();
mobil2.drive();
mobil3.drive();


//setter and getter

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const Pengguna = new User('John', 'Doe');
console.log(Pengguna);
console.log(Pengguna.fullName);

Pengguna.fullName = 'Fulan Fulanah';
console.log(Pengguna);
console.log(Pengguna.fullName);