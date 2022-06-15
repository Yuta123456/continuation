import React from 'react'
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react'
import { Link, useHistory } from 'react-router-dom'
import { menuController } from '@ionic/core/components'
// The import for menuController must come from @ionic/core/components.
type MenuProp = {
  menuId: string
}
const Menu: React.FC<MenuProp> = (props) => {
  const history = useHistory()
  menuController.close()
  return (
    <IonMenu side="start" contentId={props.menuId}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>メニュー</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button>使い方</IonItem>
          <IonItem
            button
            onClick={() => {
              history.push('setting')
              menuController.close()
            }}
          >
            設定
          </IonItem>
          <IonItem button>ログアウト</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
