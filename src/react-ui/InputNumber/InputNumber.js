import React, {Component} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './InputNumber.scss'
import Icon from '../Icon/index'
import Button from '../Button/index'

class Input extends Component{
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      innerValue: ''
    }
  }
  static propTypes = {
    value: PropTypes.number,
    onchange: PropTypes.func,
    size: PropTypes.string,
    message: PropTypes.string
  }
  static defaultProps = {
    onChange: () => {},
    size: 'middle',
    message: '输入类型有误'
  }

  get isControl() {
    return 'value' in this.props
  }
  get value() {
    if(this.isControl) {
      return this.props.value
    } else {
      return this.state.innerValue
    }
  }

  render() {
    const {
      focus
    } = this.state
    const {
      icon,
      rule,
      message,
      size,
      button,
      prefix,
      suffix,
      onChange
    } = this.props
    let cls = classNames({
      input: true,
      focus,
      [`size-${size}`]: true,
      'react-ui__input': true
    })
    return (
      <div>
        <div className={cls}>
          {prefix && <Icon name={prefix}></Icon>}
          <input
            type="number"
            value={this.value}
            onFocus={e => {
              this.setState({
                focus: true
              })
            }}
            onBlur={e => {
              this.setState({
                focus: false
              })
            }}
            onChange={e => {
              if (!this.isControl) {
                this.setState({
                  innerValue: e.target.value
                })
              }
              onChange(e)
            }}
            ></input>
            {suffix && <Icon name={suffix}></Icon>}
            {button && <Button type={'primary'} children={button} style={{height: '100%', lineHeight:'100%'}} onClick={e => {alert(this.value)}}></Button>}
        </div>
        <p style={{color: 'red'}}>{!(rule.test(this.value)) && message}</p>
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }
}

export default Input