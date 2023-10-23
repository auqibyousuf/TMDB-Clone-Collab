export const baseURL = ' https://api.themoviedb.org'
export const APIKEY = '095c0338e3071a672852583b9c68d9da'
export const baseImgURL = 'https://image.tmdb.org/t/p/original'
export const fetcher = (
  ...args: any //@ts-ignore
) => fetch(...args).then((res) => res.json())
