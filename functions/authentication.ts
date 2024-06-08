import * as SecureStore from 'expo-secure-store';
import { validateToken } from './apple-auth';

export async function silentLogin() {
  let result = await SecureStore.getItemAsync('auth');
  if (result !== null) {
    let auth = JSON.parse(result);
    if (auth.service === 'apple') {
      return validateToken(auth.token);
    }
  }
}

export async function signOut() {

}