import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserLogin } from "../store/Slices/User/UserFunction";
import FormContainer from "../components/FormContainer";
import whiteLogo from "../assets/logo.svg";
import { AiOutlineLogin } from "react-icons/ai";

const LoginScreen = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = searchParams.get("redirect");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user);
  const { userInfo, error } = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo, redirect]);
  const submitHandler = async (e) => {
    e.preventDefault();
    UserLogin(dispatch, email, password);
  };

  return (
    <div className="page-screen row d-flex justify-content-center align-items-center h-100 bg-black">
      <Row className="shadow-lg p-3">
        
        <Col md>
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="font-weight-bold" style={{ margin: "0",color:"#ffffff" }}>
                Login
              </h2>
              <AiOutlineLogin size={30} />
            </div>
            {error && <Alert variant="error">{error}</Alert>}
            <Form
              className="login-form d-flex justify-content-center align-items-start flex-column"
              onSubmit={submitHandler}
            >
              <Form.Group controlId="email">
                <Form.Label>
                  <i className="mx-1 fa-solid fa-envelope"></i>Email Address
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>
                  <i className="mx-1 fa-solid fa-lock"></i> Password
                </Form.Label>
                <Form.Control
                  className="rounded"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button
                className="rounded align-self-start"
                type="submit"
                variant="primary"
              >
                Sign In
                <i className="mx-2 fa-solid fa-right-to-bracket"></i>
              </Button>
              <div className="py-3 text-center">
                New Customer?{" "}
                <Link
                    to={redirect ? `/register?redirect=${redirect}` : "/register"}
                    style={{
                      border: '1px solid #fff',  // рамка товщиною 1px і білого кольору
                      padding: '5px',            // зазначте необхідний відступ від тексту до рамки
                      borderRadius: '5px',       // заокруглені кути
                      textDecoration: 'none',    // видалення стандартного оформлення тексту
                      color: '#fff',             // колір тексту
                    }}
                  >
                  Register  
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;
