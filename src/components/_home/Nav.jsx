import React from 'react'
// import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
export function Nav() {
  return (
    <>
      <Navbar position="static">
        <NavbarBrand>
          <img src="src/assets/logo.png" alt="" width={64} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#" className='text-xl'>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className='text-xl'>
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className='text-xl'>
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
