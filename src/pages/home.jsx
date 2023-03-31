import Listpage from "../components/listpage";
import Header from "../components/header"
export function Home() {

  return(
      <div className="w-full flex flex-col items-center justify-center bg-white">
        <Header/>
        <Listpage/> 
      </div>
  )
}
export default Listpage;


