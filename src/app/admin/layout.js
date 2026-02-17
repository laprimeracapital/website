import { Outlet } from "react-router-dom";
import { images } from "../../helpers/images";

export default function AdminLayout () {

    return (


        <>

            <header className="w-full h border-bottom" style={{"--h": "60px"}}>
                <div className="w m-auto h-full flex align-center justify-center md:w lg:w" style={{"--w": "90%", "--w-md": "80%", "--w-lg": "60%"}}>
                    <img src={images['logo-dark']} alt="Logo de La Primera Capital" className="w-full h" style={{"--h": "30px"}} />
                </div>
            </header>
        
            <main className="w m-auto ph-md md:w lg:w" style={{"--w": "90%", "--w-md": "80%", "--w-lg": "60%"}}>
                <Outlet/>
            </main>

        </>

    )

}