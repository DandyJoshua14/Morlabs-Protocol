import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://morlabsprotocol.com',
            lastModified: new Date(),

            priority: 1,
        },
        {
            url: 'https://morlabsprotocol.com/about',
            lastModified: new Date(),

            priority: 0.8,
        },
        {
            url: 'https://morlabsprotocol.com/blog',
            lastModified: new Date(),

            priority: 0.5,
        },
    ]
}