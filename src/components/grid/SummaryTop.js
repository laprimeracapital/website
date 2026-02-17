import CardNews from "../card/news";

export default function SummaryTop () {

    const summary = [
        {
            image: "/images/economia-1.jpg",
            title: "Jauja acelera su crecimiento económico en el último trimestre",
            slug: "jauja-acelera-crecimiento-economico",
            holder: true,
            summary: "El dinamismo comercial y el aumento de inversión privada impulsan el PBI local.",
            content: "El crecimiento económico regional muestra señales sólidas impulsadas por comercio, servicios y agroindustria. Analistas destacan mayor formalización y flujo de capital.",
            category: "economia",
            timestamp: "2026-02-15T08:00:00Z",
            keywords: ["economía", "crecimiento", "PBI", "Jauja"]
        },
        {
            image: "/images/economia-2.jpg",
            title: "Inflación regional se mantiene bajo control",
            slug: "inflacion-regional-bajo-control",
            holder: false,
            summary: "Precios estables favorecen el consumo interno.",
            content: "El índice de precios mantiene estabilidad, generando condiciones favorables para comercio y consumo.",
            category: "economia",
            timestamp: "2026-02-14T10:00:00Z",
            keywords: ["inflación", "precios", "mercado"]
        },
        {
            image: "/images/innovacion-3.jpg",
            title: "Jóvenes desarrolladores crean soluciones fintech",
            slug: "desarrolladores-soluciones-fintech",
            holder: false,
            summary: "Finanzas digitales ganan terreno.",
            content: "Nuevas plataformas digitales buscan modernizar pagos y créditos.",
            category: "innovacion",
            timestamp: "2026-02-13T06:00:00Z",
            keywords: ["fintech", "desarrollo"]
        },
        {
            image: "/images/inversion-1.jpg",
            title: "Nuevo fondo privado apuesta por proyectos regionales",
            slug: "fondo-privado-proyectos-regionales",
            holder: false,
            summary: "Capital estratégico busca oportunidades locales.",
            content: "Inversionistas identifican sectores clave para expansión sostenible.",
            category: "inversion",
            timestamp: "2026-02-15T05:00:00Z",
            keywords: ["inversión", "capital privado"]
        },
        {
            image: "/images/inversion-2.jpg",
            title: "Sector inmobiliario atrae capital externo",
            slug: "sector-inmobiliario-capital",
            holder: false,
            summary: "Desarrollos urbanos ganan interés.",
            content: "Proyectos residenciales y comerciales dinamizan mercado.",
            category: "inversion",
            timestamp: "2026-02-14T05:00:00Z",
            keywords: ["inmobiliario", "capital"]
        },
    ];

    return (

        <div className="w-full">
            <ul className={`grid grid-cols row-gap-md lg:grid-cols lg:grid-rows lg:row-gap-sm lg:col-gap-sm`} style={{"--grid-cols": "repeat(1, 1fr)", "--grid-cols-lg": "repeat(12, 1fr)", "--grid-rows-lg": "repeat(4, auto)"}}>
                {summary.map((sum, i) => (
                    <CardNews key={sum.slug} idx={i} sum={sum} />
                ))}
            </ul>
        </div>
    
    )

}