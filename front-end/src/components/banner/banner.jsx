import './banner.css'
export const Banner = (props)=>{

 const images = props.images
  // console.log(images)
  
    return <>
        <div className="banner-boarding">
          <div className="inner-boarding">
            <div className="banner-text" >
            <h1>{props.bannerText} <br/><span style={{marginLeft:'10%'}}></span></h1>
            </div>
            <div className="logo-container">
              {
                images.map((image,index)=>{
                  return <img key={index} className="logo" src={image} onClick={()=>{console.log(index)}}></img>
                })
              }
            </div>
           
          </div>
        </div>
    </>
}