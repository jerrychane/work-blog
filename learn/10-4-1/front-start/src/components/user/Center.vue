<template>
  <div class="panel main pd20">
    <div class="msg">Hi,Admin,你已经是我们的正式会员</div>
    <div class="layui-row layui-col-space20">
      <div class="layui-col-md6">
        <div class="panel border">
          <div class="title">我的会员信息</div>
          <div class="content">
            <p>积分经验值为:60</p>
            <p>您当前为:非VIP</p>
          </div>
        </div>
      </div>
      <div class="layui-col-md6">
        <sign class="border"></sign>
      </div>
      <div class="layui-col-md12 mt20">
        <div class="panel border">
          <div class="title">快捷方式</div>
          <div class="content">
            <ul class="layui-row layui-col-space10">
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4">
                <a href>
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sign from "@/components/sidebar/Sign";
export default {
  name: "user-center",
  components: {
    Sign
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .panel {
    &.main {
      margin: 0 !important;
    }
  }
}
.panel {
  color: #333;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  &.main {
    margin: 0 0 10px 225px;
  }
}
.msg {
  color: #666;
  background-color: #f8f8f8;
  padding: 10px 10px;
  margin-bottom: 20px;
}
.border {
  border: 1px solid #e6e6e6;
}
.pd20 {
  padding: 20px;
}
.mt20 {
  margin-top: -20px;
}
.title {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  color: #333;
  border-bottom: 1px dotted #e9e9e9;
  font-size: 14px;
}
.content {
  padding: 18px 15px;
  line-height: 26px;
  height: auto;
  font-size: 14px;
  color: #666;
}
li {
  text-align: center;
  padding: 5px;
}
.shortcut {
  background-color: #2f9688;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  border-radius: 2px;
  font-size: 30px;
}
</style>