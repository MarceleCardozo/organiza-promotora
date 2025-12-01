"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ClientesPage() {
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nome: "João Silva",
      cpf: "123.456.789-00",
      telefone: "(51) 98765-4321",
      status: "Ativo",
      dataProspeccao: "15/10/2024",
    },
    {
      id: 2,
      nome: "Maria Santos",
      cpf: "987.654.321-00",
      telefone: "(51) 91234-5678",
      status: "Em Análise",
      dataProspeccao: "18/10/2024",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [novoCliente, setNovoCliente] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    orgao: "",
    matricula: "",
    salario: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cliente = {
      id: clientes.length + 1,
      nome: novoCliente.nome,
      cpf: novoCliente.cpf,
      telefone: novoCliente.telefone,
      status: "Novo",
      dataProspeccao: new Date().toLocaleDateString("pt-BR"),
    };
    setClientes([...clientes, cliente]);
    setNovoCliente({
      nome: "",
      cpf: "",
      telefone: "",
      email: "",
      orgao: "",
      matricula: "",
      salario: "",
    });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Cadastro de Clientes
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            {showForm ? "Cancelar" : "+ Novo Cliente"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Dados da Prospecção Telefônica
            </h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={novoCliente.nome}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, nome: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="João da Silva"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  CPF *
                </label>
                <input
                  type="text"
                  required
                  value={novoCliente.cpf}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, cpf: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="000.000.000-00"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={novoCliente.telefone}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, telefone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  value={novoCliente.email}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="email@exemplo.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Órgão Empregador *
                </label>
                <input
                  type="text"
                  required
                  value={novoCliente.orgao}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, orgao: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Ex: Prefeitura Municipal"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Matrícula
                </label>
                <input
                  type="text"
                  value={novoCliente.matricula}
                  onChange={(e) =>
                    setNovoCliente({
                      ...novoCliente,
                      matricula: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Número da matrícula"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Salário Bruto
                </label>
                <input
                  type="text"
                  value={novoCliente.salario}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, salario: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="R$ 0,00"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
                >
                  Cadastrar Cliente
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Nome
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    CPF
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Telefone
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Data Prospecção
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
                {clientes.map((cliente) => (
                  <tr key={cliente.id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-800">{cliente.nome}</td>
                    <td className="px-6 py-4 text-gray-600">{cliente.cpf}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {cliente.telefone}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {cliente.dataProspeccao}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          cliente.status === "Ativo"
                            ? "bg-green-100 text-green-800"
                            : cliente.status === "Em Análise"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {cliente.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium mr-4">
                        Ver Detalhes
                      </button>
                      <button className="text-green-600 hover:text-green-800 font-medium">
                        Nova Proposta
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
