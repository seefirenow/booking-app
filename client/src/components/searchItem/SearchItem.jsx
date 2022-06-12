import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m od centrum</span>
        <span className="siTaxiOp">Darmowa taksówka z lotniska</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Darmowa rezygnacja z rezerwacji </span>
        <span className="siCancelOpSubtitle">
          Możesz anulować pobyt w każdje chwili, więc zarezerwój już teraz!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>wyśmienicie</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Obejmuje podatki i opłaty</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Zobacz dostępność</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
