import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonItemGroup, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './FormToastsAnimation.css';
import { toast } from '../toast'

interface BirthdayForm {
  name: string,
  number: number,
  email: string,
  birthday: string,
}

const Tab3: React.FC = () => {
  const [formData, setFormData] = useState<BirthdayForm[]>([]);

  const [busy, setBusy] = useState(false);

  //  Attach change to input onChange function in forms
  const handleChange = (e: any) => {
    e.preventDefault();
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const saveUser = async (e: any) => {
    e.preventDefault()
    setBusy(true)
    toast("A toast to you for registering!", 8000)
    setBusy(false)
  }

  return (
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={(e) => saveUser(e)}>
        <IonItemGroup className="form-container">
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput
              type="text"
              required
              id="name"
              name={"name"}
              onIonChange={handleChange}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Phone Number</IonLabel>
            <IonInput
              type="number"
              required
              id="number"
              name={"number"}
              onIonChange={handleChange} />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              type="email"
              required
              id="email"
              name={"email"}
              onIonChange={handleChange}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Birthday</IonLabel>
            <IonDatetime
              displayFormat="MMMM DD, YY"
              display-timezone="utc"
              id="birthday"
              name={"birthday"}
              onIonChange={handleChange}
            ></IonDatetime>
          </IonItem>

          <IonButton className="register-button" size="default" type="submit">
            REGISTER
          </IonButton>
        </IonItemGroup>
     </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
