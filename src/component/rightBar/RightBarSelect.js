import React from "react";
import Select from "react-select";
import "../../css/RightBar/RightBarSelect.css";

function RightBarSelect() {
  // estilos del select
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),

    multiValue: (styles, { data }) => {
      const color = "#2ABAC8";
      return {
        ...styles,
        backgroundColor: color,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "white",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "white",
      ":hover": {
        backgroundColor: "#1795A0",
        color: "white",
      },
    }),
  };

  // cargar los item de cada select
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="rightBarSelect-container">
      <div className="filtro-item">
        <label>Red</label>
        <Select
          options={options}
          styles={colourStyles}
          isMulti={true}
          //   value={arrayClientes}
          //   onChange={(option) => setArrayClientes(option, "cliente")}
          width="10px"
          placeholder="Seleccione..."
        />
      </div>
      <div className="filtro-item">
        <label>Servicios</label>
        <Select
          options={options}
          styles={colourStyles}
          isMulti={true}
          //   value={arrayClientes}
          //   onChange={(option) => setArrayClientes(option, "cliente")}
          width="10px"
          placeholder="Seleccione..."
        />
      </div>
      <div className="filtro-item">
        <label>Sistemas</label>
        <Select
          options={options}
          styles={colourStyles}
          isMulti={true}
          //   value={arrayClientes}
          //   onChange={(option) => setArrayClientes(option, "cliente")}
          width="10px"
          placeholder="Seleccione..."
        />
      </div>
    </div>
  );
}

export default RightBarSelect;
