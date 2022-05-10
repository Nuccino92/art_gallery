import "./Info.scss";

const Info: React.FC = () => {
  return (
    <div className="Info">
      <header>
        <h1>Information about the website</h1>
      </header>
      <p>
        This website features a select choice of images that I particularly
        enjoyed on an image sharing website-Unsplash. All images contain a link
        to the authors Unsplash profile where you can go and view more pictures
        they have taken in order to promote their work. Along with this, each
        image contains information regarding the amount of views and downloads
        it has.
      </p>
      <p>
        To view the code for this website -{" "}
        <a
          href="https://github.com/Nuccino92/art_gallery"
          target={"_blank"}
          rel="noreferrer"
        >
          Click here
        </a>
      </p>
    </div>
  );
};

export default Info;
