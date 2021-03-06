import React from 'react'
import {Button, Icon, Row, Col, NavItem, Navbar, Table} from 'react-materialize'

export default function Panels(props) {
  console.log('this is your props', props)
  return (
    <div style={{display: 'flex', paddingTop: '20px'}}>
    {
      props.panel.module.map((element) => (

      <div key={element.name} className="widget" style={{flex: 1}}>
        <Col s={12} l={12} className="moduleName">{element.name}</Col>
          <div style={{display: 'flex'}} className='header-container'>
            <div style={{flex: 1}} data-field="id">Type of Widget</div>
              <div style={{flex: 1}} data-field="name">Instructions</div>
              <div style={{flex: 1}} data-field="price">Order</div>
          </div>
            {
              element.subset.map((sub) =>
              (
                  <div style={{display: 'flex'}} className='row-container'>
                    <div className='fields' style={{flex: 1}}>{sub.widget}</div>
                    <div className='fields' style={{flex: 1}}>{sub.action}</div>
                    <div className='fields' style={{flex: 1}}>{sub.order}</div>
                  </div>
                )
              )
            }

      </div>
      ))
    }
  </div>
  )
}
