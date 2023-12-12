import { client } from "./sanity";

export async function allgetproduct(){
    const query = `*[_type == "product"]{
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
      return data
  }