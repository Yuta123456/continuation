import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import { useEffect } from "react";
import imgSrc from '../data/ava.png';
type PostProps = {
    post_id: string,
    hey: string,
}
const Post: React.VFC<PostProps> = (props) => {
  return (
    <IonItem id={props.post_id}>
      <IonAvatar><img src={imgSrc}/></IonAvatar>
      <IonLabel>
        <h2>Finn</h2>
        <h3>I'm a big deal</h3>
        <p>Listen, I've had a pretty messed up day...</p>
      </IonLabel>
    </IonItem>
  );
}

export default Post;