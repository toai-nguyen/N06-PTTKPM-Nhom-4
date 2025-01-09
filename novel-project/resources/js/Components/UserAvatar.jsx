export default function UserAvatar({src, alt, className}) {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
        />
    );
}