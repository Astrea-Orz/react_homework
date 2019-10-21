import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import './index.scss'
class Button extends Component{
	static propTypes = {
		icon: PropTypes.string,
		type: PropTypes.string
	}

	static defaultProps = {
		icon: '',
		type: 'primary'
	}

	render() {
		const {
			icon,
			children,
      type,
      onClick,
			...rest
		} = this.props
		return (
			<button {...rest} className={`react-ui__btn--${type}`} onClick={e => {onClick(e)}}>
				<Icon name={icon}/>
				{children}
			</button>
		)
	}
}


export default Button

