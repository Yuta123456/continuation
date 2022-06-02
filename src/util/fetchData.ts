import 'firebase/database';
import { api_url } from '../const/url';
export const fetchData:(userId: string | undefined) => Promise<ContributionData | null> = async (userId: string | undefined) => {
    if (!userId) {
        return null
    }
    // データ取得
    const userData = await fetch(api_url + "/userdata?userId="+userId)
    .then((res) => res.json());
    const formatUserData = convertDate(userData);
    return formatUserData as ContributionData;
}
const convertDate = (userData: ContributionData) => {
  const resData: ContributionData = {};
  Object.entries(userData).forEach((ent) => {
    const k = ent[0];
    const v = ent[1];
    const key = k.slice(0, 4) + "-" + k.slice(4, 6) + "-" + k.slice(6, 8);
    const value = v ? 1 : v;
    resData[key] = value; 
  });
  return resData;
}
export interface ContributionData {
  [date: string]: number;
}