import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import './styles.css'

const Gallery = () => {


  const galleryPhotos = [
    {
      count: 1,
      src : require("../../assets/pictures/GalleryPhotos/IMG_8898.jpeg")
    },
    {
      count: 2,
      src : require("../../assets/pictures/GalleryPhotos/2.jpg")
    },
    {
      count: 3,
      src : require("../../assets/pictures/GalleryPhotos/3.jpg")
    },
    {
      count: 4,
      src : require("../../assets/pictures/GalleryPhotos/4.jpg")
    },
    {
      count: 5,
      src : require("../../assets/pictures/GalleryPhotos/IMG_1567.jpeg")
    },
    {
      count: 6,
      src : require("../../assets/pictures/GalleryPhotos/IMG_6990.jpeg")
    },
    {
      count: 7,
      src : require("../../assets/pictures/GalleryPhotos/IMG_6993.jpeg")
    },
    {
      count: 8,
      src : require("../../assets/pictures/GalleryPhotos/IMG_6942.jpeg")
    },
  ]



  return (

    <div className="gallery-container">
      
      {/* <div className='gallery-title'>Gallery</div> */}

      <div className='left-side' style={{ position:"absolute", height: "100%", left: "15%"}}>
        <div style={{height: "50%", display:"flex", justifyContent:"center", verticalAlign:"middle", alignItems:"center"}} >Galleria</div>
        <div style={{height: "50%", display:"flex", justifyContent:"center", verticalAlign:"middle", alignItems:"center"}}>Gallery</div>
      </div>

      <div className='right-side' style={{ position:"absolute", height: "100%", right: "15%"}}>
        <div style={{height: "50%", display:"flex", justifyContent:"center", verticalAlign:"middle", alignItems:"center"}}>Galerie</div>
        <div style={{ height: "50%", display:"flex", justifyContent:"center", verticalAlign:"middle", alignItems:"center"}}>Galería</div>
      </div>

      <Swiper 
      modules={[Navigation]}
      spaceBetween={100} 
      slidesPerView={1} 
      navigation={true} 
      className="mySwiper">
          <div className='gallery-title'>Gallery</div>
        {
          galleryPhotos.map(photo => {
            return (
              <SwiperSlide draggable={false} key={photo.count}><div draggable={false} className='carousel-photo'><img draggable={false} aria-hidden={true} aria-selected={false} src={photo.src}/></div></SwiperSlide>
            )
          })
        }
      </Swiper>

    </div>
  )
}

export default Gallery