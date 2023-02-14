import Card from '../components/Card'
import icon from '../assets/images/icon-cart.svg'
import desktop from '../assets/images/image-product-desktop.jpg'

const index = () => {
  const product = [
    {
      icon: icon,
      image: desktop,
      subtitle: 'Perfume',
      title: 'Gabrielle Essence Eau De Parfum',
      description:
        'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
      price: '$149.99',
      priceOld: '$169.99',
    },
  ]
  return (
    <div
      className='w-full max-w-[1440px] m-auto p-4 flex flex-col min-h-screen justify-center items-center'
      role='main'
    >
      <Card data={product} />
    </div>
  )
}

export default index
