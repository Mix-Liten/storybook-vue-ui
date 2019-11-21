/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import FullSlash from "../components/Main/FullSlash.vue";
import FooterNav from "../components/Main/FooterNav.vue";

const stories = storiesOf("Main", module);
stories.addDecorator(withKnobs);

stories.add("FullSlash", () => ({
  components: {
    FullSlash
  },
  props: {},
  template: `<FullSlash />`
}), {
  info: {
    summary: '歪斜滿版'
  }
});

stories.add("FooterNav", () => ({
  components: {
    FooterNav
  },
  props: {},
  template: `<FooterNav />`
}), {
  info: {
    summary: '底部導覽'
  }
});