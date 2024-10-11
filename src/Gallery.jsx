import './Gallery.css'
export default function Gallery({query}){

  if(query.length === 0){
      <p>{'Use the search bar to find GIFs!'}</p>
    } 
    else{
      return(
        <div className="resultsContainer">
          {query.map((item) =>{
            return(
              <img src={item.images.original.url} key={crypto.randomUUID}></img>
            )
          })
        }
        </div>
      )  
    }
  }


