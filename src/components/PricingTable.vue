<template>
  <div>
    <table class="hidden lg:block w-full text-base">
      <thead>
        <tr>
          <th class="w-1/5 bg-gray-100 text-left font-normal align-top px-4 py-6 sticky top-0">
            <div class="font-semibold">
              <span class="text-gray-500 mr-3" :class="{ 'text-gray-700': !isMonthly }">Annually</span>
              <toggle-button
                v-model="isMonthly"
                switch-color="#4199E1"
                :color="{checked: '#CBD5E0', unchecked: '#CBD5E0'}"
              />
              <span class="text-gray-500 ml-3" :class="{ 'text-gray-700': isMonthly }">Monthly</span>
            </div>
            <div class="text-blue-600 text-sm mt-4">Save up to 30% by paying annually.</div>
          </th>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Hobby</div>
            <div class="mt-3">
              <span class="text-lg">$</span>
              <span class="font-bold text-4xl ml-1">
                {{ !isMonthly ? plans.hobby.price.perYear : plans.hobby.price.perMonth }}
              </span>
              <span class="ml-2 text-sm">/ month</span>
            </div>
            <div class="mt-3">
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up</a>
            </div>
          </th>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Growth</div>
            <div class="mt-3">
              <span class="text-lg">$</span>
              <span class="font-bold text-4xl ml-1">
                {{ !isMonthly ? plans.growth.price.perYear : plans.growth.price.perMonth }}
              </span>
              <span class="ml-2 text-sm">/ month</span>
            </div>
            <div class="mt-3">
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up</a>
            </div>
          </th>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Business</div>
            <div class="mt-3">
              <span class="text-lg">$</span>
              <span class="font-bold text-4xl ml-1">
                {{ !isMonthly ? plans.business.price.perYear : plans.business.price.perMonth }}
              </span>
              <span class="ml-2 text-sm">/ month</span>
            </div>
            <div class="mt-3">
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up</a>
            </div>
          </th>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Enterprise</div>
            <div class="mt-3">
              <span class="text-lg">$</span>
              <span class="font-bold text-4xl ml-1">
                {{ !isMonthly ? plans.enterprise.price.perYear : plans.enterprise.price.perMonth }}
              </span>
              <span class="ml-2 text-sm">/ month</span>
            </div>
            <div class="mt-3">
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up</a>
            </div>
          </th>

        </tr>
      </thead>
      <tbody>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Shipping Discount</td>
          <td class="border border-gray-400 text-center px-4 py-6">$19</td>
          <td class="border border-gray-400 text-center px-4 py-6">$29</td>
          <td class="border border-gray-400 text-center px-4 py-6">$39</td>
          <td class="border border-gray-400 text-center px-4 py-6">$49</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Print Shipping Labels</td>
          <td class="border border-gray-400 text-center px-4 py-6">3</td>
          <td class="border border-gray-400 text-center px-4 py-6">4</td>
          <td class="border border-gray-400 text-center px-4 py-6">5</td>
          <td class="border border-gray-400 text-center px-4 py-6">6</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Same Day Delivery</td>
          <td class="border border-gray-400 text-center px-4 py-6">7</td>
          <td class="border border-gray-400 text-center px-4 py-6">8</td>
          <td class="border border-gray-400 text-center px-4 py-6">9</td>
          <td class="border border-gray-400 text-center px-4 py-6">10</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Contributors</td>
          <td class="border border-gray-400 text-center px-4 py-6">11</td>
          <td class="border border-gray-400 text-center px-4 py-6">12</td>
          <td class="border border-gray-400 text-center px-4 py-6">13</td>
          <td class="border border-gray-400 text-center px-4 py-6">14</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">API Calls</td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <div class="text-lg font-semibold">1,000 calls</div>
            <div class="text-xs">/ month</div>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <div class="text-lg font-semibold">5,000 calls</div>
            <div class="text-xs">/ month</div>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <div class="text-lg font-semibold">10,000 calls</div>
            <div class="text-xs">/ month</div>
          </td><td class="border border-gray-400 text-center px-4 py-6">
            <div class="text-lg font-semibold">50,000 calls</div>
            <div class="text-xs">/ month</div>
          </td>
        </tr>
        <tr class="bg-gray-200 border border-gray-400">
          <td colspan="5" class="uppercase tracking-wide font-semibold px-4 py-6">Shipping</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Free Custom Domain</td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">SSL Security</td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Unlimited Bandwidth and Storage</td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">SEO Features for Site Visibility</td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
        <tr class="bg-gray-200 border border-gray-400">
          <td colspan="5" class="uppercase tracking-wide font-semibold px-4 py-6">Marketing</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Shipping Discount</td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Print Shipping Labels</td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Same Day Delivery</td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Contributors</td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mobile-table mx-4 md:mx-32 mt-16 lg:hidden">
      <div class="text-center border border-gray-400 text-base">
        <div class="bg-gray-300 px-4 py-4">
          <div class="uppercase tracking-wide font-bold text-gray-700">Hobby</div>
            <div class="mt-3">
              <span class="text-lg">$</span>
              <span class="font-bold text-4xl ml-1">
                {{ !isMonthly ? plans.hobby.price.perYear : plans.hobby.price.perMonth }}
              </span>
              <span class="ml-2 text-sm">/ month</span>
            </div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white flex px-3 py-4">
          <div class="text-left w-3/5">Shipping Discount</div>
          <div class="w-2/5">3</div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white flex px-3 py-4">
          <div class="text-left w-3/5">Shipping Discount</div>
          <div class="w-2/5">3</div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white flex px-3 py-4">
          <div class="text-left w-3/5">Shipping Discount</div>
          <div class="w-2/5">3</div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white flex px-3 py-4">
          <div class="text-left w-3/5">Shipping Discount</div>
          <div class="w-2/5">3</div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white px-3 py-4">
          <ul class="leading-loose">
            <li class="flex items-center">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
              <span class="ml-2">Free Custom Domain</span>
            </li>
            <li class="flex items-center">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
              <span class="ml-2">SSL Security</span>
            </li>
            <li class="flex items-center">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
              <span class="ml-2">Unlimited Bandwidth</span>
            </li>
            <li class="flex items-center">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
              <span class="ml-2">SEO Features</span>
            </li>
          </ul>
        </div>
        <div class="odd:bg-gray-200 even:bg-white px-3 py-4">
          <div class="">
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-64 px-4 py-3">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMonthly: false,
      plans: {
        hobby: {
          price: {
            perYear: 15,
            perMonth: 20,
          }
        },
        growth: {
          price: {
            perYear: 25,
            perMonth: 30,
          }
        },
        business: {
          price: {
            perYear: 50,
            perMonth: 60,
          }
        },
        enterprise: {
          price: {
            perYear: 90,
            perMonth: 120,
          }
        },
      }
    }
  }
}
</script>
