import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../src/layouts/Layout';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // Here you would typically call your password reset API
      // For now, we'll just simulate a successful submission
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="auth-box bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-center mb-4">{t('auth.forgotPassword')}</h2>
                  
                  {!isSubmitted ? (
                    <>
                      <p className="text-center mb-4">
                        {t('auth.resetPasswordInstructions')}
                      </p>

                      <form onSubmit={handleSubmit}>
                        <div className="form_group mb-4">
                          <input
                            type="email"
                            className="form_control"
                            placeholder={t('auth.email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>

                        {error && (
                          <div className="alert alert-danger mb-4">
                            {error}
                          </div>
                        )}

                        <button type="submit" className="main-btn icon-btn w-100 mb-3">
                          {t('auth.sendResetLink')}
                        </button>

                        <div className="text-center">
                          <Link href="/sign-in">
                            <a className="text-primary">
                              {t('auth.backToSignIn')}
                            </a>
                          </Link>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="text-center">
                      <div className="alert alert-success mb-4">
                        {t('auth.resetPasswordInstructions')}
                      </div>
                      <Link href="/sign-in">
                        <a className="main-btn icon-btn">
                          {t('auth.backToSignIn')}
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
