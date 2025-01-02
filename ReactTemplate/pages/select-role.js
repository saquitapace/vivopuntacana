import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../src/layouts/Layout';
import RoleSelection from '../src/components/RoleSelection';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SelectRolePage() {
  const { t } = useTranslation('common');
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || !user) {
    return null;
  }

  return (
    <Layout>
      <section className="hero-area">
        <div className="hero-wrapper-one">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <RoleSelection />
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
