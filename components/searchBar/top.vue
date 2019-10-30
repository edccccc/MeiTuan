<template>
  <div class="topBar">
    <div class="logo">
      <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
    </div>
    <div class="input-con">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        class="input-with-select"
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div class="keyword">
        <a v-for="item of keywordsList" :key="item">{{item}}</a>
      </div>
      <div class="recommend" v-show="isShowRec">
        <div class="search-sug" v-show="isShowSug">
          <div class="search-his">
            <div class="sub-title" v-if="!historyWords.length===0">
              最近搜索
              <span class="clear-his">
                <i class="el-icon-delete" style="margin-right:3px"></i>删除搜索历史
              </span>
            </div>
            <div class="words">
              <span v-for="(item,index) of historyWords" :key="index">{{item}}</span>
            </div>
          </div>
          <div class="search-rec">
            <div class="sub-title">热门推荐</div>
            <div class="words">
              <span v-for="(item,index) of recommendWords" :key="index">{{item}}</span>
            </div>
          </div>
        </div>
        <div class="search-list" v-show="!isShowSug">
          <ul>
            <li v-for="item of searchList" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      keywordsList: [
        "鼓浪屿",
        "老厦门闽南本地菜.正宗姜母鸭专门店",
        "园林植物园",
        "钟鼓索道",
        "鼓浪屿往返船票代售处",
        "梦幻陆世界"
      ],
      historyWords: [],
      recommendWords: ["鼓浪屿", "老厦门闽南本地菜.正宗姜母鸭专门店"],
      isShowRec: false,
      searchList: ["test"]
    };
  },
  computed: {
    isShowSug() {
      return this.isShowRec && this.input.length === 0;
    }
  },
  methods: {
    handleFocus() {
      this.isShowRec = true;
    },
    handleBlur() {
      this.isShowRec = false;
    }
  }
};
</script>

<style scoped lang="scss">
.topBar {
  height: 90px;
  padding-top: 30px;
  box-sizing: content-box;
  display: flex;
  .logo {
    float: left;
    width: 0px;
    height: 54px;
    img {
      width: 126px;
      height: 46px;
      display: block;
    }
  }
  .input-con {
    margin: 0 auto;
    width: 550px;
    position: relative;
    .recommend {
      border: 1px solid #e5e5e5;
      border-top: 0;
      position: absolute;
      width: 100%;
      background: #fff;
      left: 0;
      top: 40px;
      z-index: 999;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      color: #999;
      font-size: 12px;
      text-align: left;
      .search-list {
        ul {
          list-style: none;
          padding: 0;
          li {
            padding: 5px 10px;
            color: #333;
            line-height: 1.6;
            width: 100%;
            cursor: pointer;
            &:hover {
              color: #fe8c00;
              background: #f8f8f8;
            }
          }
        }
      }
      .search-sug {
        padding: 10px 10px 0;
        .sub-title {
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          .clear-his {
            cursor: pointer;
            font-weight: normal;
          }
        }
        .words {
          display: flex;
          flex-wrap: wrap;
          padding-left: 2px;
          span {
            font-size: 12px;
            color: #666;
            cursor: pointer;
            line-height: 35px;
            margin-right: 10px;
            &:hover {
              color: #fe8c00;
            }
          }
        }
      }
    }
    .keyword {
      height: 25px;
      line-height: 20px;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: hidden;
      padding-left: 10px;
      a {
        color: #999;
        margin-right: 10px;
        margin-bottom: 3px;
        display: inline-block;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          color: #fe8c00;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.topBar {
  .input-con {
    .el-input__inner:focus {
      border-color: orange;
    }
    .el-input-group__append {
      border: none !important;
      border-radius: 0;
      height: 100%;
      .el-button {
        border: 0;
        outline: none;
        border-radius: 0px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        background: #ffc300;
        color: #222;
        height: 40px;
        width: 80px;
        .el-icon-search {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
