import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import imgSrc from '../data/ava.png';
import React, { useContext } from 'react';
import { userInfoContext } from "../userHooks";
type PostProps = {
    post_id: string,
    hey: string,
}
const Post: React.VFC<PostProps> = (props) => {
  const ctx = useContext(userInfoContext);
  return (
    <IonItem id={props.post_id}>
      <IonAvatar><img src={ctx.userInfo?.pictureUrl} alt="avatar"/></IonAvatar>
      <IonLabel>
        <h2>Finn</h2>
        <h3>I'm a big deal</h3>
        <p>Listen, I've had a pretty messed up day...</p>
      </IonLabel>
    </IonItem>
  );
}

export default Post;