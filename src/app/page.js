import { useEffect, useState } from "react";
import CardNews from "../components/card/news";
import HelmetComponent from "../helpers/helmet";
import { getNewsAll } from "../services/news.service";

export default function HomePage () {

    const [ top, setTop ] = useState(null);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await getNewsAll();
                setTop(data[0])
            } catch (error) {
                console.error(error);
            }
        }
        load();
    }, [])

    console.log(top);

    return (

        <>

            <HelmetComponent/>
        
            <section className="w m-auto ph-lg border-bottom xl:w" style={{"--w": "95%", "--w-xl": "80%"}}>
                <CardNews sum={top} />
            </section>
        
        </>

    )

}