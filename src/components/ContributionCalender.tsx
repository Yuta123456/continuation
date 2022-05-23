import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';
import { userInfoContext } from '../userHooks';
import { formatDate } from '../util/dateFomatter';
import { ContributionData, fetchData } from '../util/fetchData';



const ContributionCalender: React.FC = () => {
  // const panelColors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];
  const until = formatDate(new Date(), "yyyy-MM-dd");
  const values = {
    "2022-05-20": 1,
    "2022-04-21": 4,
    "2022-04-22": 100,
  };
  const [continuationData, setContinuationData] = useState<ContributionData>(values); 
  const ctx = useContext(userInfoContext);
  const weekNames = ['', 'M', '', 'W', '', 'F', ''];
  const  monthNames= [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  const panelColors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];
  const dateFormat = 'YYYY-MM-DD'
  
  // 変数名がゴミすぎる
  useEffect(() => {
    const _fetch = async () => {
      // console.log();
      const newData = await fetchData(ctx.userInfo?.userId);
      console.log(newData);
      if (newData !== null) {
        setContinuationData(newData);
      }
    }
    _fetch();
    console.log("fetch");
  }, [ctx.userInfo]);
  return (
    <>
      <Calendar 
        panelColors={panelColors} 
        panelAttributes={undefined}  
        until={until}
        weekNames={weekNames}
        weekLabelAttributes={undefined}   
        monthNames={monthNames}
        monthLabelAttributes={undefined}
        values={continuationData} dateFormat={dateFormat}
        />
    </>
  );
}

export default ContributionCalender;