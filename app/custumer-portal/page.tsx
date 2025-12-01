"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function PortalClientePage() {
  const [cpf, setCpf] = useState("");
  const [codigo, setCodigo] = useState("");
  const [logado, setLogado] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login
    if (cpf && codigo) {
      setLogado(true);
    }
  };

  if (!logado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <nav className="bg-white bg-opacity-10 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="text-2xl font-bold text-white">
              Sistema de Crédito Consignado
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center text-white mb-12">
              <h1 className="text-5xl font-bold mb-4">Portal do Cliente</h1>
              <p className="text-xl">
                Acompanhe sua proposta e contrato com transparência total
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Acesse sua Área
                </h2>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      CPF
                    </label>
                    <input
                      type="text"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="000.000.000-00"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Código de Acesso
                    </label>
                    <input
                      type="text"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Código enviado por SMS"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg"
                  >
                    Acessar Portal
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 text-sm"
                  >
                    Não recebi meu código de acesso
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="text-xl font-bold mb-2">
                    100% Seguro e Transparente
                  </h3>
                  <p>
                    Acompanhe cada etapa do seu crédito consignado com total
                    transparência e segurança.
                  </p>
                </div>

                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white">
                  <div className="text-3xl mb-3">📱</div>
                  <h3 className="text-xl font-bold mb-2">Acesso 24/7</h3>
                  <p>
                    Consulte o status da sua proposta e os descontos realizados
                    a qualquer hora, de qualquer lugar.
                  </p>
                </div>

                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="text-xl font-bold mb-2">Empresa Verificada</h3>
                  <p>
                    Operamos há mais de 1 ano no mercado com total regularidade
                    e certificações vigentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Por que confiar em nós?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏛️</div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Regularidade Total
                  </h4>
                  <p className="text-gray-600">
                    CNPJ ativo, alvará de funcionamento e todas as licenças em
                    dia
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">💼</div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Parceiros Oficiais
                  </h4>
                  <p className="text-gray-600">
                    Trabalhamos com órgãos públicos e empresas de grande porte
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🛡️</div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    Sem Inadimplência
                  </h4>
                  <p className="text-gray-600">
                    Desconto direto em folha garante 100% de segurança na
                    operação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Área logada do cliente
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-indigo-600">
            Minha Área - Portal do Cliente
          </h1>
          <button
            onClick={() => setLogado(false)}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Sair
          </button>
        </div>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Olá, João Silva!</h2>
          <p className="text-gray-600 mt-2">
            Bem-vindo ao seu portal de acompanhamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-sm mb-1">Status da Proposta</div>
            <div className="text-2xl font-bold">Aprovada</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg shadow-lg p-6 text-white">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-sm mb-1">Valor Aprovado</div>
            <div className="text-2xl font-bold">R$ 15.000,00</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <div className="text-3xl mb-2">📅</div>
            <div className="text-sm mb-1">Próximo Desconto</div>
            <div className="text-2xl font-bold">05/12/2024</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Andamento da Proposta
            </h3>
            <div className="space-y-4">
              <TimelineItem
                title="Proposta Enviada"
                date="15/10/2024"
                status="concluido"
                description="Sua proposta foi recebida e está em análise"
              />
              <TimelineItem
                title="Documentação Aprovada"
                date="18/10/2024"
                status="concluido"
                description="Todos os documentos foram verificados"
              />
              <TimelineItem
                title="Análise de Crédito"
                date="20/10/2024"
                status="concluido"
                description="Crédito aprovado com sucesso"
              />
              <TimelineItem
                title="Contrato Assinado"
                date="25/10/2024"
                status="concluido"
                description="Contrato assinado digitalmente"
              />
              <TimelineItem
                title="Liberação do Valor"
                date="28/10/2024"
                status="concluido"
                description="Valor depositado em sua conta"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Detalhes do Contrato
              </h3>
              <div className="space-y-4">
                <DetailRow label="Número do Contrato" value="CONS-2024-001" />
                <DetailRow label="Valor do Empréstimo" value="R$ 15.000,00" />
                <DetailRow label="Número de Parcelas" value="48 meses" />
                <DetailRow label="Valor da Parcela" value="R$ 425,50" />
                <DetailRow label="Taxa de Juros" value="1,80% a.m." />
                <DetailRow label="Parcelas Pagas" value="12 de 48" />
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progresso</span>
                  <span>25%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">
                🔐 Verificação de Autenticidade
              </h4>
              <p className="text-gray-700 mb-4">
                Seu contrato é autêntico e pode ser verificado através do
                código:
              </p>
              <div className="bg-white rounded p-3 font-mono text-center text-lg font-bold text-indigo-600">
                CONS-2024-001-ABCD1234
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3">
                💬 Suporte Direto
              </h4>
              <p className="text-gray-700 mb-4">
                Dúvidas? Entre em contato conosco:
              </p>
              <div className="space-y-2 text-sm">
                <div>📞 WhatsApp: (51) 99999-9999</div>
                <div>📧 Email: suporte@creditoconsignado.com.br</div>
                <div>🕐 Horário: Seg-Sex 9h às 18h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Últimos Descontos em Folha
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                    Mês/Ano
                  </th>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                    Parcela
                  </th>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                    Valor
                  </th>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                    Data Desconto
                  </th>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mes: "Novembro/2024", parcela: 12, data: "05/11/2024" },
                  { mes: "Outubro/2024", parcela: 11, data: "05/10/2024" },
                  { mes: "Setembro/2024", parcela: 10, data: "05/09/2024" },
                ].map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 text-gray-800">{item.mes}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {item.parcela}/48
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-medium">
                      R$ 425,50
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.data}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        ✓ Pago
                      </span>
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

function TimelineItem({
  title,
  date,
  status,
  description,
}: {
  title: string;
  date: string;
  status: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          status === "concluido" ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        {status === "concluido" && (
          <span className="text-white text-sm">✓</span>
        )}
      </div>
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-bold text-gray-800">{title}</h4>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}
