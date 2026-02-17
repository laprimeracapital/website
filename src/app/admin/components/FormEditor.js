import { useEffect, useState } from "react"
import { getNewById } from "../../../services/news.service";

export default function FormEditor ({ id }) {

    const [formData, setFormData] = useState({
        image: '',
        title: '',
        holder: '',
        summary: '',
        content: '',
        category: '',
        keywords: [],
        published: false
    });

    useEffect(() => {
        const loadForm = async () => {
            try {
                const data = await getNewById(id);
                setFormData({
                    image: data.image,
                    title: data.title,
                    holder: data.holder,
                    summary: data.summary,
                    content: data.content,
                    category: data.category,
                    keywords: data.keywords,
                    published: data.published
                })
            } catch (error) {
                console.error(error);
            }
        }
        loadForm();
    }, [id])

    return (

        <form className="w-full p-md border">
            <div className="w-full">
                <label className="block">Ingresa el titulo de la noticia</label>
                <input placeholder={formData.title || 'Ingresa el titulo'} />
            </div>
            <div className="w-full">
                <label className="block">Ingresa un resumen de la noticia</label>
                <input placeholder={formData.summary || 'Ingresa el titulo'} />
            </div>
        </form>

    )

}