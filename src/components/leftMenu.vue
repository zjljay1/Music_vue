<template>
  <div class="leftMenu">
    <div class="introduce">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="circle">
        <img src="@/assets/music_icon.svg" alt="" />
      </div>
      <h3>chump</h3>
    </div>
    <el-scrollbar height="80%">
      <div class="selectList">
        <el-row class="tac">
          <el-col>
            <h5 class="mb-2">wooden man</h5>
            <el-menu
              active-text-color="#ffd04b"
              background-color="transparent"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item index="1">
                <span>Play Lists</span>
              </el-menu-item>
              <el-sub-menu index="2">
                <template #title>
                  <span>本 地 音 乐</span>
                </template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="3" disabled>
                <span>Friends Played</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span>The cure</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="sign">
        <button data-text="Awesome" class="button">
          <span class="actual-text">&nbsp;LOGIN&nbsp;</span>
          <span class="hover-text" aria-hidden="true">&nbsp;LOGIN&nbsp;</span>
        </button>
      </div>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped lang="scss">
.leftMenu {
  overflow: hidden;
  height: 100%;
  background: rgba($color: #000000, $alpha: 1);
  // border-right: 1px solid #333;
  .introduce {
    padding: 1rem 2rem;
    padding-left: 1rem;
    background-color: #bfa;
    border-radius: 50px;
    margin: 1.25rem;
    .circle {
      transform: scale(1.4);
      width: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 15px 15px 60px #ededed, -15px -15px 60px #ffffff;
      transition: all 0.2s;
      // &:hover {
      //   transform: scale(1.4);
      // }
    }
    & > * {
      display: inline-block;
      margin: 0 5px;
    }
    & {
      position: relative;
      padding: 1em 1.8em;
      outline: none;
      border: 1px solid #303030;
      background: #212121;
      color: #ae00ff;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 15px;
      overflow: hidden;
      transition: 0.2s;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
    }

    &:hover {
      box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
      transition-delay: 0.6s;
    }

    & span {
      position: absolute;
    }

    & span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #ae00ff);
    }

    &:hover span:nth-child(1) {
      left: 100%;
      transition: 0.7s;
    }

    & span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #001eff);
    }

    &:hover span:nth-child(3) {
      right: 100%;
      transition: 0.7s;
      transition-delay: 0.35s;
    }

    & span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #ae00ff);
    }

    &:hover span:nth-child(2) {
      top: 100%;
      transition: 0.7s;
      transition-delay: 0.17s;
    }

    & span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, #001eff);
    }

    &:hover span:nth-child(4) {
      bottom: 100%;
      transition: 0.7s;
      transition-delay: 0.52s;
    }

    &:active {
      background: #ae00af;
      background: linear-gradient(to top right, #ae00af, #001eff);
      color: #bfbfbf;
      box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
      transition: 0.1s;
    }

    &:active span:nth-child(1) span:nth-child(2) span:nth-child(2) span:nth-child(2) {
      transition: none;
      transition-delay: none;
    }
  }
  .selectList {
    .mb-2 {
      text-align: center;
      margin: 3.125rem 0 1.25rem;
    }
  }
  .sign {
    margin-top: 3.125rem;
    margin-left: 1.25rem;
    /* === removing default button style ===*/
    .button {
      margin: 0;
      height: auto;
      background: transparent;
      padding: 0;
      border: none;
    }

    /* button styling */
    .button {
      --border-right: 6px;
      --text-stroke-color: rgba(255, 255, 255, 0.6);
      --animation-color: #37ff8b;
      --fs-size: 1.5em;
      letter-spacing: 3px;
      text-decoration: none;
      font-size: var(--fs-size);
      font-family: "Arial";
      position: relative;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 1px var(--text-stroke-color);
    }
    /* this is the text, when you hover on button */
    .hover-text {
      position: absolute;
      box-sizing: border-box;
      content: attr(data-text);
      color: var(--animation-color);
      width: 0%;
      inset: 0;
      border-right: var(--border-right) solid var(--animation-color);
      overflow: hidden;
      transition: 0.5s;
      -webkit-text-stroke: 1px var(--animation-color);
    }
    /* hover */
    .button:hover .hover-text {
      width: 100%;
      filter: drop-shadow(0 0 23px var(--animation-color));
    }
  }
}
</style>
