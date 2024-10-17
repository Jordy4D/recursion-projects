function fibs(num) {
    
    let arr = [0, 1]

    for (let i = 0; i <= num ; i++) {
        let x = arr[i]
        let y = arr[i+1]

        let z = x + y

        arr.push(z)
    }

    console.log(arr)
}

function fibs2(num) {
    let arr = []

    let a = 0
    let b = 1


}

function fibsRec(num) {
    let arr = []
    let a = 1;
    let b = 0;
    let temp;
    arr.push(b)

    if (arr.length === num) {return};

    if (arr.length < num) {
        temp = a;
        a += b
        b = temp
        fibsRec(num - 1)
        
    }
    
    console.log(arr)

}