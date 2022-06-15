import { IonLoading } from '@ionic/react'
import React from 'react'
type LoadingProps = {
  isLoading: boolean
}

const Loading: React.FC<LoadingProps> = (props) => {
  return <IonLoading isOpen={props.isLoading} message={'Please wait...'} />
}

export default Loading
