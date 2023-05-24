export const fakeApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });
};
