/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import MultipleLevelMenu from "../components/Sidebar/MultipleLevelMenu.vue";

const stories = storiesOf("Sidebar", module);

stories.add("MultipleLevelMenu", () => ({
  components: {
    MultipleLevelMenu
  },
  props: {},
  template: `<MultipleLevelMenu />`
}), {
  info: {
    summary: '開闔式多層側邊攔'
  }
});