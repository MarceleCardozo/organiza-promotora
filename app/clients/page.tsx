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
    <div className="min-h-screen" style={{ backgroundColor: '#F7F0E6' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold" style={{ color: '#414140' }}>
            Cadastro de Clientes
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 rounded-lg transition-colors font-medium text-white"
            style={{ backgroundColor: '#BEA04A' }}
          >
            {showForm ? "Cancelar" : "+ Novo Cliente"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#414140' }}>
              Dados da Prospecção Telefônica
            </h2>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={novoCliente.nome}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, nome: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ borderColor: '#BEA04A' }}
                  placeholder="João da Silva"
                />
              </div>

              <div>
                <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                  CPF *
                </label>
                <input
                  type="text"
                  required
                  value={novoCliente.cpf}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, cpf: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ borderColor: '#BEA04A' }}
                  placeholder="000.000.000-00"
                />
              </div>

              <div>
                <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={novoCliente.telefone}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, telefone: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ borderColor: '#BEA04A' }}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                  E-mail
                </label>
                <input
                  type="email"
                  value={novoCliente.email}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ borderColor: '#BEA04A' }}
                  placeholder="email@exemplo.com"
                />
              </div>

              <div>
                <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                  Órgão Empregador *
                </label>
                <input
                  type="text"
                  required
                  value={novoCliente.orgao}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, orgao: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ borderColor: '#BEA04A' }}
                  placeholder="Ex: Prefeitura Municipal"
                />
              </div>

              <div>
                <label className="block font-medium mb-2" style={{ color: '#414140' }}>
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
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ borderColor: '#BEA04A' }}
                  placeholder="Número da matrícula"
                />
              </div>

              <div>
                <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                  Salário Bruto
                </label>
                <input
                  type="text"
                  value={novoCliente.salario}
                  onChange={(e) =>
                    setNovoCliente({ ...novoCliente, salario: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ borderColor: '#BEA04A' }}
                  placeholder="R$ 0,00"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full text-white py-3 rounded-lg transition-colors font-medium text-lg"
                  style={{ backgroundColor: '#BEA04A' }}
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
              <thead style={{ backgroundColor: '#F7F0E6' }}>
                <tr>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: '#414140' }}>
                    Nome
                  </th>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: '#414140' }}>
                    CPF
                  </th>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: '#414140' }}>
                    Telefone
                  </th>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: '#414140' }}>
                    Data Prospecção
                  </th>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: '#414140' }}>
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-semibold" style={{ color: '#414140' }}>
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4" style={{ color: '#414140' }}>{cliente.nome}</td>
                    <td className="px-6 py-4" style={{ color: '#414140' }}>{cliente.cpf}</td>
                    <td className="px-6 py-4" style={{ color: '#414140' }}>
                      {cliente.telefone}
                    </td>
                    <td className="px-6 py-4" style={{ color: '#414140' }}>
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
                      <button className="font-medium mr-4" style={{ color: '#BEA04A' }}>
                        Ver Detalhes
                      </button>
                      <button className="font-medium" style={{ color: '#BEA04A' }}>
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
