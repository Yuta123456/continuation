import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-github-contribution-calendar';
import { userInfoContext } from '../userHooks';
import { formatDate } from '../util/dateFomatter';
import { ContributionData, fetchData } from '../util/fetchData';
import Loading from './Loading';



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
  const [isLoading, setIsLoading] = useState(false);
  // 変数名がゴミすぎる
  useEffect(() => {
    const _fetch = async () => {
      const newData = await fetchData(ctx.userInfo?.userId);
      if (newData !== null) {
        setContinuationData(newData);
      }
    }
    setIsLoading(true);
    _fetch().finally(() => setIsLoading(false));
  }, [ctx.userInfo]);
  return (
    <>
    {
      isLoading ? <Loading isLoading={isLoading}/> : <Calendar 
      panelColors={panelColors} 
      panelAttributes={undefined}  
      until={until}
      weekNames={weekNames}
      weekLabelAttributes={undefined}   
      monthNames={monthNames}
      monthLabelAttributes={undefined}
      values={continuationData} dateFormat={dateFormat}
      />
    }
    </>  
  );
}

export default ContributionCalender;