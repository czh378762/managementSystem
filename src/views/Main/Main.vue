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
            unique-opened
            default-active="2-1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">概览</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item index="2-1">系统配置</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>人员管理</span>
              </template>
              <el-menu-item index="3-1">人员配置</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-main>
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
    return {}
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
  background:#545c64;
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
  background: rgb(84, 92, 100);
  overflow: hidden;
  .el-submenu, .el-menu-item {
    width: 200px !important;
  }
  .el-submenu {
    .el-menu-item {
      padding-left: 50px !important;
    }
  }
}
</style>
