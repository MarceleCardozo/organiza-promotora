"use client";

import { FaixaValor } from "@/components/FaixaValor";
import Navbar from "../../components/Navbar";
import { OrigemItem } from "@/components/OrigemItem";
import { StatusBar } from "@/components/StatusBar";
import { MetricCard } from "@/components/MetricCard";

export default function RelatoriosPage() {
  const dadosSemanais = [
    { semana: "Semana 1", propostas: 12 },
    { semana: "Semana 2", propostas: 18 },
    { semana: "Semana 3", propostas: 15 },
    { semana: "Semana 4", propostas: 14 },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F0E6" }}>
      <Navbar />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold" style={{ color: "#414140" }}>
            Relatórios e Análises
          </h1>
          <p className="text-gray-600 mt-2">
            Acompanhe as métricas do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Propostas Este Mês"
            value="59"
            change="+12%"
            trend="up"
          />
          <MetricCard
            title="Taxa de Aprovação"
            value="78%"
            change="+5%"
            trend="up"
          />
          <MetricCard
            title="Ticket Médio"
            value="R$ 18.500"
            change="+8%"
            trend="up"
          />
          <MetricCard
            title="Tempo Médio Análise"
            value="3 dias"
            change="-1 dia"
            trend="up"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6" style={{ color: "#414140" }}>
              Propostas por Semana
            </h3>
            <div className="space-y-4">
              {dadosSemanais.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span style={{ color: "#414140" }}>{item.semana}</span>
                    <span className="font-bold" style={{ color: "#BEA04A" }}>
                      {item.propostas} propostas
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        backgroundColor: "#BEA04A",
                        width: `${(item.propostas / 20) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium" style={{ color: "#414140" }}>
                  Média Semanal
                </span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: "#BEA04A" }}
                >
                  15 propostas
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6" style={{ color: "#414140" }}>
              Status das Propostas
            </h3>
            <div className="space-y-6">
              <StatusBar
                label="Aprovadas"
                value={45}
                total={59}
                color="bg-green-500"
              />
              <StatusBar
                label="Em Análise"
                value={8}
                total={59}
                color="bg-yellow-500"
              />
              <StatusBar
                label="Documentação Pendente"
                value={4}
                total={59}
                color="bg-orange-500"
              />
              <StatusBar
                label="Rejeitadas"
                value={2}
                total={59}
                color="bg-red-500"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6" style={{ color: "#414140" }}>
              Contratos Ativos por Faixa de Valor
            </h3>
            <div className="space-y-4">
              <FaixaValor label="Até R$ 10.000" quantidade={45} />
              <FaixaValor label="R$ 10.001 - R$ 20.000" quantidade={89} />
              <FaixaValor label="R$ 20.001 - R$ 30.000" quantidade={38} />
              <FaixaValor label="Acima de R$ 30.000" quantidade={17} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6" style={{ color: "#414140" }}>
              Origem dos Clientes
            </h3>
            <div className="space-y-4">
              <OrigemItem label="Prospecção Telefônica" percentual={85} />
              <OrigemItem label="Indicação" percentual={10} />
              <OrigemItem label="Site/Formulário" percentual={5} />
            </div>
          </div>
        </div>

        <div
          className="rounded-lg shadow-lg p-8 text-white"
          style={{ background: "linear-gradient(to right, #BEA04A, #8B7355)" }}
        >
          <h3 className="text-2xl font-bold mb-4">Insights e Recomendações</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Ponto Forte</h4>
              <p className="text-sm">
                Taxa de aprovação de 78% está acima da média do mercado (65%)
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Oportunidade</h4>
              <p className="text-sm">
                Investir em marketing digital pode aumentar o volume de
                propostas em 30%
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Foco</h4>
              <p className="text-sm">
                Portal do Cliente aumentou conversão em 15% ao reduzir receio de
                golpes
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
