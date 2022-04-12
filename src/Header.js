import './App.css';
export default Header;


function Header()
{
  return(
     <div> 
    <header>
    <div id="wrapper" class="animate">
      <nav class="navbar header-top fixed-top navbar-expand-lg  navbar-dark bg-dark">
        <span class="navbar-toggler-icon leftmenutrigger"></span>
        <a class="navbar-brand" href="#">Crazy OS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav animate side-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Docs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Github</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Logs</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-md-auto d-md-flex">
            <li class="nav-item">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Docs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Logs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Github</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </header>
    </div>
  );
  }
