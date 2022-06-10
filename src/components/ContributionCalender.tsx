import React, { useContext } from 'react';
import Calendar from 'react-github-contribution-calendar';
import { userInfoContext } from '../userHooks';
import { formatDate } from '../util/dateFomatter';

const until = formatDate(new Date(), "yyyy-MM-dd");
const weekNames = ['', 'M', '', 'W', '', 'F', ''];
const  monthNames= [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
const panelColors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];
const dateFormat = 'YYYY-MM-DD'



const ContributionCalender: React.FC = () => {
  const ctx = useContext(userInfoContext);
  const contributionData = ctx.userInfo?.contributionData;
  if (contributionData === undefined) {
    return <></>
  }
  return (
    <Calendar 
      panelColors={panelColors} 
      panelAttributes={undefined}  
      until={until}
      weekNames={weekNames}
      weekLabelAttributes={undefined}   
      monthNames={monthNames}
      monthLabelAttributes={undefined}
      values={contributionData} dateFormat={dateFormat}
    />
  );
}

export default ContributionCalender;