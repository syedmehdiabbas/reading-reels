import "./App.css";

type ReelProps = {
  title: string;
  image: string;
  text: string;
  url: string;
};

const Reel = ({ title, image, text, url }: ReelProps) => {
  const shortenedText = text.split(".")[0];

  return (
    <div
      key={url}
      className="reel-slide"
      style={{ backgroundImage: `url(${image})` }}
    >
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
