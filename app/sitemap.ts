
import {fullProduct} from "./interface";
import { allgetproduct } from "./lib/allGetproduct";

export default async function sitemap() {
  const baseUrl = "https://gausiyaboutique.com";
  const data: fullProduct[] = await allgetproduct();
  
  const postUrls =
  data?.map((post) => {
    return {
      url: `${baseUrl}/product/${post.slug}`,
      lastModified: new Date(),
    };
  }) ?? [];

  const allproduct =
  data?.map((post) => {
    return {
      url: `${baseUrl}/allproducts/${post.slug}`,
      lastModified: new Date(),
    };
  }) ?? [];

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/term_of_service`, lastModified: new Date() },
    { url: `${baseUrl}/shippingpolicy`, lastModified: new Date() },
    { url: `${baseUrl}/cancellation`, lastModified: new Date() },
    { url: `${baseUrl}/customer_support`, lastModified: new Date() },
    { url: `${baseUrl}/privacy_policy`, lastModified: new Date() },

    ...postUrls,
    ...allproduct,
  ];
}





