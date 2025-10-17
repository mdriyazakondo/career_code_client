export const applicationPromise = (email) => {
  return fetch(`http://localhost:3000/applications?email=${email}`).then(
    (res) => res.json()
  );
};
