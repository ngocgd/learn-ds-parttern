class Observer {

    constructor(name) {
        this.namePick = name
    }

    updateStatus(location) {
        this.goToHelp(location)
    }

    goToHelp(location) {
        console.log(`${this.namePick} :::::::::::::::Ping   ${JSON.stringify(location)}`)
    }

}
class Subject{

    constructor(){
        this.observerList = []
    }

    addObserver(observer){
        this.observerList.push(observer)
    }

    notify(location){
        this.observerList.forEach((Observer)=>{
            Observer.updateStatus(location)
        })
    }
    
}
const subject = new Subject()

//pick champion
const lux = new Observer('Support')
const yasuo = new Observer('Mid')

subject.addObserver(lux)
subject.addObserver(yasuo)

//push notify
subject.notify({long : 123,lat : 120})