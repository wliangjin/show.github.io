import { ref, onMounted, onUnmounted } from 'vue';

export function useDialog(initialVisible = false) {
  const visible = ref(initialVisible);

  const show = () => {
    visible.value = true;
    document.body.style.overflow = 'hidden';
  };

  const hide = () => {
    visible.value = false;
    document.body.style.overflow = '';
  };

  const toggle = () => {
    visible.value = !visible.value;
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && visible.value) {
      hide();
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
  });

  return {
    visible,
    show,
    hide,
    toggle
  };
}