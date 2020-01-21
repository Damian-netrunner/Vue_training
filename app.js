// function car (name, model, owner, phone, image, year) {
//    return {
//        name, model, owner, phone, image, year
//    }
// }

const car = (name, model, owner, phone, image, year) => ({
    name,
    model,
    owner,
    phone,
    image,
    year
}); // сокращенное написание функции
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Honda', 'Civic', 'Kavinski', '+7123123123', 'Images/Civic.jpg', 2015),
    car('Mitsubishi', 'Lancer', 'Keks', '+7956178913', 'Images/Lancer.jpg', 2013),
    car('Dodge', 'GT', 'Alex', '+753144521', 'Images/Dodge.jpeg', 2016)
]


new Vue({
    el: '#app',
    data: {
        logs: [],
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function (index) {

            this.car = cars[index] // Выбор тачки из списка по нажатию
            this.selectedCarIndex = index // логика для выбора из списка
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(log(`Success Order: ${this.car.name} - ${this.car.model}`, 'ok'))
        },
        cancelOrder (){
            this.modalVisibility = false
            this.logs.push(log(`Cancelled Order: ${this.car.name} - ${this.car.model}`, 'cnl'))
        }
    },
    computed: {
        PhoneBtnText() {
            return this.phoneVisibility ? 'Hide Phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })

        }
    },
    filters: {
        date(value){
            return value.toLocaleString()
        }
    }

})