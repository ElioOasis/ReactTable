import React, { Component } from "react";
import axios from "axios";

export class EditTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: "",
      codigo_id: "",
      descripcion: "",
      itinerario: "",
      incluye: "",
      dias: "",
      status: "",
      id: ""
    };
  }
  componentDidMount() {
    console.log(this.state.datos);
    const { id } = this.props.match.params;
    this.bucarDatos(id);
  }

  bucarDatos(id) {
    axios.get(`http://127.0.0.1:8000/api/tours/gettour/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        tour: res.data.tour,
        codigo_id: res.data.codigo_id,
        descripcion: res.data.descripcion,
        itinerario: res.data.itinerario,
        incluye: res.data.incluye,
        dias: res.data.dias,
        status: res.data.status,
        id: res.data.id
      });
      console.log("estado", this.state);
    });
  }

  cambiosTour = e => {
    const { id } = this.props.match.params;

    axios
      .post(`http://127.0.0.1:8000/api/tours/update/${id}`, {
        nombre: this.state.tour,
        codigo: this.state.codigo_id,
        descripcion: this.state.descripcion,
        itinerario: this.state.itinerario,
        incluye: this.state.incluye,
        dias: this.state.dias
      })
      .then(res => {
        console.log(res.data);
      });
  };

  actualizarNombreTour = e => {
    this.setState(
      {
        tour: e.target.value
      },
      () => console.log("nuevo estado", this.state)
    );
  };

  actualizarCodigo = e => {
    this.setState(
      {
        codigo_id: e.target.value
      },
      () => console.log("nuevo estado", this.state)
    );
  };

  actualizarDescripcion = e => {
    this.setState(
      {
        descripcion: e.target.value
      },
      () => console.log("nuevo estado", this.state)
    );
  };
  actualizarItinerario = e => {
    this.setState(
      {
        itinerario: e.target.value
      },
      () => console.log("nuevo estado", this.state)
    );
  };
  actualizarDias = e => {
    this.setState(
      {
        dias: e.target.value
      },
      () => console.log("nuevo estado", this.state)
    );
  };
  actualizarIncluye = e => {
    this.setState(
      {
        incluye: e.target.value
      },
      () => console.log("nuevo estado", this.state)
    );
  };

  render() {
    const {
      codigo_id,
      descripcion,
      itinerario,
      incluye,
      dias,
      tour
    } = this.state;
    return (
      <div>
        <label>Info tour</label>
        <br />
        <label>Tour</label>
        <input
          id="tour"
          name="tour"
          placeholder="tour"
          type="text"
          value={tour}
          onChange={this.actualizarNombreTour}
        />
        <br />
        <label>codigo</label>

        <input
          id="codigo_id"
          name="codigo_id"
          type="text"
          value={codigo_id}
          onChange={this.actualizarCodigo}
        />
        <br />
        <label>descripcion</label>

        <input
          id="des"
          name="des"
          type="text"
          value={descripcion}
          onChange={this.actualizarDescripcion}
        />
        <br />
        <label>itinerario</label>

        <input
          id="ite"
          name="ite"
          type="text"
          value={itinerario}
          onChange={this.actualizarItinerario}
        />
        <br />
        <label>dias</label>

        <input
          id="dias"
          name="dias"
          type="text"
          value={dias}
          onChange={this.actualizarDias}
        />
        <br />
        <label>incluye</label>

        <input
          id="incluye"
          name="incluye"
          type="text"
          value={incluye}
          onChange={this.actualizarIncluye}
        />
        <br />

        <button onClick={this.cambiosTour}>Guardad cambios</button>
      </div>
    );
  }
}
