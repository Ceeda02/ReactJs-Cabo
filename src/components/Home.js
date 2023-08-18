export function Home() {
  return (
    <>
      <section id="home">
        <div class="portfolio-intro">
          <div class="container-fluid home-container">
            <div class="row">
              <div class="col-md-6">
                <div class="portfolio-intro-text">
                  <div class="intro-text">
                    <h3 class="portfolio-hello">Greetings! I'm</h3>
                    <h1 class="portfolio-name">Charles Dervin</h1>
                    <h1 class="portfolio-cabo">Cabo</h1>
                    <p class="portfolio-role">Web Developer</p>
                    <p>
                      <a
                        href="https://github.com/Ceeda02"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Account
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container-fluid home-container bg-light mt-5">
          <div class="row justify-content-center">
            <div class="col-md-10 mb-5">
              <img
                class="img-fluid rounded-circle mt-4 mx-auto d-block smaller-profile-image"
                src={require("../assets/img/avatar-diffC.png")}
                alt={"Profile Picture"}
              />
              <h1 class="text-center mt-5">About Me</h1>
              <p class="text-center mb-5">
                I am a passionate and driven 3rd-year Student Developer studying
                at Phinma University of Pangasinan. My primary focus is to
                continuously enhance my skills and knowledge in the field of
                technology. I actively engage in developing projects that not
                only serve as a testament to my abilities but also provide
                valuable experiences to further my expertise. With each project
                I undertake, I set clear goals and work diligently to achieve
                them, constantly pushing my boundaries and striving for
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
