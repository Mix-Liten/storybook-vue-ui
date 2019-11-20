<template>
  <div class="wrap">
    <div class="item">
      <div class="icon">
        <i class="fa fa-gavel"></i>
      </div>
      <div class="txt">
        <h3>標題一</h3>
        <p>介紹一</p>
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <i class="fa fa-thumbs-up"></i>
      </div>
      <div class="txt">
        <h3>標題二</h3>
        <p>介紹二</p>
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <i class="fa fa-bell"></i>
      </div>
      <div class="txt">
        <h3>標題三</h3>
        <p>介紹三</p>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "RowBreakCard"
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,
  body {
    height: 100%;
  }
  body {
    display: flex;
    align-items: center;
    background-image: linear-gradient(-45deg, #fffaf0, #f8c3c1);
  }
  .wrap {
    display: flex;
    width: 1200px;
    margin: 100px auto;
    /*background-color: #999;*/
    padding-top: 75px;
  }
  .item {
    width: 370px;
    margin: 0 15px;
    text-align: center;
    border: 10px solid #f9cec2;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 10px 20px 50px #f7b6a7;
    font-family: "Noto Sans TC", sans-serif;
  }
  .item h3 {
    color: #f5afac;
    font-size: 24px;
    margin-bottom: 1em;
  }
  .item p {
    color: #ccc;
    line-height: 1.7;
  }
  .item .icon {
    width: 150px;
    height: 150px;
    background-color: #fff;
    margin: -75px auto 0;
    font-size: 85px;
    line-height: 150px;
    border-radius: 50%;
    color: #f5afac;
    position: relative;
  }
  .item .icon:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 10px solid #f9cec2;
    border-right: 10px solid #f9cec2;
    border-bottom: 10px solid transparent;
    border-left: 10px solid transparent;
    left: -10px;
    top: -10px;
    border-radius: 50%;
    transform: rotate(-45deg);
  }
  .item:hover .fa {
    animation: ss 0.2s linear infinite alternate;
  }
  .item .txt {
    padding: 20px 20px 2em;
  }
  @keyframes ss {
    0% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }
</style>