function solution(my_string, index_list) {
    let strArr = my_string.split("")
    let res = ""
    for(let i=0; i<index_list.length; i++){
        res += strArr[index_list[i]]
    }
    return res;
}