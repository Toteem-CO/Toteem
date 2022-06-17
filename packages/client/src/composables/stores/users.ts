export const useCurrentUser = () => useState<any>('currentUser', () => {
  return {
    firstName: 'Julien',
    lastName: 'Beneki',
    view: '',
    hasAccessToAdmin: false,
  };
});

