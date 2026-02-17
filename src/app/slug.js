import { Link, useParams } from "react-router-dom";
import HelmetComponent from "../helpers/helmet";
import { useEffect, useState } from "react";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandWhatsapp, IconBrandX, IconLink } from "@tabler/icons-react";
import { toast } from "sonner";
import { shareFacebook, shareLinkedIn, shareWhatsApp, shareX } from "../helpers/shared";
import { getNewBySlug } from "../services/news.service";
import NewSkeleton from "../components/skeleton/new.skeleton";

export default function NewsPage () {
    
    const { slug } = useParams();
    const [ news, setNews ] = useState(null)
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(true);

    const handleCopyLink = async () => {
        try {
            const url = window.location.href;
            await navigator.clipboard.writeText(url);
            toast('Link copiado al portapapeles')
        } catch (error) {
            toast.error(`Error al copiar: ${error}`)
        }
    }

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getNewBySlug(slug);
                setNews(data)
            } catch (error) {
                console.error(error);
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [slug])

    if (loading) return <NewSkeleton/>;

    if (error) return <p>{error}</p>

    return (

        <>
        
            <HelmetComponent
                title={`${news?.title} | La Primera Capital | Diario Económico y Empresarial de Jauja`}
                description={news?.summary}
                keywords={news?.keywords}
                canonical={`https://laprimeracapital.pe/${slug}`}
            />

            <section className="w m-auto ph-lg border-bottom xl:w" style={{"--w": "95%", "--w-xl": "80%"}}>
                <h1 className="w-full m-auto mb-md lg:w lg:text-h1" style={{"--w-lg": "60%"}} aria-label={news?.title}>{news?.title}</h1>
                <p className="w-full m-auto mb-md text-dark line-relaxed text-lg lg:w" style={{"--w-lg": "60%"}}>{news?.summary}</p>
                <div className="w m-auto mb-md h bg-surface lg:w lg:h" style={{"--w": "100%", "--w-lg": "60%", "--h": "250px", "--h-lg": "450px"}}>
                    <img src={news?.image} className="w-full h-full" style={{"objectFit": "cover"}} draggable={false} alt={`${news?.title} - ${news?.summary} - La Primera Capital`} />
                </div>
                <ul className="w-full flex gap-sm align-center justify-end pb-md m-auto lg:w" style={{"--w-lg": "60%"}}>
                    <p>Compartir en</p>
                    <button className="w h center bg-surface text-dark" title="Compartir en Facebook" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={shareFacebook}><IconBrandFacebook strokeWidth={1.5} size={18} /></button>
                    <button className="w h center bg-surface text-dark" title="Compartir en WhatsApp" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={shareWhatsApp}><IconBrandWhatsapp strokeWidth={1.5} size={18} /></button>
                    <button className="w h center bg-surface text-dark" title="Compartir en X/Twitter" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={shareX}><IconBrandX strokeWidth={1.5} size={18} /></button>
                    <button className="w h center bg-surface text-dark" title="Compartir en LinkedIn" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={shareLinkedIn}><IconBrandLinkedin strokeWidth={1.5} size={18} /></button>
                    <button className="w h center bg-surface text-dark" title="Copiar vinculo" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={handleCopyLink}><IconLink strokeWidth={1.5} size={18} /></button>
                </ul>
                <div className="text-dark line-relaxed text-lg m-auto lg:w" style={{"--w-lg": "60%"}} dangerouslySetInnerHTML={{__html: news?.content}}></div>
                <ul className="w-full m-auto flex gap-sm ph-lg lg:w" style={{"--w-lg": "60%"}}>
                    <li className="bg-dark text-white ph-xs pv-md">Tags</li>
                    {news?.keywords.map((k) => (
                        <Link to={`/tag/${k}`} key={k} className="ph-xs pv-md">{k}</Link>
                    ))}
                </ul>
            </section>

        </>

    )

}