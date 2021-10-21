<template>
  <div>
    <div class="welcomePage">
      <section class="top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 text-left">
              <h1>Cook Book</h1>
              <h3 >Welcome</h3>
            </div>
            <div class="col-lg-4">
              <div class="card">
                Here is the login
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="wavecolor" viewBox="0 0 1440 320">
          <path fill="#f5f7fa" fillOpacity="1" d="M0,160L40,160C80,160,160,160,240,144C320,128,400,96,480,85.3C560,75,640,85,720,106.7C800,128,880,160,960,149.3C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"/>
        </svg>
      </section>
      <section class="mid py-3">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 text-left">

            </div>
            <div class="col-lg-4">

            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style scoped>
.welcomePage {
  background-color: #f5f7fa;
  min-height: 92.5vh;
  z-index: 0;
}
.wave{
  background-color: #6b0f1a;
  background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
}
.top {
  padding-top: 5rem;
  min-height: 25%;
  background-color: #c73e1d;
  background-image: linear-gradient(315deg, #c73e1d 0%, #a23b72 37%, #2e86ab 100%);
}

h1 {
  font-size: 5rem;
  color: white;
}

h3 {
  color: white;
}

.wavecolor{
  margin-bottom: -1rem;
}

.card-right {
}
</style>
