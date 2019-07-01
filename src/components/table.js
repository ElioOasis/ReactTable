import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Delete } from "./delete";

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.cargarInfo();
  }

  cargarInfo() {
    axios.get("http://127.0.0.1:8000/api/react").then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  eliminarTour(id) {
    console.log(id);
  }

  render() {
    const columnas = [
      {
        Header: "Tour",
        accessor: "tour" // String-based value accessors!
      },
      {
        Header: "Coodigo",
        accessor: "codigo_id"
      },
      {
        Header: "Descripcion",
        accessor: "descripcion"
      },
      {
        Header: "Itinerario",
        accessor: "itinerario"
      },
      {
        Header: "incluye",
        accessor: "incluye"
      },
      {
        Header: "dias",
        accessor: "dias"
      },
      {
        Header: "status",
        accessor: "status"
      },
      {
        Header: "Opciones",
        id: "id",
        accessor: d => (
          <div>
            <Delete id={d.id} cargarInfo={this.cargarInfo()} />
            <Link to={`/editar/tour/${d.id}`}>
              <button>Editar</button>
            </Link>
          </div>
        )
      }
    ];

    return (
      <ReactTable
        data={this.state.data}
        columns={columnas}
        defaultPageSize={5}
      />
    );
  }
}
