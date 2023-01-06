const { mdata } = require("./messdata")

function getmessdata(){
    const currdate = new Date()
    const day = currdate.getDay()-1
    var hrs = currdate.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).split(',')[1].split(":")[0]
    var ampm = currdate.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).split(',')[1].split(":")[2].split(" ")[1]
    hrs = ampm=="PM"? +hrs+12 : +hrs
    const tt = mdata[day]
    var res = {}
    tt.forEach(element => {
        if(element.startHour<=hrs && element.endHour>=hrs){
            res = element
        }
    });
    return res
}

module.exports = {
    getmessdata
}