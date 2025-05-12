const registerEvent = (googleFormsLnk: string) => {
  if (typeof window === 'undefined') return;
  window.open(googleFormsLnk, '_blank');
};

export { registerEvent };
