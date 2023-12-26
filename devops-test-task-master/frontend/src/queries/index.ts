const baseApiUrl = `${process.env.REACT_APP_API_URL}/api`;

export const get = async (resource: string) => {
  return await fetch(`${baseApiUrl}/${resource}`, {
    method: 'GET',
    mode: 'cors',
  });
};

export default { baseApiUrl, get };
