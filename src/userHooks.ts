import { createContext, useCallback, useState } from "react";
import { ContributionData } from "./util/apiService";

export type UserInfo = {
    displayName: string | undefined;
    pictureUrl: string | undefined;
    userId: string | undefined;
    contributionData: ContributionData | undefined;
    content: string | undefined;
    noticeTime: string | undefined;
};

export type UserInfoContext = {
    userInfo: UserInfo;
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
    userInfo: {
        displayName:undefined,
        pictureUrl: undefined,
        userId: undefined,
        contributionData: undefined,
        content:undefined,
        noticeTime:undefined,
    },
    setUserInfo: () => {},
}
export const userInfoContext = createContext<UserInfoContext>(defaultContext);
