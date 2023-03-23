export const config: Config = {
    title: "Hikari Homepage",
    description: "Homepage powered by vue 3 && nuxt 3.",
    keywords: "homepage, vue, nuxt",
    background: {
        // @See: https://developer.mozilla.org/en-US/docs/Web/CSS/background
        color: {
            type: "linear-gradient",
            value: "#f12711, #f5af19"
        },
        // @See: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
        filter: {
            opacity: "80%",
            blur: "10px"
        }
    },
    theme: {
        primaryColor: "#66CCFF",
        secondaryColor: "#41f519",
        surfaceColor: "rgba(255,255,255,0.5)",
        textColor: "#000",
    },
    borderRadius: '10px',
    avatar: {
        type: "url",
        value: "/icon.png"
    },
    name: "Hikari Homepage",
    slogan: "Homepage powered by vue 3 && nuxt 3.",
    socialMedia: [
        {
            name: "GitHub",
            url: "https://github.com/shaokeyibb/hikari_homepage"
        },
        {
            name: "GitHub",
            url: "https://github.com/shaokeyibb/hikari_homepage"
        },
        {
            name: "GitHub",
            url: "https://github.com/shaokeyibb/hikari_homepage"
        },
        {
            name: "GitHub",
            url: "https://github.com/shaokeyibb/hikari_homepage"
        },
        {
            name: "GitHub",
            url: "https://github.com/shaokeyibb/hikari_homepage"
        },
        {
            name: "GitHub",
            url: "https://github.com/shaokeyibb/hikari_homepage"
        },
        {
            name: "GitHub",
            url: "https://github.com/shaokeyibb/hikari_homepage"
        }

    ],
    footerHtml: `
     <p>©2023 Hikari Homepage. | 
     Project is licensed under the 
     <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">AGPLv3 License</a>. | 
     GitHub: <a href="https://github.com/shaokeyibb/hikari_homepage">hikari_homepage</a>
     </p>
    `
}

declare type Config = {
    title?: string,
    description?: string,
    keywords?: string,
    background?: {
        color?: {
            type: "linear-gradient" | "radial-gradient" | "repeating-linear-gradient" | "repeating-radial-gradient" | "conic-gradient" | "url" | "basic" | "none",
            value: string
        }
        filter?: {
            blur?: string,
            brightness?: string,
            contrast?: string,
            dropShadow?: string,
            grayscale?: string,
            hueRotate?: string,
            invert?: string,
            opacity?: string,
            saturate?: string,
            sepia?: string,
        }
    },
    theme: {
        primaryColor: string,
        secondaryColor: string,
        surfaceColor: string,
        textColor: string
    },
    borderRadius?: string,
    avatar?: {
        type: "gravatar" | "cravatar" | "qq" | "url",
        value: string
        imageType?: "normal" | "webp"
    },
    name: string,
    slogan?: string,
    socialMedia?: {
        name: string,
        url: string,
    }[],
    // TODO: WIP
    skills?: [
        {
            name: string,
            percent: number,
        }
    ],
    // TODO: WIP
    projects?: [
        {
            name: string,
            description: string,
            url: string,
        }
    ],
    extraHtml?: string,
    headerHtml?: string,
    footerHtml?: string,
}

// @See: https://nuxt.com/docs/getting-started/seo-meta#usehead
export const head = {
    title: config.title,
    meta: [
        {name: 'description', content: config.description},
        {name: 'charset', content: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
        {rel: 'icon', href: '/icon.png'}
    ],
    htmlAttrs: {
        lang: 'en'
    }
}

// @See: https://nuxt.com/docs/getting-started/seo-meta#useseometa
export const seoMeta = {
    title: config.title,
    description: config.description,
    keywords: config.keywords
}