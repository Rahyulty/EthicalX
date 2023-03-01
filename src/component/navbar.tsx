import React from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { Navbar, Text, Button, Link } from '@nextui-org/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrowsePage from '../pages/browsepage';
import Home from "../pages/home";
import Company from "../pages/companypage"

const Navigation = () => {
  return (
    <Router>
      <Navbar isBordered variant={'floating'}>
        <Navbar.Brand>
          <HiShoppingBag />
          <Text b color="inherit" hideIn="xs">
            EthicalX
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="#">Upload</Navbar.Link>
          <Navbar.Link href="/browse">Browse</Navbar.Link>
          <Navbar.Link href="/company">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href='#'>
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href='#'>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <Routes>
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/comapny" element={<Company />} />
      </Routes>
    </Router>
  )
}

export default Navigation;
