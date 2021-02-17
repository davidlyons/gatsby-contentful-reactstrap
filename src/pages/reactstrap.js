import React, { useState } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

import {
  Button,
  Tooltip,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CustomInput,
} from 'reactstrap'

export default (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownToggle = () => setDropdownOpen((prevState) => !prevState)

  const [tooltipOpen, setTooltipOpen] = useState(false)
  const tooltipToggle = () => setTooltipOpen(!tooltipOpen)

  return (
    <Layout location={props.location}>
      <Helmet title={`Reactstrap | ${siteTitle}`} />
      <div className="section-padding-lg bg-light">
        <div className="container">
          <div className="my-5">
            <h1>Reactstrap Test Page</h1>
            Test page for Reactstrap components.{' '}
            <span
              style={{ textDecoration: 'underline', color: 'blue' }}
              href="#"
              id="TooltipExample"
            >
              Tooltip
            </span>
            .
            <Tooltip
              placement="top"
              isOpen={tooltipOpen}
              target="TooltipExample"
              toggle={tooltipToggle}
            >
              Hello world!
            </Tooltip>
          </div>
          <div className="py-4">
            <Button color="primary">Primary</Button>
          </div>
          <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
            <DropdownToggle caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem text>Dropdown Item Text</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="py-4">
            <CustomInput
              type="checkbox"
              id="exampleCustomCheckbox1"
              label="Check this custom checkbox"
            />
            <CustomInput
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
              label="Turn on this custom switch"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ReactstrapTestQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
