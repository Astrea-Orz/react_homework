import React from 'react'
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import './index.scss'

class Confirm extends React.Component{
	render() {
		return (
			<div className='confirm'>
				<div className='confirm__mask'></div>
				<div className='confirm__inner'>
          <div className='confirm__content'>
            {this.props.content}
          </div>
          <div className='confirm__actions'>
            <div className='confirm__cancel' onClick={this.props.clickCancel}>取消</div>
            <div className='confirm__confirm' onClick={this.props.clickConfirm}>确定</div>
          </div>
				</div>
			</div>
		);
	}
}
let node = null
const confirm = (content) => {
  return new Promise((resolve) => {
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(
      (<Confirm
        content={content}
        clickCancel={e=>{
          resolve(false)
          ReactDOM.unmountComponentAtNode(node)
			    document.body.removeChild(node)
        }}
        clickConfirm={e=>{
          resolve(true)
          ReactDOM.unmountComponentAtNode(node)
			    document.body.removeChild(node)
        }}
      />)
    , node)
  })
}

export default confirm
