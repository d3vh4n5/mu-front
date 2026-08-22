const apiKey = import.meta.env.SECRET_API_KEY;
const apiUrl = import.meta.env.API_URL;
if (!apiKey)  throw new Error('SECRET_API_KEY no está configurada');
if (!apiUrl)  throw new Error('API_URL no está configurada');

export {
    apiKey,
    apiUrl
}