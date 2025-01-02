import { useRouter } from 'next/router';
import React from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;

    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select
      onChange={changeLanguage}
      value={locale}
      className='bg-transparent border-2 border-gray-100 p-2 text-sm z-100 z-12 shadow-md rounded-xl '
    >
      <option value='en'>English</option>
      <option value='es'>Español</option>
    </select>
  );
};

export default LanguageSwitcher;
