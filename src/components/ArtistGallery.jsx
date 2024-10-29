import grupo1 from '../assets/DSC02090.jpg';
import grupo2 from '../assets/DSC02046.jpg';
import grupo3 from '../assets/DSC02086.jpg';
import grupo4 from '../assets/DSC02066.jpg';

export function ArtistGallery() {
    return (
        <section className="artistGallery">
            <img className="artistGallery-img" src={grupo1} alt="grupo1" />
            <img className="artistGallery-img" src={grupo2} alt="grupo2" />
            <img className="artistGallery-img" src={grupo3} alt="grupo3" />
            <img className="artistGallery-img" src={grupo4} alt="grupo4" />
        </section>
    )
}