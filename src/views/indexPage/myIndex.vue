<template>
  <div class="main">
    <div class="top">
      <aside class="top-left">
        <leftMenu></leftMenu>
      </aside>
      <div class="top-right">
        <!-- top-right -->
        <div class="tabBar">
          <div class="circle">
            <el-icon><ArrowLeftBold /></el-icon>
          </div>
          <div class="circle">
            <el-icon><ArrowRightBold /></el-icon>
          </div>
          <div class="search">
            <div class="form">
              <button>
                <svg
                  width="17"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="search"
                >
                  <path
                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                    stroke="currentColor"
                    stroke-width="1.333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <input class="input" placeholder="search you wander" type="text" />
              <button class="reset" type="reset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="container">
          <el-scrollbar height="700px" style="padding-right: 50px">
            <!-- <p v-for="item in 100" :key="item" class="scrollbar-demo-item">{{ item }}</p> -->
            <div class="options">
              <div class="option" v-for="(item, idx) in tagIconArr" :key="idx">
                <img :src="`src/assets/${item.icon}.svg`" alt="" />
                <span>{{ item.content }}</span>
              </div>
            </div>
            <div class="cardShow">
              <div class="title">
                <div class="textColor textOne">Recommend</div>
                For You
              </div>
              <div class="rowContent">
                <el-scrollbar>
                  <el-row :gutter="2" type="flex" justify="start" style="width: 100%">
                    <el-col v-for="(o, index) in 9" :key="o" :span="5" :offset="index > 0 ? 1 : 0">
                      <el-card :body-style="{ padding: '8px' }" shadow="hover">
                        <img
                          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                          class="image"
                        />
                        <div style="padding: 5px 0">
                          <span>Yummy hamburger</span>
                          <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button text class="button">Operating</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-scrollbar>
              </div>
            </div>
            <div class="cardShow">
              <div class="title">
                <div class="textColor textTwo">Your</div>
                Collection
              </div>
              <div class="rowContent">
                <el-scrollbar>
                  <el-row :gutter="5" type="flex" justify="start" style="width: 100%">
                    <el-col v-for="(o, index) in 9" :key="o" :span="5" :offset="index > 0 ? 1 : 0">
                      <el-card :body-style="{ padding: '10px' }" shadow="hover">
                        <img
                          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                          class="image"
                        />
                        <div style="padding: 5px 0">
                          <span>Yummy hamburger</span>
                          <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button text class="button">Operating</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-scrollbar>
              </div>
            </div>
            <div class="cardShow">
              <div class="title">
                <div class="textColor textThree">Love</div>
                Music
              </div>
              <div class="rowContent">
                <el-scrollbar>
                  <el-row :gutter="5" type="flex" justify="start" style="width: 100%">
                    <el-col v-for="(o, index) in 9" :key="o" :span="5" :offset="index > 0 ? 1 : 0">
                      <el-card :body-style="{ padding: '10px' }" shadow="hover">
                        <img
                          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                          class="image"
                        />
                        <div style="padding: 5px 0">
                          <span>Yummy hamburger</span>
                          <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button text class="button">Operating</el-button>
                          </div>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </el-scrollbar>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="scroll">
        <el-slider
          v-model="musicDuration"
          :max="totalDuration"
          @change="musicDurationChange"
          :show-tooltip="false"
          :disabled="isUrl"
        ></el-slider>
      </div>
      <div class="content">
        <div class="left">
          <div class="singimg">
            <a href="javascript:void(0)" @click.stop="togSingel">
              <div class="s-img">
                <img src="getNowMusicMenu.al.picUrl" />
                <div class="m-img">
                  <a href="javascript:void(0)" @click.stop="togSingel">
                    <el-icon style="color: rgba(255, 255, 255, 0.8)"><ArrowUp /></el-icon>
                    <el-icon
                      style="
                        color: rgba(255, 255, 255, 0.8);
                        position: absolute;
                        top: 12px;
                        left: 0px;
                      "
                      ><ArrowUp
                    /></el-icon>
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div class="sing">
            <div>
              <a>{{ "歌手 " }} - {{ " 歌名" }}</a>
            </div>
            <div class="sing-time">
              <span>{{ "00:00" }}</span
              >/
              <span>{{ "00:00" }}</span>
            </div>
          </div>
          <div class="icon">
            <span style="cursor: pointer">
              <el-icon v-show="true" :size="20" color="#fff"><Star /></el-icon>
              <el-icon v-show="false" :size="20" style="transform: scale(1.2)" color="yellow"
                ><StarFilled
              /></el-icon>
            </span>
          </div>
          <div class="icon">
            <span style="cursor: pointer">
              <el-icon><Download /></el-icon>
            </span>
          </div>
          <div class="icon">
            <span style="cursor: pointer">
              <el-icon><ChatDotSquare /></el-icon>
            </span>
          </div>
          <div class="icon">
            <span style="cursor: pointer">
              <el-icon><More /></el-icon>
            </span>
          </div>
        </div>
        <div class="play">
          <div class="pre" @click="preMusic">
            <span style="cursor: pointer">
              <el-icon><CaretLeft /></el-icon>
            </span>
          </div>
          <div class="start" @click="playMusic">
            <span style="cursor: pointer">
              <el-icon v-show="isplay"><VideoPause /></el-icon>
              <el-icon v-show="!isplay"><VideoPlay /></el-icon>
            </span>
          </div>
          <div class="next" @click="nextMusic">
            <span style="cursor: pointer">
              <el-icon><CaretRight /></el-icon>
            </span>
          </div>
        </div>
        <div class="more">
          <div style="marginright: 30px" class="loundBox">
            <a href="#">
              <el-icon><Microphone /></el-icon>
            </a>
            <div class="lound">
              <el-slider
                v-model="value"
                vertical
                height="60px"
                size="mini"
                @change="volumeChange"
              ></el-slider>
            </div>
          </div>
          <el-button type="primary" class="more-btn">
            倍速
            <el-icon><ArrowUp /></el-icon>
          </el-button>
          <el-button type="primary" class="more-btn">
            标准
            <el-icon><ArrowUp /></el-icon>
          </el-button>
          <div>
            <a href="#">
              <el-icon><DataAnalysis /></el-icon>
            </a>
          </div>
          <div>
            <a href="#">
              <el-icon><Sort /></el-icon>
            </a>
          </div>
          <div>
            <a href="#">
              <el-icon><MuteNotification /></el-icon>
            </a>
          </div>
          <div>
            <span @click="showRightList" style="cursor: pointer">
              <el-icon><Fold /></el-icon>
            </span>
          </div>
        </div>
        <audio :src="getNowMusic" autoplay class="playMusicAudio" ref="audio"></audio>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed, toRefs, watch, onMounted } from "vue";
import {
  ArrowLeftBold,
  ArrowRightBold,
  Star,
  StarFilled,
  Download,
  ChatDotSquare,
  More,
  ArrowUp,
  CaretLeft,
  VideoPause,
  VideoPlay,
  CaretRight,
  Microphone,
  Sort,
  DataAnalysis,
  MuteNotification,
  Fold,
} from "@element-plus/icons-vue";
import leftMenu from "@/components/leftMenu.vue";
type option = {
  content: string;
  icon: string;
};
const tagIconArr: option[] = [
  { content: "Liked Songs", icon: "love_option" },
  { content: "Recently Played", icon: "music_option" },
  { content: "Friends Played", icon: "friends_option" },
];
const musicDurationChange = (): void => {
  console.log("我是" + "musicDurationChange");
};
const currentDate = ref(new Date());
const music_option = reactive({
  isplay: false, //播放状态
  musicDuration: 0, //音乐当前播放时间
  totalDuration: 100, //总时长 默认先给个100
  isUrl: true, //设置无歌曲时进度条不可拖动
  value: 100, //音量
  debace: true, //简单防抖
  // 展示右边的歌单对话框
  showRightDialog: false,
});
const { musicDuration, totalDuration, isUrl, isplay, value } = toRefs({ ...music_option });
const getNowMusic = "@/assets/mp3/七里香完整.mp3";
//
const togSingel = (): void => {
  console.log("togSingel");
};
// const getTime = computed<string>(() => {
//   return "返回时间";
const preMusic = (): void => {
  console.log("preMusic");
};
const playMusic = (): void => {
  console.log("playMusic");
};
// 下一首音乐
const nextMusic = (): void => {
  console.log("nextMusic");
};
const volumeChange = (): void => {
  console.log("volumeChange");
};
//显示右下角歌单
const showRightList = (): void => {
  console.log("showRightList");
};
// watch(getNowMusic, (nl, od) => {
//   isplay.value = true;
// });
onMounted(() => {
  console.log("加载完成...");
});
</script>
<style scoped lang="scss">
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.main {
  width: 94rem;
  overflow: hidden;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  color: #fff;
  .top {
    height: 58rem;
    display: flex;
    border-bottom: 1px solid #333;
    .top-left {
    }
    .top-right {
      background: rgba($color: #353535, $alpha: 0.9);
      padding: 10px;
      flex: 1;

      .tabBar {
        & > * {
          display: inline-block;
          margin: 0 5px;
        }
        .circle {
          width: 20px;
          line-height: 20px;
          padding-top: 1px;
          text-align: center;
          border-radius: 110px;
          background: #333;
          box-shadow: 5px 5px 100px #666666, -5px -5px 100px #ffffff;
        }

        .search {
          /* From uiverse.io by @satyamchaudharydev */
          /* removing default style of button */

          .form button {
            border: none;
            background: none;
            color: #8b8ba7;
          }
          /* styling of whole input container */
          .form {
            --timing: 0.3s;
            --width-of-input: 200px;
            --height-of-input: 20px;
            --border-height: 2px;
            --input-bg: #fff;
            --border-color: #333;
            --border-radius: 30px;
            --after-border-radius: 1px;
            position: relative;
            width: var(--width-of-input);
            height: var(--height-of-input);
            display: flex;
            align-items: center;
            padding-inline: 0.8em;
            border-radius: var(--border-radius);
            transition: border-radius 0.5s ease;
            background: var(--input-bg, #fff);
          }
          /* styling of Input */
          .input {
            font-size: 0.9rem;
            background-color: transparent;
            width: 100%;
            height: 100%;
            padding-inline: 0.5em;
            padding-block: 0.7em;
            border: none;
          }
          /* styling of animated border */
          .form:before {
            content: "";
            position: absolute;
            background: var(--border-color);
            transform: scaleX(0);
            transform-origin: center;
            width: 100%;
            height: var(--border-height);
            left: 0;
            bottom: 0;
            border-radius: 1px;
            transition: transform var(--timing) ease;
          }
          /* Hover on Input */
          .form:focus-within {
            border-radius: var(--after-border-radius);
          }

          input:focus {
            outline: none;
          }
          /* here is code of animated border */
          .form:focus-within:before {
            transform: scale(1);
          }
          /* styling of close button */
          /* == you can click the close button to remove text == */
          .reset {
            border: none;
            background: none;
            opacity: 0;
            visibility: hidden;
          }
          /* close button shown when typing */
          input:not(:placeholder-shown) ~ .reset {
            opacity: 1;
            visibility: visible;
          }
          /* sizing svg icons */
          .form svg {
            width: 17px;
            margin-top: 3px;
          }
        }
      }
      .container {
        // width: 90%;
        padding-left: 45px;
        margin: 0 auto;
        .options {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          cursor: pointer;
          .option {
            width: 240px;
            height: 48px;
            line-height: 48px;
            border-radius: 100px;
            background: #616161;
            display: flex;

            img {
              background-color: #fff;
              border-radius: 50%;
            }
            span {
              flex: 1;
              padding-left: 20px;
            }
          }
        }
        .cardShow {
          .title {
            font-size: 24px;
            font-weight: 600;
            .textColor {
              font-weight: 600;
              color: transparent;
              display: inline-block;
              -webkit-background-clip: text; /*为Chrome/Safari*/
              -moz-background-clip: text; /*为Firefox*/
              -ms-background-clip: text; /*为IE*/
              -o-background-clip: text; /*为Opera*/
              background-clip: text;
            }
            .textOne {
              background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);
            }
            .textTwo {
              background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
            }
            .textThree {
              background-image: linear-gradient(
                to right,
                #b8cbb8 0%,
                #b8cbb8 0%,
                #b465da 0%,
                #cf6cc9 33%,
                #ee609c 66%,
                #ee609c 100%
              );
            }
          }
          .rowContent {
            .el-row {
              flex-wrap: nowrap;
              width: 900px !important;
            }
            .el-card {
              background-color: rgb(49, 49, 49);
              border: none;
              border-radius: 10px;
              div {
                color: #fff;
              }
            }
            .time {
              font-size: 12px;
              color: #ccc;
            }

            .bottom {
              margin-top: 13px;
              line-height: 12px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .button {
              padding: 0;
              min-height: auto;
            }

            .image {
              width: 100%;
              display: block;
            }
          }
        }
      }
    }
  }
  .bottom {
    background: rgba($color: #000000, $alpha: 0.8);
    flex: 1;
    /* .el-dialog__wrapper{
  position: absolute !important;
  right: 0;
  bottom: 0;
  z-index: 99999;
  overflow: auto;
} */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 255, 0.1);
      border-radius: 3px;
    }
    #btmbar .el-dialog {
      position: absolute;
      right: 260px;
      bottom: 80px;
      max-height: 600px;
      overflow: auto;
    }
    .scroll .el-slider__bar {
      background-image: linear-gradient(to left, #a1c4fd 0%, #c2e9fb 100%);
    }
    .lound .el-slider__bar {
      background: linear-gradient(#a1c4fd 0%, #c2e9fb 100%);
    }
    .loundBox:hover .el-slider.is-vertical .el-slider__runway {
      display: block;
    }
    .lound .el-slider__button {
      width: 10px;
      height: 10px;
    }
    .lound .el-slider.is-vertical .el-slider__runway {
      width: 4px;
      display: none;
    }
    .lound {
      position: absolute;
      top: -26px;
      left: 10px;
    }
    .scroll {
      width: 98%;
      position: absolute;
      top: -22px;
      /* left: 217px; */
    }
    .more {
      display: flex;
      position: relative;
      justify-content: space-around;
      align-items: center;
    }
    .more-btn {
      padding: 0;
      width: 60px;
      height: 20px;
      background: none;
      color: #888;
      margin-right: 8px;
    }
    .more div i {
      margin-right: 10px;
      font-size: 16px;
      color: #888;
    }
    .more div:last-of-type {
      margin-right: 200px;
    }
    #btmbar {
      position: relative;
      height: 70px;
      background: rgba(0, 0, 255, 0.1);
    }
    .content {
      display: flex;
      justify-content: space-between;
    }
    .content .left {
      display: flex;
    }
    .content .left > div {
      margin-left: 10px;
      margin-top: 10px;
    }
    .singimg img {
      width: 45px;
      height: 45px;
    }
    .s-img {
      position: relative;
    }
    .s-img:hover .m-img {
      display: block;
    }
    .m-img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      line-height: 62px;
      font-size: 20px;
      border-radius: 5px;
      display: none;
    }
    .sing {
      padding-top: 8px;
      font-size: 14px;
    }
    .sing-time {
      margin-top: 8px;
      color: rgb(187, 192, 195);
    }
    .icon {
      padding-top: 15px;
      padding-left: 8px;
      font-size: 20px;
    }
    .play {
      display: flex;
      justify-content: space-between;
    }
    .play > div {
      font-size: 40px;
      margin-top: 10px;
    }
    .play i {
      color: #5192fe;
    }
  }
}
</style>
