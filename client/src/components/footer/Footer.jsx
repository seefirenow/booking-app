import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Kraje</li>
          <li className="fListItem">Regiony</li>
          <li className="fListItem">Miasta</li>
          <li className="fListItem">Wojewódźtwa</li>
          <li className="fListItem">Hotele</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Domy</li>
          <li className="fListItem">Apartamenty</li>
          <li className="fListItem">Resorty </li>
          <li className="fListItem">Wille</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Hostele</li>
          <li className="fListItem">Hotele</li>
          <li className="fListItem">Unikatowe miejsca </li>
          <li className="fListItem">Recenzje</li>
          <li className="fListItem">Sezonowe okazje </li>
        </ul>
      </div>
      <div className="fText">
        Copyright © 2022 Booking - Anastazja Klapatok & Julia Napora
      </div>
    </div>
  );
};

export default Footer;
