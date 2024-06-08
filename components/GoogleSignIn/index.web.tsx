import { View, Text } from 'react-native'
import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/app/_layout';


export default function GoogleSignIn() {
  return (
    <GoogleLogin
      onSuccess={async credentialResponse => {
        const credential = GoogleAuthProvider.credential(credentialResponse.credential)
        await signInWithCredential(auth, credential);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}