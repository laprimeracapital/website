import SummaryTop from "../components/grid/SummaryTop";
import HelmetComponent from "../helpers/helmet";
import { links } from "../helpers/links";

export default function HomePage () {

    return (

        <>

            <HelmetComponent/>
        
            <section className="w m-auto ph-lg border-bottom xl:w" style={{"--w": "95%", "--w-xl": "80%"}}>
                <SummaryTop/>
            </section>

            {links.map((link) => (
                <section key={link.slug} id={link.slug} className="w m-auto ph-lg border-bottom xl:w" style={{"--w": "95%", "--w-xl": "80%"}}>
                    <h2 aria-label={link.text}>{link.text}</h2>
                </section>
            ))}
        
        </>

    )

}