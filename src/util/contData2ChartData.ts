import { formatDate } from "./dateFomatter";
import { ContributionData } from "./fetchData";

const contData2ChartData = (data: ContributionData|undefined) => {
    if (data === undefined) {
        return [];
    }
    const chartDataDict: ChartDataDict = {};
    // today.setDate(today.getDate() - i)
    const year = [...Array(365)].map((_, index) => {
        const today = new Date();
        today.setDate(today.getDate() - index);
        return today;
    })
    .forEach((day) => {
        const dayStr = formatDate(day, "yyyy-MM-dd");
        // console.log(dayStr, data)
        if (dayStr in data) {
            const month = day.getMonth();
            if ((month+1) in chartDataDict) { 
                chartDataDict[month+1] += 1;
            }else {
                chartDataDict[month+1] = 0;
            }
        }
    });
    const chartData: ChartData[] = Object.keys(chartDataDict).map((key) => {
        const k = parseInt(key);
        const name = k;
        const pv = chartDataDict[k];
        return {name, pv};
    })
    console.log(chartData, chartDataDict);
    return chartData;
}

export interface ChartDataDict {
    [month: number]: number
}
export interface ChartData {
    name: number,
    pv: number,
};
export default contData2ChartData;