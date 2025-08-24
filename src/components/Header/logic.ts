import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Хук для управления мобильным меню в Header
 * Автоматически закрывает меню при изменении маршрута
 * Поддерживает закрытие по клавише Escape и свайпу
 */
export function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const touchStartY = useRef<number | null>(null)
  const touchEndY = useRef<number | null>(null)

  // Закрываем мобильное меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Обработка клавиши Escape для закрытия меню
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Блокируем скролл body при открытом мобильном меню
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      // Восстанавливаем скролл body
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Обработка свайпа для закрытия мобильного меню
  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY
    }

    const handleTouchMove = (event: TouchEvent) => {
      touchEndY.current = event.touches[0].clientY
    }

    const handleTouchEnd = () => {
      if (touchStartY.current && touchEndY.current && isMenuOpen) {
        const diffY = touchStartY.current - touchEndY.current

        // Если свайп вверх больше 50px, закрываем меню
        if (diffY > 50) {
          setIsMenuOpen(false)
        }
      }

      touchStartY.current = null
      touchEndY.current = null
    }

    if (isMenuOpen) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true })
      document.addEventListener('touchmove', handleTouchMove, { passive: true })
      document.addEventListener('touchend', handleTouchEnd, { passive: true })
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isMenuOpen])

  // Функция для закрытия мобильного меню
  const closeMobileMenu = () => {
    setIsMenuOpen(false)
  }

  // Функция для переключения состояния меню
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return {
    isMenuOpen,
    closeMobileMenu,
    toggleMobileMenu,
  }
}
