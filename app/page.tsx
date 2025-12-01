import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Gestão Completa de Crédito Consignado
          </h2>
          <p className="text-xl text-gray-600">
            Transparência e segurança para você e seus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Clientes Ativos" value="247" icon="👥" />
          <StatCard title="Propostas Ativas" value="15" icon="📋" />
          <StatCard title="Contratos Ativos" value="189" icon="📄" />
          <StatCard title="Taxa de Conversão" value="78%" icon="📈" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuCard
            title="Cadastro de Clientes"
            description="Registre novos clientes via prospecção telefônica"
            icon="📞"
            href="/clients"
            color="bg-blue-500"
          />
          <MenuCard
            title="Propostas de Crédito"
            description="Analise e gerencie propostas de crédito"
            icon="💰"
            href="/credit-proposal"
            color="bg-green-500"
          />
          <MenuCard
            title="Contratos"
            description="Acompanhe contratos e parcelas descontadas"
            icon="📑"
            href="/contracts"
            color="bg-purple-500"
          />
          <MenuCard
            title="Portal do Cliente"
            description="Área transparente para aumentar credibilidade"
            icon="🔒"
            href="/custumer-portal"
            color="bg-indigo-500"
          />
          <MenuCard
            title="Relatórios"
            description="Análises e métricas do negócio"
            icon="📊"
            href="/reports"
            color="bg-orange-500"
          />
          <MenuCard
            title="Configurações"
            description="Ajustes e parametrizações do sistema"
            icon="⚙️"
            href="/configs"
            color="bg-gray-500"
          />
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            🛡️ Combata a Desconfiança dos Clientes
          </h3>
          <p className="text-gray-600 mb-4">
            Nosso sistema oferece transparência total através do Portal do
            Cliente, onde seus clientes podem:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
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
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl">{icon}</span>
        <span className="text-3xl font-bold text-indigo-600">{value}</span>
      </div>
      <h3 className="text-gray-600 font-medium">{title}</h3>
    </div>
  );
}

function MenuCard({
  title,
  description,
  icon,
  href,
  color,
}: {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
        <div
          className={`${color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
