import ArtistInfoStep from '@/src/components/Onboarding/ArtistInfoStep';
import CommonInfoStep from '@/src/components/Onboarding/CommonInfoStep';
import FinalStep from '@/src/components/Onboarding/FInalStep';
import MerchantInfoStep from '@/src/components/Onboarding/MerchantInfoStep';
import UserInfoStep from '@/src/components/Onboarding/UserInfo';
import ProgressBar from '@/src/components/ProgressBar';
import StepNavigator from '@/src/components/StepNavigator';
import UserTypeSelection from '@/src/components/UserTypeSelection';
import { useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';

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
  const router = useRouter();
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
    { title: 'User Type', component: null },
    { title: 'Personal Info', component: CommonInfoStep },
    {
      title: 'Additional Info',
      component:
        userType === 'user'
          ? UserInfoStep
          : userType === 'artist'
          ? ArtistInfoStep
          : userType === 'merchant'
          ? MerchantInfoStep
          : null,
    },
    { title: 'Finish', component: FinalStep },
  ];

  const CurrentStepComponent = steps[step]?.component;

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
        await handleSubmit(formData);
      }
      setStep((prevStep) => prevStep + 1);
      // methods.clearErrors();
    }
  }, [step, methods, userType, handleSubmit]);

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
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userData,
          email: user.emailAddresses[0].emailAddress,
          clerkId: userId,
        }),
      });
      //
      if (!response.ok) throw new Error('Failed to update user');
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    async function checkProfile() {
      try {
        const response = await fetch(`/api/check-profile`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { isProfileCompleted } = await response.json();

        if (isProfileCompleted) {
          router.push('/');
        }
      } catch (error) {
        throw error;
      }
    }

    if (user) {
      checkProfile();
    }
  }, [user, router]);
  const { t } = useTranslation();
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-3xl shadow-2xl overflow-hidden bg-white rounded-lg'>
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white'>
          <h1 className='text-3xl font-bold mb-2'>
            {t('welcome')} to Our Platform
          </h1>
          <p className='text-purple-100'>
            Let's get you set up in just a few steps.
          </p>
        </div>
        <div className='p-8'>
          <ProgressBar step={step} steps={steps} />
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              {step === 0 ? (
                <UserTypeSelection onSelect={handleUserTypeSelect} />
              ) : (
                CurrentStepComponent && (
                  <CurrentStepComponent userType={userType} />
                )
              )}
              <StepNavigator
                step={step}
                steps={steps}
                onNext={handleNext}
                onBack={handleBack}
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
