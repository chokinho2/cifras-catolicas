/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary:     '#122B45',  // azul-marinho profundo (fundo da capa)
        primarydark: '#0C1E31',
        secondary:   '#B7791F',  // dourado escuro (legível sobre branco)
        gold:        '#E9B949',  // dourado claro (destaques sobre fundo escuro)
        success:     '#15803D',  // verde dos CTAs
        successdark: '#116632',
        cream:       '#FAF7F0',  // fundo claro quente
        skyfade:     '#EAF0F8',  // azul suave (gradiente do hero)
        surface:     '#F2F5F9',
      },
      fontFamily: {
        sans:    ['Manrope', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      letterSpacing: { tightx: '-0.1px' },
      boxShadow: {
        soft:  '0 40px 80px rgba(18, 43, 69, 0.20)',
        card:  '0 10px 30px rgba(18, 43, 69, 0.10)',
        cta:   '0 12px 24px rgba(21, 128, 61, 0.35)',
      },
    },
  },
}
