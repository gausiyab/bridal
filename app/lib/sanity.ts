import {createClient} from '@sanity/client'
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion:  '2023-03-03',
    useCdn:true
});

const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}