<template>
  <section class="h-screen w-screen grid grid-cols-[15rem,1fr] grid-rows-[2rem,1fr]">
    <section class="col-start-1 row-start-1 col-span-1 row-span-2 bg-purple-200">
      Menu
    </section>
    <section class="col-start-2 row-start-1 col-span-1 row-span-1 bg-green-300">
      Top Header
    </section>

    <section class="col-start-2 row-start-2 col-span-1 row-span-1">
      <slot />
    </section>
  </section>
</template>
