<template>
  <div class="dialogue">
    <div class="user remote">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/100/100?random=12">
        </div>
        <div class="name">人員A</div>
      </div>
      <div class="txt">
        打招呼
      </div>
    </div>
    <div class="user local">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/100/100?random=16">
        </div>
        <div class="name">人員B</div>
      </div>
      <div class="txt">
        回禮
      </div>
    </div>
    <div class="user remote">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/100/100?random=12">
        </div>
        <div class="name">人員A</div>
      </div>
      <div class="txt">
        !@#@&%*$(#*$()%_&^$_#?L:"OP{}")
      </div>
    </div>

    <div class="user local">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/100/100?random=16">
        </div>
        <div class="name">人員B</div>
      </div>
      <div class="txt">
        ????????
      </div>
    </div>
    <div class="user remote">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/100/100?random=12">
        </div>
        <div class="name">人員A</div>
      </div>
      <div class="txt">
        沒事
      </div>
    </div>
    <div class="user local">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/100/100?random=16">
        </div>
        <div class="name">人員B</div>
      </div>
      <div class="txt">
        ...喔
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Chat"
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
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
    justify-content: center;
    align-items: center;
    background-color: #d3effb;
  }
  .dialogue {
    width: 500px;
    padding: 20px;
    box-shadow: 0 0 10px #3e92cc;
    background-color: #f4f5f7;
  }
  .user {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    font-family: "Noto Sans TC", sans-serif;
  }
  .local {
    justify-content: flex-end;
  }
  .user .avatar {
    width: 60px;
    text-align: center;
    flex-shrink: 0;
  }
  .user .pic {
    border-radius: 50%;
    overflow: hidden;
  }
  .user .pic img {
    width: 100%;
    vertical-align: middle;
  }
  .user .txt {
    background-color: #aaa;
    padding: 16px;
    border-radius: 10px;
    position: relative;
  }
  .remote .txt {
    margin-left: 20px;
    margin-right: 80px;
    color: #a1b4c5;
    background-color: #fff;
  }
  .local .txt {
    margin-right: 20px;
    margin-left: 80px;
    order: -1;
    background-color: #3e92cc;
    color: #fff;
  }
  .remote .txt::before,
  .local .txt::before {
    content: "";
    position: absolute;
    top: 20px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .remote .txt::before {
    border-right: 10px solid #fff;
    left: -10px;
  }
  .local .txt::before {
    border-left: 10px solid #3e92cc;
    right: -10px;
  }
</style>