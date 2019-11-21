<template>
  <div class="wrap">
    <div class="item">
      <img src="https://picsum.photos/300/300?random=10">
      <div class="txt">
        <h2>人員1</h2>
        <p>介紹</p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/300/300?random=20">
      <div class="txt">
        <h2>人員2</h2>
        <p>介紹</p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/300/300?random=30">
      <div class="txt">
        <h2>人員3</h2>
        <p>介紹</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HoverMemberProfile",
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Noto Sans TC", sans-serif;
  }
  html,
  body {
    height: 100%;
  }
  body {
    display: flex;
    align-items: center;
    background-color: #003;
  }
  .wrap {
    width: 1200px;
    display: flex;
    margin: auto;
  }
  .item {
    width: 368px;
    margin: 15px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ccc;
    transform: translateY(0px);
    transition: 0.5s;
  }
  .item img {
    width: 100%;
    vertical-align: middle;
  }
  .item h2 {
    font-family: "Noto Sans TC", sans-serif;
    border-bottom: 1px solid #888;
    padding-bottom: 0.3em;
    margin-bottom: 0.4em;
    font-weight: 900;
    transition: 0.25s;
  }
  .item p {
    font-family: "Noto Sans TC", sans-serif;
    line-height: 1.6;
    font-weight: 300;
    transition: 0.25s;
  }
  .item .txt {
    padding: 20px;
    position: relative;
  }
  .item .txt:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
    border-top: 50px solid transparent;
    border-left: 184px solid #fff;
    border-right: 184px solid #fff;
    transform: translateY(-100%);
  }
  .item:hover {
    transform: translateY(-50px);
  }
  .item:hover .txt {
    background-image: linear-gradient(0deg, #fb8076, #feb85d);
  }
  .item:hover .txt:before {
    border-left: 184px solid #feb85d;
    border-right: 184px solid #feb85d;
  }
  .item:hover h2 {
    color: #fff;
    border-bottom-color: #fff;
  }
  .item:hover p {
    color: #fff;
  }
</style>