import React from 'react';

export default function Item(props) {
  const { itemOption, text } = props;
  const {
    flexBasis,
    flexGrow,
    flexShrink,
    // flex,
    alignSelf,
  } = itemOption;
  return (
    <div
      className="item"
      style={{
        flexBasis,
        flexGrow,
        flexShrink,
        alignSelf,
      }}
    >
      {text}
    </div>
  )
}
