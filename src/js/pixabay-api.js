const KEY = '43515008-427980a3c9150ded173cc4f94';
const BASE_URI = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal'
const SAFESEARCH = 'true';

export default function getImages(input){
    const QUERY = input.trim();
    const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH} `;

    return fetch(LINK)
        .then(response => {
            if (!response.ok){
                throw new Error(response.status)
            }
            return response.json()
        })

}