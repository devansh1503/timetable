const {data} = require('./timedata')

function getthedata(){
    const currdate = new Date()
    const day = currdate.getDay()
    var res = []
    try{
        res = data[day-1]
    }
    catch(err){
        res = []
    }
    return res
}

module.exports = {
    getthedata,
}
