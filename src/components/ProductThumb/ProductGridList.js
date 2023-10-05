import { Fragment, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import ProductModal from "./elements/ProductModal";
import { ProductRating } from "../Product";
import { addToCart } from "../../store/slices/cart-slice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../store/slices/wishlist-slice";

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [colorImage, setColorImage] = useState("");
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="product-grid">
        <div className="product-grid__image">
          <Link href={"/shop/product-basic/" + product.slug}>
            <img
              src={colorImage ? colorImage : product.thumbImage[0]}
              alt="product_img1"
            />
          </Link>
          <div className="product-grid__badge-wrapper">
            {product.new ? <span className="pr-flash">NEW</span> : ""}
            {product.featured ? (
              <span className="pr-flash bg-danger">HOT</span>
            ) : (
              ""
            )}
            {product.discount ? (
              <span className="pr-flash bg-success">SALE</span>
            ) : (
              ""
            )}
          </div>
          <div className="product-grid__action-box">
            <ul>
              <li>
                {product.affiliateLink ? (
                  <a href={product.affiliateLink} target="_blank">
                    <i className="icon-action-redo" />
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  <Link href={"/shop/product-basic/" + product.slug}>
                    <i className="icon-wrench" />
                  </Link>
                ) : product.stock && product.stock > 0 ? (
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    disabled={
                      cartItem !== undefined &&
                      cartItem.quantity >= cartItem.stock
                    }
                    className={cartItem !== undefined ? "active" : ""}
                  >
                    <i className="icon-basket-loaded" />
                  </button>
                ) : (
                  <button disabled>
                    <i className="icon-basket-loaded" />
                  </button>
                )}
              </li>

              <li>
                <button
                  onClick={() => setModalShow(true)}
                  className="d-none d-lg-block"
                >
                  <i className="icon-magnifier-add" />
                </button>
              </li>
              <li>
                <button
                  onClick={
                    wishlistItem !== undefined
                      ? () => dispatch(deleteFromWishlist(product.id))
                      : () => dispatch(addToWishlist(product))
                  }
                  className={wishlistItem !== undefined ? "active" : ""}
                >
                  <i className="icon-heart" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-grid__info">
          <h6 className="product-title">
            <Link href={"/shop/product-basic/" + product.slug}>
              {product.name}
            </Link>
          </h6>
          <div className="product-price">
            {product.discount ? (
              <Fragment>
                <span className="price">${discountedPrice}</span>
                <del>${productPrice}</del>
                <span className="on-sale">{product.discount}% Off</span>
              </Fragment>
            ) : (
              <span className="price">${productPrice}</span>
            )}
          </div>
          <div className="rating-wrap">
            <ProductRating ratingValue={product.rating} />
            <span className="rating-num">({product.ratingCount})</span>
          </div>

          {product.variation ? (
            <div className="product-switch-wrap">
              <ul>
                {product.variation.map((single, key) => {
                  return (
                    <li key={key}>
                      <button
                        style={{ backgroundColor: `${single.colorCode}` }}
                        onClick={() => setColorImage(single.image)}
                        className={colorImage === single.image ? "active" : ""}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="product-list">
        <div className="product-list__image">
          <Link href={"/shop/product-basic/" + product.slug}>
            <img
              src={colorImage ? colorImage : product.thumbImage[0]}
              alt="product_img1"
            />
          </Link>
          <div className="product-grid__badge-wrapper">
            {product.new ? <span className="pr-flash">NEW</span> : ""}
            {product.featured ? (
              <span className="pr-flash bg-danger">HOT</span>
            ) : (
              ""
            )}
            {product.discount ? (
              <span className="pr-flash bg-success">SALE</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="product-list__info">
          <h6 className="product-title">
            <Link href={"/shop/product-basic/" + product.slug}>
              {product.name}
            </Link>
          </h6>
          <div className="d-flex justify-content-between">
            <div className="product-price">
              {product.discount ? (
                <Fragment>
                  <span className="price">${discountedPrice}</span>
                  <del>${productPrice}</del>
                  <span className="on-sale">{product.discount}% Off</span>
                </Fragment>
              ) : (
                <span className="price">${productPrice}</span>
              )}
            </div>
            <div className="rating-wrap">
              <ProductRating ratingValue={product.rating} />
              <span className="rating-num">({product.ratingCount})</span>
            </div>
          </div>
          <div className="product-description">{product.shortDescription}</div>
          {product.variation ? (
            <div className="product-switch-wrap">
              <ul>
                {product.variation.map((single, key) => {
                  return (
                    <li key={key}>
                      <button
                        style={{ backgroundColor: `${single.colorCode}` }}
                        onClick={() => setColorImage(single.image)}
                        className={colorImage === single.image ? "active" : ""}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="product-list__actions">
            <ul>
              <li>
                {product.affiliateLink ? (
                  <a
                    href={product.affiliateLink}
                    className="btn btn-fill-out btn-addtocart"
                    target="_blank"
                  >
                    <i className="icon-action-redo" /> Buy Now
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  <Link
                    href={"/shop/product-basic/" + product.slug}
                    className="btn btn-fill-out btn-addtocart"
                  >
                    <i className="icon-wrench" />
                    Select Options
                  </Link>
                ) : product.stock && product.stock > 0 ? (
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    disabled={
                      cartItem !== undefined &&
                      cartItem.quantity >= cartItem.stock
                    }
                    className={`btn btn-fill-out btn-addtocart ${
                      cartItem !== undefined ? "active" : ""
                    }`}
                  >
                    <i className="icon-basket-loaded" /> Add To Cart
                  </button>
                ) : (
                  <button disabled className="btn btn-fill-out btn-addtocart">
                    <i className="icon-basket-loaded" /> Add To Cart
                  </button>
                )}
              </li>

              <li>
                <button
                  onClick={() => setModalShow(true)}
                  className="d-none d-lg-block"
                >
                  <i className="icon-magnifier-add" />
                </button>
              </li>
              <li>
                <button
                  onClick={
                    wishlistItem !== undefined
                      ? () => dispatch(deleteFromWishlist(product.id))
                      : () => dispatch(addToWishlist(product))
                  }
                  className={wishlistItem !== undefined ? "active" : ""}
                >
                  <i className="icon-heart" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
      />
    </Fragment>
  );
};

export default ProductGridList;
