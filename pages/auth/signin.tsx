import { BuiltInProviderType } from "next-auth/providers"
import { ClientSafeProvider, getProviders, LiteralUnion, signIn as SignIntoProvider } from "next-auth/react"
import Header from '../../components/Header'
import instalogolg from '../../public/assets/insta-logo-lg.png'

//Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
export default function SignIn({ providers}:Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider[]>) {
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img src={instalogolg.src} className="w-80" alt="" />
        <p className="font-xs italic">This is not the REAL app, just a clone for education purposes</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button 
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}



