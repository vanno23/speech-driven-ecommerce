import "./ProductDetails.css";
import Comment from "../Comment/Comment";

export const ProductDetails = ({ changeDetail, setChangeDetail, product }) => {
  return (
    <div className="productDetails">
      <div className="changeDetails">
        <button
          className={changeDetail ? "active" : ""}
          onClick={() => setChangeDetail(true)}
        >
          <i class="fa-solid fa-ellipsis"></i>Details
        </button>
        <button
          className={changeDetail ? "" : "active"}
          onClick={() => setChangeDetail(false)}
        >
          <i class="fa-regular fa-comment"></i>
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
              {product?.details_type.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <Comment productId={product.id} />
        )}
      </div>
    </div>
  );
};
