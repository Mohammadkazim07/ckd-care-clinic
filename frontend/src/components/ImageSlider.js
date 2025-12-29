import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    "/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg", "/images/4.jpeg",
    "/images/5.jpeg", "/images/6.jpeg", "/images/7.jpeg", "/images/8.jpeg",
    "/images/9.jpeg", "/images/10.jpeg", "/images/11.jpeg", "/images/12.jpeg",
    "/images/13.jpeg", "/images/14.jpeg", "/images/15.jpeg", "/images/16.jpeg",
    "/images/17.jpeg", "/images/18.jpeg", "/images/19.jpeg", "/images/20.jpeg",
    "/images/21.jpeg", "/images/22.jpeg", "/images/23.jpeg", "/images/24.jpeg",
    "/images/25.jpeg", "/images/26.jpeg", "/images/27.jpeg", "/images/28.jpeg",
    "/images/29.jpeg", "/images/30.jpeg", "/images/31.jpeg", "/images/32.jpeg",
    "/images/33.jpeg", "/images/34.jpeg", "/images/35.jpeg", "/images/36.jpeg",
    "/images/37.jpeg"
  ];

  return (
    <section className="image-slider-section">
      <div className="container mx-auto px-4">
        <h2 className="slider-title">
          Honors & Achievements Gallery
        </h2>

        <div className="slider-container">
          <div className="slider-track">
            {[...images, ...images].map((img, index) => (
              <div className="slide" key={index}>
                <img src={img} alt="Clinic Gallery" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
