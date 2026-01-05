<template>
  <div class="container-fluid">
    <div class="wrapper d-flex justify-content-evenly align-items-center">
      <div class="row-1 d-flex">
        <div>
          <img src="@/assets/images/icon.png" alt="" width="100" />
        </div>

        <div>
          <h4 class="fs-5">Dapur Nusantara</h4>
          <p>Family of Eatwell Culinary Group</p>

          <ul class="d-flex gap-2">
            <li class="">
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lv-iEOWtRxGDqsOR-Pa1kIiqN298569zVA&s"
                  width="30"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://img.freepik.com/psd-premium/logo-facebook-pada-lingkaran-biru_705838-12823.jpg?semt=ais_hybrid&w=740&q=80"
                  width="30"
                  alt=""
                />
              </a>
            </li>

            <li>
              <a href="">
                <img
                  src="https://png.pngtree.com/element_our/md/20180626/md_5b321c98efaa6.jpg"
                  alt=""
                  width="30"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://img.freepik.com/premium-vector/vector-tiktok-social-media-logo_1093524-451.jpg?semt=ais_hybrid&w=740&q=80"
                  alt=""
                  width="30"
                />
              </a>
            </li>
          </ul>
        </div>

        <div class="contact-mobile p-4">
          <h5 class="fs-6">Hubungi Kami</h5>

          <ul>
            <li>
              <a href="">Senin - Minggu (07.00-19.00)</a>
            </li>
            <li>
              <a href="">Call Center: 1500 373</a>
            </li>
            <li>
              <a href="">CS: 0858 8811 1988 (WA/SMS)</a>
            </li>
            <li>
              atau kirim pesan
              <a href="">kirim pesan</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="d-flex gap-3">
        <div class="p-4">
          <h5 class="fs-6">Perusahaan</h5>
          <ul>
            <li>
              <a href="">Tentang Kami</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Karir</a>
            </li>
          </ul>
        </div>

        <div class="p-4">
          <h5 class="fs-6">Informasi & Bantuan</h5>

          <ul>
            <li>
              <a href="">Konfirmasi Pembayaran</a>
            </li>
            <li>
              <a href="">Lokasi Pick Up</a>
            </li>
            <li>
              <a href="">Syarat & Kebijakann</a>
            </li>
          </ul>
        </div>

        <div class="contact p-4">
          <h5 class="fs-6">Hubungi Kami</h5>

          <ul>
            <li>
              <a href="">Senin - Minggu (07.00-19.00)</a>
            </li>
            <li>
              <a href="">Call Center: 1500 373</a>
            </li>
            <li>
              <a href="">CS: 0858 8811 1988 (WA/SMS)</a>
            </li>
            <li>
              atau kirim pesan
              <a href="">kirim pesan</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row-2 d-flex justify-content-between">
      <div>
        <p>Copyright 2026 © Cepi</p>
      </div>
      <div>
        <ul class="d-flex gap-3">
          <li>
            <img
              src="https://dapursolo.com/assets/frontend/images/logo-payment-visa-small.png"
              alt=""
              width="50"
            />
          </li>
          <li>
            <img
              src="https://dapursolo.com/assets/frontend/images/logo-payment-mastercard-small.png"
              alt=""
              width="50"
            />
          </li>
          <li>
            <img
              src="https://i.pinimg.com/474x/06/bd/ea/06bdea70eb048176056881cad078453a.jpg"
              alt=""
              width="50"
            />
          </li>
          <li>
            <img
              src="https://dapursolo.com/assets/frontend/images/logo-payment-bca-small.png"
              alt=""
              width="50"
            />
          </li>
        </ul>
      </div>
    </div>
    <!-- <h1>Pangsit</h1>
    <p>Pangsit Ayam Cihuy</p>
    <hr />
    <div class="sosmed"></div>
    <p class="Copyright">Copyright <span>&#169;</span> 2024 Pangcuy&#174;</p> -->
  </div>
</template>

<style scoped>
.container-fluid {
  & .wrapper {
    padding: 48px 0;

    & .row-1 {
      gap: 10px;

      & .contact-mobile {
        display: none;
      }
    }

    & p {
      font-size: 14px;
      color: #eb7d23;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;

    a {
      color: #494949;
      font-size: 14px;
      text-decoration: none;
    }
  }

  & .row-2 {
    font-size: 14px;
    color: #9b9b9b;
  }
}

@media (max-width: 768px) {
  .container-fluid {
    & .wrapper {
      flex-wrap: wrap;
      text-align: center;

      & .contact {
        display: none;
      }

      & .row-1 {
        flex-direction: column;
        gap: 5px;

        & .contact-mobile {
          display: block;
        }

        & ul {
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 576px) {
}
</style>
