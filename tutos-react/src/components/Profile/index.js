import React , {useEffect } from 'react'
import { connect } from 'react-redux'
import './styles.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import header from '../../static/header.jpg'
import header0 from '../../static/header0.jpg'
import header1 from '../../static/header1.jpg'
import * as selectors from '../../reducers'
import pic from '../../static/profilePic.png'
import arrow from '../../static/arrow(black).png'


const headers = [
  '-',
  '0',
  '1'
]

const logro = (item , id) => {
  return (
    <div key = {id} style = {{ display : 'flex' , flexDirection : 'row' , alignItems:'center' }}>
      <img src={arrow} alt="arrow" height='20rem' />
      <h4>{item}</h4>
    </div>
  )
}

const comentario = item => {
  return(
    <div className="profile-comentario" >
      <h2 style = {{borderBottom:'1px solid black'}}>{item.name}</h2>
      <h4>{item.text}</h4>
    </div>
  )
}

const Profile = ({ username , email , curriculum , disponibleAhora , horariosSemana , materias , comentarios }) => {
  return(
    <div className = "Profile-parent-div">
      <Navbar />
      <div className={`Profile-name${headers[Math.floor(Math.random() * 3)]}`} >
        <img src={pic} style = {{height : '100%' , width : 'auto'}} alt="profile" />
        <div className="profile-username-email" >
          <h1>{username }</h1> 
          <h3>{email}</h3>
        </div>
      </div>
      <div className = "profile-body" >
        <div className = "profile-achievements" >
          <h2>Logros</h2>
          {curriculum && curriculum.length!==0 ?
          curriculum.map((value , id) => logro(value , id) )
          :
          (<h4> Este usuario no tiene registrado su currículum </h4>)
          }
        </div>
        <div className = "profile-varios">
          <h2>Disponible ahora: {disponibleAhora?'Si':'No'}</h2>
          <div className="profile-info">
            <div className="profile-horario-semana">
              <h2>Horarios disponibles esta semana:</h2>
              { (horariosSemana && horariosSemana.length!==0 )? 
                (horariosSemana.map( (value, index) => <h4 key={index}>{value}</h4> ))  :
                  (<h4>Ya no tiene horarios disponibles esta semana.</h4>)
              }
            </div>
            <div className = "profile-materias" >
              <h2>Materias</h2>
              { materias && materias.length!== 0 ?
              materias.map( (value , index ) => <h4 key={index}>{value}</h4> ) :
                (<h4>No tiene materias registradas.</h4>)
              }
            </div>
          </div>
          <div className="profile-comments">
            <h2 style = {{borderBottom : '1px solid black'}} >Comentarios del tutor</h2>
            {comentarios && comentarios.length!== 0 ?
              comentarios.map(value =>comentario(value)) : 
              <h3>No hay comentarios registrados</h3>
            }
          </div>
        </div>
      </div>
      <div className="Profile-footer" >
        <Footer />
      </div>
    </div >
  )
}

export default connect(
  state => ({
    username : 'Juan Pérez',
    email: 'juanito@tutos.com.gt',
    curriculum : [
      'Estudió Ing. en CC y TI en UVG',
      'Estudió MBA en Católica de Chile',
      'Estudió PhD in economics en Stanford',
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
      'Lorem ipsum',
    ],
    disponibleAhora : true,
    horariosSemana:[
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
      'Lorem Ipsum',
    ],
    materias:[
      'Fisica 1',
      'Fisica 2',
      'Fisica 3',
      'Calculo 1',
      'Calculo 2',
      'Calculo 3',
    ],
    comentarios:[
      {
        name : 'Pedrito',
        text : 'Lorem Ipsum'
      },
      {
        name: 'Pedrito',
        text: 'Lorem Ipsum'
      },
      {
        name: 'Pedrito',
        text: 'Lorem Ipsum'
      }
    ]
  }),
  dispatch => ({

  })
)(Profile)