import React, { useState } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import axios from 'axios';
import authConfig from '../googleAuth.json'


const GoogleLogin=()=>{
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        GoogleSignin.configure({
          webClientId: '70912332722-j7nbv1mms67fkt6m4aiekn5qdotlggpk.apps.googleusercontent.com',
          offlineAccess: true,
        });
      }, []);

      
      const handleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setLoggedIn(true);
          const response = await axios.post('https://parking-app-379214-default-rtdb.firebaseio.com/', {
            token: userInfo.idToken,
          });a
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      
      return (
        <Button title="Login with Google" onPress={handleLogin} />
      );
      

}

export default GoogleLogin;
