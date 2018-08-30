<template>
<div class="left">
  <ul>
    <router-link to="/mean/index" tag="li">首页</router-link>
    <li v-for="nav in navList" :key="nav.id"  @click="showNav(nav.id)">{{nav.navOne}}
      <i class="iconfont icon-iconfontjiantou"></i>
      <ul class="nav-child" v-show="showTag == nav.id">
        <li v-for="item in nav.navTwo" :key="item.id" @click.stop="jumpModule(item.url)">{{item.title}}</li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "left",
  data:function(){
    return {
      showTag: "",
      navList:[
      {
        navOne:"资讯管理",
        id:1,
        navTwo:[
          {
            title:"资讯管理",
            id:1,
            url:"/mean/list"
          }
        ]
      },
      {
        navOne:"图片管理",
        id:2,
        navTwo:[
          {
            title:"图片管理",
            id:1,
            url:"/mean/img"
          }
        ]
      },
      {
        navOne:"产品管理",
        id:3,
        navTwo:[
          {
            title:"品牌管理",
            id:1,
            url:"/mean/product/brand"
          },
          {
            title:"分类管理",
            id:2,
            url:"/mean/product/classify"
          },
          {
            title:"产品管理",
            id:3,
            url:"/mean/product/product"
          }
        ]
      },
      {
        navOne:"评论管理",
        id:4,
        navTwo:[
          {
            title:"评论列表",
            id:1
          },
          {
            title:"意见反馈",
            id:2
          }
        ]
      },
      {
        navOne:"会员管理",
        id:5,
        navTwo:[
          {
            title:"会员列表",
            id:1
          },
          {
            title:"删除的会员",
            id:2
          },
          {
            title:"等级管理",
            id:3
          },
          {
            title:"积分管理",
            id:4
          },
          {
            title:"浏览记录",
            id:5
          },
          {
            title:"下载记录",
            id:6
          },
          {
            title:"分享记录",
            id:7
          }
        ]
      },
      {
        navOne:"管理员管理",
        id:6,
        navTwo:[
          {
            title:"角色管理",
            id:1
          },
          {
            title:"权限管理",
            id:2
          },
          {
            title:"管理员列表",
            id:3
          }
        ]
      },
      {
        navOne:"统计管理",
        id:7,
        navTwo:[
          {
            title:"折线图",
            id:1
          },
          {
            title:"时间轴折线图",
            id:2
          }
        ]
      },
      {
        navOne:"系统管理",
        id:8,
        navTwo:[
          {
            title:"系统设置",
            id:1
          },
          {
            title:"栏目管理",
            id:2
          },
          {
            title:"数据字典",
            id:3
          },
          {
            title:"屏蔽词",
            id:4
          },
          {
            title:"系统日志",
            id:5
          }
        ]
      }
    ]
    }
  },
   methods: {
     showNav(tab) {
      this.showTag = this.showTag == tab ? '' : tab; // 点击一下展开，再点击消失
    },
    jumpModule(url){
      this.$router.push(url);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left{
    width:200px;
    position: fixed;
    background: #f5f5f5;
    top:60px;
    left:0;
    height:calc(100% - 60px);
    z-index: 99;
    overflow-y: auto;
  }
  .left ul > li{
    padding:10px;
    border-bottom:dotted 1px #dedede;
    font-size:15px;
    color:#999;
  }
  .left ul > li i{
    margin-left:5px;
  }
  .left ul > li ul li{
    border-bottom:0;
    font-size:14px;
    color:#333;
  }
</style>
