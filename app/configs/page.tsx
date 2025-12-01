"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ConfiguracoesPage() {
  const [config, setConfig] = useState({
    nomeEmpresa: "Crédito Consignado RS",
    cnpj: "12.345.678/0001-90",
    telefone: "(51) 99999-9999",
    email: "contato@creditoconsignado.com.br",
    taxaPadrao: "1.80",
    parcelasPadrao: "48",
    valorMinimo: "5000",
    valorMaximo: "50000",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Configurações salvas com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Configurações do Sistema
          </h1>
          <p className="text-gray-600 mt-2">
            Personalize as configurações da sua operação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSave} className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Dados da Empresa
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      value={config.nomeEmpresa}
                      onChange={(e) =>
                        setConfig({ ...config, nomeEmpresa: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      CNPJ
                    </label>
                    <input
                      type="text"
                      value={config.cnpj}
                      onChange={(e) =>
                        setConfig({ ...config, cnpj: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={config.telefone}
                      onChange={(e) =>
                        setConfig({ ...config, telefone: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={config.email}
                      onChange={(e) =>
                        setConfig({ ...config, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Parâmetros de Crédito
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Taxa de Juros Padrão (% a.m.)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={config.taxaPadrao}
                      onChange={(e) =>
                        setConfig({ ...config, taxaPadrao: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Número de Parcelas Padrão
                    </label>
                    <select
                      value={config.parcelasPadrao}
                      onChange={(e) =>
                        setConfig({ ...config, parcelasPadrao: e.target.value })
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
                      Valor Mínimo de Crédito
                    </label>
                    <input
                      type="number"
                      value={config.valorMinimo}
                      onChange={(e) =>
                        setConfig({ ...config, valorMinimo: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Valor Máximo de Crédito
                    </label>
                    <input
                      type="number"
                      value={config.valorMaximo}
                      onChange={(e) =>
                        setConfig({ ...config, valorMaximo: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Integração com Órgãos
                </h3>
                <div className="space-y-4">
                  <OrgaoIntegracao nome="Prefeitura Municipal" status="Ativo" />
                  <OrgaoIntegracao nome="Governo do Estado" status="Ativo" />
                  <OrgaoIntegracao nome="Câmara Municipal" status="Ativo" />
                  <OrgaoIntegracao nome="INSS" status="Em Configuração" />
                </div>
                <button
                  type="button"
                  className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  + Adicionar Novo Órgão
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg"
              >
                Salvar Configurações
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Informações do Sistema
              </h3>
              <div className="space-y-3 text-sm">
                <InfoItem label="Versão" value="1.0.0" />
                <InfoItem label="Tempo de Operação" value="1 ano e 7 meses" />
                <InfoItem label="Último Backup" value="Hoje às 03:00" />
                <InfoItem label="Espaço Utilizado" value="2.3 GB / 10 GB" />
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">💡 Dica</h3>
              <p className="text-gray-700 text-sm">
                Mantenha os dados da empresa sempre atualizados no Portal do
                Cliente para aumentar a credibilidade e reduzir o receio de
                golpes.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                ✅ Vantagens do Sistema
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Gestão completa de propostas</li>
                <li>✓ Portal transparente para clientes</li>
                <li>✓ Controle de contratos consignados</li>
                <li>✓ Relatórios automáticos</li>
                <li>✓ Sem inadimplência</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function OrgaoIntegracao({ nome, status }: { nome: string; status: string }) {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
      <div>
        <div className="font-medium text-gray-800">{nome}</div>
        <div className="text-sm text-gray-500">
          Convênio para desconto em folha
        </div>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          status === "Ativo"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}:</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}
