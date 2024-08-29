import { ref } from 'vue'

export function usePlanData() {
  const activeButton = ref('anual')

  const annualPlans = [
    {
      id: 1,
      title: 'Grátis',
      price: 'R$ 0,00',
      checkbox: '/assets/checked.svg',
      options: [
        { label: '10 links por mês', checked: true },
        { label: '2 QRCodes', checked: true },
        { label: 'Cliques limitados', checked: true },
        { label: '7 dias de estatísticas', checked: true },
        { label: 'Domínios exclusivos', checked: false },
        { label: 'Remoção de anúncios', checked: false }
      ]
    },
    {
      id: 2,
      title: 'Básico',
      price: 'R$ 27,00',
      checkbox: '/assets/checked.svg',
      options: [
        { label: '100 links por mês', checked: true },
        { label: '20 QRCodes', checked: true },
        { label: 'Cliques limitados', checked: true },
        { label: '30 dias de estatísticas', checked: true },
        { label: 'Remoção de anúncios', checked: true },
        { label: 'Domínios exclusivos', checked: false }
      ]
    },
    {
      id: 3,
      title: 'Profissional',
      price: 'R$ 98,00',
      checkbox: '/assets/checked.svg',
      options: [
        { label: '500 links por mês', checked: true },
        { label: '30 QRCodes', checked: true },
        { label: 'Cliques ilimitados', checked: true },
        { label: '6 meses de estatísticas', checked: true },
        { label: 'Domínios exclusivos', checked: true },
        { label: 'Remoção de anúncios', checked: true }
      ]
    },
    {
      id: 4,
      title: 'Premium',
      price: 'R$ 673,00',
      checkbox: '/assets/checked.svg',
      options: [
        { label: '3000 links por mês', checked: true },
        { label: '300 QRCodes', checked: true },
        { label: 'Cliques ilimitados', checked: true },
        { label: '1 ano de estatísticas', checked: true },
        { label: 'Domínios exclusivos', checked: true },
        { label: 'Remoção de anúncios', checked: true }
      ]
    }
  ]

  const monthlyPlans = [
    {
      id: 1,
      title: 'Grátis',
      price: 'R$ 0,00',
      checkbox: '/assets/checked.svg',
      options: [
        { label: '10 links por mês', checked: true },
        { label: '2 QRCodes', checked: true },
        { label: 'Cliques limitados', checked: true },
        { label: '7 dias de estatísticas', checked: true },
        { label: 'Domínios exclusivos', checked: false },
        { label: 'Remoção de anúncios', checked: false }
      ]
    },
    {
      id: 2,
      title: 'Básico',
      price: 'R$ 47,00',
      checkbox: '/assets/checked.svg',
      options: [
        { label: '100 links por mês', checked: true },
        { label: '20 QRCodes', checked: true },
        { label: 'Cliques limitados', checked: true },
        { label: '30 dias de estatísticas', checked: true },
        { label: 'Remoção de anúncios', checked: true },
        { label: 'Domínios exclusivos', checked: false }
      ]
    },
    {
      id: 3,
      title: 'Profissional',
      price: 'R$ 220,00',
      checkbox: '/assets/checked.svg',
      options: [
        { label: '500 links por mês', checked: true },
        { label: '30 QRCodes', checked: true },
        { label: 'Cliques ilimitados', checked: true },
        { label: '6 meses de estatísticas', checked: true },
        { label: 'Domínios exclusivos', checked: true },
        { label: 'Remoção de anúncios', checked: true }
      ]
    },
    {
      id: 4,
      title: 'Premium',
      price: 'R$ 780,00',
      checkbox: '/assets/checked.svg',
      options: [
        { label: '3000 links por mês', checked: true },
        { label: '300 QRCodes', checked: true },
        { label: 'Cliques ilimitados', checked: true },
        { label: '1 ano de estatísticas', checked: true },
        { label: 'Domínios exclusivos', checked: true },
        { label: 'Remoção de anúncios', checked: true }
      ]
    }
  ]

  const cards = ref(annualPlans)

  function updatePlans() {
    cards.value = activeButton.value === 'anual' ? annualPlans : monthlyPlans
  }

  function toggleActive(button: any) {
    activeButton.value = button
    updatePlans()
  }

  return {
    activeButton,
    toggleActive,
    cards
  }
}
