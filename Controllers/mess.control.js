const { mdata } = require("./messdata")

function getmessdata(){
    const currdate = new Date()
    var day = currdate.getDay()-1
    day = day===-1?6:day
    var hrs = +currdate.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).split(',')[1].split(":")[0]
    var ampm = currdate.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).split(',')[1].split(":")[2].split(" ")[1]
    if(ampm!=="AM" && hrs!==12){
        console.log("condition achieved")
        hrs = hrs+12
    }
    console.log(hrs)
    console.log(ampm)
    const tt = mdata[day]
    var res = {}
    tt.forEach(element => {
        if(element.startHour<=hrs && element.endHour>=hrs){
            res = element
        }
    });
    console.log(res)
    return res
}

module.exports = {
    getmessdata
}