import { useSearchParams } from "react-router-dom"
import FormEditor from "./components/FormEditor";
import FormCreator from "./components/FormCreator";

export default function EditorPage () {

    const [ query ] = useSearchParams();
    const id = query.get("id");

    return (

        id ? (

            <div>
                <h1>Editar {id}</h1>
                <FormEditor id={id} />
            </div>

        ) : (

            <div>
                <h1>Crear nuevo</h1>
                <FormCreator/>
            </div>

        )

    )

}