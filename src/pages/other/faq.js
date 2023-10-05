import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { IoMdAdd } from "react-icons/io";
import { LayoutOne } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";

const Faq = () => {
  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="F.A.Q">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">F.A.Q</li>
        </ol>
      </BreadcrumbOne>
      <div className="faq-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col md={6}>
              <div className="heading-s1 mb-3 mb-md-5">
                <h3>General questions</h3>
              </div>
              <Accordion defaultActiveKey="0" className="faq-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Do you have any built-in caching?
                    <IoMdAdd />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of
                      letters, as opposed to using 'Content here, content
                      here', making it look like readable English. Many
                      desktop publishing packages and web page editors now use
                      Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                  How do I upload files from my phone or tablet?
                    <IoMdAdd />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of
                      text.
                    </p>
                    <p>
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                      </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How can I start my design?
                    <IoMdAdd />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage,
                      and going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem
                      Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                      Finibus Bonorum et Malorum" (The Extremes of Good and
                      Evil) by Cicero, written in 45 BC.{" "}
                    </p>
                    <p>
                      This book is a treatise on the theory of ethics, very
                      popular during the Renaissance. The first line of Lorem
                      Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                      in section 1.10.32.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What are popular free webpage builders?
                    <IoMdAdd />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt
                      in culpa qui officia deserunt mollitia animi, id est
                      laborum et dolorum fuga.
                    </p>
                    <p>
                      Et harum quidem rerum facilis est et expedita
                      distinctio. Nam libero tempore, cum soluta nobis est
                      eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae
                      non recusandae.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <div className="heading-s1 mb-3 mb-md-5">
                <h3>Other questions</h3>
              </div>
              <Accordion defaultActiveKey="4" className="faq-accordion">
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    What is the weirdest website on the internet?
                    <IoMdAdd />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of
                      letters, as opposed to using 'Content here, content
                      here', making it look like readable English. Many
                      desktop publishing packages and web page editors now use
                      Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Can I add/upgrade my plan at any time?
                    <IoMdAdd />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of
                      text.
                    </p>
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a
                      dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable. The generated Lorem Ipsum
                      is therefore always free from repetition, injected
                      humour, or non-characteristic words etc.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    What access comes with my hosting plan?
                    <IoMdAdd />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage,
                      and going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem
                      Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                      Finibus Bonorum et Malorum" (The Extremes of Good and
                      Evil) by Cicero, written in 45 BC.{" "}
                    </p>
                    <p>
                      This book is a treatise on the theory of ethics, very
                      popular during the Renaissance. The first line of Lorem
                      Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                      in section 1.10.32.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    What are some lesser known but useful websites?
                    <IoMdAdd />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos
                      ducimus qui blanditiis praesentium voluptatum deleniti
                      atque corrupti quos dolores et quas molestias excepturi
                      sint occaecati cupiditate non provident, similique sunt
                      in culpa qui officia deserunt mollitia animi, id est
                      laborum et dolorum fuga.
                    </p>
                    <p>
                      Et harum quidem rerum facilis est et expedita
                      distinctio. Nam libero tempore, cum soluta nobis est
                      eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae
                      non recusandae.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default Faq;
