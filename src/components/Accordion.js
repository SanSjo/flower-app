
import React from 'react';

import './accordion.css';

export const Accordion = (props) => {
  return (
    <div className="accordion__section">
      <button type="button" className="accordion">
        <p className="accordion__title"><i className=" fas fa-seedling" />{props.title}</p>
      </button>
      <div className="accordion__content">
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }} />
        {props.content}
      </div>
    </div>
  );
}

export default Accordion;