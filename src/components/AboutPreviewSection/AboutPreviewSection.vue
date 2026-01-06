<script setup></script>

<template>
  <section class="aboutMe">
    <div class="wrapper-img position-relative">
      <img
        src="@/assets/images/bgAboutMe.jpg"
        alt=""
        class="object-fit-cover"
      />

      <div class="wrapper-preview">
        <img src="@/assets/images/bgAboutMe.jpg" alt="" />
        <h3>30 Tahun Melestarikan Kuliner Jawa</h3>
        <p>
          Dengan visi melestarikan budaya Indonesia terutama makanan tradisional
          Jawa, kami berkomitmen untuk terus mengembangkan kualitas produk kami
          melalui pelayanan yang prima.
        </p>

        <a href="" class="">about me</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutMe {
  padding: 190px 0;
  width: 100vw;

  & .wrapper-img {
    width: 100%;
    height: 600px;

    & > img {
      width: 100%;
      height: 100%;
    }

    & .wrapper-preview {
      position: absolute;
      width: 700px;
      box-sizing: border-box;
      padding: 40px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgb(255, 255, 255);
      box-shadow: 0 0 30px black;
      text-align: center;

      & h3 {
        color: #eb7d23;
        font-family: Caturitta, serif;
        font-weight: 400;
        margin-bottom: 16px;
      }

      & p {
        font-size: 14px;
      }

      & > img {
        width: 200px;
      }

      & a {
        display: inline-block; /* or block */
        width: 200px;
        margin: auto;
        border: 0 solid #fad961;
        font-size: 14px;
        line-height: 1.42858;
        background-color: #f76b1c;
        color: #fff;
        padding: 10px 32px;
        border-radius: 24px;
        text-decoration: none;

        &:hover {
          background-color: red;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .aboutMe {
    padding: 190px 0;
    width: 100vw;

    & .wrapper-img {
      width: 100%;
      height: 500px;

      & > img {
        width: 100%;
        height: 100%;
      }

      & .wrapper-preview {
        position: absolute;
        width: 600px;
        box-sizing: border-box;
        padding: 40px;

        & h3 {
          font-size: 22px;
          color: #eb7d23;
          font-weight: 400;
          margin-bottom: 16px;
        }

        & p {
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .aboutMe {
    padding: 190px 0;
    width: 100vw;

    & .wrapper-img {
      width: 100%;
      height: 500px;

      & > img {
        width: 100%;
        height: 100%;
      }

      & .wrapper-preview {
        position: absolute;
        width: 90%;
        box-sizing: border-box;
        padding: 40px;

        & h3 {
          font-size: 22px;
          color: #eb7d23;
          font-weight: 400;
          margin-bottom: 16px;
        }

        & p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
