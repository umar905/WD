import React from 'react'
import './main.css'
const Main = () => {
  return (
    <>
      <section className='heading'>
        <div className="container">
          <img src="/Frame.png" alt="" width={"357px"} height={"233px"} />
          <div className="heading_info">
            <h1>
              Дизайн и верстка
            </h1>
            <p>
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов  на латинице с начала XVI века.
            </p>
            <button>
              НАПИСАТЬ МНЕ
            </button>
          </div>
        </div>
      </section>
      <section className="aboutMe">
        <div className="container">
            <div className="about_info">
            <h2>
            Обо мне
          </h2>

          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
          </p>

            </div>
        </div>
      </section>

      <section className="numbers">
        <img src="/numbers.png" alt="" width={"100%"} />
      </section>


      <section className="skils">
        <div className="container">
          <div className="skils_info">
              <h2>
                Мои навыки
              </h2>
              <img src="/statistic.svg" alt="" />
          </div>
          <img src="/man.png" alt="" width={"555px"} height={"450px"}/>
        </div>
      </section>


      <section className="howIwork aboutMe">
        <div className="container">
          <div className="about_info">
          <h2>
          Как я работаю
                    </h2>

          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
          </p>
          </div>

        <img src="/playvd.svg" alt="" />
         
        </div>
      </section>

      <section className='windows'>
        <img src="/projects.png" alt="" width={"100%"}/>
        <div className="container">
          <img src="/clients.png" alt="" />
        </div>
      </section>


      <section className="howIwork aboutMe">
        <div className="container">
          <div className="about_info">
          <h2>
          Хотите веб-сайт?
                    </h2>

          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
          </p>
          </div>
          <img src="/inputs.png" alt="" width={"540px"}/>
          <button className='send'>
          ОТПРАВИТЬ
          </button>
        </div>
      </section>
    </>
  )
}

export default Main
