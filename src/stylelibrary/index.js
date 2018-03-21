import { cogstyle } from "cogstyle";
import { alert } from './alert';
import { heading } from './heading';

const cogs = cogstyle({
  from: {
    keys: {
      alignItems: "align-items",
      color: "color",
      backgroundColor: "background-color",
      borderColor: "border-color",
      borderWidth: "border-width",
      borderStyle: "border-style",
      borderRadius: "border-radius",
      boxSizing: "box-sizing",
      display: "display",
      fontSize: "font-size",
      fontWeight: "font-weight",
      fontFamily: "font-family",
      lineHeight: "line-height",
      textAlign: "text-align",
      verticalAlign: "vertical-align",
      marginBottom: "margin-bottom",
      paddingBottom: "padding-bottom",
      paddingTop: "padding-top",
      paddingLeft: "padding-left",
      paddingRight: "padding-right",
      webkitFontSmoothing: "--webkit-font-smoothing"
    },
    values: {
      color: {
        white: "#ffffff",
        black: "#000000",
        gray100: "#f6f6f6",
        gray200: "#e8e9e9",
        gray300: "#d2d4d5",
        gray400: "#a5a9ab",
        gray500: "#62686b",
        gray600: "#1f282c",
        blue100: "#d9f0fa",
        blue200: "#00aae5",
        blue300: "#0097cc",
        blue400: "#0077aa",
        orange100: "#fff4ea",
        orange200: "#ff9632",
        orange300: "#bf7025",
        yellow100: "#fff8e0",
        yellow200: "#fff0b3",
        yellow300: "#ffcc00",
        purple100: "#f1e8ef",
        purple200: "#883673",
        purple300: "#743865",
        green100: "#eaf8f0",
        green200: "#32be6f",
        green300: "#258f53",
        red100: "#ffeaec",
        red200: "#ff3246",
        red300: "#c02534",
        transparent: "transparent"
      },
      alignItems: {
        start: 'start',
        center: 'center'
      },
      display: {
        flex: 'flex'
      },
      borderStyle: {
        solid: 'solid'
      },
      boxSizing: {
        borderBox: 'border-box'
      },
      px: {
        // Probably need to fold these into
        // some more specific selectors
        one: '1px',
        three: '3px',
        eight: '8px',
        fourteen: '14px',
        fifteen: '15px',
        twenty: '20px'
      },
      fontWeight: {
        bold: 600
      },
      fontFamily: {
        sourceSansPro: '"Source Sans Pro", -apple-system, system-ui, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
      },
      direction: {
        left: 'left'
      },
      verticalAlign: {
        sub: "sub"
      },
      webkitFontSmoothing: {
        antialiased: 'antialiased'
      }
      // alignItems: "center",

      // borderBottomColor: "rgb(255, 204, 0)",
      // borderBottomStyle: "solid",
      // borderBottomWidth: "1px",

      // borderImageOutset: "0px",
      // borderImageRepeat: "stretch",
      // borderImageSlice: "100%",
      // borderImageSource: "none",
      // borderImageWidth: "1",

      // borderLeftColor: "rgb(255, 204, 0)",
      // borderLeftStyle: "solid",
      // borderLeftWidth: "1px",
      // borderRightColor: "rgb(255, 204, 0)",
      // borderRightStyle: "solid",
      // borderRightWidth: "1px",
      // borderTopColor: "rgb(255, 204, 0)",
      // borderTopLeftRadius: "3px",
      // borderTopRightRadius: "3px",
      // borderTopStyle: "solid",
      // borderTopWidth: "1px",

      // display: "flex",
  
      // justifyContent: "flex-start",
    },
    alert,
    heading
  }
});
export default cogs;
