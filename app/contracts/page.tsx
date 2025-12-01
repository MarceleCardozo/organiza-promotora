"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContratosPage() {
  const [contratos] = useState([
    {
      id: 1,
      numero: "CONS-2024-001",
      cliente: "João Silva",
      valor: 15000,
      parcelas: 48,
      parcelasPagas: 12,
      valorParcela: 425.5,
      proximoVencimento: "05/12/2024",
      status: "Ativo",
      dataContrato: "05/12/2023",
    },
    {
      id: 2,
      numero: "CONS-2024-002",
      cliente: "Maria Santos",
      valor: 25000,
      parcelas: 60,
      parcelasPagas: 8,
      valorParcela: 578.3,
      proximoVencimento: "10/12/2024",
      status: "Ativo",
      dataContrato: "10/04/2024",
    },
    {
      id: 3,
      numero: "CONS-2023-089",
      cliente: "Carlos Pereira",
      valor: 20000,
      parcelas: 48,
      parcelasPagas: 48,
      valorParcela: 550.0,
      proximoVencimento: "-",
      status: "Finalizado",
      dataContrato: "15/11/2020",
    },
  ]);

  const [selectedContrato, setSelectedContrato] = useState<number | null>(null);

  const contrato = selectedContrato
    ? contratos.find((c) => c.id === selectedContrato)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Acompanhamento de Contratos
          </h1>
          <p className="text-gray-600 mt-2">
            Contratos com desconto automático em folha
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">📄</div>
            <div className="text-2xl font-bold text-gray-800">
              {contratos.filter((c) => c.status === "Ativo").length}
            </div>
            <div className="text-gray-600">Contratos Ativos</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-green-600">
              R${" "}
              {contratos
                .filter((c) => c.status === "Ativo")
                .reduce((sum, c) => sum + c.valorParcela, 0)
                .toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
            <div className="text-gray-600">Receita Mensal</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-indigo-600">100%</div>
            <div className="text-gray-600">Taxa de Adimplência</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-gray-800">
              {contratos.filter((c) => c.status === "Finalizado").length}
            </div>
            <div className="text-gray-600">Finalizados</div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
          <div className="flex items-center">
            <div className="text-3xl mr-4">🛡️</div>
            <div>
              <h3 className="text-lg font-bold text-green-800 mb-1">
                Crédito Consignado - Sem Inadimplência
              </h3>
              <p className="text-green-700">
                Os valores são descontados automaticamente da folha de pagamento
                do servidor, garantindo 100% de adimplência e segurança para a
                operação.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Contrato
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Cliente
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Valor
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Progresso
                  </th>
                  <th className="px-6 py-4 text-left text-gray-700 font-semibold">
                    Próx. Desconto
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
                {contratos.map((contrato) => {
                  const percentual =
                    (contrato.parcelasPagas / contrato.parcelas) * 100;
                  return (
                    <tr key={contrato.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-800">
                          {contrato.numero}
                        </div>
                        <div className="text-sm text-gray-500">
                          {contrato.dataContrato}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {contrato.cliente}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-800">
                          R$ {contrato.valor.toLocaleString("pt-BR")}
                        </div>
                        <div className="text-sm text-gray-500">
                          {contrato.parcelas}x R${" "}
                          {contrato.valorParcela.toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-1">
                            <div className="bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${percentual}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                            {contrato.parcelasPagas}/{contrato.parcelas}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {contrato.proximoVencimento}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            contrato.status === "Ativo"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {contrato.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelectedContrato(contrato.id)}
                          className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                          Ver Detalhes
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {contrato && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Detalhes do Contrato
                    </h2>
                    <p className="text-gray-600">{contrato.numero}</p>
                  </div>
                  <button
                    onClick={() => setSelectedContrato(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="text-gray-600 text-sm">Cliente</label>
                    <div className="text-lg font-medium text-gray-800">
                      {contrato.cliente}
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-600 text-sm">
                      Data do Contrato
                    </label>
                    <div className="text-lg font-medium text-gray-800">
                      {contrato.dataContrato}
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-600 text-sm">
                      Valor do Empréstimo
                    </label>
                    <div className="text-lg font-medium text-gray-800">
                      R$ {contrato.valor.toLocaleString("pt-BR")}
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-600 text-sm">
                      Valor da Parcela
                    </label>
                    <div className="text-lg font-medium text-gray-800">
                      R$ {contrato.valorParcela.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-gray-800 mb-4">
                    Histórico de Descontos
                  </h3>
                  <div className="space-y-3">
                    {Array.from(
                      { length: Math.min(contrato.parcelasPagas, 5) },
                      (_, i) => {
                        const parcelaNum = contrato.parcelasPagas - i;
                        const data = new Date();
                        data.setMonth(data.getMonth() - i);
                        return (
                          <div
                            key={i}
                            className="flex justify-between items-center border-b border-indigo-100 pb-2"
                          >
                            <div>
                              <div className="font-medium text-gray-800">
                                Parcela {parcelaNum}
                              </div>
                              <div className="text-sm text-gray-600">
                                Descontado em {data.toLocaleDateString("pt-BR")}
                              </div>
                            </div>
                            <div className="text-green-600 font-medium">
                              ✓ R$ {contrato.valorParcela.toFixed(2)}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Gerar Extrato Completo
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                    Baixar Contrato PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
