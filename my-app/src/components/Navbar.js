import React from "react";

function Navbar() {
    return ( <nav class="navbar navbar-expand-lg bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand text-white"  href="/">Start Bootstrap</a>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>)
}


export default Navbar 