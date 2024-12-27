// components/ClientClerkProvider.js
'use client';

import { ClerkProvider } from '@clerk/nextjs';

const ClientClerkProvider = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default ClientClerkProvider;
