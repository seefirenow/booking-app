import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Zaoszczędź czas, zaoszczędź pieniądze!</h1>
      <span className="mailDesc">
        Zaloguj się i my wyślemy ci najlepsze oferty
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Twój Email" />
        <button>Subskrybuj</button>
      </div>
    </div>
  );
};

export default MailList;
