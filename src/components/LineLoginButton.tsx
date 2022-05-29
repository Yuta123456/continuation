import CONFIG from '../const/config';
import imgSrc from '../data/LINE_Login_Button_Image/Line_Login_Button_Image/images/DeskTop/1x/32dp/btn_login_base.png';
import getRandomString from '../util/getRandomString';
import React from 'react';
const LineLoginButton: React.FC = () => {
    const lineState = getRandomString();
    // const productionUrl = "https%3A%2F%2Fp5btwrqmma.appflowapp.com%2Fauth";
    const localUrl = "http%3A%2F%2Flocalhost%3A8100%2Fauth";
    console.log();
    return (
        <div>
            <button>
                <a href={"https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id="+ CONFIG["CHANNEL_ID"]+"&redirect_uri=" + localUrl + "&state="+lineState+"&scope=profile%20openid"}>
                <img src={imgSrc} alt="icon"/>
                </a>
            </button>
        </div>
    );
}

export default LineLoginButton;

