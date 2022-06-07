import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// connect to sanity with data and images


export const client = sanityClient({
    projectId: 'xwmvzd21',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,

});

// createt the connection to the images in sanity

const builder = imageUrlBuilder(client);

// access to the url where the images are saved

export const ulrFor = (source) => builder.image(source);