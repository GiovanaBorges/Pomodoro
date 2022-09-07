
export class Count{
    time:String
    constructor(time:String){
        this.time = time
    }
    getTime(){
        return this.time
    }
    setTime(time:String){
        let minutes = time.split(":",1).join()
        
        let seconds = time.split(":",2)

        window.setInterval(() => {
        
        },1000)
        this.time = time
    }
}
