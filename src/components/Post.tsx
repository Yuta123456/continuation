import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import imgSrc from '../data/ava.png';
const Post: React.FC = () => {
  return (
    <IonItem>
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