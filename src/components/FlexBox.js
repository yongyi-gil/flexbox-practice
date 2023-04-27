import React, { Component } from 'react';

import Container from './Container';
import Options from './Options';

export default class FlexBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      containerOption: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
      },
      itemOption: {
        flexBasis: 'auto',
        flexGrow: '0',
        flexShrink: '1',
        // flex: grow, shrink, basis
        alignSelf: 'auto',
      },
      showDescription: false,
      // ex { option: 'flexDirection' }
    }
  }

  render() {
    const { containerOption, itemOption, showDescription } = this.state;

    return (
      <div className="flex-box">
        <Container
          containerOption={containerOption}
          itemOption={itemOption}
          showDescription={showDescription}
        />
        <Options
          containerOption={containerOption}
          itemOption={itemOption}
          onChangeOption={(type, option) => {
            if (type === 'container') {
              this.setState({
                containerOption: option,
              });
            } else {
              this.setState({
                itemOption: option,
              });
            }
          }}
          onChangeShowDescription={(option) => {
            console.log(option);
            this.setState({
              showDescription: option,
            })
          }}
        />
      </div>
    )
  }
}
