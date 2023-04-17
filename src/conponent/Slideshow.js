export default function Slideshow() {
    return (
        <main>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://eastgateacademy.ca/wp-content/uploads/2021/12/Learning.jpg" className="d-block w-100  h-50" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.openaccessgovernment.org/wp-content/uploads/2018/11/dreamstime_s_47450085.jpg" className="d-block w-100 h-50"  />
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbegkRxE_CK7ZFqb7M0Xsgmil9WIzunPXefT1MRqwEmtD_jrrXRBOaf0RNmQUeMfcuOc&usqp=CAU" className="d-block w-100 h-50" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    )
}