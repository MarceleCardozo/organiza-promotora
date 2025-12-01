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
    <div className="min-h-screen" style={{ backgroundColor: '#F7F0E6' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold" style={{ color: '#414140' }}>
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
                <h3 className="text-xl font-bold mb-6" style={{ color: '#414140' }}>
                  Dados da Empresa
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      value={config.nomeEmpresa}
                      onChange={(e) =>
                        setConfig({ ...config, nomeEmpresa: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                      CNPJ
                    </label>
                    <input
                      type="text"
                      value={config.cnpj}
                      onChange={(e) =>
                        setConfig({ ...config, cnpj: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={config.telefone}
                      onChange={(e) =>
                        setConfig({ ...config, telefone: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={config.email}
                      onChange={(e) =>
                        setConfig({ ...config, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#414140' }}>
                  Parâmetros de Crédito
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                      Taxa de Juros Padrão (% a.m.)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={config.taxaPadrao}
                      onChange={(e) =>
                        setConfig({ ...config, taxaPadrao: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                      Número de Parcelas Padrão
                    </label>
                    <select
                      value={config.parcelasPadrao}
                      onChange={(e) =>
                        setConfig({ ...config, parcelasPadrao: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    >
                      <option value="24">24 meses</option>
                      <option value="36">36 meses</option>
                      <option value="48">48 meses</option>
                      <option value="60">60 meses</option>
                      <option value="72">72 meses</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                      Valor Mínimo de Crédito
                    </label>
                    <input
                      type="number"
                      value={config.valorMinimo}
                      onChange={(e) =>
                        setConfig({ ...config, valorMinimo: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2" style={{ color: '#414140' }}>
                      Valor Máximo de Crédito
                    </label>
                    <input
                      type="number"
                      value={config.valorMaximo}
                      onChange={(e) =>
                        setConfig({ ...config, valorMaximo: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#414140' }}>
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
                  className="mt-4 hover:opacity-80 font-medium"
                  style={{ color: '#BEA04A' }}
                >
                  + Adicionar Novo Órgão
                </button>
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg hover:opacity-90 transition-colors font-medium text-lg"
                style={{ backgroundColor: '#BEA04A' }}
              >
                Salvar Configurações
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#414140' }}>
                Informações do Sistema
              </h3>
              <div className="space-y-3 text-sm">
                <InfoItem label="Versão" value="1.0.0" />
                <InfoItem label="Tempo de Operação" value="1 ano e 7 meses" />
                <InfoItem label="Último Backup" value="Hoje às 03:00" />
                <InfoItem label="Espaço Utilizado" value="2.3 GB / 10 GB" />
              </div>
            </div>

            <div className="rounded-lg p-6" style={{ backgroundColor: '#F7F0E6' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#414140' }}>Dica</h3>
              <p className="text-sm" style={{ color: '#414140' }}>
                Mantenha os dados da empresa sempre atualizados no Portal do
                Cliente para aumentar a credibilidade e reduzir o receio de
                golpes.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#414140' }}>
                Vantagens do Sistema
              </h3>
              <ul className="text-sm space-y-2" style={{ color: '#414140' }}>
                <li>Gestão completa de propostas</li>
                <li>Portal transparente para clientes</li>
                <li>Controle de contratos consignados</li>
                <li>Relatórios automáticos</li>
                <li>Sem inadimplência</li>
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
        <div className="font-medium" style={{ color: '#414140' }}>{nome}</div>
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
      <span className="font-medium" style={{ color: '#414140' }}>{value}</span>
    </div>
  );
}
