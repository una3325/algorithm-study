function solution(phone_number) {
    let arr = phone_number.split("");
    console.log(arr)
    for(let i=0; i<arr.length-4; i++){
        arr[i] = "*"
    }return arr.join("");
}