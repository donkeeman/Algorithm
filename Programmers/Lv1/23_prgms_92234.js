function solution(id_list, report, k) {
    let answer = {};
    id_list.map(id => answer[id] = 0);
    let reportResult = {}; // 신고
    report.map(r => {
        const reporter = r.split(" ")[0];
        const reported = r.split(" ")[1];
        if(!reportResult[reported]){
            reportResult[reported] = new Set();
        }
        reportResult[reported].add(reporter);
    });
    Object.values(reportResult)
        .filter(v => v.size >= k)
        .map(v => v.forEach(reporter => answer[reporter]++));
    
    return Object.values(answer);
}