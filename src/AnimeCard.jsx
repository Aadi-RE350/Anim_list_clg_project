import React from "react"


const AnimeCard =({anime})=>{
    return(
        <div className="movie">
            <div>
                <p>{anime.aired.string}</p>
            </div>
            <div>
                <img src={anime.images.jpg.image_url != 'N/A' ? anime.images.jpg.image_url:'https://via.placeholder.com/400'} alt={anime.title}></img>
            </div>
            <div>
                <span>{anime.type}</span>
                <h3>{anime.title}</h3>
            </div>
        </div>  
    )
}

export default AnimeCard
