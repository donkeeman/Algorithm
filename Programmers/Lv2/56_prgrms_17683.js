function solution(m, musicinfos) {
    const songs = {};
    m = convertSharp(m);
    for(let i = 0; i<musicinfos.length; i++){
        const infoArr = musicinfos[i].split(",");
        const runtime = getRuntime(infoArr[0], infoArr[1]);
        const title = infoArr[2];
        infoArr[3] = convertSharp(infoArr[3])
        const melody = infoArr[3].repeat(Math.ceil(runtime / infoArr[3].length)).slice(0, runtime);
        if(melody.includes(m)){
            songs[title] = runtime;
        }
    }
    const answer = Object.keys(songs).sort((a, b) => {
        if(songs[a] > songs[b]){
            return -1;
        }
        else{
            return 1;
        }
    })
    return answer.length === 0 ? "(None)" : answer[0];
    
    function convertSharp(str){
        const change = str.match(/[A-Z]{1}#/g);
        if(change){
            change.map(x => {
                str = str.replace(x, x.toLowerCase()[0]);
            })
        }
        return str;
    }
    
    function getRuntime(start, end){
        const startArr = start.split(":").map(x => parseInt(x));
        const endArr = end.split(":").map(x => parseInt(x));
        let hour, minute;
        if(endArr[1] < startArr[1]){
            minute = endArr[1] + 60 - startArr[1];
            hour = endArr[0] - startArr[0] - 1;
        }
        else{
            minute = endArr[1] - startArr[1];
            hour = endArr[0] - startArr[0];
        }
        return hour * 60 + minute;
    }
}