
export const PreviewCard = ({images})=>{


    return <div className="w-full flex pt-8 justify-between">
      <img src={images[0]} className="bg-white-smoke h-52 w-52 rounded-lg">
      
      </img>
      <img src={images[1]} className="bg-white-smoke h-52 w-52 rounded-lg">

      </img>
      <img src={images[2]} className="bg-white-smoke h-52 w-52 rounded-lg">
        
      </img>
      <img src={images[3]} className="bg-white-smoke h-52 w-52 rounded-lg">
        
      </img>
        
    </div>
}