<template>
  <div class="lollipop-x-scrolling">
    <ul class="lollipop-x-scrolling--grids">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$gutter: 0px;

.lollipop-x-scrolling {
  // height is auto adjust by inner unit
  padding: $gutter 0;
  display: grid;
  grid-gap: $gutter 0;
  grid-template-columns: $gutter 1fr $gutter;
  align-content: start;
}

.lollipop-x-scrolling > * {
  grid-column: 2 / -2;
}

.lollipop-x-scrolling > .full {
  grid-column: 1 / -1;
}

.lollipop-x-scrolling--grids {
  display: grid;
  grid-gap: 20px;
  grid-template-rows: minmax(150px, 1fr);

  grid-auto-flow: column;
  grid-auto-columns: auto;
  justify-content: left;

  overflow-x: scroll;
  scroll-snap-type: x proximity;
  padding-bottom: calc(0.75 * $gutter);
  margin-bottom: calc(-0.25 * $gutter);

  padding: 0 20px;
}

.lollipop-x-scrolling--grids:after {
  content: '';
  width: 10px;
}

.lollipop-x-scrolling--grids > div {
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
