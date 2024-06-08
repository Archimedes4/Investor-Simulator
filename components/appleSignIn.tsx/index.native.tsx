import React from 'react'
import {AppleAuthenticationButton, AppleAuthenticationButtonType, signInAsync, AppleAuthenticationScope, AppleAuthenticationButtonStyle} from 'expo-apple-authentication';
import * as SecureStore from 'expo-secure-store';

export default function AppleSignIn() {
  return (
    <AppleAuthenticationButton
      buttonType={AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={{flex: 1, width: 100, height: 100}}
      onPress={async () => {
        try {
          const credential = await signInAsync({
            requestedScopes: [
              AppleAuthenticationScope.EMAIL,
            ],
          });
          SecureStore.setItemAsync('auth', JSON.stringify({
            service: "apple",
            token: credential.identityToken
          }));
          // signed in
        } catch (e: any) {
          if (e.code === 'ERR_REQUEST_CANCELED') {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
          }
        }
      }}
    />
  )
}