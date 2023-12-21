
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [ {
      userAgent: '*',
      allow: '/',
       disallow: ["/about" , "/shippingpolicy", "/customer_support", "/cancellation","/allproducts", "/term_of_service", "/privacy_policy"],
    },
    ],
     sitemap: "https://gausiyaboutique.com/sitemap.xml",
  };
}