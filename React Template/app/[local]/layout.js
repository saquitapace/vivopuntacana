import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ReduxProvider from '@/src/providers/ReduxProvider';
import NotificationProvider from '@/src/providers/NotificationProvider';
import { NextIntlClientProvider } from 'next-intl';

export const metadata = {
  title: 'Fioxen',
  description: 'Fioxen - Directory & Listing React Template',
};

export default async function LocaleLayout({ children, params: { local } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${local}.json`)).default;
  } catch (error) {
    // If the locale messages fail to load, use an empty object
    messages = {};
  }
console.log('hello world');
  return (
    <html lang={local}>
      <body>
        <ClerkProvider>
          <NextIntlClientProvider locale={local} messages={messages}>
            <NotificationProvider>
              <ReduxProvider>{children}</ReduxProvider>
            </NotificationProvider>
          </NextIntlClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
