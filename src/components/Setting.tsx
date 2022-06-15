import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonPicker } from '@ionic/react'
import { chevronDownOutline } from 'ionicons/icons'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { userInfoContext } from '../userHooks'
import { postSetting, SettingData } from '../util/apiService'
const Setting: React.FC = () => {
  // 継続内容を取ってくる必要がある
  const ctx = useContext(userInfoContext)
  const [content, setContent] = useState(ctx.userInfo.content || '')
  const [present] = useIonPicker()
  const [noticeTime, setNoticeTime] = useState(ctx.userInfo.noticeTime || '')
  const submit = () => {
    const userInfo = ctx.userInfo
    userInfo.noticeTime = noticeTime
    userInfo.content = content
    ctx.setUserInfo(userInfo)
    if (userInfo.userId === undefined) {
      return
    }
    const settingData: SettingData = {
      userId: userInfo.userId,
      content,
      noticeTime,
    }
    postSetting(settingData).then((statusCode) => {
      if (statusCode !== 200) {
        alert('設定が上手くいきませんでした')
      }
    })
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setting</IonTitle>
          <IonButtons></IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel>継続内容</IonLabel>
            <IonInput value={content} placeholder="Enter Input" onIonChange={(e) => setContent(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem
            onClick={() => {
              console.log('hey')
              return present({
                buttons: [
                  {
                    text: '設定',
                    handler: (selected) => {
                      setNoticeTime(selected.time.value)
                    },
                  },
                ],
                columns: [
                  {
                    name: 'time',
                    options: [...Array(24)].map((_, index) => {
                      return {
                        text: index.toString() + ':00',
                        value: index.toString() + ':00',
                      }
                    }),
                  },
                ],
              })
            }}
          >
            {/* FIXME: https://github.com/ionic-team/ionic-docs/blob/main/static/demos/api/picker/index.html */}
            <IonLabel>通知時間</IonLabel>
            {noticeTime}
            <IonIcon icon={chevronDownOutline} />
          </IonItem>
        </IonList>
        <Link to="home">
          {/* feedbackをする必要がある */}
          <IonButton
            onClick={() => {
              submit()
            }}
          >
            変更
          </IonButton>
        </Link>
      </IonContent>
    </IonPage>
  )
}
export default Setting
