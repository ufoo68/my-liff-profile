import { useEffect, useState } from 'react';
import { ProfileCard } from './ui-components';
import liff from '@line/liff';
import './App.css';
import { Profile } from './models';
import { DataStore } from 'aws-amplify';

function App() {
  useEffect(() => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(async () => {
      if (!liff.isLoggedIn()) {
        await liff.login();
      }
      const profile = await liff.getProfile();
      const profiles = await DataStore.query(Profile);
      const { bio, background_image } = profiles.find((value) => value.liff_id === profile.userId);
      setProfile({
        avatorImageSrc: profile.pictureUrl,
        userName: profile.displayName,
        backgroundImageSrc: background_image,
        bio,
      });
    }).catch((error) => {
      console.error(error);
    });
  }, [])
  const [profile, setProfile] = useState({
    avatorImageSrc: '',
    userName: 'user name',
    bio: 'user profile',
    backgroundImageSrc: ''
  });
  return (
    <div className="App">
      <ProfileCard ProfileCard={{ bio: profile.bio, background_image: profile.backgroundImageSrc }} overrides={{
        "View.Image[1]": {
          alt: 'アバター',
          src: profile.avatorImageSrc,
        },
        "View.Text[0]": {
          children: profile.userName,
        },
      }} />
    </div>
  );
}

export default App;
