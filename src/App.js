import { useEffect, useState } from 'react';
import { ProfileCard } from './ui-components';
import liff from '@line/liff'
import './App.css';

function App() {
  useEffect(() => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(async () => {
      if (!liff.isLoggedIn()) {
        await liff.login();
      }
      const profile = await liff.getProfile();
      setProfile({
        avatorImageSrc: profile.pictureUrl,
        userName: profile.displayName,
      });
    }).catch((error) => {
      console.error(error);
    });
  }, [])
  const [profile, setProfile] = useState({
    avatorImageSrc: '',
    userName: 'user name',
  })
  return (
    <div className="App">
      <ProfileCard overrides={{
        "View.Image[0]": {
          alt: '背景',
          src: "https://cdn.pixabay.com/photo/2021/11/27/12/16/mountain-6827881_960_720.jpg",
        },
        "View.Image[1]": {
          alt: 'アバター',
          src: profile.avatorImageSrc,
        },
        "View.Text[0]": {
          children: profile.userName,
        },
        "View.Text[1]": {
          children: 'user profile',
        },
      }} />
    </div>
  );
}

export default App;
