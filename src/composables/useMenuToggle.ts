import { ref } from 'vue'

export function useMenuToggle() {
  const open = ref(false)

  const menuOpen = () => {
    open.value = !open.value
  }

  return {
    open,
    menuOpen
  }
}
