<template>
  <div class="wrap">
    <div class="item">
      <img src="https://picsum.photos/500/400?random=5">
      <div class="txt">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HoverCard",
    props: {
      title: {
        type: String,
        default: "標題"
      },
      content: {
        type: String,
        default: "內容"
      },
    }
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,500&display=swap");
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .wrap {
    width: 100%;
    display: flex;
    font-family: "Noto Sans TC", sans-serif;
  }
  .item {
    width: 25%;
    position: relative;
  }
  .item img {
    width: 100%;
    vertical-align: middle;
  }
  .item .txt {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .item:hover .txt {
    opacity: 1;
  }
  .item h2 {
    font-size: 28px;
    color: #ff0;
    font-weight: 500;
  }
  .item h2:after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    margin: 10px 0;
    background-color: #ff0;
    transition: width 0.5s 0.3s;
  }
  .item:hover h2:after {
    width: 100%;
  }
  .item p {
    font-size: 18px;
    color: #fff;
    font-weight: 100;
  }
</style>