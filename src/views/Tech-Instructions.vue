<template>
  <main class="tech-instructions flex column align-center">
    <h1>Technical Instructions</h1>
    <div class="instruct">
      <div class="title flex align-center">
        <svg viewBox="0 0 512 512">
          <path
            d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"
          />
        </svg>
        <h3>Angle</h3>
      </div>
      <ul>
        <li>Shoot yourself in wide angle!</li>
        <li>Let someone else film you for optimal result</li>
      </ul>
      <div class="angle-imgs flex align-center justify-center">
        <img class="wide" src="../assets/imgs/wide_angle.png" alt />
        <img class="narrow" src="../assets/imgs/narrow_angle.png" alt />
      </div>
    </div>
    <div class="instruct">
      <div class="title flex align-center">
        <svg viewBox="0 0 512 512">
          <path
            d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 00-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"
          />
        </svg>
        <h3>Lighting</h3>
      </div>
      <ul>
        <li>Shoot yourself in a well lighted environment</li>
        <li>The light should come from the direction of the camera</li>
      </ul>
    </div>
    <div class="instruct">
      <div class="title flex align-center">
        <svg viewBox="0 0 512 512">
          <path
            d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"
          />
        </svg>
        <h3>Sound</h3>
      </div>
      <ul>
        <li>Shoot yourself in a quite environment</li>
        <li>Avoid static sound (mainly refrigerator and a/c) stay away or turn it off</li>
      </ul>
    </div>
    <router-link to="/">
      <button>Back to main page</button>
    </router-link>
  </main>
</template>