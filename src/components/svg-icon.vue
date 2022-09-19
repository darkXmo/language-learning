<script setup lang="ts">
/** 前缀(基本用不上)
 * 图标名(图标需放在public/svg文件夹,名称不包括后缀名，不能使用包含'-'分隔符)
 * 颜色
 * 高度
 * 宽度*/
const props = defineProps<{
  prefix: string;
  name: string;
  color?: string;
  height?: string;
  width?: string;
  size?: string;
}>();
const svgColor = toRef(props, "color");
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const width = props.width ?? props.size ?? "24px";
const height = props.height ?? props.size ?? "24px";
</script>

<template>
  <svg aria-hidden="true" :width="width" :height="height">
    <use :href="symbolId" :fill="svgColor" />
  </svg>
</template>

<style scoped lang="scss"></style>
