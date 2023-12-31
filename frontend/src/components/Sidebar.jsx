import { useSelector } from "react-redux";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "sticky",
        top: "0",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader
          prefix={<i className="toggle-button fa fa-bars fa-large"></i>}
        >
          <NavLink to="/">
           
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/cart">
              <CDBSidebarMenuItem icon="shop">Cart</CDBSidebarMenuItem>
            </NavLink>
            {userInfo ? (
              <>
                <NavLink to="/profile">
                  <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <CDBSidebarMenuItem icon="user">
                    Login/Register
                  </CDBSidebarMenuItem>
                </NavLink>
              </>
            )}
            <NavLink to="/orders">
              <CDBSidebarMenuItem icon="chart-line">Orders</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
