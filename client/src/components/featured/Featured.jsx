import useFetch from "../../hooks/useFetch";
import "./featured.css";
import londyn from "../../images/london.jpg";
import madryt from "../../images/madrid.jpg";
import berlin from "../../images/berlin.jpg";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Berlin,Madryt,Londyn"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src={berlin} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} propozycji</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src={madryt} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Madryt</h1>
              <h2>{data[1]} propozycji</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={londyn} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Londyn</h1>
              <h2>{data[2]} propozycji</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
