import Link from "next/link";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Register = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Register">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Register</li>
        </ol>
      </BreadcrumbOne>
      <div className="login-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} md={10}>
              <div className="login-wrap">
                <div className="heading-s1 space-mb--20">
                  <h3>Create An Account</h3>
                </div>
                <div>
                  <form method="post">
                    <div className="mb-3">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="cpassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="login-footer mb-3">
                      <div className="check-form">
                        <div className="custom-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox1"
                            defaultValue
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox1"
                          >
                            <span>I agree to terms & Policy.</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="login"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="different-login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login text-center">
                    <li>
                      <a href="#" className="btn btn-facebook">
                        <FaFacebookF />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-google">
                        <FaGooglePlusG />
                        Google
                      </a>
                    </li>
                  </ul>
                  <div className="form-note text-center space-mt--20">
                    Already have an account?{" "}
                    <Link href="/other/login">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Register;
