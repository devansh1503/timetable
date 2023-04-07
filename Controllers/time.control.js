const { data } = require('./timedata')

function getthedata(day) {
    var res = []
    try {
        res = data[day]
    }
    catch (err) {
        res = []
    }
    return res
}

module.exports = {
    getthedata,
}
