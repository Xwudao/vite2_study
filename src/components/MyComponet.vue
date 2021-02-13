<template>
    <div>
        <p>
            username: {{ username }}
        </p>
        <p>
            token: {{ token }}
        </p>
        <el-button size="small" type="primary" @click="changeUser">改变</el-button>
        <el-button size="small" type="success" @click="showMsg">发送消息</el-button>
        <el-divider/>

        <el-alert title="nihao woshi"/>
        <el-divider/>
        <h4>Router:</h4>
        <el-button type="warning" size="small" @click="toAdmin">到Admin</el-button>
        <el-button type="info" size="small" @click="getRouteInfo">获取信息</el-button>
        <router-view/>
        <!--        <el-empty description="这里空空如也"></el-empty>-->
    </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {ElMessage, ElNotification} from "element-plus";
import {useLink, useRoute, useRouter} from "vue-router";

export default {
    name: "MyComponent",
    setup(props) {
        const store = useStore()
        console.log(store.state);

        const username = computed(() => store.state.userInfo.username)
        const token = computed(() => store.state.userInfo.token)

        const changeUser = () => {
            store.commit('changeUserInfo', {username: 'hello', token: '123413413'})
        }
        const showMsg = () => {
            ElMessage.success('hello world')
            // ElNotification.fa
            // ElMessage.warning()
            // ElMessage.error('hello world')
            // ElMessage.info('hello world')
        }
        const router = useRouter()
        const {route, href, isActive, isExactActive, navigate} = useLink(props)
        const info = useRoute()
        const getRouteInfo = () => {
            console.log(info.name);
            console.log(info.fullPath);
            console.log(info.hash);
        }
        const toAdmin = () => {
            router.push({name: 'Admin'})
            // console.log(href.value)
            // console.log(isActive)
            // console.log(isExactActive)
            // console.log(navigate)
        }
        return {
            username,
            changeUser, showMsg, toAdmin, getRouteInfo,
            token
        }
    }
}
</script>
<style scoped lang="scss">
.el-calendar__header{
    width: 100px;
    height: 100px;

}
</style>
