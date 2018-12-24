import React, { Component } from "react";
export const AppContext = React.createContext();

export class Provider extends Component {
  state = {
    username: "",
    hasRegister: false,
    showPopup: false,
    galleryItems: [],
    configMode: false,
    selectedNavbar: 2,
    lock: true,
    OSMode: true,
    enableContextMenu: true,
    showWindow: false,
    windowContent: null,
    taskBackground: [],
    selectedWallpaper: "https://i.imgur.com/aodIB86.jpg",
    previewWallpaper: ""
  };

  componentDidMount() {
    for (let i = 0; i < 7; i++) {
      this.state.galleryItems.push({
        id: i + 1,
        // src: 'http://allhdwallpapers.com/wp-content/uploads/2015/06/Cave-9.jpg'
        src: "https://picsum.photos/200/300/?random"
      });
    }

    let hasLocalStorageUser = localStorage.getItem("user");

    if (hasLocalStorageUser !== null) {
      console.log("ok give state value");
      let userStorage = JSON.parse(localStorage.getItem("user"));
      this.setState({
        username: userStorage.username,
        hasRegister: userStorage.hasRegister
      });
    }

    console.log("has local storage", hasLocalStorageUser);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setState: (payload, callback) =>
            this.setState(payload, () => {
              if (callback) {
                callback(this.state);
              }
            })
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
