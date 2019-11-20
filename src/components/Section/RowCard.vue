<template>
  <div class="wrap">
    <div class="container">
      <div class="item">
        <div class="pic">
          <img src="https://picsum.photos/400/400?random=10">
        </div>
        <div class="txt">
          <h2>標題一</h2>
          <p>介紹一</p>
          <a
            href="#"
            class="btn"
          >more</a>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="https://picsum.photos/400/400?random=11">
        </div>
        <div class="txt">
          <h2>標題二</h2>
          <p>介紹二</p>
          <a
            href="#"
            class="btn"
          >more</a>
        </div>
      </div>
      <div class="item">
        <div class="pic">
          <img src="https://picsum.photos/400/400?random=12">
        </div>
        <div class="txt">
          <h2>標題三</h2>
          <p>介紹三</p>
          <a
            href="#"
            class="btn"
          >more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RowCard"
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .wrap {
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(-30deg, #fdaecb, #e7597f, #fe8556);
  }
  .container {
    width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    width: 368px;
    margin: 0 15px;
    display: flex;
    background-color: #fff;
    border: 1px solid #888;
    box-shadow: 0 10px 30px rgba(160, 0, 0, 0.5);
    font-family: "Noto Sans TC", sans-serif;
  }
  .item .pic {
    width: 50%;
  }
  .item .pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item .txt {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .item .txt h2 {
    font-weight: 500;
    margin-bottom: 0.4em;
  }
  .item .txt p {
    font-weight: 300;
  }
  .item .txt .btn {
    line-height: 1.5em;
    border: 1px solid #ccc;
    padding: 0 1em;
    align-self: flex-end;
    text-decoration: none;
    border-radius: 200px;
    margin-top: auto;
    color: #aaa;
  }
  .item .txt .btn:hover {
    background-color: #ccc;
    color: #fff;
  }
</style>