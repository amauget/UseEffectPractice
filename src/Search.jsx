export default function Search({handleEntry, handleClick}){
  return(
    <>
      <input type="text" onChange={handleEntry} />
      <button className="searchBtn" onClick={handleClick}>Search</button>
    </>
  )
}