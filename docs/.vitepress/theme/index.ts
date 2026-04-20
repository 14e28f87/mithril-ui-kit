import DefaultTheme from "vitepress/theme";
import MithrilDemo from "./MithrilDemo.vue";
import "./portal-bootstrap.css";
import "./demo.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("MithrilDemo", MithrilDemo);
  }
};
