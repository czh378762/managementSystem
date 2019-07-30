<template>
  <el-container>
    <el-header>
      <div class="logoBox">
        <h1>LOGO</h1>
      </div>
      <div class="user">
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-warning-outline">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar style="height: 100%; overflow-x: hidden;">
          <el-menu
            :collapse="isCollapse"
            router
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" :route="{path: '/Main/Overview'}">
              <i class="el-icon-menu"></i>
              <span slot="title">概览</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item index="2-1" :route="{path: '/Main/systemConfig'}">系统配置</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>人员管理</span>
              </template>
              <el-menu-item index="3-1" :route="{path: '/Main/personnelConfig'}">人员配置</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 20px;">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
              <router-link v-if="item.path" :to="item.path">
                {{item.title}}
              </router-link>
              <span v-else class="breadTitle">{{item.title}}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <div class="splitLine"></div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      isCollapse: false,
      defaultActive: '1',
      breadcrumbList: []
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler () {
        this.breadcrumbList = this.$route.meta.breadcrumb
        this.defaultActive = this.$route.meta.activeIndex
      }
    }
  }
}
</script>

<style lang="scss">
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
  background:#2a82e4;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logoBox {
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: #fff;
    }
  }
  .user {
    cursor: pointer;
    .el-dropdown-link {
      color: #fff;
    }
  }
}
.el-aside {
  background:#fff;
  overflow: hidden;
  border-right: 1px solid #e6e6e6;
  .el-submenu {
    width: 200px !important;
    background: #fff !important;
  }
  .el-menu-item  {
    width: 200px !important;
    background: #fff !important;
    &:hover {
      background: #e7f3ff !important;
    }
    i {
      color: #686868;
    }
    span {
      color: #686868;
    }
  }
  .el-submenu {
    background: #fff !important;
    .el-submenu__title {
      background: #fff !important;
      i {
        color: #686868;
      }
      span {
        color: #686868;
      }
    }
    .el-menu-item {
      color: #686868 !important;
      padding-left: 50px !important;
    }
  }
  .is-active {
    color: #686868 !important;
    background: #e7f3ff !important;
  }
}
.el-main {
  position: relative;
  .splitLine {
    width: 100%;
    height: 1px;
    background: #e6e6e6;
    position: absolute;
    left: 0;
    top: 54px;
    z-index: 10;
  }
}
.el-breadcrumb {
  .el-breadcrumb__item {
    &:last-child {
      .breadTitle {
        color: #606266;
        font-weight: normal;
        cursor: default;
        &:hover {
          color: #606266;
        }
      }
    }
    .breadTitle {
      color: #303133;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        color: #409EFF;
      }
    }
  }
}
</style>
