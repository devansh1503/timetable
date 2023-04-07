const { mdata } = require("./messdata")

function getthedata(day) {
    var res = []
    try {
        res = mdata[day]
    }
    catch (err) {
        res = []
    }
    return res
}

module.exports = {
    getmessdata
}