import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-github-contribution-calendar';
import { formatDate } from '../util/dateFomatter';



const ContributionCalender: React.FC = () => {
  // const panelColors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];
  const until = formatDate(new Date(), "yyyy-MM-dd");
  console.log(until);
  const weekNames = ['', 'M', '', 'W', '', 'F', ''];
  const  monthNames= [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  const panelColors = ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"];
  const dateFormat = 'YYYY-MM-DD'
  const values = {
    "2022-05-20": 1,
    "2022-04-21": 4,
    "2022-04-22": 100,
  };
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
        values={values} dateFormat={dateFormat}
        />
    </>
  );
}

export default ContributionCalender;