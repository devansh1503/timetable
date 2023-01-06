const {data} = require('./timedata')

function getthedata(){
    const days = ["monday","tuesday","wednesday","thursday","friday"]
    const currdate = new Date()
    const day = currdate.getDay()-1
    const hrs = currdate.getHours()
    const tt = data[days[day]]
    var res = {
        "Subject":"Kitna Padega bsdk",
        "time":"",
        "room":""
    }
    tt.forEach(element => {
        if(element.hour<=hrs && element.ehour>=hrs){
            res = element
        }
    });
    console.log(res)
    return res
}

module.exports = {
    getthedata,
}
