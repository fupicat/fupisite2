<template>
  <div class="fupi-load">
    <div id="btn1" class="btn"></div>
    <div id="btn2" class="btn"></div>
    <div id="btn3" class="btn"></div>
    <div id="btn4" class="btn"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fupi-load {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
}

.fupi-load .btn {
  position: absolute;
  border-radius: 99px;
  height: 10px;
  width: 10px;
  background-color: var(--purple-nav);
}

.dark .fupi-load .btn {
  background-color: var(--purple-hovdark);
}

.fupi-load #btn1 {
  animation-name: fupi-load1;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  
  transform: translate(0px, -9px);
}
.fupi-load #btn2 {
  animation-name: fupi-load2;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  
  transform: translate(9px, 0px);
}
.fupi-load #btn3 {
  animation-name: fupi-load3;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  
  transform: translate(0px, 9px);
}
.fupi-load #btn4 {
  animation-name: fupi-load4;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  
  transform: translate(-9px, 0px);
}

@keyframes fupi-load1 {
  0% {
    transform: translate(0px, -9px);
  }
  
  100% {
    transform: translate(-9px, 0px);
  }
}

@keyframes fupi-load2 {
  0% {
    transform: translate(9px, 0px);
  }
  
  100% {
    transform: translate(0px, -9px);
  }
}

@keyframes fupi-load3 {
  0% {
    transform: translate(0px, 9px);
  }
  
  100% {
    transform: translate(9px, 0px);
  }
}

@keyframes fupi-load4 {
  0% {
    transform: translate(-9px, 0px);
  }
  
  100% {
    transform: translate(0px, 9px);
  }
}
</style>