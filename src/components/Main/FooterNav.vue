<template>
  <div class="main-footer">
    <div class="container">
      <div class="footer-item">
        <h4>列表大項一</h4>
        <nav>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項一</a>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項二</a>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項三</a>
        </nav>
      </div>
      <div class="footer-item">
        <h4>列表大項二</h4>
        <nav>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項一</a>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項二</a>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項三</a>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項四</a>
        </nav>
      </div>
      <div class="footer-item">
        <h4>列表大項三</h4>
        <nav>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項一</a>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項二</a>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項三</a>
          <a href="#"><i class="fa fa-angle-right"></i>列表系項四</a>
        </nav>
      </div>
      <div class="footer-item footer-subs">
        <h4>訂閱電子報</h4>
        <form>
          <input
            type="text"
            name=""
          >
          <input
            type="submit"
            value="訂閱"
          >
        </form>
      </div>
    </div>
    <div class="conpyright">
      Copyright &copy; 2019 版權所有
    </div>
  </div>
</template>

<script>
  export default {
    name: "FooterNav"
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
  body {
    background-color: #000;
  }
  .main-footer {
    padding: 150px 0 0 0;
    background: linear-gradient(-20deg, #3f5494, #08c7a5);
  }
  .main-footer .container {
    display: flex;
    width: 1200px;
    margin: auto;
  }
  .footer-item {
    width: 0;
    flex-grow: 1;
    margin: 0 20px;
  }
  .footer-item h4 {
    font-size: 24px;
    color: #fff;
    border-bottom: 1px dotted #fff;
    margin-bottom: 0.5em;
    padding-bottom: 0.5em;
  }
  .footer-item nav {
    display: flex;
    flex-direction: column;
  }
  .footer-item nav a {
    color: #fff;
    line-height: 1.4;
    text-decoration: none;
    padding: 5px 0;
  }
  .footer-item nav a:hover {
    color: #fa0;
  }
  .footer-item nav a:hover .fa-angle-right {
    color: #fff;
  }
  .footer-subs {
    display: flex;
    flex-direction: column;
  }
  .footer-subs form {
    display: flex;
    width: 100%;
    margin: auto 0px;
  }
  .footer-subs input[type="text"],
  .footer-subs input[type="submit"] {
    border: none;
    padding: 5px 10px;
  }

  .footer-subs input[type="text"] {
    width: 0;
    flex-grow: 1;
  }
  .footer-subs input[type="submit"] {
    color: #70f6df;
    background-color: #3e5293;
  }
  .conpyright {
    width: 100%;
    text-align: center;
    margin: 150px 0 0;
    padding: 10px 0px;
    background-color: #3e5293;
    color: #70f6df;
  }
  .fa-angle-right::before {
    content: "> ";
  }
</style>