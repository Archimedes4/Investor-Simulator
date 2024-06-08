import { useEffect, useState } from "react";
import { auth } from  "@/app/_layout"

export default function useIsAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true)
    const unsub = auth.onAuthStateChanged((e) => {
      setIsLoading(true)
      if (e !== null) {
        setIsAuth(true)
        setIsLoading(false)
      } else {
        setIsAuth(false)
        setIsLoading(false)
      }
    })
    return () => {
      unsub()
    }
  }, [])

  return {
    isAuth,
    isLoading
  }
}