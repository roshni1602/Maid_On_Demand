import React from "react";
import img1 from "./Images/cooking.jpg";
import img2 from "./Images/cleaning.jpg";
import img3 from "./Images/washing.jpg";
class Front extends React.Component
{
    render(){
        return (
        <div >
            <h1>
             <p style={{ color : 'black'}}>  Maid On Demand (MOD) </p>
             </h1>
          
             <img style={{textalign:"left"}}src ={img1} height={400} width={400} alt= "" />
             <img src ={img2} height={400} width={400} alt= "" />
             <img src ={img3} height={400} width={400} alt= "" />
           
             
                <p style={{ color : 'black'}}> Maid on Demand website is made to make your maid hiring experience 
                        much better and safer.<br/> Our website has certified maids which you 
                        can browse and select according to your requirements.<br/> We ensure 
                        the safety of our customers and maids and provide you quality work
                        on time according to your requirements.<br/>
                </p>
             
        </div>
        )
}
}
export default Front;