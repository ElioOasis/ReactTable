import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Redirect } from "react-router-dom";
export class Delete extends React.Component {
  eliminar(id) {
    Swal.fire({
      title: "Estas seguro?",
      text: "¡No podrás revertir esto!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then(result => {
      if (result.value) {
        axios.post("http://127.0.0.1:8000/api/tours/delete/" + id).then(res => {
          if (res.status === 200) {
            Swal.fire("Eliminado!", "el tour a sido eliminado.", "success");
            return this.props.cargarInfo;
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={e => this.eliminar(this.props.id)}>Eliminar</button>
      </div>
    );
  }
}
