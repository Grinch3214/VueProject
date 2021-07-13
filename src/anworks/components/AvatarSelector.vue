<template>
  <div class="input__file">
    <label
      for="fileNew"
      class="input__file-label"
    >
      <input
        id="fileNew"
        type="file"
        hidden
      >
      <span class="input__file-button btn btn-primary">Изменить</span>
      <feather-icon
        icon="CameraIcon"
        size="25"
        class="text-black input__file-icon"
      />
    </label>
    <span class="btn btn-outline-primary input__file-button-delete">Удалить</span>
  </div>
</template>

<script>
// import { BFormFile } from 'bootstrap-vue'

export default {
  // name: 'avatar-selector',
}
</script>

<style lang="scss" scoped>
  .input__file{
    position: relative;
    display: inline-block;
    width: 104px;
    height: 104px;
    &-label{
    width: 104px;
    height: 104px;
    border: 1px dotted #000;
    cursor: pointer;
    border-radius: 4px;
    }
    &-icon{
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%);
    }
    &-button{
      position: absolute;
      bottom: 5px;
      right: -140px;
    }
    &-button-delete{
      position: absolute;
      bottom: 5px;
      right: -260px;
    }
  }
</style>
