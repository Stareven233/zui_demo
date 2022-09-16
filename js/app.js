const defaultFormVal = () => {
  const rows = document.querySelectorAll('.panel-body .form-control')
  const defaultVal = ['亼朩立', '4341hfh343@outlook.com', 1414141, 6532]
  for (let i = 0; i < rows.length; i++) {
      rows[i].value = defaultVal[i]
  }
  const btn = document.querySelector(".panel-body .login-btn")
  btn.onclick = e => {
      let form_str = '登录成功！\n'
      rows.forEach(row => {
          form_str += row.value.toString() + '\n'
      })
      alert(form_str)
      // window.location.href = '../main.html'
  }
}

const freshValidCode = () => {
  const valideCodeImg = `https://m.fjcyl.com/validateCode?${Math.random()}`
  const validImg = document.querySelector('.panel-body .form-group img.validCode')
  validImg.src = valideCodeImg
  validImg.hidden = false
}

const languagesMap = {
  C: {
    pron: 'c',
    rank: 2,
    time: 1972,
    use: '写操作系统内核、驱动；高性能的web服务器如nginx；常见数据库如redis、sqlite；常见高级语言解释器如python、ruby；生活中各种智能设备物联网设备中运行的操作系统和应用，如家用路由器，摄像头',
    comment: '难但是强',
  },
  Cpp: {
    pron: 'c plus plus',
    rank: 4,
    time: 1900,
    use: '游戏引擎',
    comment: '较难',
  },
  Python: {
    pron: 'ˈpaɪθɑːn',
    rank: 1,
    time: 1999,
    use: '网络爬虫、数据挖掘、AI、web开发',
    comment: '方便',
  },
  Javascript: {
    pron: 'ˈdʒɑvəˌskrɪpt',
    rank: 7,
    time: 1995,
    use: 'web开发',
    comment: '很随便的语言',
  },
  Java: {
    pron: 'ˈdʒɑvə',
    rank: 4,
    time: 1995,
    use: '网络编程',
    comment: '烂',
  },
  Assembly: {
    pron: 'əˈsembli',
    rank: 8,
    time: '1960?',
    use: '用于电子计算机、微处理器、微控制器或其他可编程器件的低级语言，亦称为符号语言',
    comment: '很难',
  },
  Go: {
    pron: '12',
    rank: 5,
    time: 2009,
    use: '高性能分布式系统',
    comment: '未来可期',
  },
  Lua: {
    pron: 'ˈluə',
    rank: 29,
    time: 1993,
    use: '游戏脚本',
    comment: '轻量小巧',
  },
  PHP: {
    pron: 'piːeɪtʃˈpiː',
    rank: 10,
    time: 1994,
    use: 'Web开发',
    comment: '不明觉厉',
  },
}
let lastActiveLang = null
let lastActiveMenu = null

const initNavBar = () => {
  const navItems = document.querySelectorAll('.main-box .navbar-nav .nav-item')
  navItems.forEach(item => {
    item.addEventListener('click', e => {
      lastActiveLang?.classList.remove('active')
      lastActiveMenu?.classList.remove('active')
      item.classList.add('active')
      lastActiveLang = item
      document.querySelector('.main-box .content').innerText = '← 选择感兴趣的方面'
    })
  })
}

const initSideMenu = () => {
  const sideMenuItems = document.querySelectorAll(".main-box .sidemenu .language-list > li")
  sideMenuItems.forEach(item => {
    item.addEventListener('click', e => {
      lastActiveMenu?.classList.remove('active')
      if(lastActiveLang === null) {
        return
      }
      document.querySelector('.main-box .content').innerHTML = languagesMap[lastActiveLang.innerText][item.dataset.name]
      item.classList.add('active')
      lastActiveMenu = item
    })
  })
}

(function() {
  if(window.location.pathname.startsWith('/login')) {
    defaultFormVal()
    freshValidCode()
    document.querySelector('.panel-body .form-group img.validCode').parentElement.addEventListener('click', e => {
      freshValidCode()
    })
  }
  else if(window.location.pathname.startsWith('/main')) {
    initNavBar()
    initSideMenu()
  }
})()


