function solution(array, commands) {
    var answer = [];
    let n = 0
    
    for(let i=0; i<commands.length; i++){
        let arr = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>(a-b))
        n = commands[i][2]-1
        answer.push(arr[n])
    }
    
    return answer;
    
}