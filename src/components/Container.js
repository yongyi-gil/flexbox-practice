import React from 'react';

import Item from './Item';

export default function Container(props) {
  const { containerOption, itemOption, showDescription } = props;
  const {
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
  } = containerOption;

  return (
    <div className="container-wrap">
      <div
        className="container"
        style={{
          display,
          flexDirection,
          flexWrap,
          justifyContent,
          alignItems,
          alignContent,
        }}
      >
        <Item text="A" itemOption={itemOption} />
        <Item text="B" itemOption={itemOption} />
        <Item text="C" itemOption={itemOption} />
        <Item text="D" itemOption={itemOption} />
        <Item text="E" itemOption={itemOption} />
      </div>
      {
        false && (
          <div className="description">
          </div>
        )
      }
    </div>
  )
}
