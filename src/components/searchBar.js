import React,{Component} from "react"
import { SearchBar} from 'antd-mobile';

export default class SearchBarComp extends Component {
  state = {
    value: '美食',
  };
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (<div>
      <SearchBar
        placeholder="搜索"
      
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        onChange={this.onChange}
      />
    </div>);
  }
}
