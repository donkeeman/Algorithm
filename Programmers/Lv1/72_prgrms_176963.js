function solution(name, yearning, photo) {
    const answer = photo.map(photoArr => {
        let sum = 0;
        photoArr.forEach(person => {
            if(name.includes(person)){
                sum += yearning[name.indexOf(person)];
            }
        })
        return sum;
    })
    return answer;
}