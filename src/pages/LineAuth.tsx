import { useContext, useEffect } from 'react'
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import CONFIG from '../const/config'
import queryString from 'query-string'
import { userInfoContext } from '../userHooks'
import { redirect_uri } from '../const/url'
import { fetchData, getUserData } from '../util/apiService'
import { IonLoading } from '@ionic/react'

type LineAuthProp = {
  lineState: string
}
const LineAuth: React.FC<LineAuthProp> = (props) => {
  // // https://p5btwrqmma.appflowapp.com/auth?code=hCoPlzHPvkrlmWF99y0A&state=TuXObFgIXfHRLAoB
  const search = useLocation().search
  const history = useHistory()
  const ctx = useContext(userInfoContext)

  useEffect(() => {
    const lineLoginAndSetData = async () => {
      const params = queryString.parse(search)
      const error = params['error']
      // これあってる？
      if (error === null) {
        // TODO: 絶対もっといろいろやらないとまずい
        window.alert('認証が許可されなかったため、このアプリを使用できません')
        return
      }
      const code = params['code']
      // const state = params['state'];
      // // ログイン時のランダム生成された文字列と違うもののため、
      // // クロスサイトスクリプティングの恐れがある？
      // console.log(state, props.lineState);
      // if (state !== props.lineState) {
      //     window.alert("違うブラウザからログインされた可能性があります。");
      //     return;
      // }

      const accessToken = await fetch('https://api.line.me/v2/oauth/accessToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=authorization_code&code=' + code + '&client_id=' + CONFIG['CHANNEL_ID'] + '&client_secret=' + CONFIG['CHANNEL_SECRET'] + '&redirect_uri=' + redirect_uri,
      }).then(async (res) => {
        const resJson = await res.json()
        return resJson['access_token']
      })

      // curl -v -X GET https://api.line.me/v2/profile \ -H 'Authorization: Bearer {access token}'
      const profileData = await fetch('https://api.line.me/v2/profile', {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }).then((res) => res.json())

      const userId: string = profileData.userId
      const userData = await getUserData(userId)
      const userInfo = {
        ...profileData,
        ...userData,
      }
      console.log(userInfo)
      ctx.setUserInfo(userInfo)
      // console.log(ctx.userInfo);
      history.push('/home')
    }
    lineLoginAndSetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <IonLoading spinner={'bubbles'} isOpen={true} message={'loading...'} />
}

export default LineAuth
