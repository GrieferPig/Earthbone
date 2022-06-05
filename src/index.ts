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