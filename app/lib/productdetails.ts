import { client } from "./sanity";


export async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
      _id,
      images,
      sizes,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      designid,
      shipping,
      length
        }`;
  
    const data = await client.fetch(query);
    return data;
  }