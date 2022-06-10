import { ChartData } from "./contData2MonthData";
import { ContributionData } from "./fetchData";

const contData2AllData = (data: ContributionData|undefined) => {
    if (data === undefined) {
        return [];
    }
    const allDataDict: AllDataDict = {};
    
    Object.keys(data).forEach((date) => {
        const year = (new Date(date)).getFullYear();
        if (year in allDataDict) {
            allDataDict[year] += 1;
        } else {
            allDataDict[year] = 1;
        }
    });
    const chartData: ChartData[] = Object.keys(allDataDict).map((year) => {
        return {name: year, pv: allDataDict[parseInt(year)]};
    });
    // console.log(chartData, data);
    return chartData;
}

export interface AllDataDict {
    [year: number]: number
}

export default contData2AllData;