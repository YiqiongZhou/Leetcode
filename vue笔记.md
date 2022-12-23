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

11.插槽：
预留一个位置（预留个坑位，再填坑）
（也是父子组件通信的一种方式，让父组件可以向子组件指定位置插入html结构） 
具名插槽：有名字的插槽，当存在多个插槽的时候，给插槽一个名字，使用的时候就可以各自对应起来

作用域插槽：  数据在组件自身，但DOM结构由组件的使用者定义（重点把组件里的数据传出来）
https://blog.csdn.net/z12845464/article/details/122167396

12.vuex


13. 节流与防抖
防抖：（每次都是重新开始）连续触发事件，但在设定的一段时间内只执行最后一次
应用场景：文本编辑器实时保存 （过一段时间再保存）
实现思路：使用定时器，每次触发前清除掉之前的定时器

节流：（不会打断）固定时间内，连续触发事件，只执行一次
应用场景：高频事件：快速点击、鼠标滑动、resize、下拉刷新 
实现思路：使用定时器，等之前的定时器执行完毕，再开始一个新的定时器。


14.原型和原型链
每个类都有原型prototype属性（显式原型），称之为原型，也或者叫原型对象
（里面会存一些属性或方法，给实例对象共享使用）
原型链：对象都有_proto_属性（隐式原型），这个属性指向他的原型对象，原型对象也是对象，也有_proto_属性，
也会指向他自己的原型对象。
这样一层层的链式结构称为原型链，最顶层找不到就会返回null

原型的作用：
1.数据共享 节约内存内存空间
2.实现继承


15.promise
调用的时候then 对应revolve（fullfiled） catch 对应reject（rejected）
finally 不管是then还是catch 都会执行finally

new Promise（（revolve，reject）={

    if(){
        revolve(""是then的参数)
    }

})
promise的三种状态：pendging、fulfilled、rejected
Promise 是异步编程的一种解决方案：从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。

.async await是基于Promise实现的，可以说是改良版的Promise，它不能用于普通的回调函数。
错误用try catch捕获

16.多个组件的通信


17.vuex
 
18.router
router 是路由器，route是路由
vue-router： 插件库，专门来实现单页面应用
为了实现单页面应用，路径和对应的组件的切换
一个路由就是一组映射关系：一个路径（key）对应一个组件(value)


19.单页面应用（SPA）
整个应用只有一个完整的页面（index.html)
点击页面中的导航链接，不会刷新页面 ，只会做页面的局部更新（只是展示不同的组件）
页面的变化是利用路由机制实现 HTML 内容的变换，

优点：减少抖动
缺点：初次加载耗时多
不能使用浏览器的前进后退功能，由于单页应用在一个页面中显示所有的内容，所以，无法前进后退
不利于搜索引擎检索：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势

首屏加载慢解决方案：
https://blog.csdn.net/weixin_44475093/article/details/110675962
1.动态加载路由，只有在解析给定的路由时，才会加载对应的路由组件
routes:[ 
    path: 'Blogs',
    name: 'ShowBlogs',
    component: () => import('./components/ShowBlogs.vue')
]
2.UI框架按需加载
3.用缓存


20.Router
router-link  背后是个a标签，实现路由的切换
router-view 类似插槽，指定展示位置

pages 文件夹 路由组件（不会出现<myComponent></myComponent>,通过router制定
components 一般组件

多级路由（嵌套路由）。路由下的children 路径下还有路径
query：url带参数访问：/home?id=1&title=你好哇
拿到参数  this.$route.query
:to="`/home?id=${m.id}&=title=${m.title}`"
 http://t.zoukankan.com/liao123-p-14854116.html
 js模板字符串
${}是占位符 英文模式下+数字键盘1左边的键。 就可以直接打出反引号` 
可以写成字符串或对象形式
:to={
    path:"", 或者  name：""(可以减少很多路径)
    query:{
        id:"666",
        title:""
    }
}
params： /home/1/你好哇 对象只能用name不能用path
(配置路由)要在injex.js 的path里面添加占位符 /home/:id/:title 


21.ajax axios

22.vue响应式（数据双向绑定）：数据变了，页面也变了
vue2的重点在于Object.defineProperty
在一个对象上新增或修改一个属性
Object.defineproperty(obj, prop, desc)
obj :  第一个参数就是要在哪个对象身上添加或者修改属性
prop : 第二个参数就是添加或修改的属性名
desc ： 配置项，一般是一个对象（有自定义属性、还有默认的get set方法、enumerable等

 let  person = {
        name:"码农",
        age: 18
    }
Object.defineProperty(person,'sex',{
    value:"男"
})
console.log(person)

Vue2的响应式：（如果是对象主要通过Object.defineProperty中的set来监听实现，如果是数组，只能通过push等方法监听改变） 
如果直接新增一个属性，或者数组里直接通过索引赋值（但原地变更数组的几个方法可以使数组的变化被响应到，
比如push,pop等，或者数组直接赋值，也可以），响应式的set并不会加进去。
可以通过Vue.set()增加响应式来解决。或vm.$set,但不能给vm的根数据对象添加属性

Vue3的响应式：
vue2中存在一些问题： 新增属性、删除属性不会自动更新；直接通过下标 修改数组，不会更新
Vue3不存在这些问题
vue是用了proxy代替object.defineProperty
new Proxy(person,{
    //读取某个属性时调用
    get(target,propNm)
    //修改或追加某个属性时调用，
    set(target,propNm,value)
    //删除某个属性时调用
    defineProperty(target,propNm )
})
reflect :对被代理对象的属性进行操作


单向绑定（v-bind）：是能从data流向页面
双向绑定（v-model）：不仅能从data流向页面，还能从页面流向data，一般用在表单类元素上


vue2:
defineProperty 劫持监听所有data中的所有属性（递归+遍历+setter）
官方：每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。 

mvvm 双向绑定，采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter、getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
 
需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter
这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
在自身实例化时往属性订阅器(dep，也就是依赖)里面添加订阅者
自身必须有一个 update() 方法
待属性变动 dep.notify() 通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。

https://www.lmonkey.com/t/mLK2pemy3



22.splice数组
splice 方法用于数组或伪数组，根据参数个数和形式的不同，可以在数组中删除指定元素或者插入元素、替换元素

23.闭包；
内存泄漏：用不到（访问不到）的变量，依然占据着内存空间，不能再次被利用起来

    























