
function CarousalSlide({title,discription,image,sno}){
    return(
<>

  <div id="slide1" className="carousel-item relative w-full " sno={sno}>
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={image} className="w-1/2 rounded-full border-2 border-gray-500" />
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="font-semibold">{discription}</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={image} className="w-1/2 rounded-full border-2 border-gray-500" />
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="font-semibold">{discription}</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full "sno={sno}>
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={image} className="w-1/2 rounded-full border-2 border-gray-500" />
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="font-semibold">{discription}</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  
  


</>
    )
}
export default CarousalSlide