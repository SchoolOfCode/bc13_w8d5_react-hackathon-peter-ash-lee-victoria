// set up the component
// it takes in a single input
// img with href = {results[i].thumbnail}
// this image also needs to be ahyperlink that goes to results[i].URL


export default function Thumbnail ({link, url}){
   return(
    <a href={link}> <img src={url} alt="result"/> </a>
   )
}