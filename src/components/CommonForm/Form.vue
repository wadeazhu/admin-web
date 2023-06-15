<template>
  <a-form ref="formElRef" :model="modelValue" v-bind="formAttr" @finish="onFinish">
    <template v-for="schema in schemas" :key="schema.field">
      <template v-if="!schema.slot && !schema.read">
      </template>
    </template>
  </a-form>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import { FormAttrType, FormSchemaType } from '@/components/CommonForm/types'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  },
  formAttr: {
    type: Object as PropType<FormAttrType>,
    default: () => {}
  },
  schemas: {
    type: Array as PropType<Array<FormSchemaType>>,
    default: () => []
  }
})

const emits = defineEmits(['update:modelValue', 'submit', 'getInstance'])

const formElRef = ref<any>(null)

function onFinish() {
  emits('submit', props.modelValue)
}
</script>

