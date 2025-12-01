"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function PropostasPage() {
  const [propostas, setPropostas] = useState([
    {
      id: 1,
      cliente: "João Silva",
      valor: 15000,
      parcelas: 48,
      taxa: 1.8,
      status: "Em Análise",
      data: "20/11/2024",
    },
    {
      id: 2,
      cliente: "Maria Santos",
      valor: 25000,
      parcelas: 60,
      taxa: 1.8,
      status: "Aprovada",
      data: "18/11/2024",
    },
    {
      id: 3,
      cliente: "Pedro Oliveira",
      valor: 10000,
      parcelas: 36,
      taxa: 1.8,
      status: "Documentação Pendente",
      data: "22/11/2024",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [novaProposta, setNovaProposta] = useState({
    cliente: "",
    valor: "",
    parcelas: "48",
    taxa: "1.8",
  });

  const calcularParcela = (valor: number, parcelas: number, taxa: number) => {
    const taxaMensal = taxa / 100;
    const valorParcela =
      (valor * taxaMensal * Math.pow(1 + taxaMensal, parcelas)) /
      (Math.pow(1 + taxaMensal, parcelas) - 1);
    return valorParcela.toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const proposta = {
      id: propostas.length + 1,
      cliente: novaProposta.cliente,
      valor: parseFloat(novaProposta.valor),
      parcelas: parseInt(novaProposta.parcelas),
      taxa: parseFloat(novaProposta.taxa),
      status: "Em Análise",
      data: new Date().toLocaleDateString("pt-BR"),
    };
    setPropostas([...propostas, proposta]);
    setNovaProposta({ cliente: "", valor: "", parcelas: "48", taxa: "1.8" });
    setShowForm(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aprovada":
        return "bg-green-100 text-green-800";
      case "Em Análise":
        return "bg-yellow-100 text-yellow-800";
      case "Documentação Pendente":
        return "bg-orange-100 text-orange-800";
      case "Rejeitada":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Propostas de Crédito
            </h1>
            <p className="text-gray-600 mt-2">
              Média de 15 propostas por semana
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            {showForm ? "Cancelar" : "+ Nova Proposta"}
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-gray-800">
              {propostas.length}
            </div>
            <div className="text-gray-600">Total de Propostas</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">⏳</div>
            <div className="text-2xl font-bold text-yellow-600">
              {propostas.filter((p) => p.status === "Em Análise").length}
            </div>
            <div className="text-gray-600">Em Análise</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-green-600">
              {propostas.filter((p) => p.status === "Aprovada").length}
            </div>
            <div className="text-gray-600">Aprovadas</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">📄</div>
            <div className="text-2xl font-bold text-orange-600">
              {
                propostas.filter((p) => p.status === "Documentação Pendente")
                  .length
              }
            </div>
            <div className="text-gray-600">Pendentes</div>
          </div>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Nova Proposta de Crédito
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Cliente *
                  </label>
                  <input
                    type="text"
                    required
                    value={novaProposta.cliente}
                    onChange={(e) =>
                      setNovaProposta({
                        ...novaProposta,
                        cliente: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Nome do cliente"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Valor Solicitado *
                  </label>
                  <input
                    type="number"
                    required
                    value={novaProposta.valor}
                    onChange={(e) =>
                      setNovaProposta({
                        ...novaProposta,
                        valor: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Ex: 15000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Número de Parcelas *
                  </label>
                  <select
                    value={novaProposta.parcelas}
                    onChange={(e) =>
                      setNovaProposta({
                        ...novaProposta,
                        parcelas: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="24">24 meses</option>
                    <option value="36">36 meses</option>
                    <option value="48">48 meses</option>
                    <option value="60">60 meses</option>
                    <option value="72">72 meses</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Taxa de Juros (% a.m.)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={novaProposta.taxa}
                    onChange={(e) =>
                      setNovaProposta({ ...novaProposta, taxa: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="1.8"
                  />
                </div>
              </div>

              {novaProposta.valor && novaProposta.parcelas && (
                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Simulação</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-gray-600 text-sm">
                        Valor da Parcela
                      </div>
                      <div className="text-2xl font-bold text-indigo-600">
                        R${" "}
                        {calcularParcela(
                          parseFloat(novaProposta.valor),
                          parseInt(novaProposta.parcelas),
                          parseFloat(novaProposta.taxa)
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">Valor Total</div>
                      <div className="text-2xl font-bold text-gray-800">
                        R${" "}
                        {(
                          parseFloat(
                            calcularParcela(
                              parseFloat(novaProposta.valor),
                              parseInt(novaProposta.parcelas),
                              parseFloat(novaProposta.taxa)
                            )
                          ) * parseInt(novaProposta.parcelas)
                        ).toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm">
                        Total de Juros
                      </div>
                      <div className="text-2xl font-bold text-gray-800">
                        R${" "}
                        {(
                          parseFloat(
                            calcularParcela(
                              parseFloat(novaProposta.valor),
                              parseInt(novaProposta.parcelas),
                              parseFloat(novaProposta.taxa)
                            )
                          ) *
                            parseInt(novaProposta.parcelas) -
                          parseFloat(novaProposta.valor)
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
              >
                Criar Proposta
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    ID
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Cliente
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Valor
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Parcelas
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Taxa
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Valor/Parcela
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Data
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {propostas.map((proposta) => (
                  <tr key={proposta.id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-600">#{proposta.id}</td>
                    <td className="px-6 py-4 text-gray-800 font-medium">
                      {proposta.cliente}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      R$ {proposta.valor.toLocaleString("pt-BR")}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {proposta.parcelas}x
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {proposta.taxa}%
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-medium">
                      R${" "}
                      {calcularParcela(
                        proposta.valor,
                        proposta.parcelas,
                        proposta.taxa
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{proposta.data}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          proposta.status
                        )}`}
                      >
                        {proposta.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                        Detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
