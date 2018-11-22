new Vue({
    el: '.app',
    data: {
        clothing_type: '',
        clothing_types: ["cold", "mid", "hot"],
        current_clothing: [],
        city: '',
        temp: 0
    },

    methods: {
        getWeather: function () {
            var self = this;
            axios
                .get("http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=188b68e6b443a5380ce7ee0f0bb49cfc")
                .then(function (result) {
                    console.log(result.data.coord);
                    self.getWeatherByCoords(result.data.coord)
                });
        },

        getWeatherByCoords: function (coords) {
            var self = this;
            const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + coords.lat + "&lon=" + coords.lon + "&APPID=188b68e6b443a5380ce7ee0f0bb49cfc";
            console.log(url);
            axios
                .get(url)
                .then(function (result) {

                    var temp = Number(result.data.main.temp - 273.15).toFixed();
                    console.log(temp);
                    self.temp = Number(temp);
                    // self.getWeatherByCoords(result.data.coord)
                });
        },

        getClothing : function () {
            var self = this;
            axios
                .get('/api/clothing/' + this.current_style)
                .then(function (results) {
                    self.current_clothing = results.data.data;
                })
        } 
    },
    computed: {
        current_style: function () {
            if (this.temp < 10) {
                return 'cold'
            } else if (this.temp >= 10 && this.temp <= 20) {
                return 'mid'
            }
            return 'hot'
        }
    },
    watch: {
        clothing_type: function () {
            var self = this;
            axios
                .get('/api/clothing/' + this.current_style)
                .then(function (results) {
                    self.current_clothing = results.data.data;
                })
        },
        temp : function() {
            this.getClothing()
        }
    }
})
