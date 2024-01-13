import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";

export default async function ELayout({ children }) {

  const PlayList = await axios.get('http://127.0.0.1:1338/api/play-lists?populate[0]=image')
  const PlayListData =  PlayList?.data
  return (
    <>
      <Header data={PlayListData}/>
      {/* <div className="container m-auto max-w-screen-xl">{children}</div> */}
      <div className="">{children}</div>
      <Footer />
    </>
  );
}
