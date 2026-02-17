import { Helmet } from "react-helmet";

export default function HelmetComponent ({ title, description, keywords, canonical, image }) {
    return (
        <Helmet>
            <title>{title || 'La Primera Capital | Diario Económico y Empresarial de Jauja'}</title>
            <meta name="description" content={description || "La Primera Capital es el diario económico y empresarial de Jauja. Análisis, negocios, política con enfoque empresarial, inversión e innovación para impulsar el desarrollo regional."} />
            <meta name="keywords" content={keywords || "Jauja, economía, negocios, inversión, política empresarial, innovación, turismo, desarrollo regional, Perú"} />
            <meta name="author" content="La Primera Capital" />
            <meta name="robots" content="index, follow" />

            <link rel="canonical" href={canonical || "https://laprimeracapital.pe/"} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || "La Primera Capital | Diario Económico de Jauja"} />
            <meta property="og:description" content={description || "Donde empezó el Perú. Donde empieza el futuro. Noticias económicas, empresariales y de inversión desde Jauja para el mundo."} />
            <meta property="og:url" content={canonical || "https://laprimeracapital.pe/"} />
            <meta property="og:site_name" content="La Primera Capital" />
            <meta property="og:image" content={image || "https://laprimeracapital.pe/og-image.jpg"} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || "La Primera Capital | Diario Económico de Jauja"} />
            <meta name="twitter:description" content={description || "Noticias económicas, negocios, inversión e innovación desde Jauja."} />
            <meta name="twitter:image" content={image || "https://laprimeracapital.pe/og-image.jpg"} />

            <meta name="geo.region" content="PE-JUN" />
            <meta name="geo.placename" content="Jauja" />
            <meta name="geo.position" content="-11.7756;-75.4966" />
            <meta name="ICBM" content="-11.7756, -75.4966" />

            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "NewsMediaOrganization",
                        "name": "La Primera Capital",
                        "url": ${canonical || "https://laprimeracapital.pe/"},
                        "logo": "https://laprimeracapital.pe/logo.png",
                        "sameAs": []
                    }
                `}
            </script>
        </Helmet>
    )
}