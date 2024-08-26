import BellIcon from "./Icons/Bell";
import MediumIcon from "./Icons/Medium";
import SearchIcon from "./Icons/Search";
import WriteIcon from "./Icons/Write";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <div className="">
      {/* <div className="">
        <MediumIcon />
        <div className=" bg-[#F9F9F9] w-[240px] rounded-[20px] flex items-center">
          <div className=" mx-3">
            <SearchIcon />
          </div>
          <input
            className=" bg-transparent py-[10px] pr-[20px] text-sm text-[#242424]"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="">
        <div className="">
          <WriteIcon />
          Write
        </div>
        <BellIcon />
        <div className=" rounded-full size-8 border" />
      </div> */}

      <header>
        <Navbar
          collapseOnSelect
          className="bg-body-tertiary mb-3 border-bottom"
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="/">Blogster</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <SearchBox /> */}
                <Nav.Link>
                  <WriteIcon />
                  Write
                </Nav.Link>

                <Nav.Link>
                  <BellIcon />
                </Nav.Link>

                <Nav.Link>
                  <FaUser />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
