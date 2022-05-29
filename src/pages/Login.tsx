import LineLoginButton from "../components/LineLoginButton";
import React from 'react';
const Login: React.FC = () => {
    return (
    <>
        <div>このアプリを使用するためにはログインが必要です</div>
        <LineLoginButton/>
    </>
    );
}

export default Login;