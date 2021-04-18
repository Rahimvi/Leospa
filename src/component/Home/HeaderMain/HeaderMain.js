import React from 'react';
import mainHeader from '../../../images/main-header.png'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#1e2528' }}>Beauty and success <br />starts here.</h1>
                <p className="text-secondary">Together creeping heaven upon third dominion be upon won't darkness rule behold it created good saw after she'd Our set living.</p>
                <button className="btn btn-brand text-white">RESERVE NOW</button>
            </div>
            <div className="col-md-6">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={mainHeader} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={mainHeader} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={mainHeader} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;