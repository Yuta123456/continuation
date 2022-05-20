import CONFIG from '../const/config';
import imgSrc from '../data/LINE_Login_Button_Image/Line_Login_Button_Image/images/DeskTop/2x/44dp/btn_login_base.png';
import getRandomString from '../util/getRandomString';
import React from 'react';
const LineLoginButton: React.FC = () => {
    const lineState = getRandomString();
    console.log(CONFIG);
    console.log(process.env);
    return (
        <div>
            <button>
                <a href={"https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id="+ CONFIG["CHANNEL_ID"]+"&redirect_uri=https%3A%2F%2Fp5btwrqmma.appflowapp.com%2Fauth&state="+lineState+"scope=profile%20openid"}>
                <img src={imgSrc}/>
                </a>
            </button>
        </div>
    );
}

export default LineLoginButton;

