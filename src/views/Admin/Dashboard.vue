<template>
<div class="pt-20 sm:pt-16 p-6 sm:ml-64 bg-white dark:bg-purple-900 min-h-screen">

    <!-- =======================
         Top Cards Section
         ======================= -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Card: Number of Sales -->
      <div class="bg-white dark:bg-purple-600 rounded-lg shadow p-5">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600 text-sm">Number of Sales</span>
          <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            <path d="M7 9l5-5 5 5M12 4.5V15" />
          </svg>
        </div>
        <div class="text-2xl font-semibold text-gray-800 mb-1">1452</div>
        <div class="text-green-500 text-xs font-semibold flex items-center">
          <span class="mr-1">▲ 2.4%</span>
          <span class="text-gray-400 font-normal">From previous period</span>
        </div>
      </div>
      <!-- Card: Sales Revenue -->
      <div class="bg-white dark:bg-purple-600 rounded-lg shadow p-5">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600 text-sm">Sales Revenue</span>
          <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
            <path
              d="M12 2v2m0 16v2m8-8h2M2 12H4m15.364-7.364l1.414 1.414M4.222 19.778l1.414-1.414M19.778 19.778l-1.414-1.414M4.222 4.222l1.414 1.414" />
          </svg>
        </div>
        <div class="text-2xl font-semibold text-gray-800 mb-1">$ 38452</div>
        <div class="text-green-500 text-xs font-semibold flex items-center">
          <span class="mr-1">▲ 2.4%</span>
          <span class="text-gray-400 font-normal">From previous period</span>
        </div>
      </div>
      <!-- Card: Average Price -->
      <div class="bg-white dark:bg-purple-600 rounded-lg shadow p-5">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600 text-sm">Average Price</span>
          <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
        </div>
        <div class="text-2xl font-semibold text-gray-800 mb-1">$ 15.4</div>
        <div class="text-green-500 text-xs font-semibold flex items-center">
          <span class="mr-1">▲ 2.4%</span>
          <span class="text-gray-400 font-normal">From previous period</span>
        </div>
      </div>
    </div>

    <!-- =======================
         Middle Section
         ======================= -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      <!-- Revenue Analytics (Bar/Line Chart) -->
      <div class="bg-white dark:bg-purple-600 rounded-lg shadow p-5 col-span-2">
        <div class="flex justify-between items-center mb-4">
          <span class="font-semibold text-gray-700">Revenue Analytics</span>
          <div>
            <button class="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600 mr-1">Today</button>
            <button class="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600 mr-1">Weekly</button>
            <button class="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">Monthly</button>
          </div>
        </div>
        <!-- Placeholder for bar/line chart -->
        <div class="h-48 flex items-center justify-center text-gray-400">
          [Gráfico de ingresos]
        </div>
        <div class="flex justify-between mt-4 text-sm">
          <div>
            <div class="text-gray-700 font-semibold">$12,253 <span class="text-green-500 text-xs ml-1">2.2 %</span>
            </div>
            <div class="text-gray-400">This month</div>
          </div>
          <div>
            <span class="text-indigo-600 font-semibold">This Year :</span>
            <span class="text-gray-700 font-semibold ml-1">$34,254 <span class="text-green-500 text-xs ml-1">2.1
                %</span></span>
          </div>
          <div>
            <span class="text-green-600 font-semibold">Previous Year :</span>
            <span class="text-gray-700 font-semibold ml-1">$32,695</span>
          </div>
        </div>
      </div>
      <!-- Sales Analytics (Donut Chart) -->
      <div class="bg-white dark:bg-purple-600 rounded-lg shadow p-5 flex flex-col">
        <div class="flex justify-between items-center mb-4">
          <span class="font-semibold text-gray-700">Sales Analytics</span>
          <select class="text-xs rounded border-gray-200">
            <option>Apr</option>
            <!-- Otros meses -->
          </select>
        </div>
        <!-- Placeholder for donut chart -->
        <div class="flex-1 flex items-center justify-center">
          [Gráfico de dona]
        </div>
        <div class="flex justify-around mt-4 text-xs">
          <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-indigo-600 mr-1"></span>Product A 42
            %</span>
          <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-green-500 mr-1"></span>Product B 26
            %</span>
          <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-yellow-400 mr-1"></span>Product C 42
            %</span>
        </div>
      </div>
    </div>

    <!-- =======================
         Bottom Section
         ======================= -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Earning Reports -->
      <div class="bg-white dark:bg-purple-600 rounded-lg shadow p-5 flex flex-col">
        <span class="font-semibold text-gray-700 mb-4">Earning Reports</span>
        <div class="flex justify-between items-center">
          <div class="flex flex-col items-center">
            <!-- Placeholder for circular chart -->
            <div class="w-10 h-10 rounded-full border-4 border-indigo-400 flex items-center justify-center mb-2"></div>
            <span class="text-xs text-gray-400">Weekly Earnings</span>
            <span class="font-semibold text-gray-700">$2,523</span>
          </div>
          <div class="flex flex-col items-center">
            <!-- Placeholder for circular chart -->
            <div class="w-10 h-10 rounded-full border-4 border-green-400 flex items-center justify-center mb-2"></div>
            <span class="text-xs text-gray-400">Monthly Earnings</span>
            <span class="font-semibold text-gray-700">$11,235</span>
          </div>
        </div>
      </div>
      <!-- Puedes agregar más tarjetas aquí si lo necesitas -->
    </div>
  </div>
</template>