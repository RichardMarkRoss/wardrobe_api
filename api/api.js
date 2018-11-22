module.exports = function (wardobe) {

    async function all(req, res) {
        try {

            let results = await wardobe.main()
            res.json({
                status: 'success',
                data: results
            });  
        } catch (err) {
            next(err)
      }
    }
    async function clothesForWeather(req, res) {
        let dayWeather = req.params.weather_rating;
        try {
            let datas = await wardobe.weather(dayWeather);
            res.json({
                status: 'success',
                data: datas
            })
        } catch (err) {
            next(err)
        }
    }


    return {
        all,
        clothesForWeather
    }


}