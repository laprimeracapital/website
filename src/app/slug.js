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
                <p className="w-full m-auto mb-md text-dark line-relaxed text-lg lg:w" style={{"--w-lg": "60%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu tellus, iaculis vitae magna non, dignissim elementum justo. Vestibulum interdum eget neque vitae convallis. Cras egestas viverra euismod. Suspendisse varius a dui ac sagittis. Phasellus mollis tellus urna, vel sodales neque aliquet sit amet. Pellentesque ultricies turpis luctus porttitor eleifend. Nullam nec neque tellus.</p>
                <div className="w m-auto mb-md h bg-surface lg:w lg:h" style={{"--w": "100%", "--w-lg": "60%", "--h": "250px", "--h-lg": "450px"}}>
                    <img src="https://lacamara.pe/wp-content/uploads/2026/02/ENTREVISTA-1216-SIRI-LANKA.jpg" className="w-full h-full" style={{"objectFit": "cover"}} draggable={false} />
                </div>
                <ul className="w-full flex gap-sm align-center justify-end pb-md m-auto lg:w" style={{"--w-lg": "60%"}}>
                    <p>Compartir en</p>
                    <button className="w h center bg-surface text-dark" title="Compartir en Facebook" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={shareFacebook}><IconBrandFacebook strokeWidth={1.5} size={18} /></button>
                    <button className="w h center bg-surface text-dark" title="Compartir en WhatsApp" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={shareWhatsApp}><IconBrandWhatsapp strokeWidth={1.5} size={18} /></button>
                    <button className="w h center bg-surface text-dark" title="Compartir en X/Twitter" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={shareX}><IconBrandX strokeWidth={1.5} size={18} /></button>
                    <button className="w h center bg-surface text-dark" title="Compartir en LinkedIn" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={shareLinkedIn}><IconBrandLinkedin strokeWidth={1.5} size={18} /></button>
                    <button className="w h center bg-surface text-dark" title="Copiar vinculo" style={{"--w": "40px", "--h": "40px", "--mnw": "40px"}} onClick={handleCopyLink}><IconLink strokeWidth={1.5} size={18} /></button>
                </ul>
                <p className="text-dark line-relaxed text-lg m-auto lg:w" style={{"--w-lg": "60%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu tellus, iaculis vitae magna non, dignissim elementum justo. Vestibulum interdum eget neque vitae convallis. Cras egestas viverra euismod. Suspendisse varius a dui ac sagittis. Phasellus mollis tellus urna, vel sodales neque aliquet sit amet. Pellentesque ultricies turpis luctus porttitor eleifend. Nullam nec neque tellus. Fusce vestibulum, enim vitae dictum sagittis, tellus sem tincidunt eros, at venenatis neque odio nec quam. Praesent eget nisi sed erat posuere pellentesque. Donec ultricies ante in enim iaculis, ut eleifend leo condimentum. Cras ultrices semper libero, non lobortis nibh consectetur ut. Morbi eget est laoreet, tempor sem ac, tempor ante. Aenean bibendum lectus nec tellus feugiat, ut eleifend lectus porta. Mauris ac sapien nec tellus pellentesque efficitur. Aenean est tortor, mattis vitae vehicula viverra, placerat aliquet nibh. Fusce faucibus vitae lectus in commodo.
                    <br/><br/>
                    Ut placerat, leo eleifend consectetur faucibus, nisi neque luctus mi, vitae malesuada ligula urna ac arcu. In blandit ligula vitae velit pretium, quis maximus nisl iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a dictum ipsum, ac rutrum neque. In tincidunt eleifend dui, auctor tempor odio vulputate in. Vivamus rhoncus interdum arcu non euismod. Vestibulum placerat magna sit amet arcu molestie pulvinar. Ut sit amet libero lobortis, feugiat enim quis, accumsan purus. In malesuada eget felis vel dignissim.
                    <br/><br/>
                    Nam sed risus non quam tempor interdum. Sed lorem dolor, pellentesque quis dictum ut, tempus ut leo. Proin dapibus rhoncus ex. Suspendisse sit amet tincidunt metus. Praesent lobortis, magna tincidunt accumsan porttitor, erat odio scelerisque risus, gravida ornare arcu enim vel urna. Donec vitae dolor turpis. Cras laoreet accumsan justo, id condimentum magna vestibulum eu. Proin luctus ipsum vitae iaculis egestas. Suspendisse potenti.
                    <br/><br/>
                    Aenean porttitor molestie erat, id euismod eros bibendum et. Nam viverra neque sed ultricies pulvinar. In at viverra eros, in mollis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent semper enim leo. Aenean iaculis nisl mi, vel mollis ipsum cursus nec. Morbi felis enim, porta vitae eros at, fermentum interdum turpis. Praesent lacinia tellus risus, sit amet cursus neque scelerisque quis. Proin vel elementum magna, sit amet vulputate lectus.
                    <br/><br/>
                    Nam ut dui diam. Praesent fermentum arcu lectus. Nunc nec nisi ac augue bibendum eleifend sed lacinia est. Ut sodales ultrices augue eu vulputate. Nam in tellus id massa vehicula fringilla. Aliquam odio lacus, viverra vel nulla ut, interdum egestas lectus. Nunc vestibulum ornare massa ac ultricies. Phasellus velit est, viverra et tortor quis, molestie semper tellus.
                </p>
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