import BoxOnTheTop from "./componets/BoxOnTheTop"
import BoxSec from "./componets/BoxSec"
import LastBox from "./componets/LastBox"


function Top() {
 return(
    <div id="mainBox" style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
     
      
     

    }}>
      <section> <BoxOnTheTop/> </section>
      <section> <BoxSec/> </section>
      <section> <LastBox/> </section>
    </div>
  
  
 )
}

export default Top
