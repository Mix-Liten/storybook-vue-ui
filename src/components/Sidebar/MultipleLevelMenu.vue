<template>
  <div>
    <input
      type="checkbox"
      name=""
      id="side-menu-switch"
    >

    <div class="side-menu">
      <form>
        <input
          type="search"
          placeholder="請輸入關鍵字"
        >
        <button><i class="fa fa-search"></i></button>
      </form>
      <ul class="nav">
        <li>
          <a href="#">
            <i
              class="fa fa-users"
              aria-hidden="true"
            ></i>
            大項一
          </a>
          <ul>
            <li>
              <a href="#">小項一</a>
              <ul>
                <li><a href="#">細項一</a></li>
                <li><a href="#">細項二</a></li>
                <li><a href="#">細項三</a></li>
              </ul>
            </li>
            <li>
              <a href="#">小項二</a>
              <ul>
                <li><a href="#">細項一</a></li>
                <li><a href="#">細項二</a></li>
                <li><a href="#">細項三</a></li>
              </ul>
            </li>
            <li>
              <a href="#">小項三</a>
              <ul>
                <li><a href="#">細項一</a></li>
                <li><a href="#">細項二</a></li>
                <li><a href="#">細項三</a></li>
                <li><a href="#">細項四</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i
              class="fa fa-gavel"
              aria-hidden="true"
            ></i>
            大項二
          </a>
        </li>
        <li>
          <a href="#">
            <i
              class="fa fa-object-group"
              aria-hidden="true"
            ></i>
            大項三
          </a>
        </li>
        <li>
          <a href="#">
            <i
              class="fa fa-globe"
              aria-hidden="true"
            ></i>
            大項四
          </a>
        </li>
        <li>
          <a href="#">
            <i
              class="fa fa-cutlery"
              aria-hidden="true"
            ></i>
            大項五
          </a>
        </li>
      </ul>
      <label for="side-menu-switch">
        <i class="fa fa-angle-right"></i>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MultipleLevelMenu"
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
    background-color: #546377;
  }
  .side-menu {
    position: relative;
    width: 300px;
    height: 100%;
    padding: 50px 0;
    box-sizing: border-box;
    background-image: linear-gradient(0deg, #3381b0, #c2196c);
    display: flex;
    flex-direction: column;
    box-shadow: 5px 0px 10px hsla(240, 40%, 15%, 0.6);
    transform: translateX(-100%);
    transition: 0.3s;
  }
  .side-menu form {
    display: flex;
    margin: 0 10px 50px;
    border-radius: 100px;
    border: 1px solid rgb(255, 255, 255, 0.4);
  }
  .side-menu form input,
  .side-menu form button {
    border: none;
    background-color: transparent;
    color: #fff;
    padding: 5px 10px;
  }
  .side-menu form input {
    width: 230px;
  }
  .side-menu form button {
    width: 50px;
  }
  .side-menu form input:focus,
  .side-menu form button:focus {
    outline: none;
  }
  .side-menu label {
    position: absolute;
    width: 40px;
    height: 80px;
    background-color: #000;
    color: #fff;
    right: -40px;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: 80px;
    text-align: center;
    font-size: 30px;
    border-radius: 0 10px 10px 0;
  }
  #side-menu-switch {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  #side-menu-switch:checked + .side-menu {
    transform: translateX(0);
  }
  #side-menu-switch:checked + .side-menu label .fa {
    transform: scaleX(-1);
  }
  .nav a {
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    position: relative;
    font-family: "Noto Sans TC", sans-serif;
  }
  .nav li {
    position: relative;
  }
  .nav li + li a::before {
    content: "";
    position: absolute;
    border-top: 1px solid rgb(255, 255, 255, 0.4);
    left: 10px;
    right: 10px;
    top: 0;
  }
  .nav a .fa {
    margin-right: -1.1em;
    transform: scale(0);
    transition: 0.3s;
  }
  .nav li:hover .fa {
    margin-right: 0em;
    transform: scale(1);
  }
  .nav li:hover > a {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .nav ul {
    display: none;
    position: absolute;
    left: 100%;
    width: 300px;
    top: 6px;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 5px 5px 10px hsla(240, 40%, 15%, 0.6);
  }
  .nav li:hover > ul {
    display: block;
  }
</style>