import React, {PureComponent} from "react";
import ReactDOM from "react";
import Link from "next/link";
import materialUI from "@material-ui/core";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Methodology from "pages/methodology";


function Head() {
  return (

  <div>

      <Container
        style={{ width: "1200px", backgroundColor: "#0B0C10", padding: "1em" }}
      >
        <Row>
          <Col sm={1}>
            <img
              alt="Grassroots Law Project"
              width={261}
              height={60}
              src="https://images.squarespace-cdn.com/content/5e7662fe45630059ae9347cf/1591116153336-2V6MDHUQAXMOIKOZI6DJ/glp+text+only+logo+neon.png?format=1500w&content-type=image%2Fpng"
            />
            ​
          </Col>
          <Col sm={9}>
            {" "}
            <h2
              align="center"
              style={{
                font: "helvetica-neue",
                fontWeight: "heavy",
                color: "#66fcf1",
              }}
            >
              Police Killings Dashboard
            </h2>
          </Col>
          <Col sm={2}>
            {" "}
            <Button
              style={{ backgroundColor: "#66fcf1", color: "#000" }}
              variant="link"
              href="https://secure.actblue.com/donate/glp-homepage?refcode=homepage_nav"
            >
              DONATE
            </Button>
          </Col>
        </Row>
      </Container>
  
      <Container
      style={{ backgroundColor: "#000", color: "#000" }}
      >
        <Link href="/">
          <a style={ { fontSize: 25, color:"#fff" } }>Home</a>
        </Link>  &nbsp;
        <Link href="/methodology">
          <a style={ { fontSize: 25, color:"#fff" } }>Our Methodology</a>
        </Link>
       </Container>
    <p></p>
     </div>
    );
}


export default Head;
