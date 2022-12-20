Vue实例从创建到销毁的过程就是生命周期，既指从创建、初始化数据、编译模板（template)、挂载DOM到渲染、更新渲染、销毁等一系列过程，他主要分为8个阶段，创建前后、载入前后、更新前后、销毁前、销毁后、以及一些特殊场景的生命周期

生命周期钩子：生命周期函数，生命周期

beforeCreate：data和methods还没有初始化（实例还未创建）
created： data和methods 被初始化了（常用于异步数据获取）
beforeMount: 模板已经在内存中编辑完成了，页面中的元素还没有被替换过来（比如{{msg}}),还是之前的一些字符串。但是尚未挂载到页面当中（DOM尚未创建）
mounted:内存中的模板已经挂载到页面中，用户已经可以看到渲染好的页面了。（DOM已创建）
beforeUpdate： 更新前，可以用于获取更新前各种状态
updated：更新后所有状态已是最新
beforeDestrory： 销毁前，可以用于一些定时器或订阅的取消
destroyed： 组件已销毁


图片压缩：https://www.jb51.net/article/212682.htm
http://t.zoukankan.com/lvhw-p-8507201.html

file -》dataUrl  （通过fileREADER）
-》image-》（img src）
canvas=》 （ctx.drawImage）
 
 //to blob(压缩) canvas.toBlob(blob => resolve(blob), type, quality))
 =》file 

 //to url（压缩） canvas.toDataURL(type，quality)
 =》file


https://blog.csdn.net/weixin_44673253/article/details/127277009?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-127277009-blog-114463902.pc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-127277009-blog-114463902.pc_relevant_multi_platform_whitelistv3&utm_relevant_index=4


1.CSS属性值的计算过程
问：页面是怎么渲染出来的？
答：一个元素一个元素依次的渲染，渲染的顺序是按照页面文档的树形目录结构进行的。

2.属性值计算过程
每个元素被渲染出来的前提是，这个元素的所有属性必须有值，而元素从所有属性都没有值到所有属性都有值的过程

3.
对于页面渲染的过程，首先，先确定声明值，将无冲突的声明作为css属性值；然后将有冲突的声明进行层叠冲突，得到唯一属性值；再将前两步中仍没声明的属性，对其进行判断，若能继承父属性，则直接继承，若不能继承副属性，则直接使用默认值。

4.v-model
在表单元素（比如输入文本框、单选、多选）上创建双向数据绑定，负责监听用户的输入事件以更新数据


5.MVVM模型：
model：data
view： 模板（template）  dom
viewmodel：vue实例对象 （是data和dom的沟通的桥梁，建立连接）

6.computed 与watch

7.v-for如果不写key，会默认用index作为key
key是虚拟DOM的标识。
index作为key可能会引发的问题：如果对数组的顺序有逆序的操作，比如说（从数组顶部新增），会导致一些输入操作的DOM错乱。效率也会更低（重新生成新的DOM）
过程：当数据发生变化时，根据key来匹配dom，对于相同key的dom，如果不一样的，就会重新渲染，如果一样，就用之前已经生成的真实DOM

8.mixin  混入
把组件中的共用的配置项，比如data、methods那些抽出来，变成新的一个对象，
可以全局混入（会影响每一个之后创建的 Vue 实例）和局部混入（对象）
（当一个组件引进了混入，发生冲突时以组件数据优先，如果是生命周期钩子都有的，则是都要）

9.插件
使用方法： import后  Vue.use()，用作增强一些功能
里面有一个install，install里面可以加全局过滤器，可以有mixin等

10.nextTick：
作用于数据更新，dom发生变化后，再执行的操作，
它的作用类似setTimeout，进行执行异步的操作。













