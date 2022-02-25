import { ref } from 'vue';

export default function useAlert(statingVisibility = false) {
  const alertIsVisible = ref(statingVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }
  
  return [
    alertIsVisible,
    showAlert,
    hideAlert
  ];
}
