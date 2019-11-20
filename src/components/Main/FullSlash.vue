<template>
  <div class="banner">
    <div class="container">
      <div class="banner-txt">
        <h1>
          主標題
          <small>
            主標題第二行
          </small>
        </h1>
        <h2>副標題-圖文滿版</h2>
        <p>描述</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FullSlash"
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,700,900&display=swap");
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Noto Sans TC", sans-serif;
  }
  .banner {
    width: 100%;
    height: 100vh;
    background-color: #ccc;
    background: linear-gradient(115deg, #7bf 50%, transparent 50%) center center /
        100% 100%,
      url("https://picsum.photos/1200/600?random=10") right center / auto 100%;
    font-family: "Noto Sans TC", sans-serif;
  }
  .container {
    width: 100%;
    max-width: 1440px;
    height: 100%;
    margin: auto;
  }
  .banner-txt {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .banner-txt h1 {
    font-size: 80px;
    border-bottom: 1px solid #333;
    font-weight: 900;
    padding-bottom: 0.3em;
    margin-bottom: 0.3em;
  }
  .banner-txt h1 small {
    display: block;
    font-size: 53px;
    font-weight: 700;
  }
  .banner-txt h2 {
    font-size: 50px;
    font-weight: 700;
  }
  .banner-txt p {
    font-size: 20px;
    font-weight: 300;
  }
</style>