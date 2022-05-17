export const useCurrentUser = () => useState<any>('currentUser', () => {
  return {
    firstName: 'Roger',
    lastName: 'Beneki',
    view: '',
    hasAccessToAdmin: false,
  };
});

