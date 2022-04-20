import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const Statistics = () => {
  const [customers1, setCustomers1] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = [
    {
      id: 1000,
      name: "James Butt",
      email: "jamesbutt@unah.hn",
    },
    {
      id: 1001,
      name: "Josephine Darakjy",
      email: "jesephine@unah.hn",
    },
    {
      id: 1002,
      name: "Matt Saravia",
      email: "mattsaravia@unah.hn",
    },
    {
      id: 1003,
      name: "Grosbin Rivera",
      email: "grosbin.rivera@unah.hn",
    },
    {
      id: 1003,
      name: "Cyntia Reyes",
      email: "cyntiareyes@unah.hn",
    },
  ];

  useEffect(() => {
    // setLoading(true);
    setCustomers1(data);
  }, []);

  const [chartData] = useState({
    labels: ["Cupos ocupados", "Cupos disponibles"],
    datasets: [
      {
        data: [300, 100],
        backgroundColor: ["#42A5F5", "#FFA726"],
        hoverBackgroundColor: ["#64B5F6", "#FFB74D"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  const [basicData] = useState({
    labels: [
      "Evento 1",
      "Evento 2",
      "Evento 3",
      "Evento 4",
      "Evento 5",
      "Evento 6",
      "Evento 7",
    ],
    datasets: [
      {
        label: "Total de inscritos en comparación a los demas eventos",
        backgroundColor: ["#42A5F5", "#FFA726"],
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      // {
      //   label: "My Second dataset",
      //   backgroundColor: "#FFA726",
      //   data: [28, 48, 40, 19, 86, 27, 90],
      // },
    ],
  });

  const basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  return (
    <div className="main">
      <h1>Estadisticas</h1>
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-5">
          <div className="flex justify-content-center">
            <div
              className="surface-0 shadow-2 p-3 border-1 border-50 border-round"
              style={{ width: "450px" }}
            >
              <Chart
                type="pie"
                data={chartData}
                options={lightOptions}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-7">
          <div className="flex justify-content-center">
            <div
              className="surface-0 shadow-2 p-3 border-1 border-50 border-rounds"
              style={{ width: "100%" }}
            >
              {/* <h5>Vertical</h5> */}
              <Chart
                type="bar"
                data={basicData}
                options={basicOptions}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12">
          <div className="datatable-scroll-demo">
            <div className="card">
              <DataTable
                value={customers1}
                scrollable
                scrollHeight="400px"
                // loading={loading}
              >
                <Column
                  field="name"
                  header="Nombre"
                  style={{ minWidth: "200px" }}
                ></Column>
                <Column
                  field="email"
                  header="Corrreo"
                  style={{ minWidth: "200px" }}
                ></Column>
                {/* <Column
                  field="representative.name"
                  header="Representative"
                  style={{ minWidth: "200px" }}
                ></Column>
                <Column
                  field="status"
                  header="Status"
                  style={{ minWidth: "200px" }}
                ></Column> */}
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
