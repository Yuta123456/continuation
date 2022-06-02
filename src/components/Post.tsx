import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import imgSrc from '../data/ava.png';
import React, { useContext } from 'react';
import { userInfoContext } from "../userHooks";
type PostProps = {
    post_id: string,
    day: string,
}
const Post: React.FC<PostProps> = (props) => {
  const ctx = useContext(userInfoContext);
  const imgUrl = ctx.userInfo?.pictureUrl || imgSrc;
  return (
    <IonItem id={props.post_id}>
      <IonAvatar><img src={imgUrl} alt="avatar"/></IonAvatar>
      <IonLabel>
        <h2>{ctx.userInfo?.displayName}</h2>
        <p>{props.day} 継続成功</p>
      </IonLabel>
    </IonItem>
  );
}

export default Post;