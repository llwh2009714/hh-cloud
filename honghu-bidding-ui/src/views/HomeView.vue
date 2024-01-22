<template>
  <div>
    <HomeHeader></HomeHeader>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <MoreList></MoreList>
    <BiddingList></BiddingList>
    <HomeFloor></HomeFloor>
  </div>
</template>


<script>
import HomeHeader from "@/components/home/HomeHeader.vue";
import TypeNav from "@/components/home/TypeNav.vue";
import ListContainer from "@/components/home/ListContainer.vue";
import MoreList from "@/components/home/MoreList.vue";
import BiddingList from "@/components/home/BiddingList.vue";
import HomeFloor from "@/components/home/HomeFloor.vue";

export default {
  name: 'homeView',
  components: {
    HomeHeader,
    TypeNav,
    ListContainer,
    MoreList,
    BiddingList,
    HomeFloor
  }
}
</script>
