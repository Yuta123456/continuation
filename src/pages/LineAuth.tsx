import { useContext, useEffect } from "react";
import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import CONFIG from '../const/config';
import queryString from 'query-string';
import { userInfoContext } from "../userHooks";
import { redirect_uri } from "../const/url";
const LineAuth: React.FC = () => {
    // // https://p5btwrqmma.appflowapp.com/auth?code=hCoPlzHPvkrlmWF99y0A&state=TuXObFgIXfHRLAoB
    const search = useLocation().search;
    const history = useHistory();
    const ctx = useContext(userInfoContext);
    
    useEffect(() => {
        const params = queryString.parse(search);
        const error = params['error'];
        if (error === null) {
            // TODO: 絶対もっといろいろやらないとまずい
            window.alert('認証が許可されなかったため、このアプリを使用できません');
            return;
        }
        const code = params['code'];
        // const state = params['state'];
        // TODO: stateの一致チェック

        fetch('https://api.line.me/v2/oauth/accessToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=authorization_code&code=' + code + '&client_id=' + CONFIG["CHANNEL_ID"]+'&client_secret=' + CONFIG["CHANNEL_SECRET"] + '&redirect_uri=' + redirect_uri
        }).then(async (res) => {
            const resJson = await res.json();
            return resJson['access_token'];
        })
        .then(async (accessToken) => {
            // curl -v -X GET https://api.line.me/v2/profile \ -H 'Authorization: Bearer {access token}'
            fetch('https://api.line.me/v2/profile', {
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                }
            }).then((res) => res.json())
            .then((res) => {ctx.setUserInfo(res)});
            // TODO: useContent等でユーザ情報を取得
            history.push("/home");
        }).catch((e) => {console.log(e);});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <></>
    );
}

export default LineAuth;