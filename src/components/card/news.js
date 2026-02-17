import moment from "moment";
import { Link } from "react-router-dom";
export default function CardNews ({idx, sum}) {

    const date = moment(sum.timestamp).fromNow();

    const classIdx = {
        0: {
            md: "1 / 1 / 2 / 3",
            lg: "1 / 1 / 5 / 9", // HERO
        },
        1: {
            md: "2 / 1 / 3 / 2",
            lg: "1 / 9 / 2 / 13",
        },
        2: {
            md: "2 / 2 / 3 / 3",
            lg: "2 / 9 / 3 / 13",
        },
        3: {
            md: "3 / 1 / 4 / 2",
            lg: "3 / 9 / 4 / 13",
        },
        4: {
            md: "3 / 2 / 4 / 3",
            lg: "4 / 9 / 5 / 13",
        },
    };


    return (
        <article className={`w-full md:grid-area lg:grid-area ${idx !== 0 ? 'lg:w' : ''}`} style={{"--grid-area-md": `${classIdx[idx]['md']}`, "--grid-area-lg": `${classIdx[idx]['lg']}`}}>
            <Link to={`/${sum.slug}`} className={`flex ${sum.holder ? 'flex-col' : 'flex-row'} gap-sm`}>
                <div className={`${sum.holder ? 'w-full h lg:h' : 'w h'} bg-surface`} style={{"--h": `${sum.holder ? '250px' : '100px'}`, "--w": "100px", "--mnw": "100px", "--h-lg": `${sum.holder ? '400px' : ''}`}}>
                    <img src='https://lacamara.pe/wp-content/uploads/2024/07/McDonalds-Peru--1536x1024.jpg' alt={`${sum.title} - ${sum.summary} - ${sum.keywords}`} className="w-full h-full" style={{objectFit: 'cover'}} />
                </div>
                <div>
                    <p className="text-sm text-muted">{date}</p>
                    <h3 className={`${idx === 0 ? 'text-h3 lg:text-h1' : 'lg:text-h5'}`}>{sum.title}</h3>
                    {idx === 0 && (
                        <p>{sum.summary}</p>
                    )}
                </div>
            </Link>
        </article>
    )
}