'use client';
import ArtistInfoStep from '@/src/components/Onboarding/ArtistInfoStep';
import CommonInfoStep from '@/src/components/Onboarding/CommonInfoStep';
import FinalStep from '@/src/components/Onboarding/FInalStep';
import MerchantInfoStep from '@/src/components/Onboarding/MerchantInfoStep';
import UserInfoStep from '@/src/components/Onboarding/UserInfo';
import ProgressBar from '@/src/components/ProgressBar';
import StepNavigator from '@/src/components/StepNavigator';
import UserTypeSelection from '@/src/components/UserTypeSelection';
import Layout from '@/src/layouts/Layout';
import { useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { createOrUpdateUser } from '../actions/user.action';

const userSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  interests: z.array(z.string()).optional().default([]),
  artistType: z.string().optional(),
  businessInfo: z.string().optional(),
  businessLink: z.string().url('Invalid URL').optional(),
  businessEmail: z.string().email('Invalid email').optional(),
});

export default function OnboardingPage() {
  const { user } = useUser();
  const userId = user?.id;
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState(null);
  const methods = useForm({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      interests: [],
      artistType: '',
      businessInfo: '',
      businessLink: '',
      businessEmail: '',
    },
  });

  const steps = [
    {
      id: 'user-type',
      title: 'Select User Type',
      component: (
        <UserTypeSelection
          userType={userType}
          setUserType={setUserType}
          onNext={() => setStep(1)}
        />
      ),
    },
    {
      id: 'user-info',
      title: 'Personal Info',
      component: (
        <UserInfoStep onNext={() => setStep(2)} onBack={() => setStep(0)} />
      ),
    },
    {
      id: 'common-info',
      title: t('profile.contact_info'),
      component: (
        <CommonInfoStep onNext={() => setStep(3)} onBack={() => setStep(1)} />
      ),
    },
    {
      id: 'specific-info',
      title:
        userType === 'artist'
          ? t('profile.artist_info')
          : t('profile.business_info'),
      component:
        userType === 'artist' ? (
          <ArtistInfoStep onNext={() => setStep(4)} onBack={() => setStep(2)} />
        ) : (
          <MerchantInfoStep
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        ),
    },
    {
      id: 'final',
      title: t('profile.complete'),
      component: <FinalStep onBack={() => setStep(3)} />,
    },
  ];

  const handleBack = useCallback(() => {
    if (step > 0) setStep((step) => step - 1);
  }, [step]);

  const handleUserTypeSelect = useCallback(
    (type) => {
      setUserType(type);
      setStep((step) => step + 1);
    },
    [step]
  );

  const handleSubmit = async (data) => {
    try {
      const common = {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        role: userType,
      };
      const userFields = {
        user: {
          ...common,
          interests: data.interests,
          role: 'user',
        },
        artist: {
          ...common,
          artistType: data.artistType,
          interests: data.interests,
        },
        merchant: {
          ...common,
          businessInfo: data.businessInfo,
          businessLink: data.businessLink,
          businessEmail: data.businessEmail,
        },
      };

      const userData = userFields[userType];
      console.log('userData ', userData);
      const { err, data: responseData } = await createOrUpdateUser(userData);
      console.log('err ', err, 'data ', responseData);
      return { err };
    } catch (error) {
      throw error;
    }
  };
  const handleNext = useCallback(async () => {
    methods.clearErrors();

    let fieldsToValidate = [];
    if (step === 1) {
      fieldsToValidate = ['firstName', 'lastName', 'phoneNumber'];
    } else if (step === 2) {
      fieldsToValidate =
        userType === 'user'
          ? ['interests']
          : userType === 'artist'
          ? ['artistType']
          : ['businessInfo', 'businessLink', 'businessEmail'];
    }

    const isValid = await methods.trigger(fieldsToValidate);

    if (isValid) {
      if (step === 2) {
        const formData = methods.getValues();
        const { err } = await handleSubmit(formData);
        if (err) {
          return;
        }
      }
      setStep((prevStep) => prevStep + 1);
      // methods.clearErrors();
    }
  }, [step, methods, userType, handleSubmit]);

  return (
    <Layout>
      <section className='pt-175 lg:pt-140 pb-150 lg:pb-120 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-center'>
            <div className='w-full max-w-4xl'>
              <div className='bg-white rounded-lg shadow-md p-5 '>
                <div className='text-center mb-8'>
                  <h2 className='text-3xl font-bold text-heading mb-3'>
                    {t('profile.complete_your_profile')}
                  </h2>
                  <p className='text-gray-600'>{t('profile.get_started')}</p>
                </div>

                <ProgressBar step={step} steps={steps} />

                <FormProvider {...methods}>
                  <form
                    onSubmit={methods.handleSubmit(handleSubmit)}
                    className='mt-8'
                  >
                    <div className='space-y-6'>{steps[step].component}</div>

                    {step > 0 && (
                      <div className='mt-8 pt-6 border-t border-gray-200'>
                        <StepNavigator
                          step={step}
                          steps={steps}
                          onNext={handleNext}
                          onBack={handleBack}
                        />
                      </div>
                    )}
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
