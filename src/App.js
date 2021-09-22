import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import imgGuardar from './imagenes/guardar.png'
import imgImprimir from './imagenes/imprimir.jpg'
import imgSalir from './imagenes/salir.png'

function TableDetalle(props) {
  let dommy3 = {
    data: [
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: '949.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: '949.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'IVA',
        costo1: '39.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: '949.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'IVA',
        costo1: '39.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: '949.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'IVA',
        costo1: '39.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: '949.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'OTROS',
        costo1: '949.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'IVA',
        costo1: '39.00',
        incremento1: '1.71',
        costo2: '618.00',
        incremento2: '69.99',
        costo3: '618.00',
        incremento3: '69.99',
        costo4: '618.00',
        incremento4: '69.99'
      },
      {
        nombre: 'TOTAL',
        costo1: '39.00',
        incremento1: '',
        costo2: '618.00',
        incremento2: '6.10',
        costo3: '618.00',
        incremento3: '0.00',
        costo4: '618.00',
        incremento4: '6.10'
      }],
    costo1: 554510,
    incremento1: '',
    costo2: 3327,
    incremento2: 6.10,
    costo3: 0,
    incremento3: 0,
    costo4: 3327,
    incremento4: 0,
    montoCorregido: 3327,
    factorCorregido: 100,
    montoDevolucion: 450,
    factorDevolucion: 13.52,
    montoMaximo: 2357,
    factorMaximo: 0
  }

  return (
    <div className="scrollTab">
      <table>
        <thead>
          <tr className="header-table">
            <th rowSpan="2" colSpan="1" scope="col">Partidas/Montos</th>
            <th rowSpan="1" colSpan="2" scope="col">
              Costo Total del Proyecto
            </th>
            <th rowSpan="1" colSpan="2" scope="col">
              Total Avance a la Fecha
            </th>
            <th rowSpan="1" colSpan="2" scope="col">
              Total Avance Anterior
            </th>
            <th rowSpan="1" colSpan="2" scope="col">
              Total Avance del Periodo
            </th>
          </tr>
          <tr className="header-table">
            {
              props.columnas.map(column =>
                column.des !== 'Partidas/Montos' ?
                  <th rowSpan="1" colSpan="1" scope="col">{column.des}</th> : '')
            }
          </tr>
        </thead>
        <tbody>
          {
            dommy3.data.map(el => <tr>
              {
                props.columnas.map(column =>
                  <td className={column.id}>{el[column.id]}</td>)
              }
            </tr>)
          }
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL OBRA</td>
            <td>{dommy3.costo1}</td>
            <td>{dommy3.incremento1}</td>
            <td>{dommy3.costo2}</td>
            <td>{dommy3.incremento2}</td>
            <td>{dommy3.costo3}</td>
            <td>{dommy3.incremento3}</td>
            <td>{dommy3.costo4}</td>
            <td>{dommy3.incremento4}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>MONTO</td>
            <td>FACTOR</td>
          </tr>
          <tr>
            <td colSpan="7">MONTO CORREGIDO</td>
            <td>{dommy3.montoCorregido}</td>
            <td>{dommy3.factorCorregido}</td>
          </tr>
          <tr>
            <td colSpan="7">DEVOLUCIÓN MÓINIMO ANTICIPO</td>
            <td>{dommy3.montoDevolucion}</td>
            <td>{dommy3.factorDevolucion}</td>
          </tr>
          <tr>
            <td colSpan="7">MONTO MÁXIMO AUTORIZADO A CIUDAD</td>
            <td>{dommy3.montoMaximo}</td>
            <td>{dommy3.factorMaximo}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

class HeaderTab extends React.Component {
  constructor(props) {
    super(props);
    this.name = { value: props.cliente.apellidoPaterno + ' ' + props.cliente.apellidoMaterno + ' ' + props.cliente.nombre };
    this.ruta = { value: props.cliente.ruta };
    this.nomProyecto = { value: props.cliente.nombreProyecto }
  }

  render() {
    return (
      <div className="d-flex justify-content-between customGrupBorder ">
        <div>
          <label>
            Cliente:
            <input type="text" value={this.name.value} className="long" />
          </label>
        </div>
        <div><label>
          Rut:
          <input type="text" value={this.ruta.value} className="short" />
        </label>
        </div>
        <div><label>
          N. Proyecto:
          <input type="text" value={this.nomProyecto.value} className="long" />
        </label>
        </div>
      </div>
    );
  }
}

class HeaderBodyTab extends React.Component {
  constructor(props) {
    super(props);
    this.avance = { value: props.avances.avance };
    this.fecha = { value: props.avances.fecha };
    this.moneda = { value: props.avances.moneda }
  }

  render() {
    return (
      <div className="d-flex justify-content-between customGrupBorder ">
        <div>
          <label>
            N° Avance:
            <input type="text" value={this.avance.value} className="short" />
          </label>
        </div>
        <div><label>
          Fecha de Inspección:
          <input type="text" value={this.fecha.value} className="short" />
        </label>
        </div>
        <div><label>
          Moneda:
          <input type="text" value={this.moneda.value} className="long" />
        </label>
        </div>
      </div>
    );
  }
}

class BodyTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pestaniaActual: 'estado' };
    this.columnas = [
      { id: 'nombre', des: 'Partidas/Montos' },
      { id: 'costo1', des: '' },
      { id: 'incremento1', des: '%Inc' },
      { id: 'costo2', des: '' },
      { id: 'incremento2', des: '%Inc' },
      { id: 'costo3', des: '' },
      { id: 'incremento3', des: '%Inc' },
      { id: 'costo4', des: '' },
      { id: 'incremento4', des: '%Inc' }
    ];
    this.pestania = [
      { id: 'activeEstado', descripcion: 'Estado de Avance', value: 'menu-active' },
      { id: 'activeCorreccion', descripcion: 'Corrección de Avance', value: 'menu' },
      { id: 'activeAntecedentes', descripcion: 'Antecedentes de la Obra', value: 'menu' },
      { id: 'activeObservaciones', descripcion: 'Observaciones', value: 'menu' }
    ];
    this.changePestania = this.changePestania.bind(this);
  }
  changePestania = (e) => {
    this.setState({ pestaniaActual: e });
    this.pestania[0].value = e === 'estado' ? ' menu-active' : 'menu';
    this.pestania[1].value = e === 'correccion' ? ' menu-active' : 'menu';
    this.pestania[2].value = e === 'antecedentes' ? ' menu-active' : 'menu';
    this.pestania[3].value = e === 'configuracion' ? ' menu-active' : 'menu';
  }
  render() {
    return (
      <NavTabContent columnas={this.columnas} changePestania={this.changePestania} pestania={this.pestania} pestaniaActual={this.state} />
    );
  }
}

function NavTabContent(props) {
  let avances = { avance: '1', fecha: '18/09/2021', moneda: 'U.F.' }
  return (
    <div className="customGrupBorder">
      <div>
        <span onClick={() => props.changePestania('estado')} className={props.pestania[0].value}>
          {props.pestania[0].descripcion}
        </span>
        <span onClick={() => props.changePestania('correccion')} className={props.pestania[1].value} >
          {props.pestania[1].descripcion}
        </span>
        <span onClick={() => props.changePestania('antecedentes')} className={props.pestania[2].value} >
          {props.pestania[2].descripcion}
        </span>
        <span onClick={() => props.changePestania('configuracion')} className={props.pestania[3].value}>
          {props.pestania[3].descripcion}
        </span>
      </div>
      <div className="customGrupBorder">
        <div><HeaderBodyTab avances={avances} /></div>
        <div>{props.pestaniaActual.pestaniaActual === 'estado' ? <TableDetalle columnas={props.columnas} /> : <div>Ventana: {props.pestaniaActual.pestaniaActual}</div>}
        </div>
      </div>
    </div>
  );
}

class BodyTabAB extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pestaniaActual: 'var' };

    this.pestania = [
      { id: 'resumen', descripcion: 'Resumen', value: 'menu' },
      { id: 'plazo', descripcion: 'Plazos/Montos', value: 'menu' },
      { id: 'unidades', descripcion: 'Uni. a Const', value: 'menu' },
      { id: 'costos', descripcion: 'Costos', value: 'menu' },
      { id: 'var', descripcion: 'Var G.-D', value: 'menu-active' },
      { id: 'comercializacion', descripcion: 'Comercialización', value: 'menu' },
      { id: 'credito', descripcion: 'Cred. Prop.', value: 'menu' },
      { id: 'observaciones', descripcion: 'Observaciones', value: 'menu' }
    ];
    this.changePestania = this.changePestania.bind(this);
  }
  changePestania = (e) => {
    this.setState({ pestaniaActual: e });
    this.pestania[0].value = e === 'resumen' ? ' menu-active' : 'menu';
    this.pestania[1].value = e === 'plazo' ? ' menu-active' : 'menu';
    this.pestania[2].value = e === 'unidades' ? ' menu-active' : 'menu';
    this.pestania[3].value = e === 'costos' ? ' menu-active' : 'menu';
    this.pestania[4].value = e === 'var' ? ' menu-active' : 'menu';
    this.pestania[5].value = e === 'comercializacion' ? ' menu-active' : 'menu';
    this.pestania[6].value = e === 'credito' ? ' menu-active' : 'menu';
    this.pestania[7].value = e === 'observaciones' ? ' menu-active' : 'menu';
  }
  render() {
    return (
      <NavTabContentAB changePestania={this.changePestania} pestania={this.pestania} pestaniaActual={this.state} />
    );
  }
}

class HeaderBodyTabA extends React.Component {
  constructor(props) {
    super(props);
    this.avance = { value: props.avances.avance };
    this.fecha = { value: props.avances.fecha };
    this.moneda = { value: props.avances.moneda }
  }

  render() {
    return (
      <div className="d-flex justify-content-center flex-column customGrupBorder ">
        <div>
          <div><label>Per. Const. (n) </label></div>
          <div className="d-flex justify-content-end"><input type="text" value={this.avance.value} className="xshort" /></div>
        </div>
        <div>
          <div><label>Interes (i) </label></div>
          <div className="d-flex justify-content-end"><input type="text" value={this.fecha.value} className="xshort" /></div>
        </div>
        <div>
          <div><label>Rex. Pry (Rec) </label></div>
          <div className="d-flex justify-content-end"><input type="text" value={this.moneda.value} className="xshort" /></div>

        </div>
      </div>
    );
  }
}

class FooterBodyTabA extends React.Component {
  constructor(props) {
    super(props);
    this.avance = { value: props.avances.avance };
    this.fecha = { value: props.avances.fecha };
    this.moneda = { value: props.avances.moneda }
  }

  render() {
    return (
      <div className="d-flex justify-content-end m-3">
        <div>
          <span className="pr-3" >
            Relación Garantia Deuda %  </span>
          <input type="text" value={this.avance.value} className="short" />
          <input type="text" value={this.fecha.value} className="short" />
          <input type="text" value={this.moneda.value} className="short" />
        </div>
      </div>
    );
  }
}

class FooterBodyTabB extends React.Component {
  constructor(props) {
    super(props);
    this.avance = { value: props.avances.avance };
    this.fecha = { value: props.avances.fecha };
    this.moneda = { value: props.avances.moneda }
  }

  render() {
    return (
      <div className="d-flex  flex-column m-2 pt-2">
        <div className="d-flex flex-row justify-content-end">
          <div><label>Deuda "(Cred. Propuesto + Carga Finaciera)" </label></div>
          <div ><input type="text" value={this.avance.value} className="xshort" /></div>
        </div>
        <div className="d-flex flex-row justify-content-end">
          <div><label>Flujos Ajustados </label></div>
          <div><input type="text" value={this.fecha.value} className="xshort" /></div>
        </div>
        <div className="d-flex flex-row justify-content-end">
          <div><label>Relación flujo ajustado deuda </label></div>
          <div ><input type="text" value={this.moneda.value} className="xshort" /></div>
        </div>
      </div>
    );
  }
}

function NavTabContentAB(props) {
  return (
    <div className="customGrupBorder2">
      <span className="header-modalAB">Antecedentes Generales</span>
      <div>
        <span onClick={() => props.changePestania('resumen')} className={props.pestania[0].value}>
          {props.pestania[0].descripcion}
        </span>
        <span onClick={() => props.changePestania('plazo')} className={props.pestania[1].value} >
          {props.pestania[1].descripcion}
        </span>
        <span onClick={() => props.changePestania('unidades')} className={props.pestania[2].value} >
          {props.pestania[2].descripcion}
        </span>
        <span onClick={() => props.changePestania('costos')} className={props.pestania[3].value}>
          {props.pestania[3].descripcion}
        </span>
        <span onClick={() => props.changePestania('var')} className={props.pestania[4].value}>
          {props.pestania[4].descripcion}
        </span>
        <span onClick={() => props.changePestania('comercializacion')} className={props.pestania[5].value} >
          {props.pestania[5].descripcion}
        </span>
        <span onClick={() => props.changePestania('credito')} className={props.pestania[6].value} >
          {props.pestania[6].descripcion}
        </span>
        <span onClick={() => props.changePestania('observaciones')} className={props.pestania[7].value}>
          {props.pestania[7].descripcion}
        </span>
      </div>
      <div className="customGrupBorder">
        <div>{
          props.pestaniaActual.pestaniaActual === 'var' ? <TableDetalleA /> : props.pestaniaActual.pestaniaActual === 'comercializacion' ? <TableDetalleB /> : <div>Ventana: {props.pestaniaActual.pestaniaActual}</div>}
        </div>
      </div>
    </div>
  );
}

function TableDetalleB(props) {
  let columnas = [
    { id: 'partida', des: 'Partidas' },
    { id: 'costo', des: '' },
    { id: 'destino', des: 'Destino' },
    { id: 'monto', des: 'Monto' },
  ];
  let dommy3 = {
    data: [
      {
        partida: 'UNIDADES COMPROMETIDAS',
        costo: '8',
        destino: 'FLUJO AJUSTADO',
        monto: '6,418.00',
      },
      {
        partida: 'UNIDADES POR COMERCIALIZAR',
        costo: '34',
        destino: 'FLUJO AJUSTADO',
        monto: '96,418.00',
      }],
    des: 'MONTO CRÉDITO ANTES DE INICIO DE ABONOS',
    total: 56226.52
  }
  let avances = { avance: '12,00', fecha: '10,00', moneda: '6,00' }
  let garantia = { avance: '5,38', fecha: '1,63', moneda: '2,46' }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row ">

        <div className="scrollTab2">
          <table className="ejercicioB">
            <thead>
              <tr className="header-table">
                {columnas.map(column => <th rowSpan="1" colSpan="1" scope="col">{column.des}</th>)}
              </tr>
            </thead>
            <tbody>
              {
                dommy3.data.map(el => <tr>
                  {columnas.map(column => <td className={column.id}>{el[column.id]}</td>)}
                </tr>)
              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">{dommy3.des}</td>
                <td>{dommy3.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div><FooterBodyTabB avances={avances} /></div>
    </div>

  );
}

function TableDetalleA(props) {
  let columnas = [
    { id: 'partida', des: '' },
    { id: 'inicio', des: 'Inicio Prog.' },
    { id: 'antes', des: 'Antes de Recep Mun' },
    { id: 'conRec', des: 'Con Recep. Mun.' },
  ];
  let dommy3 = {
    data: [
      {
        partida: 'TERRENO',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      },
      {
        partida: 'AV. OBRAS',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      },
      {
        partida: 'VALOR PROPY TERMINADO',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      },
      {
        partida: 'TOTAL GARANTIAS',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      }, {
        partida: 'BOLETIN TIA URBAN',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      }, {
        partida: 'ANTICIPO',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      }, {
        partida: 'CREDITO SEGÚN AV. DE OBRAS',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      }, {
        partida: 'CREDITO CON RECEP. MUN',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      }, {
        partida: 'TOTAL DEUDAS',
        inicio: '37,637.00',
        antes: '37,637.00',
        conRec: '0.00',
      }],
    des: 'MONTO CRÉDITO ANTES DE INICIO DE ABONOS',
    total: 56226.52
  }
  let avances = { avance: '12,00', fecha: '10,00', moneda: '6,00' }
  let garantia = { avance: '5,38', fecha: '1,63', moneda: '2,46' }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row ">
        <div><HeaderBodyTabA avances={avances} /></div>
        <div className="scrollTab2">
          <table className="ejercicioA">
            <thead>
              <tr className="header-table">
                {columnas.map(column => <th rowSpan="1" colSpan="1" scope="col">{column.des}</th>)}
              </tr>
            </thead>
            <tbody>
              {
                dommy3.data.map(el => <tr>
                  {columnas.map(column => <td className={column.id + ' ' + el['partida']}>{el[column.id]}</td>)}
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>

      <div><FooterBodyTabA avances={garantia} /></div>
    </div>

  );
}

function EjercicioC() {
  let cliente = { nombre: 'NOMBRES', apellidoPaterno: 'PATERNO', apellidoMaterno: 'MATERNO', ruta: '85.237.600-7', nombreProyecto: 'CONJUNTO SOL DEL VALLE' }
  return (
    <div className="containerC">
      <HeaderTab cliente={cliente} />
      <BodyTab />
    </div>
  );
}

function EjercicioAB() {
  return (
    <div className="containerC">
      <BodyTabAB />
    </div>
  );
}

function App() {
  const [showAB, setShowAB] = useState(false);
  const [showC, setShowC] = useState(false);
  const imprimir = () => imprimir();

  return (
    <div className="App">
      <div className="App-header">
        Luis Octavio Romo Gongora<br />
        Ejercicios Ionate:<br />

        <div className="d-flex justify-content-around containerBotton mt-5">
          <Button variant="primary" onClick={() => setShowAB(true)}>
            Ejercicio A y B
          </Button>
          <Button variant="primary" onClick={() => setShowC(true)}>
            Ejercicio C
          </Button>
        </div>
      </div>
      <>


        <Modal
          size="lg"
          show={showAB}
          onHide={() => setShowAB(false)}
          aria-labelledby="modal-sizes-title-lg"
        >
          <Modal.Body><EjercicioAB /></Modal.Body>
        </Modal>

        <Modal
          size="lg"
          show={showC}
          onHide={() => setShowC(false)}
          aria-labelledby="modal-sizes-title-lg"
        >
          <Modal.Header closeButton={false}>
            <Modal.Title id="modal-sizes-title-lg">Detalle del estado de avance</Modal.Title>
          </Modal.Header >
          <Modal.Body><EjercicioC /></Modal.Body>
          <Modal.Footer>
            <Button className="iconsButton" onClick={imprimir} title="Guardar">
              <img src={imgGuardar} className="iconsImg" />
            </Button>
            <Button className="iconsButton" onClick={imprimir} title="Imprimir">
              <img src={imgImprimir} className="iconsImg" />
            </Button>
            <Button className="iconsButton" onClick={() => setShowC(false)} title="Salir">
              <img src={imgSalir} className="iconsImg" />
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );

}

export default App;
