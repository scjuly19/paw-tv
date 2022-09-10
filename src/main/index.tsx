import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./Router";
import theme from "../theme";

type Props = {
  store: any;
};
export default function Root(props: Props) {
  return (
    <Provider store={props.store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}
