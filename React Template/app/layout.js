import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import ReduxProvider from '@/src/providers/ReduxProvider';
import NotificationProvider from '@/src/providers/NotificationProvider';

export const metadata = {
  title: 'Fioxen',
  description: 'Fioxen - Directory & Listing React Template',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NotificationProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </NotificationProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
