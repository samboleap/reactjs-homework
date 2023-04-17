import React from 'react'

const slideShow = () => {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://youimg1.tripcdn.com/target/10051f000001gssyfC0BE.jpg?proc=source%2Ftrip" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAj8JCGgf5MxLPOp-5uCpqR4lmu310W_ypQ&usqp=CAU" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTxZKc4pMqY9q-e9EayGzmLyI_cyCroe2DA&usqp=CAU" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default slideShow
