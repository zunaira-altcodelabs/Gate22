import Link from "next/link";
import { IoIosSearch, IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="widget">
        <div className="search-form">
          <form>
            <input
              required
              className="form-control"
              placeholder="Search..."
              type="text"
            />
            <button
              type="submit"
              title="Subscribe"
              className="btn icon-search"
              name="submit"
              value="Submit"
            >
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="widget">
        <h5 className="widget__title">Recent Posts</h5>
        <ul className="widget-recent-post">
          <li>
            <div className="post-footer">
              <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">

                  <img
                    src="/assets/images/blog/latest_post1.jpg"
                    alt="latest_post1"
                  />

                </Link>
              </div>
              <div className="post-footer__content">
                <h6>
                  <Link href="/blog/post-left-sidebar">
                    Lorem ipsum dolor sit amet, consectetur
                  </Link>
                </h6>
                <p className="small m-0">April 14, 2021</p>
              </div>
            </div>
          </li>
          <li>
            <div className="post-footer">
              <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">

                  <img
                    src="/assets/images/blog/latest_post2.jpg"
                    alt="latest_post2"
                  />

                </Link>
              </div>
              <div className="post-footer__content">
                <h6>
                  <Link href="/blog/post-left-sidebar">
                    Lorem ipsum dolor sit amet, consectetur
                  </Link>
                </h6>
                <p className="small m-0">April 14, 2021</p>
              </div>
            </div>
          </li>
          <li>
            <div className="post-footer">
              <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">

                  <img
                    src="/assets/images/blog/latest_post3.jpg"
                    alt="latest_post3"
                  />

                </Link>
              </div>
              <div className="post-footer__content">
                <h6>
                  <Link href="/blog/post-left-sidebar">
                    Lorem ipsum dolor sit amet, consectetur
                  </Link>
                </h6>
                <p className="small m-0">April 14, 2021</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="widget">
        <h5 className="widget__title">Archive</h5>
        <ul className="widget-archive">
          <li>
            <Link href="/blog/grid-left-sidebar">

              <IoIosArrowForward />
              <span className="archive-year">June 2019</span>
              <span className="archive-num">(12)</span>

            </Link>
          </li>
          <li>
            <Link href="/blog/grid-left-sidebar">

              <IoIosArrowForward />
              <span className="archive-year">May 2019</span>
              <span className="archive-num">(5)</span>

            </Link>
          </li>
          <li>
            <Link href="/blog/grid-left-sidebar">

              <IoIosArrowForward />
              <span className="archive-year">March 2018</span>
              <span className="archive-num">(6)</span>

            </Link>
          </li>
          <li>
            <Link href="/blog/grid-left-sidebar">

              <IoIosArrowForward />
              <span className="archive-year">January 2018</span>
              <span className="archive-num">(7)</span>

            </Link>
          </li>
          <li>
            <Link href="/blog/grid-left-sidebar">

              <IoIosArrowForward />
              <span className="archive-year">April 2017</span>
              <span className="archive-num">(10)</span>

            </Link>
          </li>
        </ul>
      </div>
      <div className="widget">
        <div className="shop-banner">
          <div className="banner-img">
            <img
              src="/assets/images/banner/sidebar_banner_img.jpg"
              alt="sidebar_banner_img"
            />
          </div>
          <div className="shop-bn-content2">
            <h5 className="text-uppercase shop-subtitle">New Collection</h5>
            <h3 className="text-uppercase shop-title">Sale 30% Off</h3>
            <Link
              href="/shop/grid-left-sidebar"
              className="btn btn-white rounded-0 btn-sm text-uppercase">
              
                Shop Now
              
            </Link>
          </div>
        </div>
      </div>
      <div className="widget">
        <h5 className="widget__title">tags</h5>

        <div className="tags">
          <Link href="/blog/grid-left-sidebar">
            dress
          </Link>
          <Link href="/blog/grid-left-sidebar">
            design
          </Link>
          <Link href="/blog/grid-left-sidebar">
            branding
          </Link>
          <Link href="/blog/grid-left-sidebar">
            electronics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
