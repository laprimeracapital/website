import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { links } from "../../helpers/links";
import HelmetComponent from "../../helpers/helmet";

export default function SectionSlug () {

    const { slug } = useParams();
    const [ metadata, setMetadata ] = useState(null);

    useEffect(() => {
        const initMetadata = () => {
            try {
                const data = links.find((l) => l.slug === slug);
                setMetadata(data)
            } catch (error) {
                console.error(error);
            }
        }
        initMetadata();
    }, [slug])

    return (

        <>

            <HelmetComponent
                title={`${metadata?.metadata.title}`}
                description={`${metadata?.metadata.description}`}
                keywords={`${metadata?.metadata.keywords}`}
                canonical={`https://laprimeracapital.pe/section/${slug}`}
            />
        
            <section className="w m-auto ph-lg border-bottom xl:w" style={{"--w": "95%", "--w-xl": "80%"}}>
                <h1 aria-label={metadata?.text}>{metadata?.text}</h1>
            </section>

        </>

    )

}