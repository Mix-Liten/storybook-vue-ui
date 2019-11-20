<template>
  <ul>
    <li class="box1">項目一</li>
    <li class="box2">項目二</li>
    <li class="box3">項目三</li>
    <li class="box4">項目四</li>
    <li class="box5">項目五</li>
    <li class="box6">項目六</li>
    <li class="box7">項目七</li>
    <li class="box8">項目八</li>
    <li class="box9">項目九</li>
  </ul>
</template>

<script>
  export default {
    name: "SquareRotate"
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul {
    width: 960px;
    margin: auto;
    padding: 100px 0;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    margin: 0 60px -40px;
    position: relative;
    font-size: 30px;
    font-family: "Noto Sans TC", sans-serif;
  }
  li::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: rotate(45deg);
  }
  li:nth-child(n + 4) {
    left: 160px;
  }
  li:nth-child(n + 7) {
    left: 0;
  }
  .box1::before {
    background-color: #3ed0cd;
  }
  .box2::before {
    background-color: #b2e086;
  }
  .box3::before {
    background-color: #ef8899;
  }
  .box4::before {
    background-color: #fc7b51;
  }
  .box5::before {
    background-color: #2fccf9;
  }
  .box6::before {
    background-color: #5f539b;
  }
  .box7::before {
    background-color: #fce920;
  }
  .box8::before {
    background-color: #7cc85c;
  }
  .box9::before {
    background-color: #ffa55e;
  }
  li:hover {
    color: #fff;
  }
  li:hover::before {
    background-color: #000;
  }
</style>