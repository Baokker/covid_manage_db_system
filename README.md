# covid_prevention_db_system
此仓库fork自本人2022年暑期数据库课设小组项目[疫知通——疫情信息管理系统](https://github.com/KKKA404/DB_Design_Project)，主要展示了项目的前端代码。
本项目前端部分的开发主要技术栈为：
- vue2
- vue-router
- axios
- vuex
- axios

本项目的搭建离不开前后端10位uu的共同协作，感谢各位在最后一周的狂肝（）
本项目在实现过程中参照了不少大佬的代码：
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)，其中的几篇掘金教程非常受益。当然其项目本身非常庞大，支持富文本、Excel等操作，对我们这种小型项目来说实在是杀鸡焉用牛刀了。因此更多地是参考[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)，几乎是对其中的源码全读了一遍，并理解了其中的大致原理
- [白卷](https://github.com/Antabot/White-Jotter)，队友推荐给我的项目，教程非常完善（写我自己那篇Blog心得的时候，我就感觉，写一篇优秀而精练的教程确实很难，我的最多是漫谈）
- [COVID](https://github.com/liutengjian66/COVID)，看得出来是同龄人做的项目hh初期给了我们很大帮助，但后来就发现，项目虽然引入了vuex，但是并没有使用，同时登录拦截那一块根本没做（因此，我们只需要把地址栏结尾改成/Index，就可以进入主页），这显然不满足安全性的需求
- [vue-axios-github](https://github.com/superman66/vue-axios-github)，前端登录拦截的另一个简单版本

# 如何运行项目
首先在电脑上需安装好nodejs，git clone此项目到本地
安装相关依赖
```
npm install
```
本地预览代码
```
npm run serve
```
打包发布代码（部署教程可见下面Blog）
```
npm run build
```

# 个人blog总结经验
[在这](https://baokker.github.io/2022/09/04/%E5%89%8D%E7%AB%AF%E6%BC%AB%E8%B0%88%E2%80%94%E2%80%94%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AF%BE%E8%AE%BE%E5%BF%83%E5%BE%97%E8%AE%B0%E5%BD%95/)