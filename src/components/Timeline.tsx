import Post from "./Post";
import React, { useContext, useEffect, useState } from 'react';
import { userInfoContext } from "../userHooks";
import { ContributionData, fetchData } from "../util/fetchData";
import contData2TimeLine from "../util/contData2TimeLine";
import { IonList } from "@ionic/react";
import HelpContent from "./HelpContent";
const Timeline: React.FC = () => {
    const ctx = useContext(userInfoContext);
    const [, setIsLoading] = useState(false);
    const timeLine = contData2TimeLine(ctx.userInfo?.contributionData);

    if (timeLine.length === 0) {
        return (<HelpContent/>);
    }

    return(
        <IonList>
            {timeLine.map((day, index) => <Post key={index} post_id={index.toString()} day={day}></Post>)}
        </IonList>
    );
}

export default Timeline;