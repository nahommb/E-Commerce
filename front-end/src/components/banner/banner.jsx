import './banner.css'
export const Banner = (props)=>{
    return <>
        <div className="banner-boarding">
          <div className="inner-boarding">
            <div className="banner-text" >
            <h1>{props.bannerText} <br/><span style={{marginLeft:'10%'}}></span></h1>
            </div>
           {/* <img className="banner-image" src={props.bannerImage}></img> */}
          </div>
        </div>
    </>
}