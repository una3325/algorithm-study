function solution(name, yearning, photo) {
    var answer = [];
    let sum = 0;
    
    photo.map((arr) => {
        name.map((e,i)=>{
            if(arr.includes(e)){
                sum += yearning[i]
            }else(
                sum += 0
            )
        })
        answer.push(sum)
        sum = 0
    })
    return answer;
}