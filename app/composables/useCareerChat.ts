export function useCareerChat() {
  const isOpen = useState('career-chat:open', () => false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return { close, isOpen, open }
}
