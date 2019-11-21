/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import TimeLine from "../components/Section/TimeLine.vue";
import CrossCard from "../components/Section/CrossCard.vue";
import OrderStep from "../components/Section/OrderStep.vue";
import RowCard from "../components/Section/RowCard.vue";
import RowBreakCard from "../components/Section/RowBreakCard.vue";
import SquareCookie from "../components/Section/SquareCookie.vue";
import SquareRotate from "../components/Section/SquareRotate.vue";

const stories = storiesOf("Section", module);
stories.addDecorator(withKnobs);

stories.add("TimeLine", () => ({
  components: {
    TimeLine
  },
  props: {},
  template: `<TimeLine />`
}), {
  info: {
    summary: '垂直時間軸'
  }
});

stories.add("CrossCard", () => ({
  components: {
    CrossCard
  },
  props: {},
  template: `<CrossCard />`
}), {
  info: {
    summary: '交錯圖卡'
  }
});

stories.add("OrderStep", () => ({
  components: {
    OrderStep
  },
  props: {},
  template: `<OrderStep />`
}), {
  info: {
    summary: '訂單狀態列'
  }
});

stories.add("RowCard", () => ({
  components: {
    RowCard
  },
  props: {},
  template: `<RowCard />`
}), {
  info: {
    summary: '橫式圖卡'
  }
});

stories.add("RowBreakCard", () => ({
  components: {
    RowBreakCard
  },
  props: {},
  template: `<RowBreakCard />`
}), {
  info: {
    summary: '橫式破格卡'
  }
});

stories.add("SquareCookie", () => ({
  components: {
    SquareCookie
  },
  props: {},
  template: `<SquareCookie />`
}), {
  info: {
    summary: '方塊酥版面'
  }
});

stories.add("SquareRotate", () => ({
  components: {
    SquareRotate
  },
  props: {},
  template: `<SquareRotate />`
}), {
  info: {
    summary: '花式方塊集'
  }
});