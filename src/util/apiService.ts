import 'firebase/database';
import { api_url } from '../const/url';
export const fetchData:(userId: string | undefined) => Promise<any> = async (userId: string | undefined) => {
    if (!userId) {
        return null
    }
    // データ取得
    const userData = await fetch(api_url + "/userdata?userId="+userId)
    .then((res) => res.json());
    return userData;
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

// 型名が流石にゴミすぎる
export async function getUserData(userId: string):Promise<UserDataFromBackEnd> {
    const data =  await fetchData(userId);
    const contributionData = convertDate(data["continuetion"]);
    const content = data["contents"];
    return {
      contributionData,
      content,
    };
}
export interface UserDataFromBackEnd {
  contributionData: ContributionData;
  content: string;
}

export async function postSetting(settingData: SettingData): Promise<number> {

  const statusCode = await fetch(api_url + "/setting",
  {
    method: "POST",
    headers: {
      "content-Type": "application/json"
    },
    body: JSON.stringify(settingData),
  }
  ).then((res) => res.status).catch((e) => {console.log(e);return 400});
  return statusCode
}

export interface SettingData {
  userId: string,
  content: string,
  noticeTime: string,
}