import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import React from 'react'

const ScholarShowcase = () => {
  const words = [
    {
      text: 'Meet'
    },
    {
      text: 'Our'
    },
    {
      text: 'Scholars'
    }
  ]
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Abdul-Rahman_Al-Sudais_%28Cropped%2C_2011%29.jpg",

    "https://static1.bigstockphoto.com/2/6/7/small2/76206506.jpg",

    "https://zakirnaik.com/wp-content/themes/zakir/assets/images/homepage/Public_Lectures/4.jpg",

    "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/08/18/1717781-1718842185.jpg?itok=TW-Q9-bB",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-XisJNqWE_0fbgSUnEobvWQhb5k9zXhgCAS7DXpa1t7IVnV37-5_LY_cxMRKuLQb0Oc&usqp=CAU",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Assim_2017_2_%28cropped%29.jpg/220px-Assim_2017_2_%28cropped%29.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBnBZGCdQInvNBrjfD_vem4Nnmfr_zZZZJpUjxShJIl7Np2uBKCnig964fYkmtFNlPjE&usqp=CAU",

    "https://qph.cf2.quoracdn.net/main-qimg-d2049ae5f367180b6f59853baffb0a9e-lq",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0Qf2454rj8GMt9STovDpaVrQ0EXrBQ2GyeacQQCFWxQpTcrTONwpzCDjc6pDfi7Ri3c&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuAAP-IhWAYHgLnpSIVLfpREqywzi3DA9qMxXU-Wk4KHjMef-3mqXwa1iuXUMXC7AW2s&usqp=CAU",

    "https://humzashabbir7.files.wordpress.com/2018/03/sheikh-shuriam-1.jpg?w=171&h=234",
    "https://qph.cf2.quoracdn.net/main-qimg-3e6f11eedcc908fe7cdd589c0d7fc253-lq",

    "https://haramainsharifain.com/wp-content/uploads/2021/09/11_1.jpg",

    "https://i.tribune.com.pk/media/images/2479598-madinamunawwarahimamdied-1683543045-511-641683555118-0/2479598-madinamunawwarahimamdied-1683543045-511-641683555118-0.jpg",

    "https://image.khaleejtimes.com/?uuid=2a41a79c-3089-4b1e-b33b-2fc3ea16d631&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99999&x=0&y=0&width=1200&height=675",

    "https://haplogroupijm429.files.wordpress.com/2018/03/sdfsdf-e1521903843186.png?w=322&h=349",

    "https://media.licdn.com/dms/image/C4D03AQG1t_O0e7C-Cw/profile-displayphoto-shrink_200_200/0/1660925066074?e=2147483647&v=beta&t=pOGp5zNonFZVi6XvWIhOeB1-K64jy9gDdYlZ6oUho-s",

    "https://i.ytimg.com/vi/e-XUsmZJSFs/maxresdefault.jpg",
    "https://i.ytimg.com/vi/7Uxmy3sfyN0/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB7pzkfZ6gylQY-KfzaZnxsGPkrSA",

    "https://m.media-amazon.com/images/S/amzn-author-media-prod/nb28kvap0o0t9l6b8nsb7fpi95.jpg",

    "https://www.masjidassiddique.com/wp-content/uploads/2023/08/Shaikh-Dr.-Muhammad-Saifullah-Madani.webp",

    "https://upload.wikimedia.org/wikipedia/commons/6/6e/%D8%B5%D8%A7%D9%84%D8%AD_%D8%A7%D9%84%D9%81%D9%88%D8%B2%D8%A7%D9%86_%28cropped%29.jpg",
    
    "https://en.islamway.net/uploads/authors/muhammad-bin-salih-al-uthaimeen.jpg",

    

    "https://wajibad.files.wordpress.com/2013/05/3-d8b9d8a8d8af-d8a7d984d8b9d8b2d98ad8b2-d8a8d986-d8b9d8a8d8af-d8a7d984d984d987-d8a8d986-d8a8d8a7d8b2.jpg?w=736",

    "https://upload.wikimedia.org/wikipedia/commons/1/18/Abdul-Rahman_Al-Sudais_%28Cropped%2C_2011%29.jpg",

    "https://static1.bigstockphoto.com/2/6/7/small2/76206506.jpg",

    "https://zakirnaik.com/wp-content/themes/zakir/assets/images/homepage/Public_Lectures/4.jpg",

    "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/08/18/1717781-1718842185.jpg?itok=TW-Q9-bB",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-XisJNqWE_0fbgSUnEobvWQhb5k9zXhgCAS7DXpa1t7IVnV37-5_LY_cxMRKuLQb0Oc&usqp=CAU",

    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Assim_2017_2_%28cropped%29.jpg/220px-Assim_2017_2_%28cropped%29.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBnBZGCdQInvNBrjfD_vem4Nnmfr_zZZZJpUjxShJIl7Np2uBKCnig964fYkmtFNlPjE&usqp=CAU",

    "https://qph.cf2.quoracdn.net/main-qimg-d2049ae5f367180b6f59853baffb0a9e-lq",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0Qf2454rj8GMt9STovDpaVrQ0EXrBQ2GyeacQQCFWxQpTcrTONwpzCDjc6pDfi7Ri3c&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuAAP-IhWAYHgLnpSIVLfpREqywzi3DA9qMxXU-Wk4KHjMef-3mqXwa1iuXUMXC7AW2s&usqp=CAU",

    "https://humzashabbir7.files.wordpress.com/2018/03/sheikh-shuriam-1.jpg?w=171&h=234",
    "https://qph.cf2.quoracdn.net/main-qimg-3e6f11eedcc908fe7cdd589c0d7fc253-lq",

    "https://haramainsharifain.com/wp-content/uploads/2021/09/11_1.jpg",
  ];
  return (
    <div className='space-y-16'>
      <div>
        <TypewriterEffect words={words}/>
      </div>
      <div>
      <ParallaxScroll images={images} />
      </div>
    </div>
  )
}

export default ScholarShowcase