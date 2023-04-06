// Your code here
let circle;
let triangle;
let square;

class Polygon{
    constructor(arr){
       this.arr = arr
    }
    get countSides(){
        return this.arr.length
    }

    get perimeter(){
        let sum = 0
        this.arr.map((side)=>{
         sum += side 
        })
        return sum
    }

}
class Triangle extends Polygon{
    constructor(arr){
        super(arr)
    }
   
    get isValid(){
        let res = true
        this.arr.map((side)=>{
            if(side >= (this.perimeter/2)){
                res = false
            }
        })
        return res
    }
}

class Square extends Polygon{
    constructor(arr){
        super(arr)
     }
     get area(){
        return this.arr[0]**2
     }
    get isValid(){
        let side = this.arr[0]
        let res = true
       
        this.arr.forEach(element => {
            if(element !== side){
               
                res = false
                
            }
        });
        return res
    }
}