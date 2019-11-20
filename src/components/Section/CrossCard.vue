<template>
  <div class="wrap">
    <div class="item">
      <div class="pic">
        <img src="https://picsum.photos/600/350?random=10">
      </div>
      <div class="txt">
        <h2>標題一</h2>
        <p>內文一</p>
      </div>
    </div>
    <div class="item">
      <div class="txt">
        <h2>標題二</h2>
        <p>內文二</p>
      </div>
      <div class="pic">
        <img src="https://picsum.photos/600/350?random=11">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CrossCard"
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body {
    padding: 100px 0;
    background: linear-gradient(20deg, #3d5493, #1aa2a0) fixed center center /
      100% 100%;
  }
  .wrap {
    width: 1200px;
    margin: auto;
  }
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 70px;
    font-family: "Noto Sans TC", sans-serif;
  }
  .item h2 {
    font-weight: 900;
    margin-bottom: 1em;
  }
  .item p {
    font-weight: 300;
    line-height: 1.6;
  }
  .item .pic {
    width: 55%;
    flex-shrink: 0;
  }
  .item .pic img {
    width: 100%;
    vertical-align: middle;
  }
  .item .txt {
    width: 55%;
    flex-shrink: 0;
    padding: 50px 30px;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }
  .item > :first-child {
    margin-right: -10%;
  }
  .item:nth-child(1) .txt {
    background-color: rgba(240, 174, 193, 0.8);
  }
  .item:nth-child(2) .txt {
    background-color: rgba(42, 253, 208, 0.8);
  }
  /* .item:nth-child(3) .txt {
      background-color: rgba(254, 201, 121, 0.8);
    }
    .item:nth-child(4) .txt {
      background-color: rgba(149, 219, 214, 0.8);
    } */
</style>