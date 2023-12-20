import { useEffect, useState } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../store/Slices/App/AppSlice";
import Product from "../components/Product";
import Loader from "../components/loader";
import Toastify from "../components/Toastify";
import listProducts from "../store/Slices/Product/ProductFunctions";
import ErrorImage from "../assets/ErrorBadRequest.svg";
import { AiFillCar } from "react-icons/ai";
import { RiMoneyDollarCircleLine, Ri24HoursFill } from "react-icons/ri";
import HomeProductCard from "../components/HomeProductCard";
import { getAllCategoriesList } from "../network/endpoints/Products";
import { FaCartArrowDown } from "react-icons/fa";

const HomeScreen = () => {
  const [allCategories, setAllCategories] = useState([]);
  const { products, error } = useSelector((state) => state.productList);
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const Load = async () => {
    await getAllCategoriesList().then((response) => {
      setAllCategories(response.data);
    });
    await listProducts(dispatch, "All");
    setTimeout(() => {
      dispatch(toggleLoading(false));
    }, 500);
  };

  const getCategory = async (category) => {
    dispatch(toggleLoading(true));
    await listProducts(dispatch, category);
    setTimeout(() => {
      dispatch(toggleLoading(false));
    }, 2000);
  };

  useEffect(() => {
    dispatch(toggleLoading(true));
    Load();
  }, []);

  return (
    <div className="page-screen">
      {app.isLoading ? (
        <Loader />
      ) : error ? (
        <>
          {Toastify(error, "error")}
          <img className="error-image" src={ErrorImage} alt="" />
        </>
      ) : (
        <Row>
          
          <Container fluid>
            <Row>
              <Col className="h-100">
                <HomeProductCard
                  image="https://streetwear.com.ua/img/b/1463_3_l2.jpg"
                 
                />
              </Col>
            </Row>
            
          </Container>
          <h3 className="mt-5 mb-4">
            Women clouses <FaCartArrowDown />
          </h3>
          <Row>
            <Col sm className="d-flex justify-content-center">
              <Button
                variant="outline-primary"
                className="my-3 category-button"
                value="All"
                onClick={(e) => getCategory(e.target.value)}
              >
                All
              </Button>
            </Col>
            {allCategories.map((element) => (
              <Col sm className="d-flex justify-content-center" key={element}>
                <Button
                  variant="outline-primary"
                  className="my-3 category-button"
                  value={element}
                  onClick={(e) => getCategory(e.target.value)}
                >
                  {element}
                </Button>
              </Col>
            ))}
          </Row>
          <Row className="mt-4 mb-4">
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          
         
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
