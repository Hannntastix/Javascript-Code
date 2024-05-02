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





/* Inheritance */

// Superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

// Subclass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

// Subclass
class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}
const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('rehan121203@gmail.com');

whatsapp.sendMessage('halo', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// whatsapp.sendDelayedMessage(); // Error

email.sendMessage('Hello', 'john@gmail.com');
email.sendDelayedMessage('Hello', 'john@gmail.com', 5000);
// email.sendBroadcastMessage(); // Error



// Ini inheritance menggunakan constructor function
function MailServices(sender) {
    this.sender = sender;
}

MailServices.prototype.sendMessage = function (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
}

function WhatsAppServices(sender) {
    MailServices.call(this, sender);
}

// Prototype inheritance
WhatsAppServices.prototype = Object.create(MailServices.prototype);
WhatsAppServices.prototype.constructor = WhatsAppServices;

WhatsAppServices.prototype.sendBroadcastMessage = function (message, receivers) {
    for (const receiver of receivers) {
        this.sendMessage(message, receiver);
    }
}

function GmailService(sender) {
    MailServices.call(this, sender);
}

// Prototype inheritance
GmailService.prototype = Object.create(MailServices.prototype);
GmailService.prototype.constructor = GmailService;

GmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
        this.sendMessage(message, receiver);
    }, delay);
}

const wa = new WhatsAppServices('+6281234567890');
const gmail = new GmailService('dimas@dicoding.com');
console.log(wa instanceof WhatsAppServices);
console.log(gmail instanceof GmailService); // instanceof untuk memeriksa jenis objek
console.log(wa instanceof GmailService);
wa.sendMessage('Hello', '+6289876543210');
wa.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
gmail.sendMessage('Hello', 'john@doe.com');
gmail.sendDelayedMessage('Hello', 'john@doe.com', 3000);



/* Overriding */

//overriding constructor
class MailServiced {
    constructor(sender) {
        this.sender = sender;
    }
}

class WhatsAppServiced extends MailServiced {
    // overriding constructor
    constructor(sender, isBusiness) { //mendefinisikan constructor kembali teteapi menggunakan super() untuk properti sender dari induknya.
        super(sender);
        this.isBusiness = isBusiness;
    }
}




// Overriding Method
class Mail {
    constructor(sender) {
        this.sender = sender;
    }

    kirimPesan(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`)
    }
}

class WaService extends Mail {
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }

    //method overriding
    kirimPesan(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`)
    }
}

const waweb = new WaService("081273469999", false);

waweb.kirimPesan("Halo semangat yaaa", "Kontak Keisha Salsabila");




/* Object Composition */
class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is committing changes...`);
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDeveloper('Rehan');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);

const backEndDeveloper = createBackEndDeveloper('Dea Afrizal');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);

const devOpsDeveloper = createDevOps('Yama Roni');
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);

const fullStackDeveloper = createFullStackDeveloper('Sandhika Galih');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);





/* Bulit -in Class ada Date,Array,Object,Math,String.*/

const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta'
});

const timeInTokyo = date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo'
});

console.log("Waktu Live Di Tokyo : " + timeInTokyo);
console.log("Waktu Live Jakarta : " + timeInJakarta);




//penggunaan built in class dari array
class UniqueArray extends Array {
    constructor(...args) {
        // make sure args is unique before passing it to super
        const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);

        super(...uniqueValue);
    }

    push(item) {
        // make sure only unique item is added
        if (!this.includes(item)) {
            super.push(item);
        }
    }
}

const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray); // ['a', 'b', 'c']
someArray.push('d');
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push('a');
console.log(someArray); // ['a', 'b', 'c', 'd']




  /**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini

/*1*/class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

/*2*/class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true); // Properti isMammal harus bernilai true saat diinstansiasi
    }

    eat() {
        return `${this.name} sedang makan!`;
    }
}

/*3*/class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false); // Properti isMammal harus bernilai true saat diinstansiasi
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

/*4*/const myRabbit = new Rabbit("Labi", 2);
/*5*/const myEagle = new Eagle("Elo", 4);


//Kuis Dicoding
class CaT { }
const cat = new CaT();
console.log(typeof CaT);



/* Paradigm Functional Programming */
//Declarative way (What To Solve)
const names = ['Glenn', 'Kei', 'Atay', 'zhiva'];
const newNamesWithExcMark = names.map((nomo) => `${nomo}!`);

console.log(newNamesWithExcMark);



/* Konsep Dalam Functional Programming */

//Pure and Impure Function
//contoh pure function
const createNewPerson = (nome, age) => {
    return { ...person, age }
}

const person = {
    nomi: 'Bobo'
}

const newPerson = createNewPerson("REHAN", 20);

console.log(newPerson);
console.log(person);


//immutability

const book = {
    namaAwal: 'Harry',
    namaAkhir: 'Protter'
}

const newBook = (newNamaAkhir, book) => {
    return { ...book, namaAkhir: newNamaAkhir }
}

const createNewBook = newBook("Potter", book);

console.log(createNewBook);

//Rekursif

const countDown = (start) => {
    console.log(start)
    if (start > 0) {
        countDown(start - 1)
    }
}

countDown(10);




//Higher Order Function

const hello = () => {
    console.log("Hello World!")
}

const haloOrang = (strings) => {
    console.log(`Hello ${strings}!`)
}

const doubleHello = (someFunction) => {
    someFunction();
}

const functionInFunction = () => {
    return () => {
        console.log("Hellow semua")
    }
}

hello();
haloOrang("rehan");
doubleHello(hello);
functionInFunction()();

//contoh lain dari higher order function
const namo = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if (!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}


const namaBaru = arrayMap(namo, (namy) => `${namy}!`);

console.log({
    namo,
    namaBaru,
});


/* Reusable Function */
//map()
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!` });

console.log(newArray);

//array filter()
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Number(item)); //bisa Boolean,String

console.log(truthyArray);

const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

//Array Reduce
const murid = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];
//arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
const totalScore = murid.reduce((acc, siswa) => acc + siswa.score, 0);

console.log(totalScore);


//array some
const arrays = [1, 2, 3, 4, 5, 6]
const even = arrays.some(item => item % 2 === 0); //array some mengembalikan nilai boolean

console.log(even);

//array find
const murids = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const findJames = murids.find(studentName => studentName.name === 'James'); //nemuin murid yang bernama name dari data array murids
console.log(findJames);

//array sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

//

const arrays1 = [1, 30, 4, 1000];
//compareNumber fungsi untuk sorting dengan cara ngecek apabila a-b = negatif maka a diletakkan sebelum b, jika a-b=positif maka b diletakkan
//sebelum a dan jika a-b=0 maka tidak ada penukaran posisi, !!!catatan a dan b merupakan 2 angka dari arrays1 diperiksa dari paling kiri
const compareNumber = (a, b) => {
    return a - b;
};
const sorting = arrays1.sort(compareNumber);
console.log(sorting);



//array Every
//memeriksa apakah anggota dari array itu sesuai dengan kriteria yang diberikan atau tidak
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore); //array every mengembalikan nilai boolean
console.log(examPassed);


//array forEach fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array.
//cara deklaratif
const namaOrang = ['Harry', 'Ron', 'Jeff', 'Thomas'];

namaOrang.forEach((name) => {
    console.log(`Hello, ${name}!`);
});
//cara Imperatif
const namaUwong = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for (let i = 0; i < namaUwong.length; i++) {
    console.log(`Hello, ${namaUwong[i]}!`);
}