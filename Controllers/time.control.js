const {data} = require('./timedata')

function getthedata(){
    const days = ["monday","tuesday","wednesday","thursday","friday"]
    const currdate = new Date()
    console.log(currdate)
    const day = currdate.getDay()-1
    const hrs = currdate.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}).split(',')[1].split(":")[0]
    const tt = data[days[day]]
    var res = {
        "Subject":"Kitna Padega bsdk",
        "time":hrs,
        "room":day
    }
    tt.forEach(element => {
        if(element.hour<=hrs && element.ehour>=hrs){
            res = element
        }
    });
    return res
}

module.exports = {
    getthedata,
}
