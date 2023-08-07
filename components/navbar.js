function navbar() {
  return `   <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Admin Pannel</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="shirt.html">Shirt</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tshirt.html">T-Shirt</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trouser.html">Trouser</a>
                </li>
            </ul>
            <div class="signInSignUp">
            <li class="nav-item btn btn-outline-primary">
            <a class="nav-link" href="signup.html">Signup</a>
            </li>
            <li class="nav-item btn btn-outline-primary">
            <a class="nav-link" href="signin.html" id="loginContainer">Signin</a>
            </li>
            </div>
            <!-- <span class="navbar-text">
                UserName
            </span> -->
        </div>
    </div>
</nav>`;
}
export default navbar;
