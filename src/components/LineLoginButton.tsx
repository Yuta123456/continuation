import imgSrc from '../data/LINE_Login_Button_Image/Line_Login_Button_Image/images/DeskTop/2x/44dp/btn_login_base.png';
import getRandomString from '../util/getRandomString';

const LineLoginButton: React.FC = () => {
    const lineState = getRandomString();
    
    return (
        <div>
            <button>
                <a href={"https://access.line.me/dialog/oauth/weblogin?response_type=code&client_id=1657152041&redirect_uri=https%3A%2F%2Fp5btwrqmma.appflowapp.com%2Fauth&state="+lineState+"scope=profile%20openid"}>
                <img src={imgSrc}/>
                </a>
            </button>
        </div>
    );
}

export default LineLoginButton;

