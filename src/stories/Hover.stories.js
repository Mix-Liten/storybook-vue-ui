/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import Card from "../components/Hover/Card.vue";
import MemberProfile from "../components/Hover/MemberProfile.vue";

const stories = storiesOf("Hover", module);
stories.addDecorator(withKnobs);

stories.add("Card", () => ({
  components: {
    Card
  },
  props: {
    title: {
      default: text('title')
    },
    content: {
      default: text('content')
    },
  },
  template: `<Card :title="title" :content="content" />`
}), {
  info: {
    summary: '基本互動卡片'
  }
});

stories.add("MemberProfile", () => ({
  components: {
    MemberProfile
  },
  props: {},
  template: `<MemberProfile />`
}), {
  info: {
    summary: '人物自介'
  }
});