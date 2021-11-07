import { CreateAnimation, IonAvatar, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonNote, IonPage, IonSkeletonText, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import ChrisProPic from '../assets/chrispro.jpeg'
import Typewriter from "typewriter-effect";
import './TypeWriterPersonalBot.css';

const Tab2: React.FC = () => {

  const delay = 3;
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [show]
  );


  return (
<IonPage>
      <IonContent fullscreen>
      {show === false ?
         <div id="heading-container">
         <IonAvatar>
           <img id="profile-image" src={ChrisProPic} alt="" />
         </IonAvatar>

         <div className="custom-skeleton skeleton-text">
           <IonSkeletonText animated style={{ width: "70%" }} />
           <IonSkeletonText animated style={{ width: "60%" }} />
           <IonSkeletonText animated style={{ width: "50%" }} />

           {show === false ?
           <IonNote>
             Chris is typing
             <Typewriter
               options={{
                 strings: ["..."],
                 autoStart: true,
                 loop: true,
               }}
             />
           </IonNote>
           : null }
         </div>
       </div>
        : 
        <div id="heading-container">
            <IonAvatar>
              <img id="profile-image" src={ChrisProPic} alt="" />
            </IonAvatar>

            <div className="custom-skeleton skeleton-text">
              <IonText style={{ width: "70%", fontSize: "20px" }}>
                Hello and welcome to this loading animation!
              </IonText>
              <IonNote>
                Read
                <Typewriter
                  options={{
                    strings: ["..."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </IonNote>
            </div>
          </div>
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
