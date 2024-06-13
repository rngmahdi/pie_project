import React from 'react'
// import { Link } from "react-router-dom"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
export function Nav() {
  return (
    <>
      <Navbar position="sticky" >
        <NavbarBrand>
          <img src="src/assets/logo.svg" alt="..." width={64} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <p href="#hero" color="foreground" className='text-xl cursor-pointer'
              onClick={() => {
                let element = document.getElementById("hero")
                element.scrollIntoView({ block: "start", behavior: "smooth" })
              }}
            >
              Home
            </p>
          </NavbarItem>
          <NavbarItem >
            <p href="#examples" color="foreground" className='text-xl cursor-pointer'
              onClick={() => {
                let element = document.getElementById("examples")
                element.scrollIntoView({ block: "start", behavior: "smooth" })
              }}
            >
              Examples
            </p>
          </NavbarItem>
          <NavbarItem >
            <p href="#services" color="foreground" className='text-xl cursor-pointer' onClick={() => {
              let element = document.getElementById("services")
              element.scrollIntoView({ block: "start", behavior: "smooth" })
            }}>
              Services
            </p>
          </NavbarItem>
          <NavbarItem>
            <p href="#contact" color="foreground" className='text-xl cursor-pointer'
              onClick={() => {
                let element = document.getElementById("contact")
                element.scrollIntoView({ block: "start", behavior: "smooth" })
              }}
            >
              Contact
            </p>
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
