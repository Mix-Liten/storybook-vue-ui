/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
// import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Chat from "../components/ChatRoom/Chat.vue";

const stories = storiesOf("ChatRoom", module);
// stories.addDecorator(withKnobs);

stories.add("Chat", () => ({
  components: {
    Chat
  },
  props: {},
  template: `<Chat />`
}), {
  info: {
    summary: '聊天室對話框'
  }
});