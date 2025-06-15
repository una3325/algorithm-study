function solution(priorities, location) {
    let answer = 0;

    while (priorities.length > 0) {
        if (priorities[0] === Math.max(...priorities)) {
            priorities.shift();
            answer++;
            if (location === 0) {
                return answer;
            }
            location--;
        } else {
            priorities.push(priorities.shift());
            location = location === 0 ? priorities.length - 1 : location - 1;
        }
    }

    return answer;
}
