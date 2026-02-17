import moment from "moment";
import { Link } from "react-router-dom";
export default function CardNews ({ sum }) {

    const date = moment(sum?.timestamp).fromNow();

    return (
        <article className={`w-full`}>
            <Link to={`/${sum?.slug}`} className={`flex gap-sm`}>
                <div className={`${sum?.holder ? 'w-full h lg:h' : 'w h'} bg-surface`} style={{"--h": `250px`, "--w": "100px", "--mnw": "100px", "--h-lg": `400px`}}>
                    <img src={sum?.image} alt={`${sum?.title} - ${sum?.summary} - ${sum?.keywords}`} className="w-full h-full" style={{objectFit: 'cover'}} />
                </div>
                <div>
                    <p className="text-sm text-muted">{date}</p>
                    <h3 className={`text-h3 lg:text-h1`}>{sum?.title}</h3>
                    <p>{sum?.summary}</p>
                </div>
            </Link>
        </article>
    )
}