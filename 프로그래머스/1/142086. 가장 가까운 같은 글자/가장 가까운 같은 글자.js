function solution(s) {
    const ans = [];
    const last = {};
    
    for(let i=0; i<s.length; i++){
        if(last[s[i]] == undefined){
            ans.push(-1)
        } else {
            ans.push(i-last[s[i]])
        }
        last[s[i]] = i
    }
    
    return ans;
}