import { IonText } from '@ionic/react'
import React from 'react'

const HelpContent = () => {
  return (
    <div className="ion-text-center" style={{ marginTop: '20px' }}>
      <IonText color="medium">
        もしかして、何も表示されてませんか？
        <br />
        右上のヘルプボタンで使い方を見てみましょう。
      </IonText>
    </div>
  )
}

export default HelpContent
