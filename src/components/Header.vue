<template>
  <div class="vheader">
    <div class="logoBox">
      <h1></h1>
    </div>
    <div class="header-main">
      <router-link class="backHome" to='/PlatformManage/Overview' v-if="backShow">
        <i class="iconfont iconfanhuishouye">
        </i>
        返回首页
      </router-link>
      <!-- <router-link class="toMessage" to='/PlatformManage/Overview'>
        <i class="iconfont iconxiaoxi">
          <span>3</span>
        </i>
      </router-link> -->
      <Dropdown class="dropMenu" @on-click="settingClick">
        <a href="javascript:void(0)">
          {{adminName}}
          <Icon type="md-arrow-dropdown" color="#B6B6B6" />
        </a>
        <DropdownMenu slot="list">
          <DropdownItem name="1">个人信息</DropdownItem>
          <DropdownItem name="2">密码管理</DropdownItem>
          <DropdownItem name="3">退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  data () {
    return {
      backShow: false,
      adminName: ''
    }
  },
  created () {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.adminName = userInfo.adminName
  },
  watch: {
    // 判断返回首页功能显隐藏
    $route: {
      immediate: true,
      handler () {
        if (this.$route.path.indexOf('/CommunityManage') !== -1) {
          if (sessionStorage.getItem('userInfo')) {
            let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            if (userInfo.type !== '3') {
              this.backShow = true
            }
          }
        }
      }
    }
  },
  methods: {
    // 设置
    settingClick (value) {
      if (value === '1') {
        let arr = this.$route.path.split('/')
        this.$router.push({
          path: `/${arr[1]}/PersonalInfo`
        })
      } else if (value === '2') {
        let arr = this.$route.path.split('/')
        this.$router.push({
          path: `/${arr[1]}/PasswordModification`
        })
      } else if (value === '3') {
        this.$router.push('/Login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.vheader {
  width: 100%;
  height: 64px;
  display: flex;
  background: #333138;
  .logoBox {
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      width: 136px;
      height: 54px;
      background: url(../assets/images/header/logo.png);
      background-size: 100% 100%;
    }
  }
  .header-main {
    width: calc(~"100% - 200px");
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding-right: 40px;
    h2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      font-size: 30px;
      line-height: 30px;
      color: #fff;
      margin-left: -100px;
    }
    .backHome {
      cursor: pointer;
      width: 90px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #B6B6B6;
      font-size: 16px;
      margin-right: 20px;
      i {
        font-size: 18px;
        color: #B6B6B6;
      }
      .ivu-icon {
        margin-right: 5px;
      }
    }
    .toMessage {
      display: flex;
      height: 100%;
      align-items: center;
      font-size: 16px;
      color: #B6B6B6;
      margin: 0 30px;
      i {
        position: relative;
        display: flex;
        height: 20px;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        span {
          position: absolute;
          top: -8px;
          right: -12px;
          display: flex;
          width: 16px;
          height: 16px;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 12px;
          background: #FF6481;
          border-radius: 50%;
        }
      }
    }
    .dropMenu {
      float: right;
      .ivu-dropdown-rel {
        display: flex;
        align-items: center;
      }
      a {
        font-size: 16px;
        color: #B6B6B6;
        display: flex;
        align-items: center;
        .ivu-icon-md-arrow-dropdown {
          font-size: 19px;
          line-height: 19px;
        }
      }
      .ivu-dropdown-item {
        font-size: 14px !important;
      }
    }
  }
  .ivu-menu {
    height: 64px;
  }
}
</style>
