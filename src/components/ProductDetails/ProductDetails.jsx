import "./ProductDetails.css";
import Comment from "../Comment/Comment";
import ChangeDetail from "../../voice/ChangeDetail";
import VoiceNavigation from "../../VoiceNavigation";
import { useChangeDetail } from "../../useContext/ChangeDetailContext"; // Adjust the path as necessary

export const ProductDetails = ({ product }) => {
  const { changeDetail, setChangeDetail } = useChangeDetail(); // Use the context

  return (
    <div className="productDetails">
      <VoiceNavigation />
      <ChangeDetail setChangeDetail={setChangeDetail} />
      <div className="changeDetails">
        <button
          className={changeDetail ? "active" : ""}
          onClick={() => setChangeDetail(true)}
        >
          <i className="fa-solid fa-ellipsis"></i>Details
        </button>
        <button
          className={changeDetail ? "" : "active"}
          onClick={() => setChangeDetail(false)}
        >
          <i className="fa-regular fa-comment"></i>
          Comments
        </button>
      </div>
      <div>
        {changeDetail ? (
          <div className="productDetailsText">
            <h3>Details</h3>
            <div>
              <p>{product?.details}</p>
            </div>
            <ul className="details_type">
              {product?.details_type?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <VoiceNavigation />
            <Comment productId={product.id} />
          </>
        )}
      </div>
    </div>
  );
};
