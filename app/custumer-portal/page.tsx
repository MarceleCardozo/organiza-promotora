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
      <div
        className="min-h-screen"
        style={{
          background: "linear-gradient(to bottom right, #BEA04A, #8B7355)",
        }}
      >
        <Navbar />

        <nav className="bg-white bg-opacity-10 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="text-2xl font-bold text-white">
              Organiza Promotora
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
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#414140" }}
                >
                  Acesse sua Área
                </h2>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: "#414140" }}
                    >
                      CPF
                    </label>
                    <input
                      type="text"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      placeholder="000.000.000-00"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block font-medium mb-2"
                      style={{ color: "#414140" }}
                    >
                      Código de Acesso
                    </label>
                    <input
                      type="text"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      placeholder="Código enviado por SMS"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-lg hover:opacity-90 transition-colors font-medium text-lg"
                    style={{ backgroundColor: "#BEA04A" }}
                  >
                    Acessar Portal
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="hover:opacity-80 text-sm"
                    style={{ color: "#BEA04A" }}
                  >
                    Não recebi meu código de acesso
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    100% Seguro e Transparente
                  </h3>
                  <p>
                    Acompanhe cada etapa do seu crédito consignado com total
                    transparência e segurança.
                  </p>
                </div>

                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Acesso 24/7</h3>
                  <p>
                    Consulte o status da sua proposta e os descontos realizados
                    a qualquer hora, de qualquer lugar.
                  </p>
                </div>

                <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Empresa Verificada</h3>
                  <p>
                    Operamos há mais de 1 ano no mercado com total regularidade
                    e certificações vigentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-2xl p-8">
              <h3
                className="text-2xl font-bold text-center mb-6"
                style={{ color: "#414140" }}
              >
                Por que confiar em nós?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="font-bold mb-2" style={{ color: "#414140" }}>
                    Regularidade Total
                  </h4>
                  <p className="text-gray-600">
                    CNPJ ativo, alvará de funcionamento e todas as licenças em
                    dia
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold mb-2" style={{ color: "#414140" }}>
                    Parceiros Oficiais
                  </h4>
                  <p className="text-gray-600">
                    Trabalhamos com órgãos públicos e empresas de grande porte
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-bold mb-2" style={{ color: "#414140" }}>
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
    <div className="min-h-screen" style={{ backgroundColor: "#F7F0E6" }}>
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold" style={{ color: "#BEA04A" }}>
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
          <h2 className="text-3xl font-bold" style={{ color: "#414140" }}>
            Olá, João Silva!
          </h2>
          <p className="text-gray-600 mt-2">
            Bem-vindo ao seu portal de acompanhamento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div
            className="rounded-lg shadow-lg p-6 text-white"
            style={{
              background: "linear-gradient(to bottom right, #4ade80, #22c55e)",
            }}
          >
            <div className="text-sm mb-1">Status da Proposta</div>
            <div className="text-2xl font-bold">Aprovada</div>
          </div>
          <div
            className="rounded-lg shadow-lg p-6 text-white"
            style={{
              background: "linear-gradient(to bottom right, #BEA04A, #8B7355)",
            }}
          >
            <div className="text-sm mb-1">Valor Aprovado</div>
            <div className="text-2xl font-bold">R$ 15.000,00</div>
          </div>
          <div
            className="rounded-lg shadow-lg p-6 text-white"
            style={{
              background: "linear-gradient(to bottom right, #a855f7, #9333ea)",
            }}
          >
            <div className="text-sm mb-1">Próximo Desconto</div>
            <div className="text-2xl font-bold">05/12/2024</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6" style={{ color: "#414140" }}>
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
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "#414140" }}
              >
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
                    className="h-3 rounded-full"
                    style={{ backgroundColor: "#BEA04A", width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "#F7F0E6" }}
            >
              <h4 className="font-bold mb-3" style={{ color: "#414140" }}>
                Verificação de Autenticidade
              </h4>
              <p className="mb-4" style={{ color: "#414140" }}>
                Seu contrato é autêntico e pode ser verificado através do
                código:
              </p>
              <div
                className="bg-white rounded p-3 font-mono text-center text-lg font-bold"
                style={{ color: "#BEA04A" }}
              >
                CONS-2024-001-ABCD1234
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-bold mb-3" style={{ color: "#414140" }}>
                Suporte Direto
              </h4>
              <p className="mb-4" style={{ color: "#414140" }}>
                Dúvidas? Entre em contato conosco:
              </p>
              <div className="space-y-2 text-sm" style={{ color: "#414140" }}>
                <div>WhatsApp: (51) 99999-9999</div>
                <div>Email: suporte@creditoconsignado.com.br</div>
                <div>Horário: Seg-Sex 9h às 18h</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#414140" }}>
            Últimos Descontos em Folha
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: "#F7F0E6" }}>
                <tr>
                  <th
                    className="px-6 py-3 text-left font-semibold"
                    style={{ color: "#414140" }}
                  >
                    Mês/Ano
                  </th>
                  <th
                    className="px-6 py-3 text-left font-semibold"
                    style={{ color: "#414140" }}
                  >
                    Parcela
                  </th>
                  <th
                    className="px-6 py-3 text-left font-semibold"
                    style={{ color: "#414140" }}
                  >
                    Valor
                  </th>
                  <th
                    className="px-6 py-3 text-left font-semibold"
                    style={{ color: "#414140" }}
                  >
                    Data Desconto
                  </th>
                  <th
                    className="px-6 py-3 text-left font-semibold"
                    style={{ color: "#414140" }}
                  >
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
                    <td className="px-6 py-4" style={{ color: "#414140" }}>
                      {item.mes}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {item.parcela}/48
                    </td>
                    <td
                      className="px-6 py-4 font-medium"
                      style={{ color: "#414140" }}
                    >
                      R$ 425,50
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.data}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Pago
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
          <h4 className="font-bold" style={{ color: "#414140" }}>
            {title}
          </h4>
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
      <span className="font-medium" style={{ color: "#414140" }}>
        {value}
      </span>
    </div>
  );
}
