import { createContext, useCallback, useState } from "react";
import { ContributionData } from "./util/apiService";

export type UserInfo = {
    displayName: string;
    pictureUrl: string;
    userId: string;
    contributionData: ContributionData | undefined;
    content: string | undefined;
};

export type UserInfoContext = {
    userInfo: undefined | UserInfo;
    setUserInfo: (userInfo:UserInfo) => void;
}

export const useUserInfo: () => UserInfoContext = () => {
    // updateUserInfoはこの関数内でしか参照しないはず
    const [userInfo, updateUserInfo] = useState<UserInfo>();
    const setUserInfo = useCallback((userInfo: UserInfo) => {
        updateUserInfo(userInfo);
    }, []);
    return {
        userInfo,
        setUserInfo,
    } as UserInfoContext;
}

export const defaultContext: UserInfoContext = {
    userInfo: undefined,
    setUserInfo: () => {},
}
export const userInfoContext = createContext<UserInfoContext>(defaultContext);
