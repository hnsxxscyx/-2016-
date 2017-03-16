# 百度前端学院2016年春个人作业及分析
## 目标
- 熟练掌握前端工程师工程中需要掌握的内容和各个情况下的效果
- 增加代码熟悉度，尽量使用简洁优雅的的方案解决问题
```html
<h1>支持代码高亮</h1>
```
# task 3
## 任务描述
- 三栏式布局
- 左右宽度固定中间自适应，外高度取决于最高元素
## 任务目标
- 掌握布局的概念
- 掌握盒模型的概念
- 掌握poosition与float的概念以及在布局时的用法
## 分析
![](http://p1.bpimg.com/4851/181ec96f414a08fa.png)
-

# task 6
## 任务描述
## 学到的经验
- <img>元素下会有空白，原因以及去除办法参见https://www.zhihu.com/question/21558138
- 许多元素都有自带margin
- 重复的设置太多，用写好的类来赋予html不知道是不是好的解决方法
- <hr>不设置background会出现空心
- 首字下沉的实现
    + 使用两种标签进行左浮动
    + 使用first-letter左浮动
- 使用CSS实现三角
    + [CSS border三角、圆角图形生成技术简介](http://www.zhangxinxu.com/wordpress/2010/05/css-border%E4%B8%89%E8%A7%92%E3%80%81%E5%9C%86%E8%A7%92%E5%9B%BE%E5%BD%A2%E7%94%9F%E6%88%90%E6%8A%80%E6%9C%AF%E7%AE%80%E4%BB%8B/)
    + 《CSS揭秘》
- 最后的双引号最难写，分析如下：
    + 不能用:first-letter[深入CSS ::first-letter伪元素及其实例等](http://www.zhangxinxu.com/wordpress/2016/09/css-first-letter-pseudo-element/)
    + 第一个双引号下部与文字对齐，第二个上部与文字对齐
    + 双引号不影响文字本身的行高
    + 解决方案考虑如下：
        * overflow对多余内容切除——无法对指定位置切除
        * clip
        * absolute定位——使文字产生空位略为困难，但并非无法采用
        * 第一个使用relative定位并使用margin拉近文字（relative不会影响到其他元素，但这会改变同行行高，这是第一行无所谓），第二个使用float配合relative（不会影响行高）
## 暂存的问题
- class与id命名十分不便，需要了解常用规范
- 图片添加透明蒙版（不会使用伪类制作）
- 段落间距不确定是不是line-height（大致确认不是，而是可以通过line-height设置）
- 使用first-letter实现首字下沉为什么要配合padding实现效果？
# task7
## 任务难点
- 定宽为最小宽度1280px,本来想新世界那里图片应该不变，但后来发现太丑了
## 学到的经验
- 超链接定义样式需要定义四种状态
- class的命名
    + 本意参考BEM进行命名，然而发现过于复杂且不知它的好处，所以略作修改
    + 依然按照BEM进行分类，但配合元素选择器进行每个的细分，不抗拒同class的存在
    + 但用这种方法配合scss的嵌套好奇怪，感觉在浪费性能，期待以后更好的方案
- img居中居然可以包裹在p标签进行垂直居中
- 定宽为最小宽度1280px
    + 会延浏览器自动拉长的元素，可参考布局方法
- vw、vh只有vh比较实用，而且vw还有兼容问题（设置的时候会多出一点）
- 使用after伪类为图片添加透明遮罩
- text-align-last的使用
- 改变默认的下拉列表样式
    + 本想使用伪元素制作，但尝试一番后发现伪元素对下拉列表不起作用
    + 用图片制作
    + 改变option样式太难了，搜了好长时间没有解决方案，暂时只有这个，还是选中后的[前端网](http://www.qdfuns.com/notes/28928/eea200515f0cc4011699de36bd3d689d.html)
    + 最好还是div模拟比较方便
- 外边距合并
- 用CSS制作三角
## 遇到的问题
- 如果把body定宽居中，那么大背景图不能顶满浏览器放进去
    + 解决办法暂时参照ofo官网使用column纵宽控制div宽度
- 设置字体时遇到疑问，是应该按照单个class进行设置还是每个字体分别进行设置？
    + 暂时采用了分裂时方法字体颜色使用class，字体大小和字体用选择器(主要有些父元素设置字体没用，一个一个的超麻烦)
    + 但实际使用中发现设计的都是有规律的，大部分都可以用语义化来解决，h3标签和p标签的固定设置基本上可以覆盖大部分内容
- 最后四个图标不用awesome库的话只能用图了，最后还是引入了库
# task8
## 任务难点
- 让网格间保持距离，即列间空白
    + bootstrap讲解布局页面采用的方法(布局)[https://bootstrap.ninghao.net/scaffolding.html]
        * 元素定宽，使用margin
        * bootstrap本身也是采用pading的方法
    + 由于修改了box-sizing,padding被计入，所以使用padding控制间距
    + CSS官方网格布局(网格)[https://www.w3cplus.com/css3/line-base-placement-layout.html]

