import { useEffect, useState } from "react"
import { getNews } from "../../services/news.service";
import { Link } from "react-router-dom";

export default function HomeAdmin () {

    const [ news, setNews ] = useState([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getNews();
                setNews(data);
            } catch (error) {
                console.error(error);
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        load();
    },[])

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>

    return (

        <>

            <div className="w-full flex align-center justify-end mb-sm">
                <Link to={'/admin/editor'} className="center ph-xs pv-sm bg-dark text-white">Agregar nueva nota</Link>
            </div>

            {news.length > 0 ? (
                <ul className="w-full grid grid-cols gap-sm md:grid-cols lg:grid-cols" style={{"--grid-cols": "repeat(1, 1fr)", "--grid-cols-md": "repeat(2, 1fr)", "--grid-cols-lg": "repeat(3, 1fr)"}}>
                    {news.map((nw) => (
                        <article key={nw.id} className="w-full border">
                            <div className="w-full h bg-surface" style={{"--h": "180px"}}></div>
                            <div className="p-xs flex flex-col gap-xs">
                                <p className="text-sm text-muted" style={{textTransform: 'capitalize'}}>{nw.category}</p>
                                <h3 aria-label={nw.title}>{nw.title}</h3>
                                <div className="w-full flex gap-sm">
                                    <button className="w-full h center bg-surface" style={{"--h": "35px"}}>Eliminar</button>
                                    <Link to={`/admin/editor/?id=${nw.id}`} className="w-full h center border" style={{"--h": "35px"}}>Editar</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </ul>
            ) : (
                <h3>No hay noticias publicadas aún</h3>
            )}
        
        </>

    )

}