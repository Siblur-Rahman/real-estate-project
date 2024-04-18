
const Slider = ({estate}) => {
    const {image} = estate
    return (
        
                <div className="carousel-item w-full">
                        <img src={image} className="rounded-box" />
                </div>

    );
};

export default Slider;