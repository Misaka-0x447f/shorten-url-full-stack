&copy; 2015-2017 「燎原」, All Rights Reserved.
 
------------------

## 编程能力测试 - Fullstack

### 问题：
请设计并实现一个简单的短网址生成器。

### 描述：
网址（URL）是互联网体系中极其重要的一种资源。较短较专业的网址既方便记忆、方便输入，又能无形中体现网站/产品的靠谱程度。

为了获得较短的网址，人们常使用专门的短网址生成器，将较长的原网址转化成较短的短网址。

例如，Google提供的短网址服务[http://goo.gl/](http://goo.gl/)既被Google自身广泛使用，也被很多其他的互联网用户使用。在Google短网址服务中将[http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro](http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro)缩短，获得[http://goo.gl/GvgK0e](http://goo.gl/GvgK0e)。当用户访问[http://goo.gl/GvgK0e](http://goo.gl/GvgK0e)这个网址时，服务器将返回一个HTTP 301，将用户重定向到原网址。

### 要求：
1. 设计并使用Node.js和AngularJS实现一个短网址生成器，其中用Node.js建立一个RESTful API，前端用AngularJS调用。

2. 实现这两个功能：
   * 将任意原网址转化为路径部分只包含5位数字+字母的短网址
   * 访问短网址时，重定向用户到原网址
3. 满足以下条件：
   * 自行编写网址转化规则。
   * 任意一个原网址在被重复转化时，返回同一个短网址。不同的原网址返回不同的短网址。
   * 使用MongoDB作为数据库。

### 提交：
1. 关于设计思路的简单描述。
2. 简单的数据库Schema文档、API文档。
3. 关于如何运行、测试的描述。
4. 实际部署一份实例，提交网址。
