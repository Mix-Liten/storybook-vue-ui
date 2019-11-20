<template>
  <div class="wrap">
    <div class="item">
      <img src="https://picsum.photos/500/500?random=10">
      <div class="txt">
        <h3>標題一</h3>
        <p>內容一</p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=20">
      <div class="txt">
        <h3>標題二</h3>
        <p>內容二</p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=30">
      <div class="txt">
        <h3>標題三</h3>
        <p>內容三</p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=40">
      <div class="txt">
        <h3>標題四</h3>
        <p>內容四</p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=66">
      <div class="txt">
        <h3>標題五</h3>
        <p>內容五</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SquareCookie"
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
  body {
    background-color: #000;
  }
  .wrap {
    width: 100%;
    margin: auto;
    overflow: hidden;
  }
  .item {
    float: left;
    position: relative;
  }
  .item img {
    width: 100%;
    vertical-align: middle;
  }
  .item:first-child {
    width: 50%;
  }
  .item:first-child ~ .item {
    width: 25%;
  }
  .item .txt {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    opacity: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;
  }
  .item:hover .txt {
    transform: scale(1);
    opacity: 1;
  }
  .item h3 {
    margin-bottom: 0.4em;
  }
  .item p {
    font-weight: 100;
    line-height: 1.7;
  }
</style>