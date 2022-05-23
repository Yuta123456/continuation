import 'firebase/database';
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { key } from 'ionicons/icons';
import { firebaseApp } from "../const/firebase";
export const fetchData:(userId: string | undefined) => Promise<ContributionData | null> = async (userId: string | undefined) => {
    if (!userId) {
        return null
    }
    // console.log(firebaseApp)
    const dbRef = ref(getDatabase(firebaseApp));

    // データ取得
    const userData = await get(child(dbRef, 'users/' + userId + '/continuetion')).then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          return null;
        }
      }).catch((error) => {
        console.error(error);
      });
    const formatUserData = convertDate(userData);
    console.log(formatUserData);
    return formatUserData as ContributionData;
}
const convertDate = (userData: ContributionData) => {
  const resData: ContributionData = {};
  Object.entries(userData).forEach((ent) => {
    const k = ent[0];
    const v = ent[1];
    console.log(k, v);
    const key = k.slice(0, 4) + "-" + k.slice(4, 6) + "-" + k.slice(6, 8);
    const value = v ? 1 : v;
    resData[key] = value; 
  });
  return resData;
}
export interface ContributionData {
  [date: string]: number;
}