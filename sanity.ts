import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-10-21",
    token:"sklTaRanGtXaY4DlzXzT65EbhEhfb9a5lcvdORdXERIuq3lQlcu3iFoKVNNK3ctRGZEP3u3zfDFzbW9xfLAiHKCIsTkoyp6VYwJYSiUAT3vmVNi25Gs6mIwbbBaE2OR0Gbn7vjlYRlkYBQOqHGJYTNlBQsstgVmNI5ZSC7Qyc39vUAkuFhuW",
    useCdn: process.env.NODE_ENV === "production",
};

// set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
 createImageUrlBuilder(config).image(source);