function fibs(num) {
    
    let arr = [0, 1]

    for (let i = 0; i <= num; i++) {
        let x = arr[i]
        let y = arr[i+1]

        let z = x + y

        arr.push(z)
    }

    console.log(arr)


}