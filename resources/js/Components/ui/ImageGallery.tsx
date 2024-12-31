import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";

export default function ImageGallery({images}: {images: string[]}) {

    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
      }, [slider1, slider2]);

    let settings1 = {
        speed: 500,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        waitForAnimate: false,
        fade: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    let settings2 = {
        speed: 500,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
    }

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
          <div
            className={`${className} dialogRight`}
            onClick={onClick}
          />
        );
      }

      function PrevArrow(props) {
        const { className, onClick } = props;
        return (
          <div
            className={`${className} dialogLeft`}
            onClick={onClick}
          />
        );
      }
    return (
        <div className="w-1/2 h-full flex justify-between gap-3">
        <div className="w-1/6">
            <Slider asNavFor={nav1} ref={(slider) => setSlider2(slider)} {...settings2}>
                {images.map((image) => (
                    <img src={image} alt="" className="cursor-pointer" />
                ))}
            </Slider>
        </div>
        <div className="w-5/6">
            <Slider asNavFor={nav2} ref={(slider) => setSlider1(slider)} {...settings1}>
                {images.map((image) => (
                    <img src={image} alt="" />
                ))}
            </Slider>
        </div>
    </div>
    )
}
