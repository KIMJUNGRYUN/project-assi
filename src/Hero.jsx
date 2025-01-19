import hero from './assets/img/hero.svg'; // 이미지 경로에


function Hero() {
  return (
    <section className='hero'>
    <div className='hero-center'>
        <div className='hero-title'>
            <h1>React Projects</h1>
            <p>
                Single-origin coffee deep v sus small batch. Gorpcore vape lumbersexual normcore four
                dollar toast drinking vinegar. Twee 90's taiyaki small batch bitters, bespoke jianbing
                leggings marxism keytar pabst adaptogen mixtape tumblr stumptown. DSA twee iceland tacos
                swag tote bag. Solarpunk man bun fingerstache retro pinterest.
            </p>
        </div>
        <div className='img-container'>
            <img src={hero} alt='woman and the browser' className='img' />
        </div>
    </div>
</section>
  )
}

export default Hero
