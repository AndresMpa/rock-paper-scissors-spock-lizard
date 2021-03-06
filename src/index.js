import { eventHandler } from "./util/eventHandler.js";
import { resetBoard } from "./util/resetBoard.js";
import { displayRules } from "./util/extras.js";
import { loadData } from "./util/loadData.js";
import '@style/main.css'

(() => {
  loadData();
  eventHandler();
  resetBoard();
  displayRules();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./serviceWorker.js", { scope: "./" })
      .then((reg) => {
        console.log("Registration succeded, scope: " + reg.scope);
      })
      .catch((error) => {
        console.error("Registration failed: " + error);
      });
  }
})();
