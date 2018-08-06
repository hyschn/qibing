# Qibing

使用Angular开发的静态博客生成器。

### 使用方法：

#### 1.创建博客站点

* 首先你需要注册一个[GitHub](https://github.com/)账号
* 然后创建一个repository
* 下载本项目的[release](https://github.com/hyschn/qibing/releases/latest)，将解压后的所有文件放到你的repository下面，并push到GitHub
* 在你的GitHub repository下点击Settings，找到下图的位置，source选择master branch，点击Save，之后会出现“Your site is published at ***”带有绿色背景的提示，***即是你的博客的地址.

![1](https://raw.githubusercontent.com/hyschn/picturesForMarkDown/master/20180806182724.png)
访问你的博客站点，大概长这样：

![1](https://raw.githubusercontent.com/hyschn/picturesForMarkDown/master/20180806184345.png)

#### 2.修改配置，使其成为你自己的博客

* 打开项目下的assets文件夹，找到qibing.json，一开始大概是这个样子的：

```json
{
    "home": {
        "top": { "topic": "序", "article": "孙子序" },
        "blogs": [
            { "topic": "战略运筹", "article": "作战篇" }, { "topic": "作战指挥", "article": "兵势篇" }
        ]
    },
    "blog": [
        { "topic": "序", "articles": ["孙子序"] },
        { "topic": "战略运筹", "articles": ["始计篇", "作战篇", "谋攻篇"] },
        { "topic": "作战指挥", "articles": ["军形篇", "兵势篇", "虚实篇"] },
        { "topic": "战场机变", "articles": ["军争篇", "九变篇", "行军篇"] },
        { "topic": "军事地理", "articles": ["地形篇", "九地篇"] },
        { "topic": "特殊战法", "articles": ["火攻篇", "用间篇"] }
    ],
    "profile": "profile"
}
```

home是主页的配置，top表示首部的文章，blogs是下面的若干个文章，topic是文章的专题，对应assets下面文件夹的名字，article是文章的文件名（不包含文件类型）；
blog是博客页的配置，这里有若干个专题，每个专题下面有若干个文章，key的含义同上；
profile是个人介绍页的配置，一般不需要修改。

修改个人介绍，只需要编辑assets下面的profile.md即可。
添加一个专题，则需要在assets下面创建一个文件夹，文件夹名字就是专题名，然后在qibing.json中编辑blog业的配置，在bolg数组里加一个json{topic为专题名，articles为专题下文件名数组},添加一篇文章则在对应的专题文件夹下新建一个.md文件，并把文件名（不包括文件类型）加入到对应专题的articles数组里面。

将你的修改push到GitHub，稍等片刻，你的博客站点就会有相应的改变。

注意：需要懂git操作，能看懂json配置，了解简单的markdown语法