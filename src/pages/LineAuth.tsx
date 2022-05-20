import { useEffect } from "react";
import { useLocation } from "react-router-dom";


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


    },[]);
    return(
        <div>認証画面</div>
    );
}

export default LineAuth;

// curl -v -X POST https://api.line.me/oauth2/v2.1/token \
// -H 'Content-Type: application/x-www-form-urlencoded' \
// -d 'grant_type=authorization_code' \
// -d 'code={code}' \
// --data-urlencode 'redirect_uri={https%3A%2F%2Fp5btwrqmma.appflowapp.com%2Fauth}' \
// -d 'client_id={1657152041}' \
// -d 'client_secret={41b2f58d6f6a2bd41ecc08deca6db27a}' \
// -d 'code_verifier=wJKN8qz5t8SSI9lMFhBB6qwNkQBkuPZoCxzRhwLRUo1'