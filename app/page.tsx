import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F0E6' }}>
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#414140' }}>
            Gestão Completa de Crédito Consignado
          </h2>
          <p className="text-xl" style={{ color: '#414140' }}>
            Transparência e segurança para você e seus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Clientes Ativos" value="247" />
          <StatCard title="Propostas Ativas" value="15" />
          <StatCard title="Contratos Ativos" value="189" />
          <StatCard title="Taxa de Conversão" value="78%" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuCard
            title="Cadastro de Clientes"
            description="Registre novos clientes via prospecção telefônica"
            href="/clients"
          />
          <MenuCard
            title="Propostas de Crédito"
            description="Analise e gerencie propostas de crédito"
            href="/credit-proposal"
          />
          <MenuCard
            title="Contratos"
            description="Acompanhe contratos e parcelas descontadas"
            href="/contracts"
          />
          <MenuCard
            title="Portal do Cliente"
            description="Área transparente para aumentar credibilidade"
            href="/custumer-portal"
          />
          <MenuCard
            title="Relatórios"
            description="Análises e métricas do negócio"
            href="/reports"
          />
          <MenuCard
            title="Configurações"
            description="Ajustes e parametrizações do sistema"
            href="/configs"
          />
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#414140' }}>
            Combata a Desconfiança dos Clientes
          </h3>
          <p className="mb-4" style={{ color: '#414140' }}>
            Nosso sistema oferece transparência total através do Portal do
            Cliente, onde seus clientes podem:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: '#414140' }}>
            <li>Acompanhar o status da proposta em tempo real</li>
            <li>Visualizar dados da empresa e certificações</li>
            <li>Verificar autenticidade do contrato</li>
            <li>Acessar histórico completo de parcelas descontadas</li>
            <li>Contar com canal de suporte direto</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl font-bold" style={{ color: '#BEA04A' }}>{value}</span>
      </div>
      <h3 className="font-medium" style={{ color: '#414140' }}>{title}</h3>
    </div>
  );
}

function MenuCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full border-l-4" style={{ borderColor: '#BEA04A' }}>
        <h3 className="text-xl font-bold mb-2" style={{ color: '#414140' }}>{title}</h3>
        <p style={{ color: '#414140' }}>{description}</p>
      </div>
    </Link>
  );
}
