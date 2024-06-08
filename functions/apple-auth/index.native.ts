import { AppleAuthenticationCredentialState, getCredentialStateAsync } from "expo-apple-authentication"

export async function validateToken(token: string) {
  const result = await getCredentialStateAsync(token)
  if (result === AppleAuthenticationCredentialState.AUTHORIZED) {
    return true
  }
  return false
}