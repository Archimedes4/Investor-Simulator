import React, { ReactNode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function GoogleProvider({children}:{children: ReactNode}) {
  return (
    <GoogleOAuthProvider clientId="1050022328462-kujsr61dbptps7g3e71285p4hsc2a0fe.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  )
}