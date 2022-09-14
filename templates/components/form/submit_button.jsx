import React, {useState, useEffect} from 'react';
import 'static/css/forms/button.css'

export function Button(props) {
  const [clicked, setClicked] = useState(false);

  function onClick() {
    props.onClick();
    props.timeout ? setClicked(true) : null
  }

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, props.timeout);
      return () => clearTimeout(timer);
    }
  }, [clicked])

  return (
    <button className={`css_button ${props.className}`} onClick={onClick} disabled={clicked || props.disabled}>
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  text: '???',
  onClick: () => {},
  disabled: false,
  timeout: 0
};
