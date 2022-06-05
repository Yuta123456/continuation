import Post from "./Post";
import React, { useContext, useEffect, useState } from 'react';
import { userInfoContext } from "../userHooks";
import { ContributionData, fetchData } from "../util/fetchData";
import contData2TimeLine from "../util/contData2TimeLine";
import { IonList } from "@ionic/react";
const Timeline: React.FC = () => {
    const ctx = useContext(userInfoContext);
    const [ContributionData, setContinuationData] = useState<ContributionData>()
    const [, setIsLoading] = useState(false);
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
    
    if (!ctx.userInfo) {
        return (
            <div>
                タイムラインを閲覧するためにはログインが必要です
            </div>
        );
    }
    
    const timeLine = contData2TimeLine(ContributionData);
    return(
        <IonList>
            {timeLine.map((day, index) => <Post key={index} post_id={index.toString()} day={day}></Post>)}
        </IonList>
    );
}

export default Timeline;