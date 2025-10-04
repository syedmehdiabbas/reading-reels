import "./App.css";

type ReelProps = {
  url: string;
  image: string;
  title: string;
  text: string;
  shortenedText: string;
};

const Reel = ({ title, image, text, url, shortenedText }: ReelProps) => {
  return (
    <div className="reel-slide" style={{ backgroundImage: `url(${image})` }}>
      <div className="reel-details-container">
        <div className="reel-details">
          <p className="reel-title">{title}</p>
          <p className="reel-description-landscape">{text}</p>
          <p className="reel-description-portrait">{shortenedText}</p>
          <a className="reel-link" href={url} target="_blank">
            Read more {"->"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reel;
