import React from "react";
import okRegister from "../../src/images/okRegister.jpg"
import troubleRegister from "../../src/images/troubleRegister.jpg"

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container" >
        <img className="popup__progress-image" src={`${props.isOpened == 'success' ? okRegister : troubleRegister} `}/>
        <p className="popup__progress-text">
          {`${props.isOpened == 'success' ? props.textOk : props.textTrouble}`}</p>
        <button className="popup__button-close"onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;