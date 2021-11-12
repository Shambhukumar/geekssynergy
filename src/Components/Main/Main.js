import React, {useEffect,useState} from 'react'
import Card from "../Card/Card";
import axios from "axios";
import "./Main.scss"


const Main = (props) => {
 const [data, setData] = useState();
 const [compneyinfo, setCompneyIngo] = useState(false);
 const movieFilter = {
    category: "movies",
    language: "kannada",
    genre: "all",
    sort: "voting"
 }
 const apicall = async(filter) =>{
    const data = await axios.post("https://hoblist.com/api/movieList",filter)
    console.log(data)
    setData(data)
}
useEffect(()=>{
    apicall(movieFilter)
},[])

const FilterSearch = () =>{
    const language = document.getElementById("language").value;
    const genre = document.getElementById("genre").value;
    movieFilter.language = language;
    movieFilter.genre = genre;
    apicall(movieFilter)
}



    
    return (
        <div className="main">
            <div className="main-menu">
                <span>Filters</span>
                <select id="language">
                    <option value="kannada">kannada</option>
                    <option value="hindi">hindi</option>
                    
                </select>
                <select id="genre">
                    <option value="all">all</option>
                    <option value="action">action</option>
                </select>
                <span className="main-menu_button" onClick={()=> FilterSearch()}>Search</span>
                <div className="main-menu-info">
                    <span className={compneyinfo ? "main-menu-info-btn main-menu-info-btn-active" : "main-menu-info-btn" } onClick={()=>setCompneyIngo(true)}>Company info</span>
                    <span className={!compneyinfo ? "main-menu-info-btn main-menu-info-btn-active" : "main-menu-info-btn" } onClick={()=>setCompneyIngo(false)}>Results</span>
                </div>
            </div>
            <div className="main-card">
 {
            !compneyinfo ?   data && data.data.result.map((e,el)=>{
                    return(
                        <Card movie={e}/>
                    )
                }) :
                <div className="main-card-comanyinfo">
                       <h1>Company: Geeksynergy Technologies Pvt Ltd </h1> 
                        <h1>Address: Sanjayanagar, Bengaluru-56 </h1>
                        <h1> Phone: XXXXXXXXX09</h1>
                        <h1> Email: XXXXXX@gmail.com</h1>
                </div>
            }

            </div>
           
            
        </div>
    )
}


export default Main

