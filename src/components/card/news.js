import moment from "moment";
import { Link } from "react-router-dom";
export default function CardNews ({ sum }) {

    const date = moment(sum?.timestamp).fromNow();

    return (
        <article className={`w-full border-bottom ph-md`}>
            <Link to={`/${sum?.slug}`} className={`flex gap-sm flex-col md:flex-row`}>
                <div className={`w h bg-surface md:w lg:w lg:h`} style={{"--w": "100%", "--h": "250px", "--w-md": "300px", "--mnw-md": "300px", "--w-lg": "350px", "--mnw-lg": "450px", "--h-lg": "350px"}}>
                    <img src={sum?.image} alt={`${sum?.title} - ${sum?.summary} - ${sum?.keywords}`} className="w-full h-full" style={{objectFit: 'cover'}} />
                </div>
                <div>
                    <p className="text-sm text-muted"><span style={{textTransform: 'capitalize'}}>{sum?.category}</span> · {date}</p>
                    <h3 className={`text-h3 lg:text-h1`}>{sum?.title}</h3>
                    <p>{sum?.summary}</p>
                </div>
            </Link>
        </article>
    )
}