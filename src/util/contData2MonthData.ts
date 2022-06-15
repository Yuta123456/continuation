import { formatDate } from "./dateFomatter";
import { ContributionData } from "./apiService";

const contData2MonthData = (data: ContributionData|undefined) => {
    if (data === undefined) {
        return [];
    }
    const monthDataDict: MonthDataDict = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };
    
    [...Array(4)].forEach((_, index) => {
        const startDate = new Date();
        const untilDate = new Date();
        startDate.setDate(startDate.getDate() - (index + 1) * 7);
        untilDate.setDate(untilDate.getDate() - (index * 7));
        // console.log(startDate, untilDate);
        const startDateStr = formatDate(startDate, "yyyy-MM-dd");
        const untilDateStr = formatDate(untilDate, "yyyy-MM-dd");
        const cnt = Object.keys(data).filter((v) => startDateStr < v && v < untilDateStr).length;
        monthDataDict[index+1] = cnt;
    })
    const chartData: ChartData[] = Object.keys(monthDataDict).map((key) => {
        const k = parseInt(key);
        const name = k;
        const pv = monthDataDict[k];
        return {name: name.toString() + "w ago", pv};
    });
    chartData.reverse();
    return chartData;
}

export interface MonthDataDict {
    [week: number]: number
}
export interface ChartData {
    name: string,
    pv: number,
};
export default contData2MonthData;