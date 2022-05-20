import { env } from "process";
import { useEffect } from "react";
import React from 'react';
import { useLocation } from "react-router-dom";
import CONFIG from '../const/config';
import queryString from 'query-string';

const LineAuth: React.FC = () => {
    // // https://p5btwrqmma.appflowapp.com/auth?code=hCoPlzHPvkrlmWF99y0A&state=TuXObFgIXfHRLAoB
    const search = useLocation().search;
    const params = queryString.parse(search);
    useEffect(() => {
        const error = params['error'];
        console.log(params);
        if (error === null) {
            // TODO: 絶対もっといろいろやらないとまずい
            window.alert('認証が許可されなかったため、このアプリを使用できません');
            return;
        }
        const code = params['code'];
        const state = params['state'];
        // TODO: stateの一致チェック

        fetch('https://api.line.me/v2/oauth/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=authorization_code&code='+code+'&client_id='+ CONFIG["CHANNEL_ID"]+'&client_secret=' + CONFIG["CHANNEL_SECRET"]+'&redirect_uri=http%3A%2F%2Flocalhost%3A8100%2Fauth'
        }).then(async (res) => {
            const resJson = await res.json();
            console.log(resJson);
        }).catch((e) => {console.log(e);});
    },[]);
    return(
        <div>認証画面</div>
    );
}

export default LineAuth;
