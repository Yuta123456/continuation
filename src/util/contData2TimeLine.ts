import { formatDate } from "./dateFomatter";
import { ContributionData } from "./apiService";

const contData2TimeLine = (data: ContributionData|undefined) => {
    if (data === undefined) {
        return [];
    }

    const year = [...Array(365)].map((_, index) => {
        const today = new Date();
        today.setDate(today.getDate() - index);
        return today;
    }).map((day) => formatDate(day, "yyyy-MM-dd"));
    year.filter((day) => day in data);
    return year;
}

export default contData2TimeLine;