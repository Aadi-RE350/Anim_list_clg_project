import {useEffect, useState} from "react";
//4e4236de
import './App.css';
import AnimeCard from './AnimeCard'
import SearchIcon from './search.svg'
const API_URL='https://api.jikan.moe/v4/anime'

function App(){
    const [Animes,setAnimes] = useState([]);
    const [SearchTerm,setSearchTerm] = useState('');

    const searchAnime = async(title)=>{
        const response= await fetch(`${API_URL}?q=${title}`);
        const data=await response.json();
        setAnimes(data.data);
    }
    useEffect(()=>{
        searchAnime('berserk');
    },[])
    return(
        <div className="app">
            <h1>ANIME LIST</h1>
            <div className="search">
                <input placeholder="Search for anime"
                value={SearchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}></input>
                <img src={SearchIcon} 
                alt="Search"
                onClick={()=>searchAnime(SearchTerm)}></img>
            </div>
            {
                Animes?.length > 0
                ?(
                    <div className="container">
                        {
                            Animes.map((anime)=>(
                                <AnimeCard anime={anime}/>
                            ))
                        }
                    </div>):
                (
                    <div className="empty">
                        <h2>No Anime Found</h2>
                    </div>
                )
            }
            
        </div>
    )
}

export default App;