import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip, Badge   } from "@nextui-org/react";
import { FaCode, FaArrowPointer, FaHammer, FaHelmetSafety } from "react-icons/fa6";
export function Services() {
  const services = [
    {
      "service_id": 1,
      "icon": <FaArrowPointer className='h-full w-full' />,
      "service_name": "Custom Website Creation",
      "details": [
        "Tailored graphic design aligned with your brand identity.",
        "Responsive design for optimal viewing on all devices.",
        "User experience (UX) and user interface (UI) design to enhance engagement and usability."
      ]
    },
    {
      "service_id": 2,
      "icon": <FaCode className='h-full w-full' />,
      "service_name": "Web Development",
      "details": [
        "Front-end development using HTML, CSS, JavaScript, and animations.",
        "Back-end development for database management and server-side logic.",
        "Integration and customization of Content Management Systems (CMS) like WordPress, Joomla, and Drupal."
      ]
    },
    {
      "service_id": 5,
      "icon": <FaHelmetSafety className='h-full w-full' />,
      "service_name": "Maintenance and Support",
      "details": [
        "Technical support for resolving issues via phone, email, or chat.",
        "Regular updates and maintenance for software and plugins.",
        "Backup solutions and security monitoring to safeguard your website.",
        "Client training on website usage and management."
      ]
    },
    {
      "service_id": 10,
      "icon": <FaHammer className='h-full w-full' />,
      "service_name": "Software and Computer Repair",
      "details": [
        "Software repair services including bug fixes and reinstallation.",
        "Hardware repair and replacement for computers.",
        "Remote technical support for resolving software and computer issues."
      ]
    }
  ]
  return (
    <>
      <div id='services' className='flex flex-col items-center py-20 bg-gradient-to-t from-slate-100'>
        <h2 className='font-semibold text-4xl'>Services</h2>
        <div className='pt-12 grid grid-cols-2 pb-20 gap-6'>
          {services.map((service) => {
            return (
              <Card className="max-w-[600px]">
                <CardHeader className="flex gap-3">
                  <div className='w-10 h-10'>
                    {service.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md font-semibold">{service.service_name}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <ul>

                    {/* <p>Make beautiful websites regardless of your design experience.</p> */}
                    {service.details.map((ele) => (
                      <li className=''>*{ele}</li>
                    ))}
                  </ul>
                </CardBody>
                {/* <Divider /> */}
                {/* <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter> */}
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}
