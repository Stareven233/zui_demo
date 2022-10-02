let cacheData = null
const queryRegex = /\s?(&{2}|\|{2})\s?/g

// const s = 'sdf ||fe &&fe412 = 12 && vw||f412'
// let res = s.split(queryRegex)
// res = res.map((v, idx, arr) => {
//   if(idx & 1 === 1) {
//     return v
//   }
//   return 'v.' + v.replace(' = ', ' === ')
// })
// console.log(res)
// const dg = $('#myDataGrid').data('zui.datagrid')
const updateData = (d, selector='#myDataGrid') => {
  const dg = $(selector).data('zui.datagrid')
  dg.dataSource.data = d
  // dg.dataSource.array = d
  dg.renderData()
}

const bindSearchBar = () => {
  const inputBar = document.querySelector('#inputSearch')
  document.querySelector('#searchbox > .search-clear-btn').addEventListener('click', e => {
    inputBar.value = ''
  })

  inputBar.addEventListener('change', e => {
    // cacheData.map(v => {v.id = 233})
    if(inputBar.value === '') {
      updateData(cacheData)
      return
    }

    const queryArr = inputBar.value.split(queryRegex).map((v, idx, arr) => {
      if(idx & 1 === 1) {
        return v
        // 逻辑运算符不动
      }
      const inS = v.split(/\sin\s/, 2)
      if(inS.length === 2) {
        return `v.${inS[1]}.includes(${inS[0]})`
      }
      return 'v.' + v.replace(/\s?=\s?/, '===')
    })

    // console.log('op :>> ', queryArr.join(' '))
    // '实' in name || adminId < 3
    updateData(cacheData.filter(eval(`v => {
      return ${queryArr.join(' ')}
    }`)))
    // 重新渲染数据，配合cache，不会触发remote get
  })
}

const baseCols = [
  { name: 'id', label: 'ID(id)', width: 130 },
  {
    name: 'operation',
    label: '操作(operation)',
    html: true,
    // 值转换器仅仅影响当前列
    valueOperator: {
      getter: function (dataValue, cell, dataGrid) {
        return `
          <button class='btn-alter btn btn-sm btn-info'>修改</button> 
          <button class='btn-del btn btn-sm btn-danger'>删除</button> 
          <button class='btn-disable btn btn-sm style="background-color:gray;"'>禁用</button> 
        `
      }
    }
  },
]

const initCols = name => {
  switch (name) {
    case 'outlet':
      return [
        { name: 'name', label: '网点名(name)', width: 200 },
        { name: 'adminId', label: '网点管理员ID(adminId)', width: 180 },
        ...baseCols,
      ]

    case 'user':
      return [
        { name: 'name', label: '用户名(name)', width: 200 },
        { name: 'IDCard', label: '身份证号(IDCard)', width: 280 },
        { name: 'phone', label: '手机号(phone)', width: 280 },
        ...baseCols,
      ]

    case 'carrier':
      return [
        { name: 'name', label: '姓名(name)', width: 200 },
        { name: 'phone', label: '手机号(phone)', width: 280 },
        ...baseCols,
      ]
  
    default:
      break
  }
}
