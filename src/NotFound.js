import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Üzgünüm...</h2>
            <p>Böyle bir sayfa bulunamadı.</p>
            <a href="/">Ana sayfaya dön</a>
        </div>
     );
}
 
export default NotFound;