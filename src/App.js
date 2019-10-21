import React from 'react';
import './App.css';
import InputNumber from './react-ui/InputNumber/InputNumber'
import confirm from './react-ui/confirm/index'
import Button from './react-ui/Button/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }
  value = 2
  async componentDidMount() {
    let res = await confirm('确定删除吗?')
    if (res) {
      console.log('是')
    } else {
      console.log('否')
    }
  }
  render() {
    return (
      <div className="app">
        <div>
          <h2>作业第6题</h2>
          <InputNumber rule={/^[+-]?\d+.?\d*$/} message='只允许输入数字' size="large" button={'搜索'} />
          <br/>
          <InputNumber rule={/^[+-]?\d+.?\d*$/} message='只允许输入数字' size="middle" prefix={'dianpu'} suffix={'dianpu'} />
          <br/>
          <span>受控组件</span>
          <InputNumber rule={/^[+-]?\d+.?\d*$/} message='只允许输入数字' size="small" value={this.state.value}
            onChange={e => {
              this.setState({
                value: e.target.value
              })
            }}
          />
          <span>非受控组件</span>
          <InputNumber rule={/^[+-]?\d+.?\d*$/} message='只允许输入数字' size="small" defaultValue={this.value}
            onChange={e => {
              this.value = e.target.value
            }}
          />
        </div>
        <div>
          <h2>作业第7题</h2>
          <Button children={'删除'} onClick={async e => {
            let res = await confirm('确定删除么?')
            res ? alert('点击了确定') : alert('点击了取消')
          }}></Button>
        </div>
      </div>
    )
  }
}

export default App
