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
}) // сокращенное написание функции

const cars = [
    car('Honda', 'Civic', 'Kavinski', '+7123123123', 'Images/Civic.jpg', 2015),
    car('Mitsubishi', 'Lancer', 'Keks', '+7956178913', 'Images/Lancer.jpg', 2013),
    car('Dodge', 'GT', 'Alex', '+753144521', 'Images/Dodge.jpeg', 2016)
]


new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: ''
    },
    methods: {
        selectCar: function (index) {

            this.car = cars[index] // Выбор тачки из списка по нажатию
            this.selectedCarIndex = index // логика для выбора из списка
        }
    },
    computed: {
        PhoneBtnText() {
            return this.phoneVisibility ? 'Hide Phone' : 'Show phone'
        },
        filteredCars (){
            var self = this
            const filtered = this.cars.filter(function(car){
                return car.name.indexOf(self.search) > -1
            })
            return filtered
        }
    },

})