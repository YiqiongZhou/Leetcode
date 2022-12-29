### 2 个 div 水平居中

margin:auto
.father{
width: 500px;
height: 300px;
background: pink;
}

.son{
margin:auto;
width:300px;
background: red;
}

### Id 和 class 的区别
id 在整片文档中是唯一的

### 盒模型
盒子模型是网页布局的基础，将页面中所有元素都看作是一个盒


### 行内元素和块级元素
块级元素：
div、p、h1~h6、ul、ol、dl、li、dd、table、hr、blockquote、address、table、menu、pre，HTML5新增的header、section、aside、footer等
1.块级元素各占据一行，垂直方向排列。总是从新的一行开始
2.块级元素可以设置width、height、padding、margin。高度、宽度都是可控的，默认宽度为父元素的宽度
3.块级元素可以包含行内元素和块级元素，但行内元素不能包含块级元素


行内元素
b strong
1.和其他元素都在一行
2.不可设置宽高
3.宽高就是内容的宽高，依靠自身字体大小和图形支撑结构的，不可以改变
5.行内元素的paddding可以设置(上下左右都可以)
6.margin只能够设置水平方向的边距，即：margin-left和margin-right，设置margin-top和margin-bottom无效


行内块级元素
span a img textarea
综合块级元素与行内元素的特性，可设宽高（默认是内容宽高），也可以设置内外边距
### CSS 应用样式

内部样式：在 HTML 页面的 <head> 部分内的 <style> 元素中进行定义：
<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: maroon;
  margin-left: 40px;
} 
</style>
</head>
<body>
 
<h1>这是一个标题</h1>

</body>
</html>
行内样式/内联样式：只对设置style属性的标签起作用 <h2 style="color:red;">WEB前段工程师</h2>
外部样式：使用单独的 .CSS 文件定义，然后在页面中使用 link标签 或 @import指令 引入
<link rel="stylesheet" type="text/css" href="CSS样式文件的路径">
<style>
	@import "CSS样式文件路径";
	@import url(CSS样式文件路径);
</style>

如果三个样式同时作用一个元素上(注意是同一个元素)行内元素优先级最大，内部样式大于外部样式，简单而言就近原则。但如果在某个样式中加上!important 则优先级最高。
！important示例
.button {
  background-color: #8c8c8c !important;
  color: white !important;
  padding: 5px !important;
  border: 1px solid black !important;
}


### 选择器
https://blog.csdn.net/qq_46423017/article/details/126920774
在 CSS 中，用于选择需要添加样式的元素。选择器主要是用来确定 html 的树形结构中的 DOM 元素节点。
一、基本选择器： 优先级：id > class > 标签 
1.标签选择器 通过标签名选择一类元素
p{
font-style: italic;
}
span{
font-size: 60px;
}
2.id 选择器：通过 id 属性选择一个元素（id 选择器的结构：#id 属性名{css 语句}） 3.类选择器：通过 class 属性选择一类元素（类选择器的结构：.class 属性名{css 语句}）

二、层次选择器 1.后代选择器
body 后面所有的 p（不管差几辈）（中间只有空格）
/_ 后代选择器_/
body p{
background: red;
}

2.子选择器
只作用于儿子，只有 p 第一代才有，后面的都没有
/_ 子选择器_/
body>p{
background: #517851;
} 3.相邻兄弟选择器
class="active"的下一个
/_ 相邻兄弟选择器：只有一个，相邻（向下）_/
.active + p {
background: green;
} 4.通用选择器
/_ 通用兄弟选择器，当前选中元素的向下的所有兄弟元素_/
.active~p{
background: brown;
}

三 伪类选择器（最大的特点是用冒号：表示）
根据不同的状态显示不同的样式
:link 未看访问的链接
:visited 已访问的链接
:hover 鼠标悬浮到链接上
:active 选定的链接(点击的瞬间)，被激活

四 属性选择器（根据元素的属性选择一类元素）
[写在这里面] 前面可以带标签也可以不带 a[]
属性名，属性名=属性值（正则）
= 绝对等于
\*= 包含这个元素
^= 以这个开头
$= 以这个结尾

        /*存在id属性的元素，  a[]{}*/

        /*a[id]{*/
        /*background: #517851;*/
        /*}*/

        /*id=first的元素*/
        /*a[id=first] {*/
        /*    background: bisque;*/
        /*}*/

        /*    class中有links的元素   */
        /*a[class*="links"] {*/
        /*    background: yellowgreen;*/
        /*}*/

        /*    选中href中以http开头的元素*/
        /*a[href^=http] {*/
        /*    background: yellow;*/

五 组合选择器（有逗号）
多个选择器共用一个样式
选择器 1，选择器 2，选择器 n{
属性:值；
}

复合选择器（中间没有空格，也没有逗号） 必须同时满足两个条件才能应用样式
		h1.aaa{
			color:red;
		}


### CSS属性取值
px像素 pixel
%百分比，相对父标签字体大小的百分比
em倍数，相对于父标签字体大小的倍数

### CSS雪碧图



