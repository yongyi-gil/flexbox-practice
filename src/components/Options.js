import React, { Component } from 'react'

export default class Options extends Component {
  renderOption = (type, title, options) => {
    const {
      containerOption,
      itemOption,
      onChangeOption,
      onChangeShowDescription,
    } = this.props;
    
    const option = type === 'container' ? containerOption : itemOption;

    return (
      <div
        className={`option-select-wrap-${type}`}
        onMouseEnter={() => {onChangeShowDescription(title)}}
        onMouseLeave={() => {onChangeShowDescription()}}
      >
        <p>- {title}</p>
        <select
          className='option-select'
          value={option[title]}
          onChange={(e) => {
            option[title] = e.target.value;

            onChangeOption(type, option);
          }}
        >
          {
            options.map(item => <option key={item} value={item}>{item}</option>)
          }
        </select>
      </div>
    )
  }

  render() {
    // container options
    const display = ['block', 'flex'];
    const flexDirection = ['row', 'column', 'row-reverse', 'column-reverse'];
    const flexWrap = ['nowrap', 'wrap', 'wrap-reverse'];
    const justifyContent = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
    const alignItems = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
    const alignContent = ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
    
    // item options
    const flexBasis = ['auto', '0', '30%', '50%', '200px', '300px', '5rem', 'content'];
    const flexGrow = ['0', '1'];
    const flexShrink = ['1', '0'];
    const alignSelf = ['auto', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'];

    return (
      <div className="options">
        <div>
          <h3 className="px-20">CONTAINER OPTIONS</h3>
          {this.renderOption('container', 'display', display)}
          {this.renderOption('container', 'flexDirection', flexDirection)}
          {this.renderOption('container', 'flexWrap', flexWrap)}
          {this.renderOption('container', 'justifyContent', justifyContent)}
          {this.renderOption('container', 'alignItems', alignItems)}
          {this.renderOption('container', 'alignContent', alignContent)}
        </div>
        <div>
          <h3 className="px-20">ITEM OPTIONS</h3>
          {this.renderOption('item', 'flexBasis', flexBasis)}
          {this.renderOption('item', 'flexGrow', flexGrow)}
          {this.renderOption('item', 'flexShrink', flexShrink)}
          {this.renderOption('item', 'alignSelf', alignSelf)}
        </div>
      </div>
    )
  }
}
