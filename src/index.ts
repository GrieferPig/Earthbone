export class Earthbone {
    sayHi = (waht?: string): Earthbone => {
        if(waht === undefined) {
            console.log("hoi")
        }else{
            console.log(`you said ${waht}`)
        }
        return this;
    }
}

const e = new Earthbone()
e.sayHi('bruh').sayHi('there yo go').sayHi();