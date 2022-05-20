import { env } from "process";
import { useEffect } from "react";
import React from 'react';
import { useLocation } from "react-router-dom";
import CONFIG from "../const/config";


const LineAuth: React.FC = () => {
    // // https://p5btwrqmma.appflowapp.com/auth?code=hCoPlzHPvkrlmWF99y0A&state=TuXObFgIXfHRLAoB
    const search = useLocation().search;
    const params = new URLSearchParams(search);
    useEffect(() => {
        const error = params.get('error');
        if (error !== null) {
            // TODO: 絶対もっといろいろやらないとまずい
            window.alert('認証が許可されなかったため、このアプリを使用できません');
            return;
        }
        const code = params.get('code');
        const state = params.get('state');
        // TODO: stateの一致チェック

        fetch('https://api.line.me/oauth2/v2.1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=authorization_code&code='+code+'&client_id='+ CONFIG["CHANNEL_ID"]+'&client_secret=' + CONFIG["CHANNEL_SECRET"]
        }).then((res) => {
            const resJson = res.json();
        });
    },[]);
    return(
        <div>認証画面</div>
    );
}

export default LineAuth;
