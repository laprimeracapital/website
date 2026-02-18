import { Helmet } from "react-helmet";

const safeString = (value, fallback = "") =>
    typeof value === "string" && value.trim() !== "" ? value : fallback;

export default function HelmetComponent({ title, description, keywords, url, image, article = false, articleTime, author = "La Primera Capital", breadcrumbs = [] }) {
    
    const safeTitle = safeString(title, "La Primera Capital | Diario Económico y Empresarial de Jauja");
    const safeDescription = safeString(description, "La Primera Capital es el diario económico y empresarial de Jauja. Negocios, inversión e innovación con enfoque regional.");
    const safeKeywords = safeString(keywords, "Jauja, economía, negocios, inversión, empresa, Perú");
    const safeUrl = safeString(url, "https://laprimeracapital.netlify.app/");
    const safeImage = safeString(image, "https://laprimeracapital.netlify.app/og-image.jpg");

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        name: "La Primera Capital",
        url: "https://laprimeracapital.netlify.app/",
        logo: {
            "@type": "ImageObject",
            url: "https://laprimeracapital.netlify.app/logo.png"
        },
        sameAs: [
            "https://www.facebook.com/laprimeracapital",
            "https://www.twitter.com/laprimeracap",
            "https://www.linkedin.com/company/laprimeracapital",
            "https://www.instagram.com/laprimeracapital"
        ]
    };

    const articleSchema =
        article && articleTime ? {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: safeTitle,
            description: safeDescription,
            image: [safeImage],
            datePublished: articleTime,
            dateModified: articleTime,
            author: {
                "@type": "Organization",
                name: author
            },
            publisher: {
                "@type": "Organization",
                name: "La Primera Capital",
                logo: {
                    "@type": "ImageObject",
                    url: "https://laprimeracapital.netlify.app/logo.png"
                }
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": safeUrl
            }
        } : null;

    const breadcrumbSchema = breadcrumbs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    } : null;

    return (
        <Helmet>
            {/* Básico */}
            <title>{safeTitle}</title>
            <meta name="description" content={safeDescription} />
            <meta name="keywords" content={safeKeywords} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:type" content={article ? "article" : "website"} />
            <meta property="og:title" content={safeTitle} />
            <meta property="og:description" content={safeDescription} />
            <meta property="og:url" content={safeUrl} />
            <meta property="og:site_name" content="La Primera Capital" />
            <meta property="og:image" content={safeImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={safeTitle} />
            <meta name="twitter:description" content={safeDescription} />
            <meta name="twitter:image" content={safeImage} />

            {/* Article meta */}
            {article && articleTime && (
                <meta property="article:published_time" content={articleTime} />
            )}

            {/* Schema: Organization */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>

            {/* Schema: NewsArticle */}
            {articleSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}

            {/* Schema: BreadcrumbList */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
        </Helmet>
    );
}