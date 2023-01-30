<template>
  <div>
    <div class="bottom">
      <div class="scroll">
        <el-slider
          v-model="music_option.musicDuration"
          :max="music_option.totalDuration"
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
              <span>{{ songTimeFormat(music_option.musicDuration) }}</span
              >/
              <span>{{ songTimeFormat(music_option.timeDuration) }}</span>
              <!-- <span>{{ "00:00" }}</span> -->
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
              <el-icon v-show="music_option.isplay"><VideoPause /></el-icon>
              <el-icon v-show="!music_option.isplay"><VideoPlay /></el-icon>
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
                v-model="music_option.value"
                vertical
                height="60px"
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
        <!-- <audio :src="getNowMusic" autoplay class="playMusicAudio" ref="audio" controls> -->
        <audio autoplay class="playMusicAudio" ref="audio">
          <source src="@/assets/mp3/蒲公英的约定 - 周杰伦.mp3" />
        </audio>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import {
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
import { timeFormat, songTimeFormat } from "@/utils/timeForm";
const audio = ref<HTMLAudioElement>(null as never);
onMounted(() => {
  console.log(111, audio.value);
});
const music_option = reactive({
  isplay: false, //播放状态
  musicDuration: 0, //音乐当前播放时间
  timeDuration: 0, //总时长
  totalDuration: 100, //总时长 默认先给个100
  isUrl: true, //设置无歌曲时进度条不可拖动
  value: 100, //音量
  debace: true, //简单防抖
  // 展示右边的歌单对话框
  showRightDialog: false,
});
const { isUrl } = toRefs({ ...music_option });
isUrl.value = false;
const getNowMusic = "@/assets/mp3/七里香完整.mp3";
//
const togSingel = (): void => {
  console.log("togSingel");
};
// const getTime = computed<string>(() => {
//   return "返回时间";
//播放/暂停音乐
const playMusic = (): void => {
  console.log("playMusic");
  if (!audio.value.paused) {
    audio.value.pause();
    music_option.isplay = false;
  } else {
    audio.value.play();
    music_option.isplay = true;
    musicDurationChange();
  }
};
//上一首音乐
const preMusic = (): void => {
  console.log("preMusic");
};
// 下一首音乐
const nextMusic = (): void => {
  console.log("nextMusic");
};
//音量控制
const volumeChange = (): void => {
  audio.value.volume = music_option.value / 100;
  console.log("volumeChange");
};
//进度条控制
const musicDurationChange = (): void => {
  console.log("我是" + "musicDurationChange");
  audio.value.currentTime = music_option.musicDuration;
  audio.value.addEventListener("timeupdate", () => {
    //获取歌曲的总长度 example: 257s
    music_option.timeDuration = audio.value.duration;
    music_option.totalDuration = audio.value.duration;
    //获取歌曲时间
    music_option.musicDuration = audio.value.currentTime;
    // 当前歌曲播放完毕自动播放下一首
    if (audio.value.currentTime >= audio.value.duration) {
      console.log("歌曲播放完毕");
      music_option.isplay = false;
    }
  });
  // if (this.isplay) return;
  audio.value.play();
  music_option.isplay = true;
};
//显示右下角歌单
const showRightList = (): void => {
  console.log("showRightList");
};
// watch(getNowMusic, (nl, od) => {
//   isplay.value = true;
// });
</script>
<style scoped lang="scss">
.bottom {
  background: rgba($color: #000000, $alpha: 0.8);
  flex: 1;
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
    div i {
      margin-right: 10px;
      font-size: 16px;
      color: #888;
    }
    div:last-of-type {
      margin-right: 200px;
    }
  }
  .more-btn {
    padding: 0;
    width: 60px;
    height: 20px;
    background: none;
    color: #888;
    margin-right: 8px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
    }
    .left > div {
      margin-left: 10px;
      margin-top: 10px;
    }
  }
  .singimg img {
    width: 45px;
    height: 45px;
  }
  .s-img {
    position: relative;
    &:hover .m-img {
      display: block;
    }
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
    & > div {
      font-size: 40px;
      margin-top: 10px;
    }
    i {
      color: #5192fe;
    }
  }
}
</style>
