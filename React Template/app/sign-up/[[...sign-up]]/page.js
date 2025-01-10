'use client';
import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs';
import './sign-up.css';
import Layout from '@/src/layouts/Layout';
import { useTranslation } from 'react-i18next';

export default function SignUpPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className='login-wrapper'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='login-form-box'>
                <h3 className='form-title'>{t('auth.create_account')}</h3>
                <ClerkLoading>
                  <div className='clerk-loading-skeleton'>
                    <div className='skeleton social-buttons'></div>
                    <div className='skeleton or-divider'></div>
                    <div className='skeleton input'></div>
                    <div className='skeleton input'></div>
                    <div className='skeleton button'></div>
                    <div className='skeleton footer-link'></div>
                  </div>
                </ClerkLoading>
                <ClerkLoaded>
                  <SignUp
                    fallbackRedirectUrl='/complete-profile'
                    forceRedirectUrl='/complete-profile'
                    appearance={{
                      elements: {
                        rootBox: 'clerk-form',
                        card: 'clerk-container',
                        headerTitle: 'clerk-title',
                        headerSubtitle: 'clerk-subtitle',
                        cardBox: 'clerk-card',
                        socialButtonsBlockButton: 'clerk-social-button',
                        formButtonPrimary: 'clerk-primary-button',
                        formFieldInput: 'clerk-input',
                        footerActionLink: 'clerk-link',
                        dividerLine: 'clerk-divider',
                        dividerText: 'clerk-divider-text',
                      },
                      text: {
                        socialButtonsBlockButton: {
                          google: t('auth.or_continue_with') + ' Google',
                        },
                        formFieldLabel: {
                          emailAddress: t('auth.email'),
                          password: t('auth.password'),
                          firstName: t('auth.full_name').split(' ')[0],
                          lastName: t('auth.full_name').split(' ')[1],
                        },
                        footerActionLink: {
                          signIn: t('auth.sign_in'),
                          signUp: t('auth.sign_up'),
                        },
                        dividerText: t('auth.or_continue_with'),
                      },
                    }}
                    routing='path'
                    path='/sign-up'
                  />
                </ClerkLoaded>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
