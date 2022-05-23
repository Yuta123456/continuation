import 'firebase/database';
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { firebaseApp } from "../const/firebase";
export const fetchData = (userId: string | undefined) => {
    if (!userId) {
        return null
    }
    // console.log(firebaseApp)
    const dbRef = ref(getDatabase(firebaseApp));
    // データ取得
    get(child(dbRef, 'users/' + userId + '/continuetion')).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
}