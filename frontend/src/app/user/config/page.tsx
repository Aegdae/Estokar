export default function ConfigPage() {
  return (
    <div className="flex h-screen w-full">
      <main className="flex flex-1 justify-center items-start bg-gray-50 px-4 py-6 overflow-auto w-full">
        <div className="w-full max-w-md md:max-w-2xl bg-white shadow-md rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-4">Configurações do aplicativo</h1>
          <p className="text-gray-600">Versão do aplicativo: 0.9.0</p>
        </div>
      </main>
    </div>
  );
}
