<template>
  <div>
    <HomeHeader></HomeHeader>
    <TypeNav></TypeNav>
    <BsicInfo></BsicInfo>
  </div>
</template>
<script>
import HomeHeader from "@/components/home/HomeHeader.vue";
import TypeNav from "@/components/home/TypeNav.vue";
import BsicInfo from "@/components/detail/BsicInfo.vue";
export default {
  name: 'NoticeDetail',
  components:{
    HomeHeader,
    TypeNav,
    BsicInfo
  }
}
</script>
