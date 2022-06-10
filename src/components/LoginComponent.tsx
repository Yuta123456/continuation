import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import LineAuth from "../pages/LineAuth";
import Login from "../pages/Login";
import getRandomString from "../util/getRandomString";

const LoginComponent = () => {
    const lineState = getRandomString();
    return (
        <IonRouterOutlet>
            <Route exact path="/auth">
                <LineAuth lineState={lineState}/>
            </Route>
            <Route exact path="/">
                <Login lineState={lineState}/>
            </Route>
        </IonRouterOutlet>
    );
}
export default LoginComponent;