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

