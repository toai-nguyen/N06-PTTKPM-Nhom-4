import image from '../../../public/image/download.png';

export default function ApplicationLogo(props) {
    return (
        <img src= {image} {...props} alt="logo" />
    );
}
