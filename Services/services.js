module.exports = function (pool) {

    async function main() {
        try {
            let clothing = await pool.query(`select * from wardrobe`);
            let result = clothing.rows;
            return result;
        } catch (error) {
            console.log(error)
        }
    }

 async function weather(temperature) {

     try {
         let clothing = await pool.query(`select * from wardrobe where type_clothing = $1`, [temperature]);
         let temp = clothing.rows;
         return temp;
     } catch (error) {
         console.log(error)
     }
 }
 async function temperatureChecker(temp){
    if(temp <= 15){
        return 'cold'
    }
    else if(temp > 15 && temp <= 21){
        return 'mid'
    }
    else if ( temp > 21){
        return 'hot'
    }
 }

    return {
        main,
        weather,
        temperatureChecker
    }


}