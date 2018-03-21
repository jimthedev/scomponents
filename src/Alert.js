import React, {Fragment} from 'react';
import cogs from "./stylelibrary/index";
const { cog } = cogs;

export const UnstyledIcon = ({ ariaHidden = "true", className }) => (
  <Fragment>
    <i className={className} aria-hidden={ariaHidden} />
  </Fragment>
);

export const UnstyledAlertBox = ({
  className,
  children,
  render = children,
  onAlertBoxClick: rawOnAlertBoxClick,
  captureOnClick = true
}) => {
  // This allows for either RENDER PROP or FUNCTION AS CHILD
  // to be used.
  const onAlertBoxClick = event => {
    // Should the alert box
    if (captureOnClick) {
      console.log(
        "capture on click is enabled, we're managing onClick for you even on children."
      );
      event.preventDefault();
      if (typeof rawOnAlertBoxClick === "function") {
        rawOnAlertBoxClick(event);
      }
    } else {
      console.log(
        "capture on click is disabled, you are safe to use nested urls and more complex onClick configurations."
      );
    }
  };
  // prevent sub links from going
  // const stopPropagation = "true";
  // if (stopPropagation !== "true") {
  //   event.stopPropagation();
  //   rawOnAlertBoxClick();
  // }
  //console.log(rawOnAlertBoxClick());
  if (typeof render === "function") {
    return (
      <div onClick={onAlertBoxClick} className={className} role="alert">
        {render()}
      </div>
    );
  }

  // This allows for PROPS ONLY.
  return (
    <div onClick={onAlertBoxClick} className={className} role="alert">
      {children}
    </div>
  );
};


export class UnstyledAlert extends React.Component {
  render() {
    // This allows for either RENDER PROP or FUNCTION AS CHILD
    // to be used.
    const { children, render = children } = this.props;
    if (typeof render === "function") {
      return render({ UnstyledIcon, UnstyledAlertBox });
    }

    // This allows for PROPS ONLY.
    return (
      <UnstyledAlertBox
        className={this.props.alertBoxClassName}
        disableClickCapture={true}
        render={() => (
          <Fragment>
            <UnstyledIcon className={this.props.alertIconClassName} />{" "}
            {children}
          </Fragment>
        )}
      />
    );
  }
}

export class AlertMessage extends React.Component {
  render() {
    // This allows for either RENDER PROP or FUNCTION AS CHILD
    // to be used.
    const { children, render = children, type } = this.props;
    if (typeof render === "function") {
      return render();
    }
    return <div className={cog('alert.message', {type})} style={{ width: "100%" }} {...this.props}>{this.props.children}</div>;
  }
}

export class Alert extends React.Component {
  render () {
    // For composed It is useful to add context
    const {
      message: rawAlertMessage,
      type: alertType,
      size: alertSize = "normal",
      direction: alertDirection = "ltr",
      onClick: onAlertBoxClick,
      captureOnClick = true
    } = this.props;
    // Accept either a string or function
    const alertMessage =
      typeof rawAlertMessage === "function"
        ? rawAlertMessage
        : () => (<AlertMessage type={alertType}>{rawAlertMessage}</AlertMessage>);
    return (
      <UnstyledAlert
        render={({ UnstyledIcon, UnstyledAlertBox }) => {
          return (
            <UnstyledAlertBox
              captureOnClick={captureOnClick}
              onAlertBoxClick={onAlertBoxClick}
              className={cog("alert.box", { type: this.props.type })}
            >
              {alertDirection === "rtl" &&
                alertMessage({ AlertMessage, alertDirection })}
              <UnstyledIcon
                className={cog("alert.icon", { type: this.props.type })}
              />{" "}
              {alertDirection === "ltr" &&
                alertMessage({ AlertMessage, alertDirection })}
            </UnstyledAlertBox>
          );
        }}
      />
    )
  }
}