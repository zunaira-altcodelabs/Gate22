import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Sidebar, ShopHeader, ShopProducts } from "../../components/Shop";
import { getSortedProducts } from "../../lib/product";

const GridLeftSidebar = () => {
  const { products } = useSelector((state) => state.product);
  const [layout, setLayout] = useState("grid");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

  const pageLimit = 12;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Shop">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Shop</li>
        </ol>
      </BreadcrumbOne>
      <div className="shop-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              {/* shop page header */}
              <ShopHeader
                getLayout={getLayout}
                getFilterSortParams={getFilterSortParams}
                shopTopFilterStatus={shopTopFilterStatus}
                setShopTopFilterStatus={setShopTopFilterStatus}
                layout={layout}
              />
              {/* shop products */}
              <ShopProducts layout={layout} products={currentData} />

              {/* shop product pagination */}
              <div className="pagination pagination-style pagination-style--two justify-content-center">
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="mb-0 mt-0"
                  pagePrevText="«"
                  pageNextText="»"
                />
              </div>
            </Col>
            <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              {/* sidebar */}
              <Sidebar products={products} getSortParams={getSortParams} />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default GridLeftSidebar;
