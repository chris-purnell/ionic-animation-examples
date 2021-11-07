import { CreateAnimation, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './CardFlip.css';

const Tab1: React.FC = () => {

  let [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    setPlayAnimation(false);
  }, [playAnimation]);

  return (
<IonPage>
      <IonContent fullscreen>
        <IonContent>
          <CreateAnimation
            duration={500}
            fromTo={{
              property: "transform",
              fromValue: "",
              toValue: `rotateY(360deg)`,
            }}
            easing="ease-in"
            play={playAnimation}
            stop
          >
            <IonCard
              style={{
                height: "40vh",
                borderRadius: "25px",
                marginTop: "10rem"
              }}
            >

              <IonCard 
                style={{
                  height: "15vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IonCardContent>
      
                </IonCardContent>
              </IonCard>
            </IonCard>
          </CreateAnimation>

          <IonButton
            onClick={() => {
              setPlayAnimation(true);
            }}
            style={{
              display: "block",
              margin: "0 auto",
              height: "60px",
              width: "200px",
              marginTop: "13vh",
            }}
            className="gradient-border"
          >
            Flip the Card
          </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
