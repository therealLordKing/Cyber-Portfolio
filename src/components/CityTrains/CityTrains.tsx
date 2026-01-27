import cityBackdrop from "../../assets/images/home/City back drop.jpg";
import "./CityTrains.css";

type CityTrainsProps = {
  className?: string;
  imageOpacity?: number;
};

export default function CityTrains({
  className = "",
  imageOpacity = 0.25,
}: CityTrainsProps) {
  return (
    <div className={`city-trains-wrapper ${className}`} aria-hidden="true">
      <img
        src={cityBackdrop}
        alt=""
        className="city-trains-bg"
        style={{ opacity: imageOpacity }}
      />
      <div className="city-train city-train--1" />
      <div className="city-train city-train--2" />
      <div className="city-train city-train--3" />
      <div className="city-train city-train--4" />
      <div className="city-train city-train--5" />
    </div>
  );
}
