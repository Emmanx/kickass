<script>
  import Cartbox from "../ui/Cartbox.svelte";
  import { slide } from "svelte/transition";

  let cartOpen = false;

  function showCart() {
    cartOpen = !cartOpen;
  }
</script>

<style>
  .cart-wrapper {
    position: relative;
    z-index: 5;
  }

  .cart-box {
    position: absolute;
    background: #fff;
    width: 300px;
    height: 300px;
    left: -250px;
    top: 60px;
    z-index: -1;
    display: flex;
    flex-direction: column;
  }

  .checkout-wrapper {
    width: 90%;
    margin: 5px auto;
  }
</style>

<!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark mdb-color">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="/">Kick Ass</a>

  <!-- Collapse button -->
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#basicExampleNav"
    aria-controls="basicExampleNav"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="basicExampleNav">

    <!-- Links -->
    <ul class="pl-5 navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/brands">Brands</a>
      </li>
      <!-- Dropdown -->
      <li class="nav-item dropdown">
        <a
          href="/categories"
          class="nav-link dropdown-toggle"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Categories
        </a>
        <div
          class="dropdown-menu dropdown-primary"
          aria-labelledby="navbarDropdownMenuLink">
          <a
            style="border-bottom: 1px solid rgba(0,0,0,.5)"
            class="dropdown-item"
            href="/categories">
            All
          </a>
          <a class="dropdown-item" href="/categories/men">Men</a>
          <a class="dropdown-item" href="/categories/women">Women</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/chart">Size Chart</a>
      </li>

    </ul>
    <!-- Links -->

    <form class="form-inline">
      <div class="md-form my-0">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search" />
      </div>
    </form>

    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item cart-wrapper" on:click={showCart}>
        <a href="#" class="nav-link waves-effect waves-light cart-link">
          1
          <i class="fas fa-cart-arrow-down" />
        </a>

        {#if cartOpen}
          <div
            class="cart-box"
            in:slide={{ duration: 2000 }}
            out:slide={{ duration: 1000 }}>

            <div class="cart-items">
              <Cartbox />
            </div>

            <div class="checkout-wrapper">
              <a href="/checkout" class="btn btn-secondary btn-block">
                CHECKOUT
              </a>
            </div>

          </div>
        {/if}

      </li>
      <li class="nav-item avatar dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle"
          id="navbarDropdownMenuLink-55"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
            style="height: 30px"
            class="rounded-circle z-depth-0"
            alt="avatar image" />
        </a>
        <div
          class="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-55">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
  <!-- Collapsible content -->
</nav>
<!--/.Navbar-->
