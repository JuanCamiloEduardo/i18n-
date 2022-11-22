import React from "react";
import ReactDOM from "react-dom";
import localeEsMessages from "./locales/es";
import JobsList from "./components/jobslist";

ReactDOM.render(
        <IntlProvider locale={window.navigator.language} messages= {localeEsMessages}>
            <JobsList/>
        </IntlProvider>, document.getElementById("root")

);
