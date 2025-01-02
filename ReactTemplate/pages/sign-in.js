// pages/sign-in.js
import LanguageSwitcher from '@/src/components/LanguageSwitcher';
import { SignIn } from '@clerk/nextjs';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import ParticleBackground from '@/src/components/ParticleBackground';

export default function SignInPage() {
  const { t } = useTranslation('common')

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 flex relative overflow-hidden">
      <ParticleBackground />

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Sign In Content */}
      <div className="w-full flex items-center justify-center p-10 relative z-10">
        <div className="w-full max-w-lg space-y-8 bg-white bg-opacity-90 py-5 px-3 rounded-2xl shadow-2xl backdrop-blur-sm">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-pink-900 mb-2">{t('auth.signIn')}</h1>
            <p className="text-lg text-pink-700">{t('auth.signInPrompt')}</p>
          </div>
          <SignIn

            signUpUrl="/sign-up"
            redirectUrl="/complete-profile"
            afterSignUpUrl="/complete-profile"
            appearance={{

              elements: {
                rootBox : 'flex items-center justify-center w-full ',
                formButtonPrimary: 
                  'bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-lg w-full transition-colors duration-200 shadow-md hover:shadow-lg',
                formFieldInput: 
                  'w-full px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200',
                footerActionLink: 
                  'text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200',
                card: 
                  'bg-transparent shadow-none p-0',
                headerTitle: 
                  'hidden',
                headerSubtitle: 
                  'hidden',
                socialButtonsIconButton:
                  'border border-pink-300 hover:border-pink-400 p-3 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md',
                dividerLine:
                  'bg-pink-200',
                dividerText:
                  'text-pink-500 bg-white px-4 text-sm',
                socialButtonsIconButton: 'bg-white hover:bg-pink-50',
              },
              layout: {

                socialButtonsPlacement: 'bottom',
                socialButtonsVariant: 'iconButton',
                privacyPageUrl: '/privacy',
                termsPageUrl: '/terms',
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}



export async function getStaticProps({ locale = 'en' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
