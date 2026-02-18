import { useEffect, useState } from "react";
import CardNews from "../components/card/news";
import HelmetComponent from "../helpers/helmet";
import { getNewsAll } from "../services/news.service";

export default function HomePage () {

    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getNewsAll();
                setNews(data)
            } catch (error) {
                console.error(error);
            }
        }
        load();
    }, [])

    return (

        <>

            <HelmetComponent/>
        
            
            <section className="w flex flex-col gap-xl m-auto ph-lg xl:w" style={{"--w": "95%", "--w-xl": "80%"}}>
                {news.map((nw) => (
                    <CardNews key={nw} sum={nw} />
                ))}
            </section>
        
        </>

    )

}