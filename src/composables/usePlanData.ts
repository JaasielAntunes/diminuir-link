import { ref } from 'vue'

export function usePlanData() {
  const activeButton = ref('anual')

  function toggleActive(button: any) {
    activeButton.value = button
  }

  const cards = ref([
    {
      id: 1,
      title: 'Grátis',
      price: 'R$ 0,00',
      options: [
        '10 links por mês',
        '2 QRCodes',
        'Cliques limitados',
        '7 dias de estatísticas',
        'Domínios exclusivos',
        'Remoção de anúncios'
      ]
    },
    {
      id: 2,
      title: 'Básico',
      price: 'R$ 27,00',
      options: [
        '100 links por mês',
        '20 QRCodes',
        'Cliques limitados',
        '30 dias de estatísticas',
        'Domínios exclusivos',
        'Remoção de anúncios'
      ]
    },
    {
      id: 3,
      title: 'Professional',
      price: 'R$ 98,00',
      options: [
        '500 links por mês',
        '30 QRCodes',
        'Cliques ilimitados',
        '6 meses de estatísticas',
        'Domínios exclusivos',
        'Remoção de anúncios'
      ]
    },
    {
      id: 4,
      title: 'Premium',
      price: 'R$ 673,00',
      options: [
        '3000 links por mês',
        '300 QRCodes',
        'Cliques ilimitados',
        '1 ano de estatísticas',
        'Domínios exclusivos',
        'Remoção de anúncios'
      ]
    }
  ])

  return {
    activeButton,
    toggleActive,
    cards
  }
}
