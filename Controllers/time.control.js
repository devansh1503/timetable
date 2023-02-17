const {data} = require('./timedata')

function getthedata(){
    const currdate = new Date()
    const day = currdate.getDay()
    if(day > 5) return []
    const res = data[day-1]
    return res
}

module.exports = {
    getthedata,
}
