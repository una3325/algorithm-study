function solution(s){
    var answer = true;
    const stack = []
    
    if(s[0] == ")"){
        return false
    }
    
    for(let i=0; i<s.length; i++){
        if(s[i] == "("){
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }

    return stack.length > 0 ? false : true;
}