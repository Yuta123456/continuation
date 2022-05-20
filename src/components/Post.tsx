import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import imgSrc from '../data/ava.png';
import React from 'react';
type PostProps = {
    post_id: string,
    hey: string,
}
const Post: React.VFC<PostProps> = (props) => {
  return (
    <IonItem id={props.post_id}>
      <IonAvatar><img src={imgSrc} alt="avatar"/></IonAvatar>
      <IonLabel>
        <h2>Finn</h2>
        <h3>I'm a big deal</h3>
        <p>Listen, I've had a pretty messed up day...</p>
      </IonLabel>
    </IonItem>
  );
}

export default Post;