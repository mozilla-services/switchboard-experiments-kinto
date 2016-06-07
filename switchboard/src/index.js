import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import HomePage from "./containers/HomePage";

import "bootstrap/dist/css/bootstrap.css";
import "codemirror/lib/codemirror.css";
import "../css/styles.css";


const store = configureStore({
  features: {data: [
    {"name": "urlbar-show-ev-cert-owner",
     "buckets": {"max":"0", "min":"0"},"last_modified":1465294321164,"id":"c458bf25-3f9b-9051-04b2-3e8ccae7a7a2","match":{},"schema":1465294319153},{"name":"bookmark-history-menu","buckets":{"max":"100","min":"0"},"last_modified":1465294321157,"id":"9a53ebfa-772d-d2d8-8307-f98943310360","match":{},"schema":1465294319153},{"name":"offline-cache","buckets":{"max":"100","min":"0"},"last_modified":1465294321151,"id":"5e4277e0-1029-ea14-1b74-5d25d301c5dc","match":{"appId":"^org.mozilla.fennec|^org.mozilla.firefox_beta$"},"schema":1465294319153},{"name":"promote-add-to-homescreen","buckets":{"max":"100","min":"50"},"last_modified":1465294321144,"values":{"lastVisitMaximumAgeMs":600000,"minimumTotalVisits":5,"lastVisitMinimumAgeMs":30000},"id":"1d05fa3e-095f-b29a-d9b6-ab3a578efd0b","match":{"appId":"^org.mozilla.fennec"},"schema":1465294319153},{"name":"urlbar-show-origin-only","buckets":{"max":"0","min":"0"},"last_modified":1465294321137,"id":"0d5dac8a-fb25-6ca9-31a2-78412b44f19e","match":{},"schema":1465294319153},{"name":"content-notifications-12hrs","buckets":{"max":"0","min":"0"},"last_modified":1465294321130,"id":"3e4cef10-3a87-3cdd-4562-0062c2a9125b","match":{},"schema":1465294319153},{"name":"search-term","buckets":{"max":"100","min":"0"},"last_modified":1465294321124,"id":"c5b09c21-17c4-54b7-1685-95f27a1ea468","match":{"appId":"^org.mozilla.fennec|^org.mozilla.firefox_beta$"},"schema":1465294319153},{"name":"triple-readerview-bookmark-prompt","buckets":{"max":"50","min":"0"},"last_modified":1465294321117,"id":"02d7caa1-cd9e-6949-084c-18bc9d468b6b","match":{"appId":"^org.mozilla.fennec$"},"schema":1465294319153},{"name":"whatsnew-notification","buckets":{"max":"0","min":"0"},"last_modified":1465294321111,"id":"d9fd5223-965c-2f0d-a798-b8cbc96f6e09","match":{},"schema":1465294319153},{"name":"content-notifications-8am","buckets":{"max":"0","min":"0"},"last_modified":1465294321105,"id":"1829570e-f582-298b-63b3-3c9d8380be6b","match":{},"schema":1465294319153},{"name":"download-content-catalog-sync","buckets":{"max":"50","min":"0"},"last_modified":1465294321098,"id":"4d2fa5c3-18b2-8734-49be-fe58993d2cf6","match":{"appId":"^org.mozilla.fennec$"},"schema":1465294319153},{"name":"content-notifications-5pm","buckets":{"max":"0","min":"0"},"last_modified":1465294321092,"id":"c011528e-e03a-7272-6d8b-ef1d4bea4689","match":{},"schema":1465294319153}
  ]},
  fingerprint: {
    deviceID: "9cd325ffe0fc0bc61f07e7607ab7619e"
  },
  country: {
    country_code: "FR",
    country_name: "France",
    fallback: "ipf"
  }
});


render((
  <Provider store={store}>
    <HomePage />
  </Provider>
), document.getElementById("app"));
