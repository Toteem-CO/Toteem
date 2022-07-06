export const useUrls = () => useState('urls', () => {
  return {
    PROFIL: '/user/profil',
    COMPANY_INDEX: '/company',
  };
});
