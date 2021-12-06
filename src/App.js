import { useEffect, useState } from 'react';
import { ProfileCard } from './ui-components';
import liff from '@line/liff'
import './App.css';

function App() {
  useEffect(() => {
    if (!liff.isLoggedIn) {
      liff.init({liffId: process.env.REACT_APP_LIFF_ID}).then(async () => {
        const profile = await liff.getProfile();
        console.log(profile);
      });
    }
  }, [])
  return (
    <div className="App">
      <ProfileCard overrides={{
        "View.Image[0]": {
          src: "https://pbs.twimg.com/profile_banners/2879298302/1611912105/1500x500",
        },
        "View.Image[1]": {
          src: "https://pbs.twimg.com/profile_images/1303683778179510272/qd5TvqMZ_400x400.jpg",
        },
        "View.Text[0]": {
          children: 'user name',
        },
        "View.Text[1]": {
          children: 'user profile',
        },
      }} />
    </div>
  );
}

export default App;
