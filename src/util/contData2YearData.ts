import { ChartData } from "./contData2MonthData";
import { formatDate } from "./dateFomatter";
import { ContributionData } from "./fetchData";

const contData2YearData = (data: ContributionData|undefined) => {
    if (data === undefined) {
        return [];
    }
    const yearDataDict: YearDataDict = {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
    };
    // today.setDate(today.getDate() - i)
    const year = [...Array(365)].map((_, index) => {
        const today = new Date();
        today.setDate(today.getDate() - index);
        return today;
    })
    .forEach((day) => {
        const dayStr = formatDate(day, "yyyy-MM-dd");
        if (dayStr in data) {
            const month = day.getMonth();
            yearDataDict[month+1] += 1;
        }
    });
    const chartData: ChartData[] = Object.keys(yearDataDict).map((key) => {
        const k = key;
        const name = k;
        const pv = yearDataDict[k];
        return {name, pv};
    });
    
    chartData.sort((a, b) => {
        const f = (x: number) => {
            const month = (new Date()).getMonth() + 1;
            return 12 - ((x + 12 - month) % 12);
        }
        return f(parseInt(a.name)) > f(parseInt(b.name)) ? 1 : -1;
    });

    return chartData;
}

export interface YearDataDict {
    [year: string]: number
}
export default contData2YearData;