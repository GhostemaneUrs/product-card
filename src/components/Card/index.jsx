import { Fragment } from 'react'
import { imgNoExist } from '../../helpers/imgNoExist'

const Card = props => {
  const { data } = props
  console.log(data?.length)
  return (
    <Fragment>
      {data?.length === 1 ? (
        <Fragment>
          {data?.map((item, index) => {
            return (
              <div
                className='w-full m-auto flex max-w-2xl flex-col lg:flex-row'
                key={index}
              >
                <div
                  style={{
                    backgroundImage: `url(${item?.image || imgNoExist})`,
                  }}
                  className='bg-cover bg-center bg-no-repeat h-[250px] lg:h-[500px] w-full rounded-t-xl lg:rounded-tr-none lg:rounded-tl-xl lg:rounded-bl-xl'
                />
                <div className='bg-white w-full p-4 flex flex-col rounded-b-xl lg:rounded-bl-none lg:rounded-br-xl lg:rounded-tr-xl px-6'>
                  <div>
                    <div className='flex flex-col items-start gap-4 mb-5'>
                      <span className='tracking-5 uppercase'>
                        {item?.subtitle}
                      </span>
                      <h1 className='text-4xl lg:text-5xl font-[Fraunces]'>
                        {item?.title}
                      </h1>
                    </div>
                    <div className='mb-5'>
                      <p className='text-lg leading-6'>{item?.description}</p>
                    </div>
                    <div className='flex items-start mb-9 gap-9'>
                      <span className='text-dark-cyan font-bold font-[Fraunces] text-5xl'>
                        {item?.price}
                      </span>
                      <span className='text-base line-through'>
                        {item?.priceOld}
                      </span>
                    </div>
                    <div className='flex m-auto justify-center items-center h-[40px] cursor-pointer bg-dark-cyan rounded-lg gap-5'>
                      <img
                        src={item?.icon}
                        alt='icon-cart'
                        className='w-[20px]'
                      />
                      <span className='text-white font-medium text-lg'>
                        Add to Cart
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Fragment>
      ) : (
        <div className='text-center'>
          <span className='text-4xl lg:text-6xl'>You can only present one product</span>
        </div>
      )}
    </Fragment>
  )
}

export default Card
