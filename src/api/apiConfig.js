export const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'ebb66ab26af5e132e5e7d8f631990cb2',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}