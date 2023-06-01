# oche-mobile-menu

This is a JavaScript package that implements basic mobile menu functionalities
like revealing and hiding mobile menus and also trigerring mobile menu animations

## Usage

### HTML

```
<button class="menu-toggle" id="menu-toggle" data-toggle="menu">
    Toggle
</button>

<div class="menu" id="menu">
    <div class="menu-item">Home</div>
    <div class="menu-item">About</div>
    <div class="menu-item">Services</div>
    <div class="menu-item">Contact</div>
    <div class="menu-item">FAQ</div>
</div>

<button class="close-btn" id="close-btn" data-toggle="menu">
    X
</button>

<!-- Copy and paste the script tags into your HTML file if you're not using a module bundler like webpack -->
<script src="https://unpkg.com/oche-mobile-menu@1.0.3/dist/index.js"></script>
<script src="./index.js"></script>
```

### CSS (Optional)

```
@keyframes menuAnimation {
    0% {
        transform: scaleY(0);
    }
    80% {
        transform: scaleY(1.1);
    }
    100% {
        transform: scaleY(1);
    }

}

@keyframes closeBtnAnimation {
    0% {
        transform: translateY(40px);
    }
    80% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(-40px);
    }

}

.menu-animation {
    animation: menuAnimation 300ms ease-in-out forwards;
    transform-origin: top center;
}

.close-btn-animation {
    animation: closeBtnAnimation 300ms ease-in-out forwards;
    transform-origin: bottom center;
}

body {
    padding: 0;
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.menu-toggle {
    background: linear-gradient(#e66465, #9198e5);
    width: 40px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}

.menu {
    background: linear-gradient(#e66465, #ffffff);
    display: none;
    flex-direction: column;
}

.menu-item {
    font-family: monospace;
    font-size: 14px;
    margin: 20px;
}

.close-btn {
    background: linear-gradient(#e66465, #9198e5);
    box-shadow: 0px 0px 2px black;
    width: 40px;
    height: 40px;
    align-self: center;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-top: auto;
    border: none;
}
```

### JavaScript

#### Usage on the web

```
const menuToggle = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-btn");

menuToggle.onclick = function () {
  window.mobile.showMenu(this, "menu-animation", closeBtn, "close-btn-animation");
};
```

#### Usage in a Node.js development enviroment with a module bundler like webpack

```
const mobileMenu = require("oche-mobile-menu")

const menuToggle = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-btn");

menuToggle.onclick = function () {
  mobileMenu.showMenu(this, "menu-animation", closeBtn, "close-btn-animation");
};
```
