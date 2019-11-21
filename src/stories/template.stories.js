/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import MyButton from "../components/MyButton.vue";
import MyButtonTest from "../components/MyButtonTest.vue";

const stories = storiesOf("Template", module);
stories.addDecorator(withKnobs);

stories.add("with a button test", () => ({
  components: {
    MyButtonTest
  },
  props: {
    isDisabled: {
      default: boolean("Disabled", false)
    },
    text: {
      default: text("Text", "Hello Storybook")
    }
  },
  template: `<MyButtonTest :isDisabled="isDisabled">{{ text }}</MyButtonTest>`
}), {
  info: {}
});

stories
  .add("with text", () => ({
    components: {
      MyButton
    },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: {
      action: linkTo("Button", "with some emoji")
    }
  }), {
    info: {}
  })
  .add("with some emoji", () => ({
    components: {
      MyButton
    },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: {
      action: action("clicked")
    }
  }), {
    info: {}
  });
