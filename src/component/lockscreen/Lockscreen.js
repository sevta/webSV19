import React, { Component } from "react";
import { AppContext } from "../utils/provider";
import { Img } from "the-platform";
// import wallpaper from './wallpaper.jpeg'
// import wallpaper2 from './wallpaper2.jpeg'
// import wallpaper3 from './wallpaper3.jpg'
import Switch from "react-switch";

export default class Lockscreen extends Component {
  static contextType = AppContext;

  onChange = e => {
    const { setState } = this.context;
    let value = e.target.value;
    setState({ username: value });
  };

  onSubmit = e => {
    const { setState } = this.context;
    e.preventDefault();
    setState({ lock: false, hasRegister: true }, currentState => {
      console.log("statee after uupdate", currentState);
      let user = {
        username: currentState.username,
        hasRegister: currentState.hasRegister
      };
      localStorage.setItem("user", JSON.stringify(user));
    });
  };

  render() {
    const { state, setState } = this.context;
    const lockscreenClasses = `
      lockscreen
      bg-grey-lighter
      w-full
      h-screen
      flex items-center justify-center
    `;
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Juny",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const d = new Date();

    return (
      <div className={lockscreenClasses}>
        <Background src={state.selectedWallpaper} />
        <div className="lockscreen-inner relative py-4 px-10 pb-16 z-20 text-black bg-white shadow flex flex-col items-center justify-center">
          <Clock
            hours={`${d.getHours()}.${d.getMinutes()}`}
            day={day[d.getDay()]}
            date={d.getDate()}
            month={month[d.getMonth()]}
          />
          <SwitchConfig
            checked={state.configMode}
            title="enable web config"
            onChange={() => setState({ configMode: !state.configMode })}
          />
          <SwitchConfig
            checked={state.enableContextMenu}
            title="enable context menu"
            onChange={() =>
              setState({ enableContextMenu: !state.enableContextMenu })
            }
          />
          <SwitchConfig
            checked={state.OSMode}
            title="OS Mode"
            onChange={() => setState({ OSMode: !state.OSMode })}
          />
          {state.hasRegister ? (
            <React.Fragment>
              <h2 className="mt-10 capitalize">hellow {state.username}</h2>
              <button
                className="w-full absolute pin-b pin-x py-3 bg-teal text-white capitalize text-sm mt-10"
                onClick={() => setState({ lock: false })}
              >
                unlock
              </button>
            </React.Fragment>
          ) : (
            <form onSubmit={this.onSubmit}>
              <Input onChange={this.onChange} />
            </form>
          )}
        </div>
      </div>
    );
  }
}

function Background({ src }) {
  return (
    <React.Suspense fallback={<h1>loading...</h1>}>
      <Img
        src={src}
        className="w-full h-full absolute pin-t pin-l"
        style={{
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
    </React.Suspense>
  );
}

function Input({ ...rest }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="username"
        {...rest}
        className="w-full focus:outline-none border-b py-2 px-3 capitalize font-sans"
      />
    </div>
  );
}

function SwitchConfig({ onChange, title, checked, ...rest }) {
  return (
    <div className="self-start w-full mb-4 font-bold flex justify-between">
      <span className="text-sm mr-5 font-sans capitalize">{title}</span>
      <Switch
        onChange={onChange}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={10}
        width={28}
        className="react-switch"
        id="material-switch"
        {...rest}
      />
    </div>
  );
}

function Clock({ hours, day, date, month }) {
  return (
    <div className="lockscreen-clock flex flex-col items-center">
      <div className="clock font-sans mb-5" style={{ fontSize: 60 }}>
        {hours}
      </div>
      <div className="date mb-10">
        {day} , {date} {month}
      </div>
    </div>
  );
}
