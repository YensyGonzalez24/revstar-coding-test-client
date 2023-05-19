import Navbar from "./navbar";

const MainLayout = ({children}: any) =>{
    return <div className="flex flex-col items-center h-screen">
        <Navbar/>
        <div className="flex-1 flex items-center justify-center w-full max-w-screen-xl relative">
            {children}
        </div>
    </div>
}

export default MainLayout;