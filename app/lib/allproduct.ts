import { client } from "./sanity";


export async function allproduct(){
    const query = `*[_type == "product"] | order(_createdAt desc){
        _id,
        price,
        name,
        shipping,
        "slug": slug.current,
        "imageUrl": images[0].asset->url
    }`;
    const data = await client.fetch(query);
    return data
}