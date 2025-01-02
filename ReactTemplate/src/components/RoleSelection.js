import { useUser } from '@clerk/nextjs';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const RoleSelection = () => {
  const { user } = useUser();
  const { t } = useTranslation('common');
  const [selectedRole, setSelectedRole] = useState('user');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roles = [
    { id: 'user', label: t('auth.roles.user') },
    { id: 'merchant', label: t('auth.roles.merchant') },
    { id: 'artist', label: t('auth.roles.artist') },
    { id: 'admin', label: t('auth.roles.admin') }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await user.update({
        publicMetadata: {
          role: selectedRole
        }
      });
      
      // Redirect or show success message
      window.location.href = '/';
    } catch (error) {
      console.error('Error updating role:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-box bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-center mb-4">{t('auth.role')}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form_group mb-4">
          <select 
            className="form_control" 
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            disabled={isSubmitting}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
        <button 
          type="submit" 
          className="main-btn icon-btn w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('auth.submitting') : t('auth.continue')}
        </button>
      </form>
    </div>
  );
};

export default RoleSelection;
