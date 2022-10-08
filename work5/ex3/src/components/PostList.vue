<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import request from '../assets/requests'

defineProps<{
  post: string
}>()

// 得抽象到专门文件中
interface User {
  id: number,
  account: string,
  password: string,
  time: string,
  state: number,
}

let modifyItem = {
  id: 0,
  account: "account",
}
let reactiveObj = reactive({
  count: 0,
  form: {
    id: 0,
    account: "account",
    password: "pwd",
    time: '2022-09-22 00:11:22',
    state: 0,
  }
})
let tableData: User[] = reactive([])

const requestTableData = async () => {
  let resp
  try {
    resp = await request.get('/user_list.json')
  } catch (error) {
    console.error(error)
    return
  }
  // console.log('resp :>> ', resp)
  const data = resp.status===200? resp.data.data: []
  tableData.push(...data)
}

const insertScript = (name: string) => {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `/js/${name}`
  document.body.appendChild(script)
}

onMounted(() => {
  console.log('the component is now mounted.')
  insertScript('jquery.min.js')
  insertScript('zui.min.js')
  requestTableData()
})

const add = () => {
  reactiveObj.form.id = -1
  reactiveObj.form.account = "account"
}

const submit = () => {
  if (reactiveObj.form.id === -1) {
    reactiveObj.form.id = reactiveObj.count
    reactiveObj.count++
    tableData.push({ ...reactiveObj.form })
  }
  else {
    modifyItem.account = reactiveObj.form.account
    // form 绑定input，填写后点保存form内容就会变，
    // 此时赋值给modifyItem(相当于存了原item的引用)
  }
  // eslint-disable-next-line no-undef
  $('#myModal').modal('hide')
}

const modify = (item: User) => {
  // nt
  modifyItem = item
  reactiveObj.form = { ...item }
}

const deleteItem = (index: number) => {
  tableData.splice(index, 1)
}
</script>

<template>
  <div class="with-padding">
    <div class="panel panel-primary">
      <div class="panel-heading">
        导航栏
      </div>
      <div class="panel-body">
        <button type="button" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#myModal"
          @click="add">增加{{post}}</button>
        <div class="modal fade" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="panel login-main">
                <div class="panel-heading">
                  添加{{post}}
                </div>
                <div class="panel-body">
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-xs-3">
                      </div>
                      <div class="col-xs-9">
                        <div class="tab-content col-xs-9">
                          <div class="tab-pane fade active in" id="tab3Content1">
                            <div class="input-group">
                              <span class="input-group-addon">账号：</span>
                              <input type="text" class="form-control" v-model="reactiveObj.form.account" placeholder="账号">
                            </div>
                            <div class="input-group">
                              <span class="input-group-addon">密码：</span>
                              <input type="text" class="reactiveObj.form-control" v-model="reactiveObj.form.password" placeholder="密码">
                            </div>
                            <button class="btn btn-block " type="button" @click="submit">增加</button>
                            <button class="btn btn-block " type="button" @click="submit">返回</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel panel-primary">
      <div class="panel-heading">
        快递员列表
      </div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th>快递员id</th>
              <th>快递员账号</th>
              <th>操作</th>
            </tr>
          </thead>
          <tr v-for="(item, index) in tableData" :key="item.id">
            <td v-html="item.id"></td>
            <td v-html="item.account"></td>
            <td><button class="btn btn-primary" @click="modify(item)" data-toggle="modal" data-target="#myModal">修改</button>
              <button class="btn btn-danger" @click="deleteItem(index)">删除</button>
              <button class="btn btn-info">启用</button>
              <button class="btn btn-warning">禁用</button>
            </td>
          </tr>
          <tfoot>
            <tr>
              <td colspan="4">
                <ul class="pager">
                  <li class="previous"><a href="your/nice/url">«</a></li>
                  <li><a href="your/nice/url">1</a></li>
                  <li class="active"><a href="your/nice/url">2</a></li>
                  <li><a href="your/nice/url">3</a></li>
                  <li><a href="your/nice/url">4</a></li>
                  <li><a href="your/nice/url">5</a></li>
                  <li class="next"><a href="your/nice/url">»</a></li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.with-padding {
  width: 1200px;
}
</style>
